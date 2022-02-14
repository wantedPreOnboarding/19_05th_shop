/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'localhost:3000',
    REACT_APP_ASSET_PATH: '/assets',
  },
  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
    // 절대경로
    conf.resolve.modules.push(__dirname);
    return conf;
  },
};

module.exports = nextConfig;
