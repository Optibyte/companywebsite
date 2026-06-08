import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "13.66.130.236",
    "sustainabyte.ai",
    "www.sustainabyte.ai", // if applicable
  ],
};

export default nextConfig;