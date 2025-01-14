const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { devtool } = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
});
