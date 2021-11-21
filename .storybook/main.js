const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../src/'),
      '@': path.resolve(__dirname, '../src/components/')
    }

    return config;
  }
}