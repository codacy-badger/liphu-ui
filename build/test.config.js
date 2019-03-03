const CleanWebpackPlugin = require('clean-webpack-plugin');
const barConfig = {
	name: 'Tests',
	color: '#3b79db',
	fancy: true,
	profile: true
};

module.exports = (config, path, WebpackBar, VueLoaderPlugin) => ({
	mode: 'development',
	entry: {
		liphu: ['./src/index.js']
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: '[name].js',
		chunkFilename: '[id].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.css', '.scss'],
		alias: {
			...config.alias,
			vue$: 'vue/dist/vue.common.js'
		},
		modules: ['node_modules']
	},
	stats: 'none',
	performance: {
		hints: false
	},
	externals: config.vue,
	module: {
		rules: [
			{
				test: /\.(jsx?|babel|es6)$/,
				include: process.cwd(),
				exclude: config.jsexclude,
				use: {
					loader: 'babel-loader',
					options: {
						envName: 'test'
					}
				}
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
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader?-url',
					'postcss-loader',
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
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader?-url']
			},
			{
				test: /\.(otf|ttf|woff2?|eot)$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: path.resolve(__dirname, 'dist/fonts/[name].[ext]')
				}
			},
			{
				test: /\.(png|jpe?g|svg|gif)$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: path.resolve(__dirname, 'dist/images/[name].[ext]')
				}
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new WebpackBar(barConfig),
		new CleanWebpackPlugin(['test/coverage'], {
			root: path.resolve(__dirname, '../'),
			verbose: false
		})
	]
});
