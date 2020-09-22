module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "airbnb", "prettier", "prettier/react"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react", "react-hooks"],
	rules: {
		"import/no-named-as-default": 0,
		"react/jsx-props-no-spreading": 0,
		"import/no-extraneous-dependencies": 0,
		radix: 0,
	},
	ignorePatterns: ["src/backend/**/*"],
};
