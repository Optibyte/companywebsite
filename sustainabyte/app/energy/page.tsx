"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, FileSearch, Activity, Gauge, TrendingDown } from "lucide-react";
import GreenButton from "@/components/ui/GreenButton";

const services = [
  { icon: Activity, title: "Energy Monitoring", description: "Real-time tracking of energy consumption across all equipment and systems with granular visibility into usage patterns." },
  { icon: Gauge, title: "Energy Optimization", description: "AI-driven recommendations and automated controls to reduce waste and optimize energy performance across your facility." },
  { icon: FileSearch, title: "Energy Audit", description: "Comprehensive BEE-compliant energy audits with verified savings reports following IPMVP standards." },
  { icon: BarChart3, title: "Performance Analytics", description: "Advanced analytics dashboards providing actionable insights into energy KPIs and benchmarking." },
  { icon: TrendingDown, title: "Cost Reduction", description: "Identify and eliminate energy waste to achieve 7-30% cost savings across your operations." },
  { icon: Zap, title: "Load Management", description: "Intelligent load balancing and demand-side management to optimize energy procurement." },
];

export default function EnergyPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #3DD68C 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-4 sm:mb-6">
              <Zap className="w-4 h-4" /> Energy Solutions
            </span>
            <h1 className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Smart <span className="text-[#3DD68C]">Energy</span> Management
            </h1>
            <p className="text-[#B0BEC5] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">Monitor, optimize, and reduce energy consumption across your entire facility with our AI-powered platform.</p>
            <GreenButton href="/contact">Schedule an Energy Audit</GreenButton>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-10 sm:mb-14">
            Our Energy <span className="text-[#3DD68C]">Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-[#3DD68C]/30 hover:shadow-xl transition-all duration-300 bg-white group">
                <div className="w-14 h-14 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center mb-6 group-hover:bg-[#3DD68C]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#3DD68C]" />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#0D1B3E] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
