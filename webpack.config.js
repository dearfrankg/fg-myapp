const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./client/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "app-bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    disableHostCheck: true,
    stats: "errors-only"
  }
};
