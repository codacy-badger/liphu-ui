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
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							data: `
								@import '${path.resolve(
									__dirname,
									'../src/assets/scss/helpers/_functions.scss'
								)}';
								@import '${path.resolve(__dirname, '../src/assets/scss/helpers/_mixins.scss')}';
								@import '${path.resolve(
									__dirname,
									'../src/assets/scss/helpers/_variables.scss'
								)}';
							`
						}
					}
				]
			},
			{
				test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: path.posix.join('static', '[name].[hash:7].[ext]')
				}
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
