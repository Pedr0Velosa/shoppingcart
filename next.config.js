/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.dummyjson.com'],
  },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/product',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
