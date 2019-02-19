const barConfig = {
	name: 'Utils',
	color: '#fabe46'
};

module.exports = (config, path, WebpackBar, VueLoaderPlugin) => ({
	mode: 'production',
	entry: {
		...config.utils,
		...config.mixins
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: '[name].js',
		chunkFilename: '[id].js',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
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
				use: {
					loader: 'babel-loader',
					options: {
						envName: 'utils'
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
					{
						loader: 'file-loader',
						options: {
							name: '[name].css'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
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
	plugins: [new WebpackBar(barConfig), new VueLoaderPlugin()]
});
