import type { Metadata } from "next";
import Script from "next/script";
import { blogSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "News & Insights | Sustainabyte Energy Blog",
  description: "Latest news, insights, and articles on energy efficiency, sustainability, net-zero decarbonization, and AI-powered facility management.",
  keywords: [
    "energy efficiency news",
    "sustainability blog",
    "net zero insights",
    "energy management trends",
  ],
  openGraph: {
    title: "News & Insights | Sustainabyte",
    description: "Read the latest on energy efficiency, sustainability, and net-zero transformation",
    type: "website",
    url: "https://sustainabyte.ai/news",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainabyte News",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/news",
  },
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
