import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FusionByte - AI Production Intelligence | Sustainabyte",
  description: "FusionByte integrates production and energy data through AI to reveal the true cost of every process and where to cut without cutting output.",
  keywords: ["FusionByte", "production intelligence", "energy production AI"],
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
