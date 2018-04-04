const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const dirAssets = path.join(__dirname, "assets")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ROOT = path.resolve(__dirname)
function root(args) {
  args = Array.prototype.slice.call(arguments, 0)
  return path.join.apply(path, [ROOT].concat(args))
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body",
  hash: true
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
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: { presets: ["es2015", "react", "env", "stage-0"] }
      },
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
          }
        ]
      },

      // CSS / SASS
      {
        test: /\.scss/,
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
        test: /\.(png|jpg|gif|swf)$/,
        loader: "file-loader"
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2|woff(2)?)(\S+)?$/,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "HOST": JSON.stringify(process.env.HOST)
    }),
    new CopyWebpackPlugin([{ from: root("src/Assets"), to: root("dist/src/Assets") }])
  ]
}
