/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    domains: ['ucarecdn.com'],
  },
};

module.exports = nextConfig;
