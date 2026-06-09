import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FixByte - Predictive Maintenance AI | Sustainabyte",
  description: "FixByte is an AI-driven fault detection platform that monitors equipment health, predicts failures before they happen, and auto-generates work orders.",
  keywords: ["FixByte", "predictive maintenance", "fault detection AI"],
  openGraph: {
    title: "FixByte - Predictive Maintenance",
    description: "AI-powered equipment health monitoring and failure prediction",
    url: "https://sustainabyte.ai/technology/fixbyte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "FixByte - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/technology/fixbyte",
  },
};

export default function FixByteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
