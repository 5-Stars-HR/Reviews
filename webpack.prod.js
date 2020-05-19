const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.jsx$|\.html$/,
      threshold: 10240,
      minRatio: 0.7
    }),
    new BrotliPlugin({
      test: /\.js$|\.jsx$|\.jsx$|\.html$/,
      threshold: 10240,
      minRatio: 0.7
    })
  ]
});
