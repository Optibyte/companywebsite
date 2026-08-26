"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NetZeroFocus() {
  return (
    <section className="py-16 sm:py-24 bg-[#0D1B3E] relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #3DD68C 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#3DD68C]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
              Net Zero <span className="text-[#3DD68C]">Targets</span>
            </h2>
            <p className="text-[#B0BEC5] text-lg sm:text-xl leading-relaxed mb-6 font-[family-name:var(--font-dm-sans)]">
              Reduce carbon emissions with real-time monitoring, energy optimization, and intelligent automation.
            </p>
            <p className="text-[#B0BEC5] text-base sm:text-lg leading-relaxed mb-8 font-[family-name:var(--font-dm-sans)]">
              Achieve your Net Zero goals through measurable actions and a clear, data-driven sustainability roadmap.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {["Real-time Monitoring", "AI-Driven Control", "Energy Optimization", "Intelligent Automation"].map(
                (tag) => (
                  <div key={tag} className="flex items-center gap-2 text-sm text-[#3DD68C] font-semibold">
                    <div className="w-2 h-2 bg-[#3DD68C] rounded-full" />
                    {tag}
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* ── Right side spacer ── */}
          <div className="hidden lg:block h-[450px]" />
        </div>
      </div>

      {/* ── Immersive Full-Section Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/Net Zero Focusbg.webp"
          alt="Net Zero Energy Management Focus - AI-powered decarbonization and sustainability platform"
          fill
          className="object-cover opacity-80"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
        />
        {/* Gradient Overlay for content protection and depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/50 to-transparent" />
        <div className="absolute inset-0 bg-[#0D1B3E]/10" />
      </div>

    </section>
  );
}
