import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Sustainabyte",
  description: "Explore career opportunities at Sustainabyte Technologies.",
  keywords: ["careers", "jobs", "hiring"],
  openGraph: {
    title: "Careers | Sustainabyte",
    description: "Join Sustainabyte",
    type: "website",
    url: "https://sustainabyte.ai/careers",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
