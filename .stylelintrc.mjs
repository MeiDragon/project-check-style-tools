/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  plugins: ['stylelint-scss'],
  customSyntax: 'postcss-scss',
  // rules: {
  //   'declaration-block-no-duplicate-properties': true, // 块内不允许相同属性
  //   'no-duplicate-at-import-rules': true, // 不允许重复引入@import相同样式
  //   'no-duplicate-selectors': true, // 不允许重复选择器
  //   'block-no-empty': true, // 不允许空样式块 .cls {}
  //   'comment-no-empty': true, // 不允许空白注释 /* */
  //   'color-no-invalid-hex': true, // color hex值必须合法
  //   'function-calc-no-unspaced-operator': true, // calc()运算符号前后强制空格
  //   'keyframe-declaration-no-important': true, // @keyframes里不允许使用!important
  //   'at-rule-no-unknown': null
  // }
  rules: {
    'annotation-no-unknown': null,
		'at-rule-no-unknown': null,
		'comment-no-empty': null,
		'function-no-unknown': null,
		'media-query-no-invalid': null,
		'no-invalid-position-at-import-rule': [
			true,
			{
				ignoreAtRules: ['use', 'forward'],
			},
		],
		'scss/at-extend-no-missing-placeholder': true,
		'scss/at-if-no-null': true,
		'scss/at-import-partial-extension': 'never',
		'scss/at-rule-no-unknown': true,
		'scss/comment-no-empty': true,
		'scss/declaration-nested-properties-no-divided-groups': true,
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/function-quote-no-quoted-strings-inside': true,
		'scss/function-unquote-no-unquoted-strings-inside': true,
		'scss/load-no-partial-leading-underscore': true,
		'scss/no-duplicate-mixins': true,
		'scss/no-global-function-names': true,
		'scss/operator-no-newline-after': true,
		'scss/operator-no-newline-before': true,
		'scss/operator-no-unspaced': true,
  }
}