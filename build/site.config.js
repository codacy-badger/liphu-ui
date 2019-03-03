const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const barConfig = {
	name: 'Site',
	color: '#16cd97',
	fancy: true,
	profile: true
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = (config, path, WebpackBar, VueLoaderPlugin) => ({
	mode: isProd ? 'production' : 'development',
	entry: {
		liphu: ['./src/index.js', './src/assets/scss/liphu.scss'],
		site: './site/src/entry.js'
	},
	devServer: {
		//contentBase: path.join(__dirname, 'dist'),
		host: '0.0.0.0',
		compress: true,
		overlay: true,
		port: 3000,
		open: false,
		useLocalIp: true,
		historyApiFallback: true,
		stats: {
			assets: true,
			builtAt: true,
			cached: false,
			cachedAssets: false,
			children: true,
			chunks: false,
			chunkGroups: false,
			chunkModules: false,
			chunkOrigins: false,
			depth: false,
			entrypoints: false,
			env: true,
			hash: true,
			modules: false,
			moduleTrace: true,
			performance: true,
			providedExports: false,
			publicPath: false,
			reasons: false,
			source: true,
			timings: true,
			usedExports: false,
			version: true,
			warnings: true,
			colors: {
				green: '\u001b[38;2;0;209;166m',
				yellow: '\u001b[38;2;255;209;85m',
				red: '\u001b[38;2;254;104;111m'
			}
		},
		watchOptions: {
			poll: true
		}
	},
	output: {
		path: path.resolve(__dirname, '../site/dist'),
		publicPath: '/',
		filename: isProd ? '[name].js' : '[name].[hash:7].js',
		chunkFilename: isProd ? '[name].js' : '[name].[hash:7].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.scss', '.css'],
		alias: {
			...config.alias,
			site: path.resolve(__dirname, '../site/src')
		},
		modules: ['node_modules']
	},
	performance: {
		hints: false
	},
	stats: 'none',
	optimization: {
		minimize: isProd ? true : false,
		mangleWasmImports: true
	},
	externals: config.vue,
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
				use: [
					{
						loader: 'vue-loader',
						options: {
							compilerOptions: {
								preserveWhitespace: false
							}
						}
					}
				]
			},
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
							name: isProd
								? 'fonts/[name].[ext]'
								: 'fonts/[name].[hash:7].[ext]'
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
							name: isProd
								? 'images/[name].[ext]'
								: 'images/[name].[hash:7].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new WebpackBar(barConfig),
		new MiniCssExtractPlugin({
			filename: isProd ? 'css/[name].css' : 'css/[name].[hash:7].css',
			chunkFilename: isProd ? 'css/[id].css' : 'css/[id].[hash:7].css'
		}),
		new HtmlWebpackPlugin({
			template: './site/index.html',
			inject: true,
			production: true
		}),
		new CleanWebpackPlugin(['site/dist'], {
			root: path.resolve(__dirname, '../'),
			verbose: false
		})
	]
});
