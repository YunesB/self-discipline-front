module.exports = {
  extends: ["./local.eslint.config.js"],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
};
