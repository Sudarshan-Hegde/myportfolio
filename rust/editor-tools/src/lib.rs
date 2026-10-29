//! Heavy lifting for the admin editor: .odt import and image compression.

use std::io::{Cursor, Read};

use base64::{engine::general_purpose::STANDARD, Engine};
use image::{codecs::jpeg::JpegEncoder, imageops::FilterType, DynamicImage, ImageDecoder, ImageReader, RgbImage};
use roxmltree::Node;
use wasm_bindgen::prelude::*;

const TEXT_NS: &str = "urn:oasis:names:tc:opendocument:xmlns:text:1.0";

fn escape_html(s: &str) -> String {
    s.replace('&', "&amp;").replace('<', "&lt;").replace('>', "&gt;")
}

fn text_content(node: Node) -> String {
    node.descendants().filter_map(|n| n.is_text().then(|| n.text().unwrap_or(""))).collect()
}

fn walk(el: Node, parts: &mut Vec<String>) {
    for child in el.children().filter(Node::is_element) {
        match child.tag_name().name() {
            "h" => {
                let lvl: u8 = child
                    .attribute((TEXT_NS, "outline-level"))
                    .and_then(|v| v.trim().parse().ok())
                    .unwrap_or(2)
                    .clamp(1, 4);
                parts.push(format!("<h{lvl}>{}</h{lvl}>", escape_html(&text_content(child))));
            }
            "p" => {
                let text = text_content(child);
                if !text.trim().is_empty() {
                    parts.push(format!("<p>{}</p>", escape_html(&text)));
                }
            }
            "list" => {
                let items: String = child
                    .descendants()
                    .skip(1)
                    .filter(|n| n.is_element() && n.tag_name().name() == "p")
                    .map(|n| format!("<li>{}</li>", escape_html(&text_content(n))))
                    .collect();
                if !items.is_empty() {
                    parts.push(format!("<ul>{items}</ul>"));
                }
            }
            _ => walk(child, parts),
        }
    }
}

fn odt_xml_to_html(xml: &str) -> Result<String, roxmltree::Error> {
    let doc = roxmltree::Document::parse(xml)?;
    let mut parts = Vec::new();
    walk(doc.root_element(), &mut parts);
    Ok(parts.concat())
}

/// Convert an OpenDocument Text file into simple HTML (headings, paragraphs, lists).
#[wasm_bindgen]
pub fn odt_to_html(bytes: &[u8]) -> Result<String, JsError> {
    let mut zip = zip::ZipArchive::new(Cursor::new(bytes))?;
    let mut xml = String::new();
    zip.by_name("content.xml")?.read_to_string(&mut xml)?;
    Ok(odt_xml_to_html(&xml)?)
}

/// Resize to fit 1400px and re-encode as JPEG (quality 82), returning a data URL.
/// Transparent pixels become black, matching the canvas-based version this replaces.
#[wasm_bindgen]
pub fn compress_image(bytes: &[u8]) -> Result<String, JsError> {
    const MAX: f64 = 1400.0;

    let mut decoder = ImageReader::new(Cursor::new(bytes)).with_guessed_format()?.into_decoder()?;
    let orientation = decoder.orientation()?;
    let mut img = DynamicImage::from_decoder(decoder)?;
    img.apply_orientation(orientation);

    let (mut w, mut h) = (img.width() as f64, img.height() as f64);
    if w > MAX { h = h * MAX / w; w = MAX; }
    if h > MAX { w = w * MAX / h; h = MAX; }
    let (w, h) = ((w as u32).max(1), (h as u32).max(1));
    if (w, h) != (img.width(), img.height()) {
        img = img.resize_exact(w, h, FilterType::Triangle);
    }

    let rgba = img.to_rgba8();
    let rgb = RgbImage::from_fn(w, h, |x, y| {
        let [r, g, b, a] = rgba.get_pixel(x, y).0;
        let a = a as u16;
        image::Rgb([r, g, b].map(|c| ((c as u16 * a + 127) / 255) as u8))
    });

    let mut jpeg = Vec::new();
    JpegEncoder::new_with_quality(&mut jpeg, 82).encode_image(&rgb)?;
    Ok(format!("data:image/jpeg;base64,{}", STANDARD.encode(jpeg)))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn odt_structure() {
        let xml = r#"<?xml version="1.0" encoding="UTF-8"?>
<office:document-content xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0">
  <office:automatic-styles><text:list-style/></office:automatic-styles>
  <office:body><office:text>
    <text:h text:outline-level="1">Intro &amp; <text:span>scope</text:span></text:h>
    <text:h text:outline-level="6">Deep</text:h>
    <text:p>Hello <text:span>world</text:span> &lt;b&gt;</text:p>
    <text:p>   </text:p>
    <text:list><text:list-item><text:p>one</text:p></text:list-item><text:list-item><text:list><text:list-item><text:p>nested</text:p></text:list-item></text:list></text:list-item></text:list>
    <text:section><text:p>in section</text:p></text:section>
  </office:text></office:body>
</office:document-content>"#;
        assert_eq!(
            odt_xml_to_html(xml).unwrap(),
            "<h1>Intro &amp; scope</h1><h4>Deep</h4><p>Hello world &lt;b&gt;</p>\
             <ul><li>one</li><li>nested</li></ul><p>in section</p>"
        );
    }

    #[test]
    fn compress_resizes_and_flattens_alpha() {
        let img = image::RgbaImage::from_pixel(2800, 700, image::Rgba([255, 255, 255, 0]));
        let mut png = Vec::new();
        DynamicImage::ImageRgba8(img).write_to(&mut Cursor::new(&mut png), image::ImageFormat::Png).unwrap();

        let url = compress_image(&png).unwrap();
        let jpeg = STANDARD.decode(url.strip_prefix("data:image/jpeg;base64,").unwrap()).unwrap();
        let out = image::load_from_memory(&jpeg).unwrap().to_rgb8();
        assert_eq!(out.dimensions(), (1400, 350));
        assert!(out.get_pixel(700, 175).0.iter().all(|&c| c < 8));
    }
}
