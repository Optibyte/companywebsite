import type { Metadata } from "next";
import Script from "next/script";
import { localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Sustainabyte | Reach Us in Chennai, India",
  description: "Get in touch with Sustainabyte Technologies. Contact us for AI-powered energy management, efficiency consulting, and net-zero decarbonization solutions. Office in Chennai, India.",
  keywords: [
    // Brand contact keywords
    "Sustainabyte contact",
    "Sustainabyte office location",
    "Sustainabyte Chennai",
    "Sustainabyte India",
    "Sustainabyte phone number",
    "Sustainabyte email",
    "Sustainabyte address",
    "contact Sustainabyte Technologies",
    // General contact/location keywords
    "energy management company Chennai",
    "sustainability consulting India",
    "AI energy solutions contact",
  ],
  openGraph: {
    title: "Contact Sustainabyte Technologies | Get in Touch",
    description: "Reach out to discuss your energy efficiency and sustainability goals. Sustainabyte office in Chennai, India.",
    type: "website",
    url: "https://sustainabyte.ai/contact",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Sustainabyte Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sustainabyte Technologies",
    description: "Reach out to discuss your energy efficiency and sustainability goals.",
    images: ["/opengraph-image.png"],
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
