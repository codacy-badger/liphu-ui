module.exports = {
	plugins: ['stylelint-scss'],
	extends: ['stylelint-prettier/recommended'],
	rules: {
		'prettier/prettier': true,
		// Color
		'color-no-invalid-hex': true,
		// Font family
		'font-family-no-duplicate-names': true,
		// Function
		'function-calc-no-invalid': true,
		'function-calc-no-unspaced-operator': true,
		'function-linear-gradient-no-nonstandard-direction': true,
		// Unit
		'unit-no-unknown': true,
		// Declaration block
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: ['consecutive-duplicates']
			}
		],
		// Block
		'block-no-empty': true,
		// Selector
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': true,
		// Media feature
		'media-feature-name-no-unknown': true,
		// Comment
		'comment-no-empty': true,
		// General / Sheet
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-invalid-double-slash-comments': true,
		'shorthand-property-no-redundant-values': true,
		'value-no-vendor-prefix': true,
		// Function
		'function-name-case': 'lower',
		// Length
		'length-zero-no-unit': true,
		// Value
		'value-keyword-case': 'lower',
		// Custom property
		'custom-property-empty-line-before': 'never',
		// Declaration
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-empty-line-before': [
			'never',
			{ ignore: ['inside-single-line-block'] }
		],
		// Selector
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-colon-notation': 'single',
		'selector-type-case': 'lower',
		// Media feature
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		// At-rul
		'at-rule-name-space-after': 'always',
		'at-rule-semicolon-space-before': 'never',
		// Comment
		'comment-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['after-comment', 'stylelint-commands']
			}
		],
		'comment-whitespace-inside': 'always',
		// General / Sheet
		linebreaks: 'unix',
		'no-missing-end-of-source-newline': true,
		'no-empty-first-line': true
	}
};
