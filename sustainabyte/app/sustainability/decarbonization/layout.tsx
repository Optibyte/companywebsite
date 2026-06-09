import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decarbonization Strategy & Roadmap | Sustainabyte",
  description: "Develop and execute comprehensive decarbonization strategies with AI-powered planning, M&V verification, and Net Zero alignment.",
  keywords: ["Decarbonization", "carbon reduction", "emissions reduction"],
  openGraph: {
    title: "Decarbonization Solutions",
    description: "AI-powered decarbonization strategy and execution",
    url: "https://sustainabyte.ai/sustainability/decarbonization",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Decarbonization - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/sustainability/decarbonization",
  },
};

export default function DecarbonizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
