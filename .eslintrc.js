module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'standard',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    }
  },
  rules: {
    'space-before-function-paren': [2, 'never'],
    'eol-last': 0,
    'comma-dangle': [2, 'always-multiline'],
    'no-unused-vars': 0,
    'object-curly-spacing': [2, 'always'],
    '@typescript-eslint/indent': 0, // Use StandardJS rule
    '@typescript-eslint/no-use-before-define': 0, // Hoist functions are good
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/indent': 0, // This is the job of StandardJS
  }
}