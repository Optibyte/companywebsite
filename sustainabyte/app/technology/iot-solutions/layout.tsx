import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Solutions - Connected Energy Systems | Sustainabyte",
  description: "Sustainabyte's IoT solutions enable real-time connectivity across BACnet, Modbus, MQTT, and custom protocols for seamless facility integration.",
  keywords: ["IoT solutions", "energy IoT", "BACnet Modbus MQTT"],
  openGraph: {
    title: "IoT Solutions",
    description: "Connected IoT systems for comprehensive energy monitoring",
    url: "https://sustainabyte.ai/technology/iot-solutions",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "IoT Solutions - Sustainabyte",
      },
    ],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/technology/iot-solutions",
  },
};

export default function IoTSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
