// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  webpack(config) {
    // NOTE: webpack での処理を変更する場合に利用する
    return config;
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
};

module.exports = () => {
  return {
    ...withVanillaExtract(nextConfig),
  };
};
