const path = require('path')
const tsconfig = require('./tsconfig.json')

const paths = tsconfig.compilerOptions.paths

function getWebpackAliasPaths() {
  return Object.entries(paths).reduce((acc, [key, [value]]) => {
    const newPath = value.replace(/\/\*/, '').split('/')
    const propertyName = key.replace(/\/\*/, '')

    if (acc[propertyName]) return acc

    acc[propertyName] = path.resolve(__dirname, ...newPath)

    return acc
  }, {})
}

function getJestAliasPaths() {
  return Object.entries(paths).reduce((acc, [key, [value]]) => {
    const newPath = value.replace(/\/\*/, '')
    const propertyName = `${key}/(.*)`

    if (acc[propertyName]) return acc

    acc[propertyName] = `<rootDir>/${newPath}/$1`

    return acc
  }, {})
}

module.exports = {
  getWebpackAliasPaths,
  getJestAliasPaths,
}
