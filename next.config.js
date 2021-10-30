const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type { import('next').NextConfig }
 **/
const nextConfig = {
  env: {
    // NOTE: browser 側に渡せる環境変数
    // API_URL: process.env.API_URL,
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
