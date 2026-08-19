import type { Metadata } from "next";
import Script from "next/script";
import { profilePageSchema, personSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Team | People at Sustainabyte Technologies",
  description:
    "Meet the passionate team at Sustainabyte Technologies driving AI-powered energy efficiency and sustainability in India and beyond.",
  keywords: [
    "sustainabyte team",
    "energy management experts",
    "IoT engineers India",
    "sustainability professionals",
    "AI energy team",
  ],
  openGraph: {
    title: "Meet the People at Sustainabyte Technologies",
    description:
      "Our team of energy engineers, IoT specialists, and software developers are building AI-powered solutions to accelerate industrial sustainability worldwide.",
    type: "website",
    url: "https://sustainabyte.ai/people",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "The Sustainabyte Technologies team – Energy & AI experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the Sustainabyte Team",
    description:
      "Energy engineers, IoT specialists & AI developers building sustainability solutions for industries worldwide.",
    images: ["/opengraph-image.png"],
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
  // Team member schemas — add LinkedIn sameAs URLs when available
  const teamSchemas = [
    personSchema(
      "Satish Kumar N",
      "Sales Manager",
      "https://sustainabyte.ai/people/Satish%20Kumar%20N.jpeg",
      "https://sustainabyte.ai/people"
    ),
    personSchema(
      "Vijayan R",
      "Assistant Manager – Energy Solutions",
      "https://sustainabyte.ai/people/Vijayan.png",
      "https://sustainabyte.ai/people"
    ),
    personSchema(
      "Gowtham D",
      "Assistant Manager – Energy Solutions",
      "https://sustainabyte.ai/people/Gowtham%20D.jpeg",
      "https://sustainabyte.ai/people"
    ),
    personSchema(
      "Yedunath M",
      "IoT & Controls Project Engineer",
      "https://sustainabyte.ai/people/yedunath.jpeg",
      "https://sustainabyte.ai/people"
    ),
  ];

  return (
    <>
      <Script
        id="profile-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        strategy="afterInteractive"
      />
      {teamSchemas.map((schema, index) => (
        <Script
          key={index}
          id={`team-person-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="afterInteractive"
        />
      ))}
      {children}
    </>
  );
}

