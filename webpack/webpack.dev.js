/* DEVELOPMENT CONFIG */ 

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const sharedConfiguration = require('./webpack.config.js')

module.exports = merge(sharedConfiguration, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    port: 3333,
    historyApiFallback: true,
    hot: true,
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
