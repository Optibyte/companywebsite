import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FusionByte - Digital Welding Production Tracking & Quality AI | Sustainabyte",
  description: "Digital welding production tracking and energy intelligence platform. Correlate weld arc energy with joint quality, detect anomalies, and lower fabrication costs.",
  keywords: [
    "digital welding production tracking",
    "welding quality management software",
    "welding monitoring system",
    "FusionByte",
  ],
  openGraph: {
    title: "FusionByte - Production Intelligence",
    description: "AI-powered production and energy cost analysis",
    url: "https://sustainabyte.ai/technology/fusionbyte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "FusionByte - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/technology/fusionbyte",
  },
};

export default function FusionByteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
