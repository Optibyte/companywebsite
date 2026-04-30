"use client";

import { motion } from "framer-motion";
import { Leaf, BarChart3, FileText, Target, TreePine, Recycle } from "lucide-react";
import GreenButton from "@/components/ui/GreenButton";

const services = [
  { icon: Target, title: "Net Zero Roadmap", description: "Customized pathway planning to achieve your net zero emissions targets with verifiable milestones." },
  { icon: BarChart3, title: "Carbon Tracking", description: "Real-time monitoring and reporting of Scope 1, 2, and 3 carbon emissions across your operations." },
  { icon: FileText, title: "ESG Reporting", description: "Automated ESG compliance reporting aligned with GRI, TCFD, and other global frameworks." },
  { icon: TreePine, title: "Green Certification", description: "Support for LEED, IGBC, and other green building certification processes." },
  { icon: Recycle, title: "Waste Reduction", description: "Comprehensive waste management strategies integrated with your energy optimization goals." },
  { icon: Leaf, title: "Sustainability Strategy", description: "End-to-end sustainability consulting to align your operations with global sustainability goals." },
];

export default function SustainabilityPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-16 sm:py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2" style={{ background: "radial-gradient(circle, rgba(61,214,140,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-4 sm:mb-6">
              <Leaf className="w-4 h-4" /> Sustainability Solutions
            </span>
            <h1 className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Driving <span className="text-[#3DD68C]">Sustainable</span> Operations
            </h1>
            <p className="text-[#B0BEC5] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">Transform your sustainability goals into actionable strategies with data-driven insights and verified outcomes.</p>
            <GreenButton href="/contact">Start Your Sustainability Journey</GreenButton>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-10 sm:mb-14">
            Sustainability <span className="text-[#3DD68C]">Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-[#3DD68C]/30 hover:shadow-xl transition-all duration-300 bg-white group">
                <div className="w-14 h-14 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center mb-6 group-hover:bg-[#3DD68C]/20 transition-colors">
                  <s.icon className="w-7 h-7 text-[#3DD68C]" />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#0D1B3E] mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
