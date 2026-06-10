import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Services Company India, UAE, Singapore, Saudi Arabia | Sustainabyte",
  description:
    "Global energy services company delivering AI-powered energy management, audits, IoT monitoring and Net Zero consulting across India, UAE, Saudi Arabia, Singapore and 20+ countries.",
  keywords: [
    "energy services India",
    "energy services UAE",
    "energy services Dubai",
    "energy services Saudi Arabia",
    "energy services KSA",
    "energy services Singapore",
    "energy services Malaysia",
    "energy services Qatar",
    "energy services Bahrain",
    "energy services Kuwait",
    "energy services Oman",
    "energy services Indonesia",
    "energy services Philippines",
    "energy services Thailand",
    "energy services Vietnam",
    "energy services UK",
    "energy services USA",
    "energy services Australia",
    "energy services Canada",
    "energy services Germany",
    "energy services Japan",
    "energy services South Korea",
    "energy services Middle East",
    "energy services Southeast Asia",
    "energy services Asia Pacific",
    "energy services GCC",
    "energy services MENA",
    "global energy services company",
    "international energy services",
    "energy services worldwide",
    "energy services company",
    "energy services provider",
    "managed energy services",
    "energy performance contracting",
    "energy consulting services",
    "smart energy services",
    "AI energy services",
    "IoT energy services",
  ],
  openGraph: {
    title: "Energy Services Company | Global | Sustainabyte",
    description: "End-to-end AI-powered energy services for industries across 20+ countries. Audit, IoT, Net Zero consulting.",
    url: "https://sustainabyte.ai/energy/energy-services",
    type: "website",
    images: [
      {
        url: "https://sustainabyte.ai/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Energy Services Company - Global AI Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/energy/energy-services",
    languages: {
      "en-IN": "https://sustainabyte.ai/energy/energy-services",
      "en-AE": "https://sustainabyte.ai/energy/energy-services",
      "en-SA": "https://sustainabyte.ai/energy/energy-services",
      "en-SG": "https://sustainabyte.ai/energy/energy-services",
      "en-MY": "https://sustainabyte.ai/energy/energy-services",
      "en-GB": "https://sustainabyte.ai/energy/energy-services",
      "en-US": "https://sustainabyte.ai/energy/energy-services",
      "en-AU": "https://sustainabyte.ai/energy/energy-services",
    },
  },
};

export default function EnergyServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
