import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import banner from "vite-plugin-banner";
import path from "path";
import fs from "fs";

const getPackageJson = function (...args) {
  const packageJSON = JSON.parse(
    fs.readFileSync(path.join(__dirname, "package.json")),
  );
  if (!args.length) {
    return packageJSON;
  }
  return args.reduce((out, key) => {
    out[key] = packageJSON[key];
    return out;
  }, {});
};

const { version, name, author } = {
  ...getPackageJson("version", "author"),
  name: "ADCIO",
  description: "JavaScript SDK for ADCIO",
};

const sdkBanner = `
  ${name} v${version}

  Copyright (c) ${author.replace(/ *<[^)]*> */g, " ")} and project contributors.
`;

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      formats: ["es", "cjs", "iife"],
      name: "adcio",
      fileName: "index",
    },
  },
  plugins: [dts(), tsconfigPaths(), banner(sdkBanner)],
});
