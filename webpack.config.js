var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: '[name].js',
    path: './build',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.js$/,
        loader: 'babel',
        include: [
          path.resolve('src'),
          path.resolve('node_modules', 'src'),
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      inject: 'head',
      hash: true,
    }),
  ],
  devtool: 'eval-source-map',
};
