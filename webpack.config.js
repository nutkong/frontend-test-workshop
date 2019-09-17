const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const package = require('./package.json')

module.exports = {
  entry: {
    app: './index.js',
    vendor: Object.keys(package.dependencies)
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[hash]-[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      hash: true,
      title: 'Learn To Code',
      template: './public/index.html',
      filename: './index.html'
    }),
    new CopyWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './build',
    hot: true
  }
}
