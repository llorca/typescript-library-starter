const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  entry: "./example/index.tsx",
  output: {
    path: path.resolve(__dirname, "./example/build"),
    filename: "index.js",
    library: "TLS_CONFIG_LIBRARY_NAME",
    libraryTarget: "umd",
  },
  devtool: "eval",
  devServer: {
    contentBase: "./example/build",
  },
  plugins: [
    new CleanWebpackPlugin(["example/build"]),
    new CopyWebpackPlugin([
      {
        from: "./example/index.html",
        to: "./index.html",
      },
      {
        from: "./example/static/",
        to: "./static/",
      },
    ]),
  ],
});
