import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { crx } from "@crxjs/vite-plugin";
import package_ from "./package.json";

async function manifest() {
  return {
    manifest_version: 3,
    name: "Copy File to Clipboard",
    version: package_.version,
    action: {
      default_popup: "index.html",
    },
    permissions: ["downloads"],
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
