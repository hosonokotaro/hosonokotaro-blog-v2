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
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
