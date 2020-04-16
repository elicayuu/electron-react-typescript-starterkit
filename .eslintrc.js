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
    'comma-dangle': [2, 'always-multiline'],
    'no-unused-vars': 0,
    'object-curly-spacing': [2, 'always'],
    'react/prop-types': 0, // Use typescript to type check
    '@typescript-eslint/indent': 0, // Use StandardJS rule
    '@typescript-eslint/no-use-before-define': 0, // Hoist functions are good
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/indent': 0, // This is the job of StandardJS
    '@typescript-eslint/explicit-function-return-type': [1, {
      'allowExpressions': true,
    }],
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-var-requires': 0,
        'no-var-requires': 0,
      },
    },
  ],
}