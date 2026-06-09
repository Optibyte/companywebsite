import type { Metadata } from "next";
import Script from "next/script";
import { serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Net Zero Roadmap Services & Strategy | Sustainabyte India",
  description: "Develop a comprehensive net-zero decarbonization roadmap for your organization. AI-powered planning and verified M&V for net-zero achievement.",
  keywords: [
    "net zero roadmap India",
    "net zero strategy",
    "decarbonization roadmap",
    "net zero planning",
    "carbon neutrality",
    "net zero verification",
  ],
  openGraph: {
    title: "Net Zero Roadmap Planning Services",
    description: "Create your path to net-zero with Sustainabyte's AI-powered roadmap and verified M&V",
    type: "website",
    url: "https://sustainabyte.ai/sustainability/net-zero-roadmap",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Net Zero Roadmap",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/sustainability/net-zero-roadmap",
  },
};

const netZeroService = serviceSchema(
  "Net Zero Roadmap Services",
  "AI-powered net-zero decarbonization roadmap planning, M&V verification, and sustainability strategy development",
  "https://sustainabyte.ai/sustainability/net-zero-roadmap"
);

export default function NetZeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="netzero-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(netZeroService) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
