module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'semi': [2, 'always'],
    'no-console': 'off',
    'quotes': ['error', 'single'],
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': 'off'
  }
}
