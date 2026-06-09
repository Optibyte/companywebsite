import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Sustainabyte",
  description: "Resources, guides, and information on energy efficiency, sustainability, and net-zero solutions.",
  openGraph: {
    title: "Resources | Sustainabyte",
    description: "Energy efficiency and sustainability resources",
    type: "website",
    url: "https://sustainabyte.ai/resources",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainabyte Resources",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
