import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import { Toaster } from "react-hot-toast";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const Footer = dynamic(() => import("@/components/layout/Footer"));

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sustainabyte.ai"),
  title: "Sustainabyte Technologies | AI Energy Management India",
  description:
    "Sustainabyte Technologies helps industrial facilities and commercial buildings monitor, control, and decarbonize energy usage using AI and IoT. Achieve verified savings and Net Zero alignment.",
  keywords: [
    "AI energy management India",
    "energy efficiency",
    "sustainability",
    "net zero",
    "decarbonization",
    "AI IoT solutions",
    "industrial energy",
    "commercial buildings",
    "energy monitoring",
    "net zero roadmap",
  ],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Sustainabyte Technologies | Energy Intelligence Reimagined",
    description: "AI-powered energy efficiency and net-zero solutions for industrial facilities and commercial buildings.",
    type: "website",
    url: "https://sustainabyte.ai",
    siteName: "Sustainabyte Technologies",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainabyte Technologies - AI Energy Management",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainabyte Technologies",
    description: "Energy Intelligence Reimagined",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://sustainabyte.ai",
    languages: {
      "en": "https://sustainabyte.ai",
      "en-IN": "https://sustainabyte.ai",
    },
  },
  icons: {
    icon: "/icon.png?v=1",
  },
  verification: {
    google: "google-site-verification-code-here",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <GoogleAnalytics gaId="G-06T4EBKHVW" />
        <Toaster position="top-right" reverseOrder={false} />
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
