import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Analytics Platform | Sustainabyte Technologies",
  description: "Real-time energy analytics, monitoring, and dashboarding for commercial and industrial facilities. Visualize and optimize energy performance.",
  keywords: [
    "energy analytics platform",
    "energy monitoring dashboard",
    "real-time energy analytics",
    "facility analytics",
    "energy data platform",
  ],
  openGraph: {
    title: "Energy Analytics Platform",
    description: "Real-time insights into your facility's energy performance",
    type: "website",
    url: "https://sustainabyte.ai/analytics",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Energy Analytics",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/analytics",
  },
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
