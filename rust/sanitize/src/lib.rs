//! HTML sanitizer for log entries.
//!
//! The allowlist covers everything the Tiptap editor emits (marks, text
//! styles, alignment, tables, images, page breaks), so editor output passes
//! through unchanged while scripts, event handlers and `javascript:` URLs
//! are removed.

use std::borrow::Cow;

use ammonia::Builder;
use wasm_bindgen::prelude::*;

fn is_data_url(value: &str) -> bool {
    value.trim_start().get(..5).is_some_and(|s| s.eq_ignore_ascii_case("data:"))
}

fn is_data_image(value: &str) -> bool {
    value.trim_start().get(..11).is_some_and(|s| s.eq_ignore_ascii_case("data:image/"))
}

fn builder() -> Builder<'static> {
    let mut b = Builder::default();
    b.add_tags(["s", "u", "mark", "colgroup", "col", "thead", "tfoot"])
        .add_generic_attributes(["style", "class", "dir"])
        .add_generic_attribute_prefixes(["data-"])
        .add_tag_attributes("a", ["target", "rel", "title"])
        .add_tag_attributes("img", ["title"])
        .add_tag_attributes("ol", ["type"])
        .add_tag_attributes("th", ["colwidth"])
        .add_tag_attributes("td", ["colwidth"])
        // Imported HTML files may be full documents; never surface <title> as text.
        .add_clean_content_tags(["title"])
        // Keep Tiptap's own rel on links instead of rewriting it.
        .link_rel(None)
        .add_url_schemes(["data"])
        // data: URLs are only allowed as embedded images.
        .attribute_filter(|element, attribute, value| {
            if is_data_url(value) && !(element == "img" && attribute == "src" && is_data_image(value)) {
                None
            } else {
                Some(Cow::Borrowed(value))
            }
        });
    b
}

#[wasm_bindgen]
pub fn sanitize_html(html: &str) -> String {
    builder().clean(html).to_string()
}

#[cfg(test)]
mod tests {
    use super::sanitize_html;

    // Representative Tiptap getHTML() output covering every extension the editor loads.
    const TIPTAP: &str = concat!(
        r#"<h1 style="text-align: center">Title</h1>"#,
        r#"<h2>Sub</h2><h3 style="text-align: justify">Sub sub</h3>"#,
        r#"<p>Plain <strong>bold</strong> <em>it</em> <u>under</u> <s>strike</s> <code>code</code> H<sub>2</sub>O x<sup>3</sup> "#,
        r#"<a target="_blank" rel="noopener noreferrer nofollow" href="https://example.com/a?b=1&amp;c=2">link</a></p>"#,
        r#"<p style="text-align: right"><span style="color: rgb(200, 0, 0); font-family: 'Instrument Serif', Georgia, serif; font-size: 18px; line-height: 2; background-color: #222">styled</span></p>"#,
        r#"<ul><li><p>one</p></li><li><p>two</p></li></ul>"#,
        r#"<ol start="3"><li><p>three</p></li></ol>"#,
        r#"<blockquote><p>quote</p></blockquote>"#,
        r#"<pre><code class="language-js">let x = 1 &lt; 2 &amp;&amp; y;</code></pre>"#,
        r#"<hr><hr data-page-break="true" class="page-break">"#,
        r#"<img src="data:image/jpeg;base64,/9j/4AAQSkZJRg==" alt="fig" title="Figure 1">"#,
        r#"<img src="https://example.com/a.png">"#,
        r#"<table style="min-width: 50px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody>"#,
        r#"<tr><th colspan="1" rowspan="1"><p>h1</p></th><th colspan="1" rowspan="1" colwidth="120"><p>h2</p></th></tr>"#,
        r#"<tr><td colspan="1" rowspan="1"><p>d1</p></td><td colspan="2" rowspan="1"><p>d2</p></td></tr>"#,
        r#"</tbody></table>"#,
        r#"<p>line<br>break — ∑ π ₹ &nbsp;</p><p></p>"#,
    );

    #[test]
    fn tiptap_output_is_unchanged() {
        assert_eq!(sanitize_html(TIPTAP), TIPTAP);
    }

    #[test]
    fn strips_scripts_and_handlers() {
        let out = sanitize_html(
            r#"<p onclick="x()">a</p><script>alert(1)</script><img src="x" onerror="alert(1)"><style>p{}</style><iframe src="https://e.com"></iframe>"#,
        );
        assert_eq!(out, r#"<p>a</p><img src="x">"#);
    }

    #[test]
    fn full_document_keeps_body_only() {
        let out = sanitize_html(
            r#"<!doctype html><html><head><meta charset="utf-8"><title>Doc</title><link rel="stylesheet" href="a.css"></head><body><h2>Hi</h2><p>there</p></body></html>"#,
        );
        assert_eq!(out, "<h2>Hi</h2><p>there</p>");
    }

    #[test]
    fn strips_dangerous_urls() {
        let out = sanitize_html(
            r#"<a href="javascript:alert(1)">a</a><a href="data:text/html,<script>alert(1)</script>">b</a><img src="data:text/html,x">"#,
        );
        assert_eq!(out, r#"<a>a</a><a>b</a><img>"#);
    }
}
