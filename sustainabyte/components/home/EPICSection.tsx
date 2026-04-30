"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const epicPills = [
  { label: "Efficient", color: "bg-[#236B8E]" },
  { label: "Predictive", color: "bg-[#279178]" },
  { label: "Intelligent", color: "bg-[#29A36A]" },
  { label: "Controlled", color: "bg-[#27A37B]" },
];

const commitmentCards = [
  {
    title: "Net Zero Targets",
    description:
      "Aligning your operations with global net zero commitments through measurable goals and verified pathways.",
    image: "/net zero img.png",
    accent: "#04572fff",
  },
  {
    title: "Decarbonization",
    description:
      "Systematic reduction of carbon emissions through intelligent energy management and optimization.",
    image: "/Decarbonization.jpg",
    accent: "#083063ff",
  },
];

function CommitmentCard({
  card,
  index,
}: {
  card: (typeof commitmentCards)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={card.title}
      initial={{ opacity: 0, y: 60, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ boxShadow: "0 8px 32px rgba(25,63,112,0.15)" }}
    >
      {/* Background Image with zoom */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ filter: "brightness(1.25) saturate(1.2)" }}
          />
        </motion.div>

        {/* Light wash — keeps image bright, subtle vignette only at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,20,40,0.72) 28%, rgba(255,255,255,0.08) 100%)",
          }}
        />

        {/* Accent colour tint on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 0.18 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ background: card.accent }}
        />

        {/* Glow border overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: `inset 0 0 0 2px ${card.accent}99`,
          }}
        />
      </div>

      {/* Card content — absolutely positioned over image */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        {/* Accent bar */}
        <motion.div
          className="h-[3px] rounded-full mb-4"
          animate={{ width: hovered ? "5rem" : "2.5rem" }}
          transition={{ duration: 0.35 }}
          style={{ background: card.accent }}
        />

        <h3 className="font-[family-name:var(--font-sora)] text-xl sm:text-2xl font-bold text-white mb-2 drop-shadow-lg">
          {card.title}
        </h3>

        {/* Description slides in */}
        <AnimatePresence initial={false}>
          {hovered && (
            <motion.p
              key="desc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-gray-300 text-sm leading-relaxed"
            >
              {card.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ESG badge */}
      <motion.div
        className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold font-[family-name:var(--font-sora)] text-white"
        style={{ background: `${card.accent}cc` }}
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.25 }}
      >

      </motion.div>
    </motion.div>
  );
}
const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(36)].map((_, i) => {
        const size = 3 + (i % 4) * 2;
        const left = (i * 13.7) % 100;
        const startTop = 100 + (i % 5) * 10;
        const duration = 5 + (i % 6) * 1.5;
        const delay = (i % 8) * 0.6;
        const yDrift = -250 - (i % 5) * 60;
        const xDrift = (i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 15);
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${startTop}%`,
              // 75% green dots, 25% blue dots
              backgroundColor: i % 4 !== 0 ? '#016233ff' : '#052f67ff',
            }}
            animate={{
              y: yDrift,
              x: xDrift,
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default function EPICSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative z-10 overflow-hidden">
      <Particles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-[#193F70] italic mb-6 sm:mb-8 font-[family-name:var(--font-dm-sans)]"
        >
          your facility deserves to be{" "}
          <motion.span 
            initial={{ scale: 0, rotate: -20, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
            className="inline-block text-[#3DD68C] font-bold not-italic text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-sora)]"
          >
            EPIC
          </motion.span>
        </motion.p>

        {/* EPIC Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          {epicPills.map((pill, i) => (
            <motion.div
              key={pill.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.15, ease: "easeOut" }}
              className="relative rounded group"
            >
              {/* Green pulse ring after load */}
              <motion.div
                className="absolute inset-0 rounded ring-2 ring-[#3DD68C] pointer-events-none"
                initial={{ opacity: 0, scale: 1 }}
                whileInView={{ opacity: [0, 0.6, 0], scale: [1, 1.15, 1.25] }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.15, ease: "easeOut" }}
              />

              <motion.div
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { scale: 1, y: 0 },
                  hover: { scale: 1.05, y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }
                }}
                className={`relative overflow-hidden px-6 sm:px-10 py-3 sm:py-4 rounded text-white font-[family-name:var(--font-sora)] font-medium text-sm sm:text-base tracking-wider cursor-default shadow-md ${pill.color}`}
              >
                {/* Deepen on hover */}
                <motion.div
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black/15 pointer-events-none"
                />

                {/* Shimmer sweep on hover */}
                <motion.div
                  variants={{
                    initial: { left: "-100%" },
                    hover: { left: "200%" }
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] pointer-events-none"
                />

                <span className="relative z-10">{pill.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-[#193F70] text-xl sm:text-2xl font-medium mb-14 sm:mb-20"
        >
          for higher performance
        </motion.p>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#193F70] text-left max-w-4xl mx-auto mb-10 sm:mb-14 px-4">
            Commitment to
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto px-4">
            {commitmentCards.map((card, i) => (
              <CommitmentCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
