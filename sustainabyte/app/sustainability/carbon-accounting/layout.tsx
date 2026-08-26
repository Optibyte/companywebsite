import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESG & Carbon Reporting Software (Scope 1, 2, 3 Emissions) | Sustainabyte",
  description: "Automate corporate ESG reporting, GHG Protocol accounting, and Scope 1, 2, and 3 emissions tracking. Fully compliant with SEBI BRSR, CDP, and ISO 14064 standards.",
  keywords: [
    "ESG reporting",
    "carbon reporting",
    "carbon management",
    "Scope 1 2 3 emissions",
    "GHG reporting",
    "Net Zero solutions",
    "decarbonization solutions",
    "sustainability management",
    "Carbon accounting",
  ],
  openGraph: {
    title: "Carbon Accounting",
    description: "ISO 14064 compliant carbon emissions accounting and reporting",
    url: "https://sustainabyte.ai/sustainability/carbon-accounting",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Carbon Accounting - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/sustainability/carbon-accounting",
  },
};

export default function CarbonAccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
