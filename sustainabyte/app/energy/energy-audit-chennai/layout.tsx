import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Audit Company in Chennai | Industrial & Commercial | Sustainabyte Technologies",
  description:
    "Sustainabyte Technologies — #1 Energy Audit Company in Chennai. BEE certified industrial energy audits, commercial energy audits, HVAC audits, ISO 50001 consulting & energy management services in Chennai & Tamil Nadu. 10–30% energy savings guaranteed.",
  keywords: [
    // Primary target keywords
    "Energy Audit Company in Chennai",
    "Energy Audit Services in Chennai",
    "Energy Service Company in Chennai",
    "Energy Management Company in Chennai",
    "Energy Efficiency Company in Chennai",
    "Energy Consulting Company in Chennai",
    "Energy Consultant in Chennai",
    "Industrial Energy Audit in Chennai",
    "Commercial Energy Audit in Chennai",
    "Energy Conservation Services in Chennai",
    "Energy Optimization Company in Chennai",
    "Energy Management Services in Chennai",
    // Service type
    "Energy Audit Chennai",
    "HVAC Energy Audit Chennai",
    "Electrical Energy Audit Chennai",
    "Building Energy Audit Chennai",
    "Chiller Plant Audit Chennai",
    "Factory Energy Audit Chennai",
    "Manufacturing Energy Audit Chennai",
    "Hospital Energy Audit Chennai",
    "Hotel Energy Audit Chennai",
    "IT Park Energy Audit Chennai",
    "Commercial Building Energy Audit Chennai",
    "HVAC Energy Optimization Chennai",
    "Chiller Optimization Chennai",
    // Location
    "Energy Audit Tamil Nadu",
    "Energy Management Tamil Nadu",
    "Energy Efficiency Services Tamil Nadu",
    "Energy Audit Tambaram",
    "Energy Consultant Tamil Nadu",
    // Service keywords
    "BEE energy audit Chennai",
    "ISO 50001 consulting Chennai",
    "ISO 50002 energy audit Chennai",
    "ASHRAE energy audit Chennai",
    "energy performance assessment Chennai",
    "energy consumption analysis Chennai",
    "energy saving assessment Chennai",
    "energy efficiency assessment Chennai",
    "energy conservation study Chennai",
    "energy monitoring Chennai",
    "energy optimization Chennai",
  ],
  openGraph: {
    title: "Energy Audit Company in Chennai | Industrial & Commercial | Sustainabyte",
    description:
      "Leading Energy Audit Company in Chennai — BEE certified, ISO 50001 consulting, industrial & commercial audits. 10–30% energy savings for factories, hospitals, hotels & IT parks.",
    url: "https://sustainabyte.ai/energy/energy-audit-chennai",
    type: "website",
    siteName: "Sustainabyte Technologies",
    images: [
      {
        url: "https://sustainabyte.ai/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Energy Audit Company in Chennai – Sustainabyte Technologies",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy Audit Company in Chennai | Sustainabyte Technologies",
    description:
      "BEE certified energy audits for factories, hospitals, hotels & IT parks in Chennai. ISO 50001 consulting & energy management services.",
    images: ["https://sustainabyte.ai/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/energy/energy-audit-chennai",
    languages: {
      "en-IN": "https://sustainabyte.ai/energy/energy-audit-chennai",
    },
  },
};

export default function EnergyAuditChennaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
