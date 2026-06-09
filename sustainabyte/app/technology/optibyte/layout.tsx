import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OptiByte - AI Energy Intelligence Platform | Sustainabyte",
  description: "OptiByte consolidates energy data, runs predictive models, and orchestrates autonomous optimization across your facility portfolio. The central AI brain.",
  keywords: ["OptiByte", "energy intelligence platform", "AI energy management"],
  openGraph: {
    title: "OptiByte - AI Energy Platform",
    description: "Consolidate energy data and run autonomous optimization across your portfolio",
    url: "https://sustainabyte.ai/technology/optibyte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "OptiByte - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/technology/optibyte",
  },
};

export default function OptiByteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
