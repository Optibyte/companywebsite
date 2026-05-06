"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Activity, 
  TrendingDown, 
  ArrowUpRight, 
  CheckCircle2, 
  PieChart, 
  ShieldCheck, 
  Leaf, 
  Settings 
} from "lucide-react";
import GreenButton from "@/components/ui/GreenButton";

export default function EnergyPage() {
  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/energy/Energy Efficiency and Consulting/energybg.webp"
            alt="Energy Excellence"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
              We offer comprehensive, end-to-end <span className="text-[#4DB846]">energy optimization</span> solutions tailored to your industry needs
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Service Overview Section - Centered Look */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-24">
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-8">
              Energy Efficiency and Consulting Services
            </h2>
            <div className="w-64 h-1 bg-[#4DB846] mx-auto mb-10 rounded-full" />
            <p className="text-[#0D1B3E] text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
              Our services are designed to <span className="text-[#4DB846]">reduce carbon emissions</span> and <span className="text-[#4DB846]">boost efficiency</span> through precise audits conducted by highly qualified professionals
            </p>
          </div>

          {/* Decorative Lines Wrapper */}
          <div className="relative">
            {/* Top Right Decorative Line */}
            <div className="hidden lg:block absolute -top-12 right-0 w-1/2">
              <div className="border-t-2 border-r-2 border-dashed border-[#4DB846]/40 h-24 rounded-tr-[3rem] relative">
                <ArrowUpRight className="absolute -bottom-4 -right-4 w-10 h-10 text-[#4DB846] rotate-45" />
              </div>
            </div>

            {/* Bottom Left Decorative Line */}
            <div className="hidden lg:block absolute -bottom-12 left-0 w-1/2 z-0">
              <div className="border-b-2 border-l-2 border-dashed border-[#4DB846]/40 h-24 rounded-bl-[3rem] relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-[#4DB846]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10 px-8">
              {/* Custom Audits */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#4DB846] flex items-center justify-center mb-8 shadow-lg">
                  <CheckCircle2 className="w-10 h-10 text-[#4DB846]" />
                </div>
                <h3 className="text-3xl font-bold text-[#0D1B3E] mb-6">Custom Audits</h3>
                <p className="text-[#0D1B3E]/70 text-lg leading-relaxed">
                  Tailored for specific industries, ensuring optimal <span className="text-[#4DB846] font-bold">energy savings</span> and <span className="text-[#4DB846] font-bold">sustainability</span>
                </p>
              </motion.div>

              {/* Detailed Reporting */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#4DB846] flex items-center justify-center mb-8 shadow-lg">
                  <PieChart className="w-10 h-10 text-[#4DB846]" />
                </div>
                <h3 className="text-3xl font-bold text-[#0D1B3E] mb-6">Detailed Reporting</h3>
                <p className="text-[#0D1B3E]/70 text-lg leading-relaxed">
                  Comprehensive documentation to track progress and achieve <span className="text-[#4DB846] font-bold">sustainability</span> goals
                </p>
              </motion.div>

              {/* Regulatory Compliance */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#4DB846] flex items-center justify-center mb-8 shadow-lg">
                  <ShieldCheck className="w-10 h-10 text-[#4DB846]" />
                </div>
                <h3 className="text-3xl font-bold text-[#0D1B3E] mb-6">Regulatory Compliance</h3>
                <p className="text-[#0D1B3E]/70 text-lg leading-relaxed">
                  Adherence to the highest standards, guaranteeing compliance and operational <span className="text-[#4DB846] font-bold">efficiency</span>
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <GreenButton href="#services" className="text-xl px-12 py-5 font-bold">
              Explore Our Services
            </GreenButton>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaway - Horizontal Strip UI */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white mb-4">Key Takeaway</h2>
            <div className="w-20 h-1 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                title: "Total System Visibility",
                desc: <>Get a 360 view of your <span className="text-[#4DB846]">energy</span> performance across HVAC, lighting, pumps, and more.</>,
                icon: <Activity className="w-5 h-5 text-[#4DB846]" />
              },
              {
                title: "Quantified Savings",
                desc: <>Know exactly where you&apos;re losing <span className="text-[#4DB846]">energy</span> and how much you can <span className="text-[#4DB846]">save</span></>,
                icon: <TrendingDown className="w-5 h-5 text-[#4DB846]" />
              },
              {
                title: "Net Zero Ready",
                desc: <>Align your facility with ISO 50001, ASHRAE, and <span className="text-[#4DB846]">sustainability</span> target</>,
                icon: <CheckCircle2 className="w-5 h-5 text-[#4DB846]" />
              },
              {
                title: "Decarbonization",
                desc: <>Drives decarbonization by cutting energy use and emissions through data-led solutions</>,
                icon: <Leaf className="w-5 h-5 text-[#4DB846]" />
              },
              {
                title: "Operational Stability",
                desc: <>Improve reliability, and reduce downtime with detailed audit insights.</>,
                icon: <Settings className="w-5 h-5 text-[#4DB846]" />
              },
              {
                title: "Investment Clarity",
                desc: <>Back every CapEx or OpEx decision with real data and projected ROI</>,
                icon: <BarChart3 className="w-5 h-5 text-[#4DB846]" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mb-4 relative group-hover:border-[#4DB846]/50 transition-all duration-500">
                  <div className="absolute inset-0 rounded-full border-t-2 border-[#4DB846] animate-rotate-slow opacity-0 group-hover:opacity-100" />
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#4DB846]/10 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 leading-tight min-h-[3rem] flex items-center justify-center">{item.title}</h4>
                <p className="text-[#B0BEC5] text-[10px] leading-relaxed font-light px-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
