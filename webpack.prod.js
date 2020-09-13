const path = require("path")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

const common = require("./webpack.common.js")

module.export = {
  ...common,
  mode: "production",
  entry: "./lib/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "TLS_CONFIG_LIBRARY_NAME",
    libraryTarget: "umd",
    globalObject: "this",
  },
  devtool: "source-map",
  externals: {
    react: "react",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
    }),
  ],
}
