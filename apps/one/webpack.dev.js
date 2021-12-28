const { merge } = require('webpack-merge')
const path = require('path')
const { MFLiveReloadPlugin } = require('@module-federation/fmr')

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
    port: 8001,
  },
  plugins: [
    new MFLiveReloadPlugin({
      port: 8001,
      container: 'one',
      standalone: false,
    }),
  ],
})
