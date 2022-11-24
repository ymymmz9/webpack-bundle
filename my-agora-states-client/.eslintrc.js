module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "react/prop-types": 0,
  },
};
