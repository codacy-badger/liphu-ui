const path = require('path');
const WebpackBar = require('webpackbar');
const { VueLoaderPlugin } = require('vue-loader');
const config = require('./base.config');
const site = require('./site.config');

module.exports = site(config, path, WebpackBar, VueLoaderPlugin);
