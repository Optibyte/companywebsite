import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbon Accounting & Reporting | Sustainabyte",
  description: "Carbon accounting software for measuring, tracking, and reporting Scope 1, 2, and 3 emissions with ISO 14064 and CDP compliance.",
  keywords: ["Carbon accounting", "emissions reporting", "carbon tracking"],
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
