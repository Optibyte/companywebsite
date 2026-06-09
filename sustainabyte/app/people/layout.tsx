import type { Metadata } from "next";
import Script from "next/script";
import { profilePageSchema, personSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "People | Careers | Sustainabyte",
  description: "Join Sustainabyte's team of energy and sustainability experts. Explore career opportunities and meet our leadership team driving climate tech innovation.",
  keywords: ["careers", "jobs", "team", "employment", "leadership"],
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
  const founderSchema = personSchema(
    "Arun Prasad",
    "Founder & CEO",
    "/people/arun-prasad.jpg",
    "https://sustainabyte.ai/people",
    "arun@sustainabyte.ai"
  );

  return (
    <>
      <Script
        id="profile-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="founder-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
