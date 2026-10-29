import init, { compress_image } from './pkg/editor_tools/editor_tools.js';

const ready = init();

self.onmessage = async ({ data: { id, bytes } }) => {
  try {
    await ready;
    self.postMessage({ id, url: compress_image(new Uint8Array(bytes)) });
  } catch (err) {
    self.postMessage({ id, error: String(err?.message ?? err) });
  }
};
