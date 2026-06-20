import type { Metadata } from "next";
import Script from "next/script";
import { serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Energy Efficiency Consulting Services in India | Sustainabyte",
  description: "Expert energy efficiency consulting services to reduce commercial and industrial building energy costs by 25-35%. AI-powered audits and verified savings.",
  keywords: [
    "energy efficiency consulting India",
    "energy audit services",
    "energy efficiency consulting",
    "building energy audit",
    "industrial energy efficiency",
    "energy cost reduction",
    "Paint shop audit",
    "Conveyor energy analysis",
    "Body shop utilities",
    "Assembly line energy",
    "Stenter audit",
    "Compacting machine audit",
    "Boiler steam optimization",
    "Thermic fluid heater audit",
    "Refrigeration audit",
    "Cold storage optimization",
    "Process heating audit",
    "Clean room HVAC",
    "BMS integration",
    "Utility monitoring",
    "Process utility optimization",
    "Steam network audit",
    "Cooling water optimization"
  ],
  openGraph: {
    title: "Energy Efficiency Consulting Services",
    description: "Sustainabyte provides AI-assisted energy audits with verified savings potential",
    type: "website",
    url: "https://sustainabyte.ai/energy/efficiency-consulting",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Energy Efficiency Consulting",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/energy/efficiency-consulting",
  },
};

const consultingService = serviceSchema(
  "Energy Efficiency Consulting",
  "Comprehensive energy efficiency consulting and AI-powered audits to identify savings opportunities across commercial and industrial facilities",
  "https://sustainabyte.ai/energy/efficiency-consulting"
);

export default function EfficiencyConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="consulting-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultingService) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
