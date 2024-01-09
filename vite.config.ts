import react from "@vitejs/plugin-react";
// import ReactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
// import legacy from "vite-plugin-legacy";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ReactRefresh(),
    // legacy({ targets: ["defaults", "not IE 11"] }),
  ],
  base: "vmlkushwaha.github.io",
});
