/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Ensures the app runs standalone for deployment on Render
    webpack: (config) => {
      config.module.rules.push({
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      });
      return config;
    },
  };
  
  export default nextConfig;