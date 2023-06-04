/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Reference a variable that was defined in the .env.* file and make it available at Build Time
    NEXT_PUBLIC_UNPROTECTED_API_BASE_PATH:
      process.env.NEXT_PUBLIC_UNPROTECTED_API_BASE_PATH,
    NEXT_PUBLIC_AUTH_API_BASE_PATH: process.env.NEXT_PUBLIC_AUTH_API_BASE_PATH,
    NEXT_PUBLIC_ADMIN_API_BASE_PATH:
      process.env.NEXT_PUBLIC_ADMIN_API_BASE_PATH,
    NEXT_PUBLIC_USER_API_BASE_PATH: process.env.NEXT_PUBLIC_USER_API_BASE_PATH,
  },
};

module.exports = nextConfig;
