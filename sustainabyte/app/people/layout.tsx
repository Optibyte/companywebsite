import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "People | Careers | Sustainabyte",
  description: "Join Sustainabyte's team of energy and sustainability experts. Explore career opportunities and our company culture.",
  keywords: ["careers", "jobs", "team", "employment"],
  openGraph: {
    title: "Careers | Sustainabyte",
    description: "Join our team",
    type: "website",
    url: "https://sustainabyte.ai/people",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainabyte Careers",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/people",
  },
};

export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
