const path = require('path');
const WebpackBar = require('webpackbar');
const { VueLoaderPlugin } = require('vue-loader');
const config = require('./base.config');
const common = require('./common.config');
const umd = require('./umd.config');
const theme = require('./theme.config');
const components = require('./components.config');
const utils = require('./utils.config');
const site = require('./site.config');

module.exports = env => {
	if (!env) env = { modules: 'site' };
	let modules = env.modules.split(',');
	let result = [];

	modules.forEach(mod => {
		switch (mod) {
			case 'common':
				result.push(common(config, path, WebpackBar, VueLoaderPlugin));
				break;
			case 'umd':
				result.push(umd(config, path, WebpackBar, VueLoaderPlugin));
				break;
			case 'theme':
				result.push(theme(config, path, WebpackBar));
				break;
			case 'components':
				result.push(
					components(config, path, WebpackBar, VueLoaderPlugin)
				);
				break;
			case 'utils':
				result.push(utils(config, path, WebpackBar, VueLoaderPlugin));
				break;
			case 'site':
				result.push(site(config, path, WebpackBar, VueLoaderPlugin));
				break;
		}
	});

	return result;
};
