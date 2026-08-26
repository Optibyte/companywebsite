import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InByte - AI Energy Audit Intelligence & Automated M&V | Sustainabyte",
  description: "InByte accelerates energy audits with AI - auto-flagging thermal & electrical inefficiencies, generating IPMVP-compliant M&V reports, and calculating verified ROI.",
  keywords: [
    "energy audit services",
    "InByte",
    "AI audit intelligence",
    "energy audit automation",
    "measurement and verification software",
    "industrial energy efficiency",
  ],
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
