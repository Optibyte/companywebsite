import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Solutions | Sustainabyte",
  description: "Energy management, efficiency consulting, and analytics solutions for commercial and industrial facilities in India.",
  keywords: [
    "energy solutions",
    "energy management",
    "energy efficiency",
    "industrial energy",
  ],
  openGraph: {
    title: "Energy Solutions | Sustainabyte",
    description: "Comprehensive energy management and efficiency solutions",
    type: "website",
    url: "https://sustainabyte.ai/energy",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainabyte Energy",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/energy",
  },
};

export default function EnergyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
