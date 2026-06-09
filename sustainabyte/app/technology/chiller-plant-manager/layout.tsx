import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiller Plant Manager | Sustainabyte",
  description: "Optimize chiller plant performance with real-time monitoring, predictive maintenance, and autonomous controls powered by AI and IoT.",
  keywords: ["Chiller Plant Manager", "chiller optimization", "plant management"],
  openGraph: {
    title: "Chiller Plant Manager",
    description: "AI-powered chiller plant optimization and monitoring",
    url: "https://sustainabyte.ai/technology/chiller-plant-manager",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Chiller Plant Manager - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/technology/chiller-plant-manager",
  },
};

export default function ChillerPlantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
