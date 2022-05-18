/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    };
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
  env: {
    customKey: 'my-value',
  },
};

module.exports = {
  ...nextConfig,
};
