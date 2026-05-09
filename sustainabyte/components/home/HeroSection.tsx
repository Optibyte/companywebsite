"use client";

import { motion } from "framer-motion";
import GreenButton from "@/components/ui/GreenButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      {/* Background Image with Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/lending%20page.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Subtle dark gradient from the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/80 via-[#0D1B3E]/40 to-transparent" />
        {/* Subtle dark gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E] via-transparent to-transparent opacity-80" />
        {/* Radial glow */}
        <div
          className="absolute top-1/2 right-0 w-[700px] h-[700px] -translate-y-1/2 translate-x-1/4"
          style={{
            background:
              "radial-gradient(circle, rgba(61,214,140,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-40 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(61,214,140,0.1) 0%, transparent 70%)",
          }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-48 h-48 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(26,45,90,0.5) 0%, transparent 70%)",
          }}
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <motion.span 
                animate={{ y: [-4, 4] }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  ease: "easeInOut" 
                }}
                className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#0A1128] text-[#00FFAA] border border-[#00FFAA] group overflow-visible"
                style={{
                  boxShadow: "0 0 20px rgba(0,255,170,0.4), 0 0 40px rgba(0,255,170,0.2), 0 0 80px rgba(0,255,170,0.1), inset 0 0 15px rgba(0,255,170,0.3)"
                }}>
                
                {/* Floating Particles Orbit Container */}
                <div className="absolute inset-[-15px] pointer-events-none" style={{ animation: "rotate-slow 10s linear infinite" }}>
                  <span className="absolute top-0 left-1/4 w-1 h-1 bg-[#00FFAA] rounded-full shadow-[0_0_8px_#00FFAA]"></span>
                  <span className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-[#00FFAA] rounded-full shadow-[0_0_10px_#00FFAA]"></span>
                  <span className="absolute top-1/2 -left-2 w-1 h-1 bg-[#00FFAA] rounded-full opacity-50 shadow-[0_0_5px_#00FFAA]"></span>
                  <span className="absolute top-1/4 -right-1 w-0.5 h-0.5 bg-[#00FFAA] rounded-full shadow-[0_0_8px_#00FFAA]"></span>
                  <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#00FFAA] rounded-full shadow-[0_0_10px_#00FFAA]"></span>
                </div>

                {/* Intense Outer Halo pulse */}
                <div className="absolute inset-0 rounded-full bg-[#00FFAA]/20 blur-xl animate-pulse pointer-events-none" />

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2" style={{ textShadow: "0 0 10px rgba(0,255,170,0.8), 0 0 20px rgba(0,255,170,0.4)" }}>
                  {/* Glowing dot */}
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFAA] opacity-100" style={{ boxShadow: "0 0 20px #00FFAA" }}></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00FFAA] shadow-[0_0_15px_#00FFAA,0_0_30px_#00FFAA]"></span>
                  </span>
                  AI-Powered Energy Intelligence
                </span>
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-[family-name:var(--font-sora)] text-[clamp(2rem,5vw,5rem)] font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6"
            >
              <span className="text-[#3DD68C]">EPIC</span>
              <span className="text-white"> Facilities.</span>
              <br />
              <span className="text-white">Verified </span>
              <span className="text-[#3DD68C]">Savings.</span>
              <br />
              <span className="text-[#3DD68C]">Net Zero</span>
              <span className="text-white"> Aligned.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#B0BEC5] text-base sm:text-lg md:text-xl max-w-xl mb-8 sm:mb-10 leading-relaxed"
            >
              Helping industrial facilities and commercial buildings monitor,
              control, and decarbonize their energy usage using AI and IoT.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <GreenButton href="/technology" variant="primary" className="flex items-center gap-2">
                Explore Our Solutions
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </GreenButton>

              <a 
                href="https://api.whatsapp.com/send/?phone=918377007638&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                aria-label="Chat on WhatsApp"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right side is intentionally left blank because the background image (lending page.webp) 
              contains the complex visual elements (like the Net Zero glowing UI) on the right half. */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0D1B3E] to-transparent z-10" />
    </section>
  );
}
