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
    "Utility monitoring",
    "Utility asset monitoring",
    "Utility performance monitoring",
    "Utility dashboard",
    "Utility analytics",
    "Utility KPI monitoring",
    "Utility energy monitoring",
    "Utility consumption monitoring",
    "Utility efficiency monitoring",
    "Utility health monitoring",
    "Utility digital monitoring",
    "Utility remote monitoring",
    "Utility operational monitoring",
    "Utility asset analytics",
    "Utility performance dashboard",
    "Utility management dashboard",
    "Utility reporting system",
    "Utility intelligence platform",
    "Utility optimization dashboard",
    "Utility command center",
    "Real-time utility monitoring",
    "Live utility dashboard",
    "Live energy monitoring",
    "Real-time equipment monitoring",
    "Online utility monitoring",
    "Live performance tracking",
    "Utility trend monitoring",
    "Utility condition monitoring",
    "Live equipment analytics",
    "Real-time operational data"
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
