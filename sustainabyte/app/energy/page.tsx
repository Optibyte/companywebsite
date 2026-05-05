"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Search,
  ShieldCheck,
  FileSearch,
  ArrowUpRight,
  Activity,
  Layers,
  TrendingDown,
  Leaf,
  Settings,
  Clock,
  PieChart,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
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
            <a href="#services" className="inline-block px-12 py-5 bg-[#4DB846] text-white text-xl font-bold rounded-full hover:bg-[#3d9a37] transition-all transform hover:scale-105 shadow-xl shadow-[#4DB846]/30">
              Explore Our Services
            </a>
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
                  <div className="absolute inset-0 rounded-full border-t-2 border-[#4DB846] animate-spin-slow opacity-0 group-hover:opacity-100" />
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

      {/* Core Capabilities - Cinematic Scrolling Redesign */}
      <section id="services" className="py-24 bg-white relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-black text-[#0D1B3E] mb-6">Our Core Capabilities</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Explore our end-to-end energy optimization ecosystem through our specialized audit frameworks.</p>
            <div className="w-24 h-2 bg-[#4DB846] mx-auto mt-8 rounded-full" />
          </div>

          <div className="space-y-64">
            {[
              {
                id: "equip-ops",
                title: "Equip-Ops Analytics",
                subtitle: "Equipment Diagnostics",
                desc: "We conduct in-depth diagnostics of all critical energy-consuming equipment such as chillers, compressors, boilers, pumps, conveyors and more to identify inefficiencies.",
                points: [
                  { title: "Equipment-Level Benchmarking", desc: "Each asset is analyzed using metrics like COP, delta-T, kW/TR, and run-hour efficiency." },
                  { title: "Root Cause Analysis", desc: "Existing data and logic are reviewed to trace performance issues to specific faults or misalignments." },
                  { title: "Optimization Recommendations", desc: "Clear, actionable steps are suggested to enhance performance." }
                ],
                img: "/energy/Energy Efficiency and Consulting/Equip-Ops-Analytics-1024x1024.webp",
                cta: "Book a Performance Check"
              },
              {
                id: "compressed-air",
                title: "Compressed Air Audits",
                subtitle: "Leakage & Performance",
                desc: "Compressed air systems often suffer from hidden leaks, causing significant energy loss. We specialize in identifying, quantifying and mapping those leaks.",
                points: [
                  { title: "Leak Mapping & Tagging", desc: "We use ultrasonic detectors and flow tools to scan the air network and tag leak points." },
                  { title: "Quantification of Losses", desc: "Each Leak's airflow loss and associated energy cost are calculated." },
                  { title: "Cost Saving Insights", desc: "Recommendations include repair priorities and preventive actions." }
                ],
                img: "/energy/Energy Efficiency and Consulting/Compressed-Air-System-1024x1024.webp",
                cta: "Book a Performance Check"
              },
              {
                id: "chiller",
                title: "Chiller Performance & Reliability",
                subtitle: "HVAC Optimization",
                desc: "We analyze chiller behavior across different loads and weather conditions to identify energy wastage and reliability issues.",
                points: [
                  { title: "System-Wide Monitoring", desc: "Parameters like chilled/ condensed water temperature, delta-T, and sequencing logic are tracked." },
                  { title: "Proactive Optimization", desc: "Recommendation include sequencing changes and setpoint resets." },
                  { title: "Performance Benchmarking", desc: "Performance is benchmarked using kW/TR and EER." }
                ],
                img: "/energy/Energy Efficiency and Consulting/Chiller-Performance-768x768.webp",
                cta: "Book your Chiller Audit"
              },
              {
                id: "boiler",
                title: "Boiler Performance Audit",
                subtitle: "Thermal Systems",
                desc: "We evaluate steam systems to enhance combustion performance, reduce fuel consumption, and minimize distribution losses.",
                points: [
                  { title: "Thermal Diagnostics", desc: "Flue gas analysis, steam trap surveys, and heat loss inspections are conducted." },
                  { title: "Root Cause Analysis", desc: "Combustion tuning and control schemes are reviewed." },
                  { title: "Steam System Optimization", desc: "Proposals include condensate recovery and insulation fixes." }
                ],
                img: "/energy/Energy Efficiency and Consulting/Boiler-Performance-1024x1024.webp",
                cta: "Book a Performance Audit"
              },
              {
                id: "ashrae",
                title: "ASHRAE Level 1 & 2 Audits",
                subtitle: "Energy Standards",
                desc: "We specialize in providing ASHRAE Level 1 and 2 audits that help you achieve top-tier energy performance standards.",
                points: [
                  { title: "Level 1 Audit", desc: "Preliminary assessment based on utility bills and walkthroughs." },
                  { title: "Level 2 Audit", desc: "Detailed diagnostics, load analysis, and feasibility studies." },
                  { title: "ROI Analysis", desc: "Investment-grade insights with phased implementation strategies." }
                ],
                img: "/energy/Energy Efficiency and Consulting/ASHRAE-Level-1-2-768x768.webp",
                cta: "Book your Audit"
              },
              {
                id: "electrical",
                title: "Electrical Safety Audits",
                subtitle: "Safety & Reliability",
                desc: "We evaluate the reliability, safety, and regulatory compliance of your electrical infrastructure.",
                points: [
                  { title: "System Inspections", desc: "Assess panels, cable routing, earthing, and distribution architecture." },
                  { title: "Thermal Imaging", desc: "Thermographic scans detect loose connections and insulation faults." },
                  { title: "Risk Reduction", desc: "Reports help reduce fire risks and increase uptime." }
                ],
                img: "/energy/Energy Efficiency and Consulting/Electrical-Safety-Audits-1024x1024.webp",
                cta: "Request Visit"
              },
              {
                id: "power",
                title: "Power Quality Analysis",
                subtitle: "Grid Performance",
                desc: "We assess power quality disturbances that affect sensitive equipment and overall system efficiency.",
                points: [
                  { title: "Real-Time Collection", desc: "Install high-frequency analyzers to capture harmonics, sags, and swells." },
                  { title: "Distortion Analysis", desc: "Analyze waveform deviations and voltage imbalances." },
                  { title: "Longevity Recommendations", desc: "Insights to correct poor PF and safeguard equipment." }
                ],
                img: "/energy/Energy Efficiency and Consulting/Power-Quality-Analysis-768x768.webp",
                cta: "Book your Audit"
              }
            ].map((feature, idx) => (
              <div key={feature.id} id={feature.id} className="scroll-mt-32">
                <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1"
                  >
                    <span className="text-[#4DB846] font-bold text-sm tracking-widest uppercase mb-4 block">{feature.subtitle}</span>
                    <h3 className="text-4xl md:text-5xl font-black text-[#0D1B3E] mb-8 leading-tight">{feature.title}</h3>
                    <p className="text-gray-600 text-lg mb-12 leading-relaxed">{feature.desc}</p>

                    <div className="space-y-8 mb-12">
                      {feature.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex gap-6 group">
                          <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4DB846] transition-all duration-300">
                            <CheckCircle2 className="w-6 h-6 text-[#4DB846] group-hover:text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0D1B3E] text-lg mb-1">{point.title}</h4>
                            <p className="text-gray-500 text-base">{point.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12">
                      <div className="border-t-[1.5px] border-dashed border-[#4DB846] mb-8" />
                      <div className="flex flex-col items-center">
                        <GreenButton href="/contact">{feature.cta}</GreenButton>
                        <div className="w-32 h-0.5 bg-[#4DB846] mt-3" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex-1"
                  >
                    {/* Clean full-bleed image card */}
                    <div className="relative rounded-3xl overflow-hidden aspect-square w-full shadow-2xl group/img border border-gray-100 hover:border-[#4DB846]/40 transition-colors duration-500">
                      <Image
                        src={feature.img}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                      />
                      {/* Bottom label bar */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D1B3E]/80 to-transparent px-8 py-6">
                        <span className="text-[#4DB846] text-xs font-bold tracking-widest uppercase">{feature.subtitle}</span>
                        <p className="text-white font-bold text-lg mt-1">{feature.title}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Full-width dark blue separator for all except the last item */}
                {idx < 6 && (
                  <div className="w-screen relative left-1/2 -translate-x-1/2 h-16 bg-[#0D1B3E] mt-32" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Final Section */}
      <section className="py-24 bg-[#0D1B3E] text-white overflow-hidden relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Optimize Your <br /><span className="text-[#4DB846]">Energy Performance?</span></h2>
          <p className="text-xl text-[#B0BEC5] mb-12 max-w-2xl mx-auto">
            Our team of certified auditors and engineers is ready to help you reduce costs and achieve your sustainability goals.
          </p>
          <div className="flex justify-center gap-6">
            <GreenButton href="/contact">Schedule a Consultation</GreenButton>
          </div>
        </div>
      </section>
    </div>
  );
}
