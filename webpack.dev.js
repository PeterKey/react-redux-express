const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge({
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
  ],
  devServer: {
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin('public', {
      exclude: ['index.html'],
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}, common)
