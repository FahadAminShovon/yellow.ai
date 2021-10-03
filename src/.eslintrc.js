module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },

  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],

  rules: {
    'no-unused-vars': 2,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/display-name': 0,
    '@typescript-eslint/no-use-before-define': 'off',
  },
};
