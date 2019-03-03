const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Exclude = require('./exclude');
const barConfig = {
	name: 'Theme',
	color: '#673ab7'
};

module.exports = (config, path, WebpackBar) => ({
	mode: 'production',
	entry: {
		...config.styles,
		'css/utilities': './src/assets/scss/helpers/_utilities.scss',
		'css/liphu': './src/assets/scss/liphu.scss'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: ''
	},
	resolve: {
		extensions: ['.scss', '.css'],
		alias: config.alias,
		modules: ['node_modules']
	},
	externals: config.externals,
	performance: {
		hints: false
	},
	stats: 'errors-only',
	optimization: {
		minimize: true,
		mangleWasmImports: true
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							includePaths: [
								path.resolve(__dirname, '../src/assets/scss'),
								path.resolve(__dirname, '../src/assets'),
								path.resolve(__dirname, '../site/src/assets')
							],
							data: `
								@import "${path.resolve(
									__dirname,
									'../src/assets/scss/helpers/_functions.scss'
								)}";
								@import "${path.resolve(__dirname, '../src/assets/scss/helpers/_mixins.scss')}";
								@import "${path.resolve(
									__dirname,
									'../src/assets/scss/helpers/_variables.scss'
								)}";
							`
						}
					}
				]
			},
			{
				test: /\.(otf|ttf|woff2?|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							emitFile: true,
							name: 'fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|svg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							emitFile: true,
							name: 'images/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new WebpackBar(barConfig),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new Exclude([/\.js(\.map)?$/])
	]
});
