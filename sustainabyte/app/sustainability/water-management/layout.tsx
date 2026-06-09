import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Management Solutions | Sustainabyte",
  description: "Water efficiency optimization and management solutions with real-time monitoring, leak detection, and conservation strategies for facilities.",
  keywords: ["Water management", "water efficiency", "water conservation"],
  openGraph: {
    title: "Water Management",
    description: "AI-powered water efficiency and conservation solutions",
    url: "https://sustainabyte.ai/sustainability/water-management",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Water Management - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/sustainability/water-management",
  },
};

export default function WaterManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
