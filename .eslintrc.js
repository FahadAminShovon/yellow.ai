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
    'import/resolver': {
      alias: {},
    },
  },

  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],

  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/display-name': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
