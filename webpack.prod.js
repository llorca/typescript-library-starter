const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  entry: "./lib/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "TLS_CONFIG_LIBRARY_NAME",
    libraryTarget: "umd",
  },
  devtool: "source-map",
  externals: {
    react: "react",
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
});
