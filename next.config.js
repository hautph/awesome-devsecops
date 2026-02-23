/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed static export to enable dynamic routes
  trailingSlash: true, // Add trailing slashes to URLs for better compatibility
  images: {
    // unoptimized: true, // Re-enabled image optimization
  },
  // typedRoutes: true, // Removed as it's not supported in Next.js 14
};

module.exports = nextConfig;