import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export', // Removed static export to enable dynamic routes
  trailingSlash: true, // Add trailing slashes to URLs for better compatibility
  images: {
    // unoptimized: true, // Re-enabled image optimization
  },
  typedRoutes: true,
};

export default nextConfig;