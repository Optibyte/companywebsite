"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ClientLogo = {
  src?: string;
  name?: string;
  alt: string;
  darkBg?: boolean;
  objectPosition?: string;
  bgColor?: string;
};

const clientLogos: ClientLogo[] = [
  { src: "/clients/Client-Logo-1-150x120.webp", alt: "ITC Limited" },
  { src: "/clients/Client-Logo-2-300x126.webp", alt: "TVS Motor Company" },
  { src: "/clients/Client-Logo-3-298x300.webp", alt: "Taj Hotels" },
  { src: "/clients/Client-Logo-4-300x220.webp", alt: "Saint-Gobain" },
  { src: "/clients/Client-Logo-5-288x300.webp", alt: "Murugappa Group" },
  { src: "/clients/Client-Logo-6-300x177.webp", alt: "Sundram Fasteners" },
  { src: "/clients/Client-Logo-7-1-300x123.webp", alt: "Apollo Hospitals" },
  { src: "/clients/Client-Logo-8-286x300.webp", alt: "Hatsun Agro" },
  { src: "/clients/Client-Logo-9.webp", alt: "Wheels India" },
  { src: "/clients/Client-Logo-10-300x285.webp", alt: "Elgi Equipments" },
  { src: "/clients/Client-Logo-11-300x105.webp", alt: "Sical Logistics" },
  { src: "/clients/Client-Logo-12-300x108.webp", alt: "MRF Tyres" },
  { src: "/clients/Client-Logo-13-300x150.webp", alt: "Aurobindo Pharma" },
  { src: "/clients/Client-Logo-14-300x225.webp", alt: "Larsen & Toubro" },
  { src: "/clients/TUV.svg", alt: "TUV" },
  { name: "Mahavir", alt: "Mahavir", bgColor: "#F1F5F9" },
  { src: "/clients/Solid Pro.svg", alt: "Solid Pro" },
  { name: "Denali", alt: "Denali" },
  { src: "/clients/Moglix.gif", alt: "Mogli Labs" },
  { src: "/clients/Gestamp.svg", alt: "Gestamp", darkBg: true },
  { src: "/clients/Apollo Tyres.png", alt: "Apollo Tyres" },
  { src: "/clients/ICE Steel 1.png", alt: "ICE Steel 1" },
  { src: "/clients/casa grand.jpg", alt: "Casa Grand" },
  { src: "/clients/kp Mills.png", alt: "KP Mills" },
  { name: "KPR Mills", alt: "KPR Mills" },
  { src: "/clients/Dash Green.png", alt: "Dash Green" },
  { src: "/clients/JN Machineries.jpg", alt: "JN Machineries" },
  { src: "/clients/Flextronics.svg", alt: "Flextronics" },
  { src: "/clients/tidel park.png", alt: "Tidel Park" },
  { src: "/clients/Sags Apparels.svg", alt: "Sags Apparels" },
  { src: "/clients/polyhose.svg", alt: "Polyhose" },
  { src: "/clients/Chemech.gif", alt: "Chemech" },
];

// Duplicate for seamless infinite loop
const marqueeItems = [...clientLogos, ...clientLogos];

export default function TrustedBy() {
  return (
    <section className="py-14 sm:py-20 bg-white overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#193F70]"
        >
          Our <span className="text-[#3DD68C]">Valued Clients</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto"
        >
          Powering sustainable energy Solutions for leading organizations worldwide
        </motion.p>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-0 w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer"
        >
          {marqueeItems.map((logo, i) => (
            <div
              key={i}
              className={`flex-shrink-0 mx-4 sm:mx-6 flex items-center justify-center w-36 h-24 sm:w-44 sm:h-28 rounded-2xl border transition-all duration-300 group px-4 ${
                logo.darkBg
                  ? "border-[#193F70] bg-[#193F70] hover:border-[#3DD68C]/60 hover:shadow-md"
                  : "border-gray-100 hover:border-[#3DD68C]/40 hover:shadow-md hover:bg-white"
              }`}
              style={{ backgroundColor: logo.darkBg ? undefined : (logo.bgColor ?? "#F8FAFC") }}
            >
              {logo.src ? (
                <div className="relative w-full h-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain transition-transform duration-400 p-3 group-hover:scale-105"
                    style={{ objectPosition: logo.objectPosition ?? "center" }}
                    sizes="176px"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <span className="font-[family-name:var(--font-sora)] font-extrabold text-[14px] sm:text-[16px] tracking-wider text-[#193F70] group-hover:text-[#3DD68C] transition-colors text-center uppercase leading-tight">
                    {logo.name}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#3DD68C] mt-1.5 transition-colors" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
