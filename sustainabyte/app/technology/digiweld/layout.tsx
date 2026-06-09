import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DigiWeld - Welding Process Intelligence | Sustainabyte",
  description: "DigiWeld optimizes welding processes with real-time monitoring, quality control, and energy efficiency insights powered by AI and IoT sensors.",
  keywords: ["DigiWeld", "welding optimization", "process intelligence"],
  openGraph: {
    title: "DigiWeld - Welding Intelligence",
    description: "AI-powered welding process optimization and quality monitoring",
    url: "https://sustainabyte.ai/technology/digiweld",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DigiWeld - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/technology/digiweld",
  },
};

export default function DigiWeldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
