const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, 'src', 'renderer')
const tsconfig = require('./tsconfig.json')

function parsePathsJson(paths) {
  return Object.entries(paths).reduce((acc, [key, [value]]) => {
    const newPath = value.replace(/\/\*/, '').split('/')
    const propertyName = key.replace(/\/\*/, '')

    if (acc[propertyName]) return acc

    acc[propertyName] = path.resolve(__dirname, ...newPath)

    return acc
  }, {})
}

module.exports = {
  entry: {
    renderer: defaultInclude,
  },
  resolve: {
    // Look for modules in .ts(x) files first, then .js
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
    alias: {
      ...parsePathsJson(tsconfig.compilerOptions.paths),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        include: defaultInclude,
      },
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        include: defaultInclude,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude,
      },
    ],
  },
  target: 'electron-renderer',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new BabiliPlugin(),
  ],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false,
  },
}
