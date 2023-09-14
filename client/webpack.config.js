const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "",
        title: "Just Another text Editor(JATE)",
      }),
      new InjectManifest({
        swSrc: "",
        swDest: "",
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "Just Another Text Editor",
        short_name: "JATE",
        description: "Offline Text Editor",
        background_color: "",
        theme_color: "",
        start_url: "./",
        publicPath: "./",
        icons: [
          {
            src: path.resolve(""),
            sizes: [],
            destination: path.join("", "icons"),
          },
        ],
      }),
    ],

    module: {
      rules: [
        //css loader
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        //babel loader to use ES6
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
