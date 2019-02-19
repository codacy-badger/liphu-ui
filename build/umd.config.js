const TerserPlugin = require('terser-webpack-plugin');

const barConfig = {
	name: 'Umd',
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
		libraryExport: 'default',
		library: 'liphu-ui',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: "typeof self !== 'undefined' ? self : this"
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
