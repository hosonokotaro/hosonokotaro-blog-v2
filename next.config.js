/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type { import('next').NextConfig }
 **/
const nextConfig = {
  // NOTE: client 側に渡せる環境変数
  env: {
    // USE_MSW: process.env.USE_MSW,
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    );

    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });

    return config;
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
