import type { Metadata } from "next";
import Script from "next/script";
import { localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Sustainabyte | Energy Efficiency Solutions India",
  description: "Get in touch with Sustainabyte Technologies. Contact us for AI-powered energy management, efficiency consulting, and net-zero decarbonization solutions.",
  openGraph: {
    title: "Contact Sustainabyte Technologies",
    description: "Reach out to discuss your energy efficiency and sustainability goals",
    type: "website",
    url: "https://sustainabyte.ai/contact",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
