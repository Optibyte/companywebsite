import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regions | Sustainabyte Energy Solutions India",
  description: "Sustainabyte's energy management and sustainability solutions across India. Regional expertise in industrial and commercial energy efficiency.",
  keywords: [
    "energy management solutions India",
    "regional energy consulting",
    "industrial energy efficiency",
    "sustainability services",
  ],
  openGraph: {
    title: "Regions | Sustainabyte",
    description: "Energy solutions across India",
    type: "website",
    url: "https://sustainabyte.ai/regions",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainabyte Regions",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/regions",
  },
};

export default function RegionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
