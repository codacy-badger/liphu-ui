const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');

const styleList = fs.readdirSync(
	path.resolve(__dirname, '../src/assets/scss/liphu/partials')
);
const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
const mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
const componentsList = fs.readdirSync(
	path.resolve(__dirname, '../src/components')
);

let externals = {};
let utils = [];
let mixins = [];
let components = [];
let styles = [];

utilsList.forEach(file => {
	file = path.basename(file, '.js');
	externals[`liphu-ui/src/utils/${file}`] = `liphu-ui/dist/utils/${file}`;
	utils[`utils/${file}`] = `./src/utils/${file}.js`;
});

mixinsList.forEach(file => {
	file = path.basename(file, '.js');
	externals[`liphu-ui/src/mixins/${file}`] = `liphu-ui/dist/mixins/${file}`;
	mixins[`mixins/${file}`] = `./src/mixins/${file}.js`;
});

componentsList.forEach(folder => {
	externals[
		`liphu-ui/src/components/${folder}`
	] = `liphu-ui/dist/components/${folder}`;
	components[`components/${folder}`] = `./src/components/${folder}/index.js`;
});

styleList.forEach(file => {
	externals[
		`liphu-ui/src/assets/scss/liphu/partials/${file}`
	] = `liphu-ui/dist/css/${file.replace('_', '')}`;
	styles[
		`css/${file.replace('_', '').replace('.scss', '')}`
	] = `./src/assets/scss/liphu/partials/${file}`;
});

externals = [
	Object.assign(
		{
			vue: 'vue'
		},
		externals
	),
	nodeExternals()
];

exports.externals = externals;
exports.utils = utils;
exports.mixins = mixins;
exports.components = components;
exports.styles = styles;

exports.alias = {
	'liphu-ui': path.resolve(__dirname, '../src'),
	assets: path.resolve(__dirname, '../src/assets'),
	styles: path.resolve(__dirname, '../src/assets/scss'),
	utils: path.resolve(__dirname, '../src/utils'),
	mixins: path.resolve(__dirname, '../src/mixins'),
	site: path.resolve(__dirname, '../site/src'),
	vue:
		process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'
			? 'vue/dist/vue.min'
			: 'vue/dist/vue'
};

exports.vue = {
	root: 'Vue',
	commonjs: 'vue',
	commonjs2: 'vue',
	amd: 'vue'
};

exports.test = {
	root: 'Vue',
	commonjs: 'vue',
	commonjs2: 'vue',
	amd: 'vue',
	assets: path.resolve(__dirname, '../src/assets'),
	styles: path.resolve(__dirname, '../src/assets/scss'),
	utils: path.resolve(__dirname, '../src/utils'),
	mixins: path.resolve(__dirname, '../src/mixins'),
	site: path.resolve(__dirname, '../site/src')
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.js/;
