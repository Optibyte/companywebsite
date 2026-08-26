import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sustainabyte | Company Profile, Team & Culture | Chennai, India",
  description: "Learn about Sustainabyte Technologies – our mission, vision, founders, team, office location in Chennai, work culture, and approach to AI-powered energy management and sustainability.",
  keywords: [
    // Brand company info keywords
    "Sustainabyte company profile",
    "Sustainabyte founder",
    "Sustainabyte CEO",
    "Sustainabyte employees",
    "Sustainabyte LinkedIn",
    "Sustainabyte Glassdoor",
    "Sustainabyte AmbitionBox",
    "Sustainabyte reviews",
    "Sustainabyte salary",
    "Sustainabyte work culture",
    "Sustainabyte office location",
    "Sustainabyte contact",
    // Brand name variants
    "Sustainabyte",
    "Sustainabyte.ai",
    "Sustainabyte AI",
    "Sustainabyte Technologies",
    "Sustainabyte Pvt Ltd",
    "Sustainabyte Private Limited",
    "Sustainabyte Chennai",
    "Sustainabyte India",
    // General company info
    "about Sustainabyte",
    "Sustainabyte team",
    "AI sustainability startup India",
    "energy tech startup Chennai",
  ],
  openGraph: {
    title: "About Sustainabyte Technologies | Company Profile & Culture",
    description: "Meet the team behind Sustainabyte. AI-powered energy management startup based in Chennai, India. Learn about our mission, culture, and people.",
    type: "website",
    url: "https://sustainabyte.ai/company",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "About Sustainabyte Technologies – AI Energy Management Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sustainabyte Technologies",
    description: "AI-powered energy management startup based in Chennai, India. Learn about our team, culture, and mission.",
    images: ["/opengraph-image.png"],
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
