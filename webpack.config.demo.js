const HtmlWebpackPlugin = require("html-webpack-plugin");
const prodConfig = require("./webpack.config");

module.exports = {
  ...prodConfig,
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    demo: "./src/demo/index.js",
    adcio: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    open: true,
    hot: true,
    host: "0.0.0.0",
    port: 9000,
  },
  plugins: [
    ...prodConfig.plugins,
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "adcio.js sdk demo",
      template: "./src/demo/index.html",
      chunks: ["demo"],
    }),
  ],
};
