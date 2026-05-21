/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'publicliabilityinsurance.co.nz' }],
        destination: 'https://www.publicliabilityinsurance.co.nz/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
