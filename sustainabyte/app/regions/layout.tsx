import type { Metadata } from "next";
import Script from "next/script";
import { localBusinessRegionalSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Regions | Sustainabyte Energy Solutions India",
  description: "Sustainabyte's energy management and sustainability solutions across India. Regional expertise in industrial and commercial energy efficiency in Mumbai, Delhi, Bangalore, Chennai, Hyderabad, and Pune.",
  keywords: [
    "energy management solutions India",
    "regional energy consulting",
    "industrial energy efficiency",
    "sustainability services",
    "energy consulting India regions",
  ],
  openGraph: {
    title: "Regions | Sustainabyte",
    description: "Energy solutions across India - Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune",
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
  const regions = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune"];
  const regionalSchemas = regions.map((city) => localBusinessRegionalSchema(city));

  return (
    <>
      {regionalSchemas.map((schema, idx) => (
        <Script
          key={idx}
          id={`local-business-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="afterInteractive"
        />
      ))}
      {children}
    </>
  );
}
