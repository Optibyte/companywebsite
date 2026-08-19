import type { Metadata } from "next";
import Script from "next/script";
import { blogSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "News & Insights | Sustainabyte Energy Blog",
  description:
    "Latest news, insights, and articles on energy efficiency, sustainability, net-zero decarbonization, and AI-powered facility management.",
  keywords: [
    "energy efficiency news",
    "sustainability blog",
    "net zero insights",
    "energy management trends",
    "AI energy articles",
    "industrial sustainability news",
  ],
  openGraph: {
    title: "News & Insights | Sustainabyte Technologies",
    description:
      "Expert insights on energy efficiency, AI-powered energy management, net-zero strategies, and industrial sustainability — by Sustainabyte Technologies.",
    type: "website",
    url: "https://sustainabyte.ai/news",
    siteName: "Sustainabyte Technologies",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainabyte News & Insights – Energy Efficiency and Sustainability Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Insights | Sustainabyte Technologies",
    description:
      "Expert insights on energy efficiency, AI-powered energy management & net-zero strategies.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/news",
  },
  // article:author and article:publisher are injected via Script tags below
  // for LinkedIn and Facebook article attribution
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
