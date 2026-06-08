import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "13.66.130.236",
  ],
};

export default nextConfig;