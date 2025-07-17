import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["https://squareresults-be.onrender.com"], // Allow server actions to be called from this origin
    }, // Enable server actions
  },
  distDir: "dist",
  env: {
    FORM_SUBMIT: "a552740ef9b3f2866735ad06fb4791d3",
    FORM_SUBMIT_TEST: "215a687334ede42b1342cc914d2da04f",
  },
  eslint: {
    dirs: ["pages", "styles", "components", "lib", "hooks", "app"], // Only run ESLint on the 'pages', 'styles', 'components', 'lib', 'hooks', and 'app' directories during production builds
    ignoreDuringBuilds: true, // Ignore ESLint errors during production builds
  },
};

export default nextConfig;
