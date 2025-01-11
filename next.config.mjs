/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Ensures compatibility with deployment on platforms like Render
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/, // Custom CSS handling (if needed, else remove this block)
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
  env: {
    PORT: process.env.PORT || 10000, // Makes sure the PORT environment variable is exposed
  },
};

export default nextConfig;