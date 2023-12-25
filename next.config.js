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
