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

  // Security and SEO headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Security Headers
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Performance & SEO Headers
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Static assets cache
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Images cache
      {
        source: "/:path*.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Internationalization for India targeting (comment out - not supported in App Router)
  // Use hreflang in layout instead for language targeting
  // i18n: {
  //   locales: ["en", "en-IN"],
  //   defaultLocale: "en-IN",
  // },
};

export default nextConfig;