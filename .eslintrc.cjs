module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	globals: { 
		// script setup
		defineProps: "readonly",
		defineEmits: "readonly",
		defineExpose: "readonly",
		withDefaults: "readonly",
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:@typescript-eslint/recommended",
	],
	overrides: [],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		parser: "@typescript-eslint/parser",
	},
	plugins: [
		"vue",
		"@typescript-eslint",
		// 将 Prettier 的格式化功能集成到 ESLint 中。会应用Prettier的配置
		"prettier",
	],
	settings: {
		'import/resolver': {
			alias: {
				map: [['@', './src']],
				extensions: ['.js','.ts', '.vue', '.json']
			}
		}
  	},
	// 自定义规则
	rules: {
		"no-empty": "off",
		"no-debugger": 0,
		"no-useless-escape": 0,

		// typescript
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-var-requires": "off",

		// vue
		"vue/multi-word-component-names": "off",
		"vue/no-unused-vars": "off",
	},
};