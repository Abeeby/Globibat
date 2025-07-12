/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
  poweredByHeader: false,
  compress: true,
  // Note: i18n dans next.config.js n'est plus pris en charge avec App Router
  // Utilisez plutôt les fonctionnalités d'internationalisation de l'App Router
};

module.exports = nextConfig; 