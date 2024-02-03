# project-check-style-tools
前端项目开发规范：语法检测、代码风格、Git提交规范
## stylelint
检查规则默认全部关闭，在 `.stylelintrc.mjs` 按需开启
### 依赖安装
`pnpm i stylelint stylelint-config-standard stylelint-scss postcss-scss -D`
### `.stylelintrc.mjs` 配置项
官方支持的最新规则集合（含规则示例）[Rules | Stylelint](https://stylelint.io/user-guide/rules)
```js
/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-standard',
  plugins: [],
  customSyntax: 'postcss-scss', // PostCSS插件之一，使得PostCSS可以处理scss
  rules: {
    'declaration-block-no-duplicate-properties': true, // 块内不允许相同属性
    'no-duplicate-at-import-rules': true, // 不允许重复引入@import相同样式
    'no-duplicate-selectors': true, // 不允许重复选择器
    'block-no-empty': true, // 不允许空样式块 .cls {}
    'comment-no-empty': true, // 不允许空白注释 /* */
    'color-no-invalid-hex': true, // color hex值必须合法
    'function-calc-no-unspaced-operator': true, // calc()运算符号前后强制空格
    'keyframe-declaration-no-important': true // @keyframes里不允许使用!important
    // ...
  }
}
剩余必要规则日后再补充
```
## ESlint
### 共享配置提供规则
> A configuration file, once extended, can inherit all the traits of another configuration file (including rules, plugins, and language options) and modify all the options. A sharable configuration is an npm package that exports a configuration object.
```json
{
  "extends": "eslint:recommended"
}
```
### 插件提供规则
> A plugin is an npm package that can add various extensions to ESLint.

例如来自 `eslint-plugin-plugin1` 的规则写法为 `plugin1/rule1`
```json
{
    // ...
    "plugins": [
        "jquery",   // eslint-plugin-jquery
        "@foo/foo", // @foo/eslint-plugin-foo
        "@bar"      // @bar/eslint-plugin
    ],
    "overrides": [
        {
            "files": ["*.md"],
            "processor": "a-plugin/markdown"
        },
        {
            "files": ["**/*.md/*.js"],
            "rules": {
                "strict": "off"
            }
        }
    ],
    "extends": [
        "plugin:@foo/foo/recommended",
        "plugin:@bar/recommended"
    ],
    "rules": {
        "jquery/a-rule": "error",
        "@foo/foo/some-rule": "error",
        "@bar/another-rule": "error"
    },
    "env": {
        "jquery/jquery": true,
        "@foo/foo/env-foo": true,
        "@bar/env-bar": true,
    }
    // ...
}
```