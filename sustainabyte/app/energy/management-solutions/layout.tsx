import type { Metadata } from "next";
import Script from "next/script";
import { serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Energy Management Software Solutions India | Sustainabyte",
  description: "AI-powered energy management software for real-time monitoring, control, and optimization of industrial and commercial building energy systems.",
  keywords: [
    "energy management software India",
    "building energy management",
    "energy management system",
    "industrial energy management",
    "HVAC controls",
    "facility management software",
  ],
  openGraph: {
    title: "Energy Management Solutions",
    description: "Sustainabyte's enterprise energy management platform for complete facility control and optimization",
    type: "website",
    url: "https://sustainabyte.ai/energy/management-solutions",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Energy Management Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/energy/management-solutions",
  },
};

const managementService = serviceSchema(
  "Energy Management Solutions",
  "Enterprise-grade energy management platform with real-time monitoring, predictive analytics, and autonomous optimization",
  "https://sustainabyte.ai/energy/management-solutions"
);

export default function ManagementSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="management-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(managementService) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
