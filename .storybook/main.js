const path = require('path')
const { getWebpackAliasPaths } = require('../paths.config')

module.exports = {
  stories: ['../src/renderer/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...getWebpackAliasPaths(),
    }

    config.module.rules.push({
      test: /\.tsx?$/,
      include: path.resolve(__dirname, "../src"),
      use: [
        require.resolve("ts-loader"),
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    });
  
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
