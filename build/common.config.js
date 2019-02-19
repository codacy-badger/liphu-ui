const CleanWebpackPlugin = require('clean-webpack-plugin');

const barConfig = {
	name: 'Common',
	color: '#3b79db'
};

module.exports = (config, path, WebpackBar, VueLoaderPlugin) => ({
	mode: 'production',
	entry: {
		app: ['./src/index.js']
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: 'liphu-ui.common.js',
		chunkFilename: '[name].js',
		libraryExport: 'default',
		library: 'liphu-ui',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.scss'],
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
				test: /\.(jsx?|babel|es6)$/,
				include: process.cwd(),
				exclude: config.jsexclude,
				loader: 'babel-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						preserveWhitespace: false
					}
				}
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
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
		new CleanWebpackPlugin(['dist', 'docs/build'], {
			root: path.resolve(__dirname, '../'),
			verbose: false
		}),
		new VueLoaderPlugin()
	]
});
