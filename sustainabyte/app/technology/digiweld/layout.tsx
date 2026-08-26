import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DigiWeld - Smart Welding Monitoring System & Bluetooth Control | Sustainabyte",
  description: "Bluetooth-enabled welding monitoring system and quality management software. Real-time WPS enforcement, arc telemetry, and automated Non-Conformance Reporting (NCR).",
  keywords: [
    "welding monitoring system",
    "digital welding production tracking",
    "welding quality management software",
    "Bluetooth welding control",
    "DigiWeld",
  ],
  openGraph: {
    title: "DigiWeld - Welding Intelligence",
    description: "AI-powered welding process optimization and quality monitoring",
    url: "https://sustainabyte.ai/technology/digiweld",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DigiWeld - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/technology/digiweld",
  },
};

export default function DigiWeldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
