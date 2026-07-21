"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const videos = [
  {
    src: "/sustainabyte.ai.mp4",
    label: "Sustainabyte Platform",
    tag: "Energy Intelligence",
    desc: "AI-powered energy management platform delivering real-time insights for buildings & industries.",
  },
  {
    src: "/optibyte video.mp4",
    label: "Optibyte Solution",
    tag: "IoT & Automation",
    desc: "Smart IoT-driven automation and monitoring system for net-zero industrial operations.",
  },
];

function VideoCard({
  src,
  label,
  tag,
  desc,
  index,
}: {
  src: string;
  label: string;
  tag: string;
  desc: string;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      videoRef.current.pause();
      setPaused(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_60px_rgba(61,214,140,0.15)] transition-shadow duration-500"
    >
      {/* Video */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-[2rem]">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={toggleMute}
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#3DD68C] hover:border-[#3DD68C] transition-all"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <button
            onClick={togglePlay}
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#3DD68C] hover:border-[#3DD68C] transition-all"
            aria-label={paused ? "Play" : "Pause"}
          >
            {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>
        </div>

        {/* Tag badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-[#3DD68C]/20 border border-[#3DD68C]/40 text-[#3DD68C] text-xs font-bold backdrop-blur-sm">
            {tag}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-white mb-2">
          {label}
        </h3>
        <p className="text-[#B0BEC5] text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="relative py-24 bg-[#0A1128] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#3DD68C]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#3DD68C] animate-pulse" />
            See It in Action
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#3DD68C] to-[#00FFAA] bg-clip-text text-transparent">
              Products
            </span>{" "}
            in Action
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#B0BEC5] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Real-time energy intelligence and IoT-driven automation — watch how
            Sustainabyte&apos;s solutions transform industrial operations.
          </motion.p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((v, i) => (
            <VideoCard key={v.src} {...v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
