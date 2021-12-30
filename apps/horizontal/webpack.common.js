const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin

const federationConfig = require('./federation.config.json')
const deps = require('./package.json').dependencies

module.exports = {
  entry: {
    app: './src/index',
  },
  plugins: [
    new ModuleFederationPlugin({
      ...federationConfig,
      filename: 'remoteEntry.js',
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
        '@mui/material': {
          singleton: true,
          eager: true,
          requiredVersion: deps['@mui/material'],
        },
        '@emotion/react': {
          singleton: true,
          eager: true,
          requiredVersion: deps['@emotion/react'],
        },
        '@emotion/styled': {
          singleton: true,
          eager: true,
          requiredVersion: deps['@emotion/styled'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
