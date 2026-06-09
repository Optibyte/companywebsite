import type { Metadata } from "next";
import Script from "next/script";
import { serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI & Machine Learning | Sustainabyte Energy",
  description: "Advanced AI and IoT solutions for energy optimization, predictive maintenance, and autonomous facility management across India. Reduce energy costs by 30%.",
  keywords: [
    "AI IoT energy optimization",
    "AI machine learning energy",
    "predictive maintenance",
    "autonomous energy management",
    "AI energy intelligence",
    "smart facility management",
  ],
  openGraph: {
    title: "AI & Machine Learning for Energy Management",
    description: "Sustainabyte AI embeds intelligence at every layer for smarter facility operations",
    type: "website",
    url: "https://sustainabyte.ai/technology/ai",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainabyte AI Technology",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/technology/ai",
  },
};

const aiService = serviceSchema(
  "AI & Machine Learning Solutions",
  "Advanced AI and machine learning for energy optimization, predictive maintenance, and autonomous facility management",
  "https://sustainabyte.ai/technology/ai",
  "https://sustainabyte.ai/ai/ai%201.png"
);

export default function AILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="ai-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiService) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
