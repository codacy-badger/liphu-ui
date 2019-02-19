module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		mocha: true,
		jest: true
	},
	extends: [
		'plugin:vue/recommended',
		'plugin:prettier/recommended',
		'eslint:recommended'
	],
	// required to lint *.vue files
	plugins: ['vue', 'mocha'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-extra-semi': 'off',
		'no-unexpected-multiline': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'vue/html-closing-bracket-spacing': 'off',
		'vue/html-end-tags': 'off',
		'vue/html-indent': 'off',
		'vue/html-quotes': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/valid-v-bind': 'off',
		'vue/require-default-prop': 'off',
		'vue/require-prop-types': 'off',
		'vue/html-closing-bracket-newline': 'off',
		'vue/no-v-html': 'off',
		'vue/mustache-interpolation-spacing': 'off',
		'vue/no-multi-spaces': 'off',
		'vue/no-spaces-around-equal-signs-in-attribute': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/html-self-closing': 'off',
		'prettier/prettier': [
			'error',
			{},
			{
				usePrettierrc: true
			}
		]
	},
	parserOptions: {
		sourceType: 'module',
		parser: 'babel-eslint'
	},
	globals: {
		describe: true,
		it: true,
		afterEach: true,
		beforeEach: true,
		expect: true
	}
};
