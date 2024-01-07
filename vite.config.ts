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
    host_permissions: ["file:///*"],
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  // https://github.com/crxjs/chrome-extension-tools/issues/696#issuecomment-1526138970
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
});
