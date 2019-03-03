const webpackConfig = require('../build/webpack.config.test');

module.exports = function(config) {
	config.set({
		browsers: process.env.TRAVIS ? ['Chrome'] : ['Chrome_travis_ci'],
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		},
		frameworks: ['mocha', 'sinon-chai'],
		reporters: ['mocha', 'coverage'],
		files: [
			{
				pattern: 'images/*.{jpg,png}',
				watched: false,
				included: false,
				served: true,
				nocache: false
			},
			'setup.js'
		],
		preprocessors: {
			'setup.js': ['webpack', 'sourcemap']
		},
		webpack: webpackConfig,
		webpackMiddleware: {
			noInfo: true,
			stats: 'errors-only'
		},
		coverageReporter: {
			dir: './coverage',
			reporters: [
				{ type: 'html', subdir: '.' },
				{ type: 'text-summary' },
				{ type: 'lcov', subdir: '.' }
			]
		},
		mochaReporter: {
			colors: {
				success: 'green',
				info: 'cyan',
				warning: 'yellow',
				error: 'red'
			}
		},
		client: {
			mocha: {
				timeout: 4000
			},
			clearContext: false
		},
		proxies: {
			'/images/': '/base/images/'
		}
	});
};
