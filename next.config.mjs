/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
