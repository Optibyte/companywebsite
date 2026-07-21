"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A1128]">
      {/* Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/sustainabyte.ai.mp4" type="video/mp4" />
        </video>


      </div>

      {/* Premium Scrolling Mouse Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer">
        <motion.span
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white text-[10px] tracking-[0.25em] uppercase font-bold"
        >
          Scroll to Explore  
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1"
        >
          <motion.div 
            animate={{ 
              y: [0, 8, 0],
              opacity: [1, 0.2, 1]
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-[#00FFAA] rounded-full" 
          />
        </motion.div>
      </div>

    </section>
  );
}
