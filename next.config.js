/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_UNPROTECTED_API_BASE_PATH:
      process.env.NEXT_PUBLIC_UNPROTECTED_API_BASE_PATH,
    NEXT_PUBLIC_AUTH_API_BASE_PATH: process.env.NEXT_PUBLIC_AUTH_API_BASE_PATH,
    NEXT_PUBLIC_ADMIN_API_BASE_PATH:
      process.env.NEXT_PUBLIC_ADMIN_API_BASE_PATH,
    NEXT_PUBLIC_USER_API_BASE_PATH: process.env.NEXT_PUBLIC_USER_API_BASE_PATH,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
