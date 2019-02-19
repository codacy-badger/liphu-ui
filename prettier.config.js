module.exports = {
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	jsxSingleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	jsxBracketSameLine: true,
	arrowParens: 'avoid',
	htmlWhitespaceSensitivity: 'css',
	endOfLine: 'lf',
	overrides: [
		{
			files: '*.js',
			options: { parser: 'flow' }
		},
		{
			files: '*.scss',
			options: { parser: 'scss' }
		},
		{
			files: '*.vue',
			options: { parser: 'vue' }
		},
		{
			files: '*.json',
			options: { parser: 'json' }
		},
		{
			files: '*.md',
			options: { parser: 'markdown' }
		}
	]
};
