/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 在生产构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在生产构建时忽略TypeScript错误
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://calendar.google.com",
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://calendar.google.com',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 