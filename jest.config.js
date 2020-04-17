const { getJestAliasPaths } = require('./paths.config')

module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  moduleNameMapper: {
    ...getJestAliasPaths(),
  },
}
