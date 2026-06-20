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
    "AHU",
    "AHU efficiency",
    "AHU optimization",
    "AHU airflow measurement",
    "AHU airflow balancing",
    "AHU fan power",
    "AHU static pressure",
    "AHU pressure drop",
    "AHU filter pressure drop",
    "AHU coil cleaning",
    "AHU coil efficiency",
    "AHU energy consumption",
    "AHU dashboard",
    "AHU monitoring",
    "AHU analytics",
    "AHU health monitoring",
    "AHU runtime analysis",
    "AHU VFD optimization",
    "AHU energy saving",
    "AHU KPI",
    "Ventilation",
    "Ventilation audit",
    "Ventilation optimization",
    "Fresh air optimization",
    "Fresh air control",
    "Return air optimization",
    "Air balancing",
    "Duct leakage",
    "Duct pressure analysis",
    "Airflow mapping",
    "Ventilation efficiency",
    "HVAC",
    "HVAC audit",
    "HVAC optimization",
    "HVAC dashboard",
    "HVAC monitoring",
    "HVAC analytics",
    "HVAC energy saving",
    "HVAC performance report",
    "HVAC energy consumption",
    "HVAC energy intensity",
    "HVAC efficiency improvement",
    "HVAC fault detection",
    "HVAC digital twin",
    "HVAC automation",
    "HVAC benchmarking",
    "HVAC operation review",
    "Clean Room",
    "Clean room monitoring",
    "Clean room pressure control",
    "Clean room airflow",
    "Clean room energy consumption",
    "Clean room HVAC optimization"
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
