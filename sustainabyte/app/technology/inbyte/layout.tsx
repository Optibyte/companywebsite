import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InByte - AI Audit Intelligence | Sustainabyte",
  description: "InByte transforms energy audits with AI assistance - auto-flagging inefficiencies, generating recommendations, and calculating verified savings potential.",
  keywords: ["InByte", "AI audit intelligence", "energy audit automation"],
  openGraph: {
    title: "InByte - AI Audit Platform",
    description: "AI-assisted energy audits with verified savings calculations",
    url: "https://sustainabyte.ai/technology/inbyte",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "InByte - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/technology/inbyte",
  },
};

export default function InByteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
