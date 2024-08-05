/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  }
};

export default nextConfig;
