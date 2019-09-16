module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb-base",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "camelcase": ["error", {"properties": "always"}],
    "indent": ["error", 4],
    "no-trailing-spaces": ["error"],
    "js": "always",
    "json": "never"
  },
};