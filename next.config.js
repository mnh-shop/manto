/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Turbopack to treat the site folder as the root
  turbopack: {
    root: __dirname,
  },
  // Keep the existing settings
  reactStrictMode: true,
};
module.exports = nextConfig;
