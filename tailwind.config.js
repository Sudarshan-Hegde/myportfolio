/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/wasm/pkg/**",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
