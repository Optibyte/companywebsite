import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "13.66.130.236",
    "sustainabyte.ai",
    "www.sustainabyte.ai",
  ],

  // Security and SEO headers
  async headers() {
    return [
      // ─── HTML pages: never cache, always serve fresh SSR ──────────────────
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
          // FIX: HTML pages must NOT be cached immutably — they need revalidation
          // so the browser always fetches the latest server-rendered HTML.
          // Stale HTML + new JS = hydration mismatch (the "stale" Turbopack bug).
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      // ─── Static public assets (images, fonts, icons) ──────────────────────
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // ─── WebP and image assets ─────────────────────────────────────────────
      {
        source: "/:path*.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;