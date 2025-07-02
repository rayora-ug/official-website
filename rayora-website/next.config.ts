import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Note: Removed 'output: export' to enable API routes
  // If you need static export for deployment, you'll need to use a different approach for the contact form
  
  // Optional: Add a trailing slash to exported URLs (e.g. /about/ instead of /about)
  // trailingSlash: true,
  // Optional: Configure basePath if deploying to a subdirectory
  // basePath: '/my-site',

  // If using next/image for external images, configure domains here
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.example.com',
  //       pathname: '/assets/**',
  //     },
  //   ],
  // },
};

export default nextConfig;
