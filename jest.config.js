const path = require('path')
const tsconfig = require('./tsconfig.json')

module.exports = {
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
  ],
  setupFilesAfterEnv: [
    "./jest.setup.js",
  ],
  moduleNameMapper: {
    ...parsePathsJson(tsconfig.compilerOptions.paths),
  },
}

function parsePathsJson(paths) {
  return Object.entries(paths).reduce((acc, [folderPath]) => {
    folderPath = folderPath.replace(/[@/*]/g, "")
    const propertyName = `@${folderPath}/(.*)`

    if (acc[propertyName]) return acc

    acc[propertyName] = `<rootDir>/src/renderer/${folderPath}/$1`
    return acc
  }, {})
}