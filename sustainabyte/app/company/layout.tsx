import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | Sustainabyte",
  description: "Learn about Sustainabyte Technologies - our mission, vision, team, and approach to energy efficiency and sustainability.",
  openGraph: {
    title: "Company | Sustainabyte",
    description: "About Sustainabyte Technologies",
    type: "website",
    url: "https://sustainabyte.ai/company",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "About Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/company",
  },
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
