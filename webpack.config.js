const { CleanWebpackPlugin } = require("clean-webpack-plugin");
console.log("dd");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProduction ? "production" : "development",
  devServer: {
    contentBase: resolve(__dirname, "public"),
    open: true,
    port: 9000,
  },
  entry: {
    app: resolve("src/main.ts"),
  },
  output: {
    path: resolve("dist"),
    filename: "[name].[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: [resolve("src")],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: resolve("public/index.html"),
    }),
  ],
};
