import type { Metadata } from "next";
import Script from "next/script";
import { jobPostingSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Careers | Sustainabyte",
  description: "Explore career opportunities at Sustainabyte Technologies. Join our team of innovators driving sustainability through technology.",
  keywords: ["careers", "jobs", "hiring", "career opportunities"],
  openGraph: {
    title: "Careers | Sustainabyte",
    description: "Join Sustainabyte",
    type: "website",
    url: "https://sustainabyte.ai/careers",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const careersOpening = jobPostingSchema(
    "Energy Solutions Engineer",
    "Join Sustainabyte as an Energy Solutions Engineer. Work with AI and IoT to optimize energy efficiency for leading industrial and commercial organizations.",
    "Mumbai, India",
    "FULL_TIME"
  );

  return (
    <>
      <Script
        id="job-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersOpening) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
