const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const dirAssets = path.join(__dirname, "assets")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
})
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.json?$/, loader: "json-loader" },
      // STYLES
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },

      // CSS / SASS
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(pdf|png|jpg|gif|swf|jpeg)$/,
        loader: "file-loader"
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2|woff(2)?)(\S+)?$/,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-Frame-Options": "DENY",
      "Content-Security-Policy": "frame-src https://52.170.81.34:1880 https://digitamize.atlassian.net" ,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin(["BOTMANAGEMENT_URL", "AUTHENTICATION_URL", "DIALOG_URL", "SCOPE_URL"]),
  //   new UglifyJsPlugin({
  //   parallel: true,
  //   uglifyOptions : {
  //     compress: true,
  //     mangle: false
  //   }
  // })
  ]
}
