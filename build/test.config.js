const TerserPlugin = require('terser-webpack-plugin');

const barConfig = {
	name: 'Tests',
	color: '#3b79db'
};

module.exports = (config, path, WebpackBar, VueLoaderPlugin) => ({
	mode: 'production',
	entry: {
		'liphu-ui': ['./src/index.js']
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: 'index.js',
		chunkFilename: '[id].js',
		// use absolute paths in sourcemaps (important for debugging via IDE)
		devtoolModuleFilenameTemplate: '[absolute-resource-path]',
		devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.scss'],
		alias: config.alias,
		modules: ['node_modules']
	},
	externals: config.vue,
	performance: {
		hints: false
	},
	stats: 'errors-only',
	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					output: {
						comments: false
					}
				}
			})
		],
		mangleWasmImports: true
	},
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
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
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
	plugins: [new WebpackBar(barConfig), new VueLoaderPlugin()]
});
