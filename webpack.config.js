const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = () => {
  const demoPath = path.join(__dirname, 'demo/')

  return {
    entry: [
      path.join(demoPath, 'index.js'),
      path.join(demoPath, 'style.css'),
    ],
    output: {
      path: path.join(__dirname, './build'),
      publicPath: '',
      filename: 'bundle.js',
      assetModuleFilename: 'images/[name].[ext]',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(html)$/,
          loader: 'html-loader',
        },
        {
          test: /\.(png|gif|svg|jpe?g)$/,
          type: 'asset',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(demoPath, 'index.html'),
        favicon: path.join(demoPath, 'favicon.png'),
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
  }
}
