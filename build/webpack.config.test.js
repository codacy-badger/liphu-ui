const path = require('path');
const WebpackBar = require('webpackbar');
const { VueLoaderPlugin } = require('vue-loader');
const Vue = require('vue');
const config = require('./base.config');
const test = require('./test.config');

Vue.config.devtools = false;

module.exports = test(config, path, WebpackBar, VueLoaderPlugin);
