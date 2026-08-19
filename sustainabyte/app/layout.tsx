import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import { Toaster } from "react-hot-toast";
import { organizationSchema, websiteSchema, localBusinessSchema, siteNavigationSchema } from "@/lib/seo";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

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
    "Sustainabyte Technologies delivers AI & IoT-powered energy intelligence, chiller optimization, and industrial decarbonization for Net Zero facilities.",
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
      "en-AE": "https://sustainabyte.ai",
      "en-SA": "https://sustainabyte.ai",
      "en-SG": "https://sustainabyte.ai",
      "en-MY": "https://sustainabyte.ai",
      "en-QA": "https://sustainabyte.ai",
      "en-BH": "https://sustainabyte.ai",
      "en-KW": "https://sustainabyte.ai",
      "en-OM": "https://sustainabyte.ai",
      "en-ID": "https://sustainabyte.ai",
      "en-PH": "https://sustainabyte.ai",
      "en-TH": "https://sustainabyte.ai",
      "en-VN": "https://sustainabyte.ai",
      "en-GB": "https://sustainabyte.ai",
      "en-US": "https://sustainabyte.ai",
      "en-AU": "https://sustainabyte.ai",
      "en-CA": "https://sustainabyte.ai",
      "en-DE": "https://sustainabyte.ai",
      "en-FR": "https://sustainabyte.ai",
      "en-JP": "https://sustainabyte.ai",
      "en-KR": "https://sustainabyte.ai",
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
        {/* Global Geo Meta Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="SA" />
        <meta name="geo.region" content="SG" />
        <meta name="geo.region" content="MY" />
        <meta name="geo.region" content="QA" />
        <meta name="geo.region" content="BH" />
        <meta name="geo.region" content="KW" />
        <meta name="geo.region" content="OM" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.region" content="PH" />
        <meta name="geo.region" content="TH" />
        <meta name="geo.region" content="VN" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="AU" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.region" content="JP" />
        <meta name="geo.region" content="KR" />
        <meta name="geo.placename" content="India, United Arab Emirates, Saudi Arabia, Singapore, Malaysia, Qatar, Bahrain, Kuwait, Oman, Indonesia, Philippines, Thailand, Vietnam, United Kingdom, United States, Australia, Canada, Germany, France, Japan, South Korea" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        {/* Author / Publisher Attribution */}
        <meta name="author" content="Sustainabyte Technologies" />
        <meta name="publisher" content="Sustainabyte Technologies" />

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
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="site-navigation-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <GoogleAnalytics gaId="G-06T4EBKHVW" />
        <Toaster position="top-right" reverseOrder={false} />
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
