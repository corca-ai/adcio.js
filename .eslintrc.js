module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "import"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  ignorePatterns: [".eslintrc.js", "dist", "webpack.config.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
        "newlines-between": "never",
      },
    ],
  },
};
