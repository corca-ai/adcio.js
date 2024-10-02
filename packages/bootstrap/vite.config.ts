import * as fs from "fs";
import { resolve } from "path";
import * as path from "path";
import { UserConfig, defineConfig } from "vite";
import banner from "vite-plugin-banner";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

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

export const getConfig = (entry: string, emptyOutDir = false): UserConfig => ({
  build: {
    emptyOutDir,
    lib: {
      entry: resolve(__dirname, `./src/${entry}.ts`),
      formats: ["es", "cjs", "iife"],
      name: "adcio",
      fileName: entry,
    },
  },
  resolve: {
    preserveSymlinks: true,
  },
  plugins: [
    dts(),
    tsconfigPaths(),
    banner(sdkBanner),
    {
      name: "override-browser",
      closeBundle: async () => {
        fs.copyFileSync(
          resolve(__dirname, "./dist/index.iife.js"),
          resolve(
            __dirname,
            "../../overrides/cdn.adcio.ai/sdk/v1/bootstrap.js",
          ),
        );
      },
    },
  ],
});

export default defineConfig(getConfig("index", true));
