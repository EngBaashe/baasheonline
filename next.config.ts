/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove swcMinify as it's not needed in Next.js 16+
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Remove experimental and use typedRoutes directly
  typedRoutes: true,
}

export default nextConfig