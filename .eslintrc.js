module.exports = {
    // …
    env: {
      "browser": true,
      "jquery": true,
      "es6": true,
      "node": true,
    },
    plugins: [
      '@typescript-eslint', // ESLintのTypeScriptプラグインのルールを適用できる様にする（/eslint-pluginは省略可）
      'prettier'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended', // eslint:recommendedに含まれるルールを型チェックでカバーできるものは無効化
        'plugin:@typescript-eslint/recommended', // 型チェックが不要なルールを適用
        'plugin:@typescript-eslint/recommended-requiring-type-checking', // 型チェックが必要なルールを適用
        'prettier/@typescript-eslint', // Prettierでカバーできるルールを無効化
        'plugin:prettier/recommended' // Prettierのお勧めルールセットを適用
    ],
    rules: {
      // …
     'react/react-in-jsx-scope': 'off',
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module",
      ecmaVersion: 2015,
      "node": true,
    },
  }