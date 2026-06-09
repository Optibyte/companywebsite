import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability & Net Zero | Sustainabyte",
  description: "Comprehensive sustainability solutions including net-zero decarbonization, carbon accounting, water management, and energy efficiency for India.",
  keywords: [
    "sustainability",
    "net zero",
    "decarbonization",
    "carbon accounting",
    "water management",
    "environmental sustainability",
  ],
  openGraph: {
    title: "Sustainability Solutions | Sustainabyte",
    description: "Achieve net-zero and sustainability goals with Sustainabyte",
    type: "website",
    url: "https://sustainabyte.ai/sustainability",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainabyte Sustainability",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/sustainability",
  },
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
