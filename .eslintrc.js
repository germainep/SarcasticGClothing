module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser/',
  plugins: ['@typescript-eslint'],
};
