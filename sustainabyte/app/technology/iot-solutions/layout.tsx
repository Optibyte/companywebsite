import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Solutions - Connected Energy Systems | Sustainabyte",
  description: "Sustainabyte's IoT solutions enable real-time connectivity across BACnet, Modbus, MQTT, and custom protocols for seamless facility integration.",
  keywords: [
    "IoT solutions",
    "energy IoT",
    "BACnet Modbus MQTT",
    "Energy meter installation",
    "Energy meter commissioning",
    "Energy meter validation",
    "Energy meter calibration",
    "Smart meter integration",
    "Energy meter monitoring",
    "Meter communication issue",
    "Meter diagnostics",
    "Meter dashboard",
    "Meter analytics",
    "Modbus integration",
    "RS485 communication",
    "TCP IP communication",
    "MQTT communication",
    "OPC integration",
    "PLC integration",
    "SCADA integration",
    "Gateway integration",
    "Edge device integration",
    "Data logger integration",
    "IoT",
    "Industrial IoT",
    "AIoT platform",
    "Remote monitoring",
    "Asset monitoring",
    "Utility monitoring",
    "Sensor integration",
    "Data acquisition",
    "Digital dashboard",
    "Real time monitoring",
    "Predictive analytics",
    "Compressor PLC integration",
    "Compressor automation",
    "Compressor remote monitoring",
    "Boiler automation",
    "Boiler PLC integration",
    "PLC integration",
    "PLC monitoring",
    "PLC automation",
    "PLC control system",
    "SCADA monitoring",
    "SCADA integration",
    "SCADA dashboard",
    "SCADA analytics",
    "SCADA automation",
    "Industrial automation"
  ],
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
