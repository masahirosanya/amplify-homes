module.exports = {
    // …
    env: {
      "browser": true,
      "jquery": true,
      "browser": true,
      "es6": true,
      "node": true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    rules: {
      // …
     'react/react-in-jsx-scope': 'off',
    },
    parser: "babel-eslint",
    parserOptions: {
      sourceType: "module",
      ecmaVersion: 2015,
      "node": true,
    },
  }