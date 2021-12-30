const { merge } = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  cache: false,
  optimization: {
    minimize: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8000,
    historyApiFallback: true,
  },
})
