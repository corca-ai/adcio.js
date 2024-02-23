import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "adcio.js": path.resolve(__dirname, "../../src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
    alias: {
      "adcio.js": path.resolve(__dirname, "../../src"),
      "mock-api": path.resolve(__dirname, "../../mock"),
    },
  },
} as VitestConfigExport);
