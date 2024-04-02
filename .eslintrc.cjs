const config = {
  extends: ["plugin:prettier/recommended", "next/core-web-vitals"],
  plugins: ["simple-import-sort"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        semi: true,
      },
    ],
    "simple-import-sort/imports": "error",
    camelcase: "off",
  },
};

module.exports = config;
