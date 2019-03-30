/* PRODUCTION CONFIG */

const merge = require('webpack-merge')
const sharedConfiguration = require('./webpack.config.js')

module.exports = merge(sharedConfiguration, {
  devtool: 'source-map',
  mode: 'production'
})
