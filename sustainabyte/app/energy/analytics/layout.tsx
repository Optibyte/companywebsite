import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Analytics Platform | Sustainabyte",
  description: "Real-time energy analytics and dashboarding for comprehensive facility energy monitoring, reporting, and performance optimization.",
  keywords: ["Energy analytics", "energy monitoring", "energy dashboard"],
  openGraph: {
    title: "Energy Analytics",
    description: "Real-time energy monitoring and analytics platform",
    url: "https://sustainabyte.ai/energy/analytics",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Energy Analytics - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/energy/analytics",
  },
};

export default function EnergyAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
