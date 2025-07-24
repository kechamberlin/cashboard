import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://maps.gstatic.com/**')],
  },
};

export default nextConfig;
