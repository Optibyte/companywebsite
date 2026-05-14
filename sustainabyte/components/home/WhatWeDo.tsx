"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Energy",
    description:
      "Energy efficiency consulting, analytics, and management solutions for industrial and commercial facilities.",
    href: "/energy",
    image: "/What We Do all img/energy.webp",
  },
  {
    title: "Technology",
    description:
      "AI-powered platforms including OptiByte, InByte, and IoT solutions for intelligent energy management.",
    href: "/technology/optibyte",
    image: "/What We Do all img/Technology-768x768.webp",
  },
  {
    title: "Sustainability",
    description:
      "Carbon accounting, water management, decarbonization, and Net Zero roadmap planning.",
    href: "/sustainability",
    image: "/What We Do all img/sustainability.webp",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/What We Do all img/bgimg.webp"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#0D1B3E]/80 backdrop-blur-[2px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            What We Do
          </h2>
          <p className="text-[#B0BEC5] text-sm sm:text-base max-w-3xl mx-auto">
            We turn complex energy data into clear actions for compliance
            support and continuous monitoring tailored for your{" "}
            <span className="text-[#3DD68C] font-semibold">Net Zero</span>{" "}
            journey and{" "}
            <span className="text-[#3DD68C] font-semibold">
              Decarbonization
            </span>{" "}
            efforts
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                href={card.href}
                className="block relative rounded-2xl overflow-hidden group h-80 sm:h-96"
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E] via-[#0D1B3E]/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Green accent tint on hover */}
                <div className="absolute inset-0 bg-[#3DD68C] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-center z-10 transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-white mb-3 group-hover:text-[#3DD68C] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#B0BEC5] text-sm leading-relaxed opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                    {card.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
