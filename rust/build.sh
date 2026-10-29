#!/usr/bin/env bash
# Builds the Rust crates to WebAssembly into src/wasm/pkg/.
# The output is committed, so deploys don't need a Rust toolchain.
set -euo pipefail
cd "$(dirname "$0")/.."

wasm-pack build rust/sanitize --release --target web --no-pack --out-dir "$PWD/src/wasm/pkg/sanitize"
wasm-pack build rust/editor-tools --release --target web --no-pack --out-dir "$PWD/src/wasm/pkg/editor_tools"

# wasm-pack writes a catch-all .gitignore; drop it so the output can be committed.
rm -f src/wasm/pkg/sanitize/.gitignore src/wasm/pkg/editor_tools/.gitignore
