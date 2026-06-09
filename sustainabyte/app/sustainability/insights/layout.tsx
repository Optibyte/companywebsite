import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability Insights & Intelligence | Sustainabyte",
  description: "Deep insights into energy efficiency, sustainability trends, best practices, and actionable strategies for environmental impact reduction.",
  keywords: ["Sustainability insights", "energy trends", "best practices"],
  openGraph: {
    title: "Sustainability Insights",
    description: "Expert insights and trends in energy sustainability",
    url: "https://sustainabyte.ai/sustainability/insights",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainability Insights - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/sustainability/insights",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
