const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "inlinek-souce-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "app")],
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },

  plugins: [new htmlWebpackPlugin({ template: "./index.html" })]
};
