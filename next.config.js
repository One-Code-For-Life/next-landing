/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    remotePatterns: [
      {
        hostname: 'ucarecdn.com',
      },
    ],
  },
};

module.exports = nextConfig;
