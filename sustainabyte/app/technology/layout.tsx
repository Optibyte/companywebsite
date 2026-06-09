import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Solutions | AI IoT Energy Management",
  description: "Sustainabyte's AI, IoT, and energy technology solutions including OptiByte, InByte, FixByte, and FusionByte platforms.",
  keywords: [
    "energy technology",
    "AI IoT solutions",
    "energy software",
    "facility management technology",
  ],
  openGraph: {
    title: "Technology Solutions | Sustainabyte",
    description: "AI and IoT powered energy solutions",
    type: "website",
    url: "https://sustainabyte.ai/technology",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainabyte Technology",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/technology",
  },
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
