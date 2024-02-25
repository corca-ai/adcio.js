const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

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

const banner = `
  ${name} v${version}

  Copyright (c) ${author.replace(/ *<[^)]*> */g, " ")} and project contributors.
`;

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    adcio: "./index.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/cdn"),
    library: "adcio",
    libraryTarget: "umd",
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  module: {
    rules: [
      {
        test: /\.m?(j|t)s?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [new NodePolyfillPlugin(), new webpack.BannerPlugin(banner)],
};
