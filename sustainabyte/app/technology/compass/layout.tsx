import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compass | AI Engineering Governance & Tracking Platform | Sustainabyte",
  description:
    "Compass by Sustainabyte is an AI-powered engineering governance platform that measures team performance, sprint metrics, SLA compliance, and AI transformation progress across your entire engineering organization.",
  keywords: [
    "AI governance platform",
    "engineering metrics",
    "sprint analytics",
    "SLA tracking",
    "AI transformation",
    "software team performance",
    "GitHub Jira integration",
    "engineering KPIs",
    "DevOps metrics",
    "DORA metrics",
    "team velocity tracking",
  ],
  openGraph: {
    title: "Compass | AI Engineering Governance Platform",
    description:
      "Govern, measure, and analyze engineering performance with AI-powered tracking of sprint metrics, SLA compliance, and digital transformation progress.",
    type: "website",
    url: "https://sustainabyte.ai/technology/compass",
    siteName: "Sustainabyte Technologies",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Compass - AI Engineering Governance Platform by Sustainabyte",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compass | AI Engineering Governance Platform",
    description:
      "Govern, measure, and analyze engineering performance with Compass by Sustainabyte.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/technology/compass",
  },
};

export default function CompassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
