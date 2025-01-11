/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Ensures compatibility with Render
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/, // Custom CSS handling
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
  env: {
    PORT: process.env.PORT || 10000, // Expose PORT variable
  },
};

console.log("Running on PORT:", process.env.PORT);

export default nextConfig;