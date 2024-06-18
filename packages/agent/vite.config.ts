import * as fs from "fs";
import { resolve } from "path";
import * as path from "path";
import { defineConfig } from "vite";
import banner from "vite-plugin-banner";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

const getPackageJson = (): {
  version: string;
  name: string;
  author: string;
  description: string;
} => {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "package.json")).toString(),
  );
};

const { version, name, author } = getPackageJson();

const sdkBanner = `
  ${name} v${version}

  Copyright (c) ${author.replace(/ *<[^)]*> */g, "")} and project contributors.
`;

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/document.tsx"),
      name: "adcio",
    },
    rollupOptions: {
      output: [
        {
          format: "esm",
          entryFileNames: `index.es.js`,
          exports: "named",
        },
        {
          format: "cjs",
          entryFileNames: `index.cjs.js`,
          exports: "named",
          inlineDynamicImports: true,
        },
        {
          format: "iife",
          entryFileNames: `index.iife.js`,
          name: "adcio",
          inlineDynamicImports: true,
          exports: "named",
        },
      ],
    },
  },
  plugins: [react(), dts(), tsconfigPaths(), banner(sdkBanner)],
});
