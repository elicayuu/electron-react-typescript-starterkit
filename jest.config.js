const tsconfig = require('./tsconfig.json')

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
    ...parsePathsJson(tsconfig.compilerOptions.paths),
  },
}

function parsePathsJson(paths) {
  return Object.entries(paths).reduce((acc, [key, [value]]) => {
    const newPath = value.replace(/\/\*/, '')
    const propertyName = `${key}/(.*)`

    if (acc[propertyName]) return acc

    acc[propertyName] = `<rootDir>/${newPath}/$1`
    console.log(propertyName, `<rootDir>/${newPath}/$1`)
    return acc
  }, {})
}
