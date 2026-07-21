"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Award, 
  Sparkles, 
  Layers, 
  Cpu, 
  Activity, 
  ArrowUpRight, 
  CheckCircle2 
} from "lucide-react";
import GlobalGoals from "@/components/home/GlobalGoals";

const partners = [
  { name: "StartupTN", src: "/about/Startup-TN-Logo-300x77.webp" },
  { name: "CS Instruments", src: "/about/CS_LOGO_GREEN-300x68.webp" },
  { name: "Startup India", src: "/about/startup-india-logo.webp" },
  { name: "BACSYS", src: "/about/BACSYS-Logo-300x75.webp" },
  { name: "First Language", src: "/about/First-Language-Logo.svg" },
  { name: "Bureau Veritas", src: "/about/Bureau_Veritas-Logo.wine_-300x200.webp" },
  { name: "Microsoft Azure", src: "/about/Microsoft-Azure-150x150.webp" },
  { name: "Bootstrappers", src: "/about/Bootstrapers-Logo-150x150.webp" },
  { name: "CII", src: "/clients/cii-logoNew.png", bg: "#1a4fa0" },
];

const clients = [
  "/clients/Client-Logo-1-150x120.webp",
  "/clients/Client-Logo-2-300x126.webp",
  "/clients/Client-Logo-3-298x300.webp",
  "/clients/Client-Logo-4-300x220.webp",
  "/clients/Client-Logo-5-288x300.webp",
  "/clients/Client-Logo-6-300x177.webp",
  "/clients/Client-Logo-7-1-300x123.webp",
  "/clients/Client-Logo-8-286x300.webp",
  "/clients/Client-Logo-9.webp",
  "/clients/Client-Logo-10-300x285.webp",
  "/clients/Client-Logo-11-300x105.webp",
  "/clients/Client-Logo-12-300x108.webp",
  "/clients/Client-Logo-13-300x150.webp",
  "/clients/Client-Logo-14-300x225.webp",
  "/clients/Apollo Tyres.png",
  "/clients/TUV.svg",
  "/clients/Solid Pro.svg",
  "/clients/Moglix.gif",
  "/clients/Gestamp.svg",
  "/clients/ICE Steel 1.png",
  "/clients/casa grand.jpg",
  "/clients/kp Mills.png",
  "/clients/JN Machineries.jpg",
  "/clients/Flextronics.svg",
  "/clients/tidel park.png",
  "/clients/Sags Apparels.svg",
  "/clients/polyhose.svg",
  "/clients/Chemech.gif",
  "/clients/cii-logoNew.png",
];

const caseStudies = [
  {
    title: "Chiller Plant Optimization",
    facility: "Centrifugal Chiller Facility",
    description: "Multi-chiller plant staging automation and dynamic condenser speed controls.",
    icon: Layers,
    stats: [
      { label: "Baseline kW/TR", value: "0.82 kW/TR", color: "text-red-400" },
      { label: "Optimized kW/TR", value: "0.58 kW/TR", color: "text-[#3DD68C]" },
      { label: "Net Savings", value: "29.2% reduction", color: "text-blue-400" },
      { label: "Payback Period", value: "14 months", color: "text-amber-400" }
    ],
    glow: "rgba(59,130,246,0.15)"
  },
  {
    title: "IoT Energy Monitoring",
    facility: "Premium 5-Star Hotel & Convention Center",
    description: "End-to-end telemetry deployed on major HVAC, pumps, and water systems.",
    icon: Cpu,
    stats: [
      { label: "Meters Monitored", value: "140+ real-time nodes", color: "text-[#3DD68C]" },
      { label: "Faults Identified", value: "48 critical alarms/yr", color: "text-red-400" },
      { label: "Energy Opportunities", value: "18% baseline drop", color: "text-blue-400" },
      { label: "Payback Period", value: "8 months", color: "text-amber-400" }
    ],
    glow: "rgba(16,185,129,0.15)"
  },
  {
    title: "Industrial Utility Energy Audit",
    facility: "Heavy Manufacturing Plant",
    description: "Comprehensive systems audit covering compressed air networks, steam boilers, and VFDs.",
    icon: Activity,
    stats: [
      { label: "Utilities Audited", value: "Air, Steam, Electrical", color: "text-amber-400" },
      { label: "Savings Identified", value: "$124,000 / year", color: "text-[#3DD68C]" },
      { label: "Initial Investment", value: "$45,000 CapEx", color: "text-blue-400" },
      { label: "Payback Period", value: "4.3 months", color: "text-[#3DD68C]" }
    ],
    glow: "rgba(245,158,11,0.15)"
  }
];

function CaseStudiesShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const activeStudy = caseStudies[activeTab];
  const StudyIcon = activeStudy.icon;

  return (
    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start mt-12 text-left">
      {/* Tabs list (Left) */}
      <div className="space-y-4">
        {caseStudies.map((study, idx) => {
          const Icon = study.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                isActive
                  ? "bg-[#0F1C3F] border-[#3DD68C] shadow-lg shadow-[#3DD68C]/5"
                  : "bg-[#0F1C3F]/40 border-white/[0.05] hover:border-white/20 hover:bg-[#0F1C3F]/60"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isActive ? "bg-[#3DD68C] text-[#0A122B]" : "bg-white/5 text-gray-400"
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                  {study.facility}
                </span>
                <span className="font-bold text-base block mt-0.5">
                  {study.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tab Details (Right) */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="p-8 sm:p-12 rounded-[2.5rem] border border-white/[0.08] bg-[#0F1C3F]/60 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -inset-20 bg-gradient-to-br from-[#3DD68C]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#3DD68C]/15 border border-[#3DD68C]/30 flex items-center justify-center text-[#3DD68C]">
              <StudyIcon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-[#3DD68C] tracking-widest block">
                {activeStudy.facility}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-1">
                {activeStudy.title}
              </h3>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed font-light font-[family-name:var(--font-dm-sans)]">
            {activeStudy.description}
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
            {activeStudy.stats.map((stat, sIdx) => (
              <div key={sIdx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs text-gray-400 block mb-1 font-semibold uppercase tracking-wider font-[family-name:var(--font-dm-sans)]">
                  {stat.label}
                </span>
                <span className={`text-xl sm:text-2xl font-black ${stat.color}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="/contact?subject=Case Study Verification"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#3DD68C] hover:text-[#00FFAA] transition-colors"
            >
              Request Verification Profile
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function CompanyPage() {
  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-sora)]">
      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about/About-Us-BG-1-scaled.webp"
            alt="Making Sustainability measurable and manageable"
            fill
            className="object-cover"
            priority
          />
          {/* A gradient to ensure text readability */}
          <div className="absolute inset-0 bg-[#0D1B3E]/60" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              Making <span className="text-[#3DA45C]">Sustainability</span>
              <br />
              measurable and
              <br />
              manageable.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E] mb-6 border-b-2 border-[#3DA45C] pb-2 inline-block">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
                Partnering worldwide to adopt technology for reducing environmental impact and enhancing operational efficiency.
              </p>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0">
              <Image src="/about/Mission.svg" alt="Mission Handshake" fill className="object-contain" />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0">
              <Image src="/about/Vision.svg" alt="Vision Lightbulb" fill className="object-contain" />
            </div>
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E] mb-6 border-b-2 border-[#3DA45C] pb-2 inline-block">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg ml-auto">
                To lead global sustainability with advanced technology integration, creating a greener, cleaner future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Solutions Intro ── */}
      <section className="py-20 bg-[#0D1B3E] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#B0BEC5] text-lg max-w-2xl mx-auto mb-12 font-medium"
          >
            We deliver innovative, data-driven solutions that drive growth, efficiency, and sustainability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#energy" className="px-6 py-2 bg-[#3DA45C] hover:bg-[#2bc478] rounded text-sm font-bold transition-colors shadow-lg">Energy</a>
            <a href="#sustainability" className="px-6 py-2 bg-[#3DA45C] hover:bg-[#2bc478] rounded text-sm font-bold transition-colors shadow-lg">Sustainability</a>
            <a href="#technology" className="px-6 py-2 bg-[#3DA45C] hover:bg-[#2bc478] rounded text-sm font-bold transition-colors shadow-lg">Technology</a>
          </motion.div>
        </div>
      </section>

      {/* ── Detailed Solutions ── */}
      <section className="py-24 bg-white space-y-24">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {/* Energy */}
          <motion.div id="energy" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-6">Energy</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We help businesses take control of their <span className="text-[#3DA45C] font-semibold">energy</span> performance through data-backed strategies and real-time optimization.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether it&apos;s reducing operational costs, cutting emissions, or extending asset life, we make sure energy works for you, not the other way around.
              </p>
              <p className="text-[#0D1B3E] font-medium mb-8 italic">
                Because in a <span className="text-[#3DA45C] font-semibold">Net Zero</span> future, every kilowatt counts.
              </p>
              <Link href="/energy" className="inline-flex items-center gap-2 text-[#0D1B3E] font-bold hover:text-[#3DA45C] transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-[#3DA45C] shadow-xl">
                <Image src="/about/Energy-768x432.webp" alt="Energy" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>

          {/* Sustainability */}
          <motion.div id="sustainability" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-[#3DA45C] shadow-xl">
                <Image src="/about/Sustainability-768x432.webp" alt="Sustainability" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-6">Sustainability</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We equip organizations with the tools, data, and direction to act decisively. Whether you&apos;re tracking <span className="text-[#3DA45C] font-semibold">emissions</span>, conserving water, reducing <span className="text-[#3DA45C] font-semibold">energy</span> consumption, or building a path to <span className="text-[#3DA45C] font-semibold">Net Zero</span>, our approach combines technical depth with operational clarity.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We help you move from intent to measurable progress.
              </p>
              <p className="text-[#0D1B3E] font-medium mb-8 italic">
                Because only what can be measured can be managed.
              </p>
              <Link href="/sustainability" className="inline-flex items-center gap-2 text-[#0D1B3E] font-bold hover:text-[#3DA45C] transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Technology */}
          <motion.div id="technology" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#0D1B3E] mb-6">Technology</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We build intelligent systems that connect AI-driven software with IoT-enabled hardware, making buildings smarter, more <span className="text-[#3DA45C] font-semibold">efficient</span>, and future-ready.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our platforms help you monitor, analyze, and act in real time, turning data into savings, uptime, and <span className="text-[#3DA45C] font-semibold">sustainability</span>.
              </p>
              <p className="text-[#0D1B3E] font-medium mb-8 italic">
                We don&apos;t just digitize operations, we make them intelligent.
              </p>
              <Link href="/technology" className="inline-flex items-center gap-2 text-[#0D1B3E] font-bold hover:text-[#3DA45C] transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-[#3DA45C] shadow-xl">
                <Image src="/about/Technology-768x432.webp" alt="Technology" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Led by Domain Experts ── */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] border border-[#27A37B]/20 bg-gradient-to-br from-[#0D1B3E] to-[#0A122B] text-white p-10 sm:p-14 lg:p-20 overflow-hidden shadow-2xl text-left"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#3DD68C]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-[80px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-[0.3fr_1.7fr] gap-12 items-center relative z-10">
              <div className="flex justify-center">
                <div className="relative w-40 h-40 rounded-full border-4 border-[#3DD68C]/20 flex items-center justify-center bg-white/5 p-4 shadow-2xl group hover:border-[#3DD68C]/80 transition-colors duration-500">
                  <div className="absolute inset-1 rounded-full border border-dashed border-[#3DD68C]/40 animate-spin" style={{ animationDuration: '24s' }} />
                  <Award className="w-16 h-16 text-[#3DD68C] transform group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3DD68C]/10 border border-[#3DD68C]/20 text-[#3DD68C] text-xs font-bold tracking-wider uppercase">
                  <Sparkles className="w-4 h-4" />
                  Domain Expertise
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                  Led by <span className="bg-gradient-to-r from-[#3DD68C] to-[#00FFAA] bg-clip-text text-transparent">Domain Experts</span>
                </h2>

                <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed font-[family-name:var(--font-dm-sans)]">
                  Our operations are led by a <span className="text-[#3DD68C] font-semibold">Certified Energy Auditor</span>, <span className="text-white font-semibold">CMVP (Certified Measurement & Verification Professional)</span>, <span className="text-white font-semibold">ISO 50001 Lead Auditor</span>, <span className="text-white font-semibold">AIoT Energy Management Expert</span>, and <span className="text-[#3DD68C] font-semibold">Control & Automation Experts</span> with <span className="text-[#3DD68C] font-bold">19+ years of global experience</span> delivering significant energy, operational, and sustainability improvements across commercial buildings and industrial facilities.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {[
                    "Certified Energy Auditor",
                    "CMVP Certified Professional",
                    "ISO 50001 Lead Auditor",
                    "AIoT Energy Expert",
                    "Control & Automation Experts",
                    "19+ Years Global Experience"
                  ].map((badge, bIdx) => (
                    <div 
                      key={bIdx}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold hover:border-[#3DD68C]/50 hover:text-[#3DD68C] hover:bg-white/10 transition-all duration-300 cursor-default"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Commitment to Global Goals ── */}
      <GlobalGoals />

      {/* ── Partnered With & Clients ── */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-24 text-center">

          {/* Partners */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D1B3E] mb-12 inline-block border-b-2 border-[#3DA45C] pb-2">
              Partnered With
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center justify-center rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 p-4"
                  style={{ height: "88px", width: "160px", backgroundColor: partner.bg || "#ffffff" }}
                >
                  <Image src={partner.src} alt={partner.name} fill className="object-contain p-3" />
                </div>
              ))}
            </div>
          </div>

          {/* Clients Marquee */}
          <div id="clients" className="pt-10 -mt-10">
            <h2 className="text-2xl font-bold text-[#0D1B3E] mb-12 inline-block border-b-2 border-[#3DA45C] pb-2">
              Our Clients
            </h2>
            <div className="relative w-full overflow-hidden">
              <div className="flex w-max animate-marquee space-x-12 md:space-x-20 items-center py-4">
                {[...clients, ...clients].map((src, idx) => (
                  <div key={idx} className="relative h-16 w-32 md:h-24 md:w-40 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <Image src={src} alt="Client Logo" fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Verified Case Studies ── */}
      <section className="py-24 bg-[#0A122B] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#3DD68C] font-bold tracking-[0.25em] uppercase text-sm mb-4 block">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-black">
              Verified Case Studies
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#3DD68C] to-blue-400 mx-auto mt-4 rounded-full" />
          </div>

          <CaseStudiesShowcase />
        </div>
      </section>

      {/* Add Custom Animation for Marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 7s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

    </div>
  );
}
