import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The image worker imports the WASM module, which needs an ES module worker.
  worker: { format: 'es' },
  // Keep CSS output identical to the Vite 6 build: esbuild minifier (Lightning CSS
  // rewrites and drops vendor prefixes) and Vite 6's default browser targets.
  build: {
    cssMinify: 'esbuild',
    cssTarget: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
  },
})
