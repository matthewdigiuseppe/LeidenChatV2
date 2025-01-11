/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Ensures compatibility with Render's deployment
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/, // Custom CSS handling
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
};

export default nextConfig;