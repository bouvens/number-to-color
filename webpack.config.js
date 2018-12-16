const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

const demoPath = path.join(__dirname, 'demo/')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: [
    path.join(demoPath, 'index.js'),
    path.join(demoPath, 'style.css'),
  ],
  output: {
    path: path.join(__dirname, './build'),
    publicPath: devMode ? '/' : 'num2color/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(demoPath, 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}
