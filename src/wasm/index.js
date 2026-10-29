// Lazy loaders for the Rust/WebAssembly modules in rust/ (built into ./pkg by rust/build.sh).

let sanitizer;
export const loadSanitizer = () =>
  (sanitizer ??= import('./pkg/sanitize/sanitize.js').then(async (m) => {
    await m.default();
    return m.sanitize_html;
  }));

let editorTools;
const loadEditorTools = () =>
  (editorTools ??= import('./pkg/editor_tools/editor_tools.js').then(async (m) => {
    await m.default();
    return m;
  }));

export const odtToHtml = async (arrayBuffer) =>
  (await loadEditorTools()).odt_to_html(new Uint8Array(arrayBuffer));

// Image compression runs in a worker so large photos don't block the editor.
let worker;
let nextId = 0;
const pending = new Map();

export const compressImageWasm = async (file) => {
  if (!worker) {
    worker = new Worker(new URL('./imageWorker.js', import.meta.url), { type: 'module' });
    worker.onmessage = ({ data: { id, url, error } }) => {
      const p = pending.get(id);
      pending.delete(id);
      if (error) p.reject(new Error(error));
      else p.resolve(url);
    };
  }
  const bytes = await file.arrayBuffer();
  const id = nextId++;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    worker.postMessage({ id, bytes }, [bytes]);
  });
};
