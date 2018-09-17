const path = require('path');
const webpack = require('webpack')

modules.exports = {
  mode: "development",
  entry: "./src/App.js",
  output : {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      }
    ],
    resolve: {
      extensions: [ ".ts", ".tsx"],
    }
  }
}