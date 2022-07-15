const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const audioSpriteWebpackPlugin = require("audiosprite-webpack-plugin");
const audioSupport = true;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["url-loader?limit=10000", "img-loader"],
      },
      {
        test: /\.(mp3|wav)$/,
        include: /(sounds)/,
        loader: audioSpriteWebpackPlugin.loader,
        options: {
          emptySprite: !audioSupport,
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new audioSpriteWebpackPlugin.Plugin({
      audiosprite: {
        output: "audioSpriteName",
        export: ["mp3", "ogg", "ac3", "m4a", "caf"],
        bitrate: 64,
      },
    }),
  ],
};

if (!audioSupport) {
  config.module.rules.push({
    test: /howler/,
    loader: audioSpriteWebpackPlugin.emptyHowlerLoader,
  });
}
