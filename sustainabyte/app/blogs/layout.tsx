import type { Metadata } from "next";
import Script from "next/script";
import { blogsSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blogs & Sustainability Insights | Sustainabyte Technologies",
  description:
    "Explore in-depth articles on Agentic AI for smart utilities, ASHRAE energy audits, industrial decarbonization, and intelligent facility energy optimization.",
  keywords: [
    "sustainability blog",
    "energy intelligence articles",
    "smart utilities",
    "Agentic AI energy",
    "ASHRAE energy audits",
    "industrial decarbonization",
    "HVAC optimization insights",
  ],
  openGraph: {
    title: "Blogs & Sustainability Insights | Sustainabyte Technologies",
    description:
      "Explore in-depth articles on Agentic AI for smart utilities, ASHRAE energy audits, and industrial decarbonization.",
    type: "website",
    url: "https://sustainabyte.ai/blogs",
    siteName: "Sustainabyte Technologies",
    images: [
      {
        url: "/blogs/Untitled-design.webp",
        width: 1200,
        height: 630,
        alt: "Sustainabyte Sustainability & Energy AI Blogs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Sustainability Insights | Sustainabyte Technologies",
    description:
      "In-depth engineering and thought leadership articles on smart utilities, AI optimization, and Net Zero strategies.",
    images: ["/blogs/Untitled-design.webp"],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="blogs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsSchema) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
