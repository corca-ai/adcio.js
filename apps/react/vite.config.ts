import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "adcio.js": path.resolve(__dirname, "../../src"),
    },
  },
  plugins: [react(), tsconfigPaths()],
});
