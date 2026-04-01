import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and adjust if deploying to a subdirectory on GitHub Pages
  // basePath: '/publicliability-nextjs',
};

export default nextConfig;
