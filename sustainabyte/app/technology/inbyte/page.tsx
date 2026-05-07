"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  BarChart3,
  Search,
  ClipboardCheck,
  LayoutDashboard,
  BarChart,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Monitor,
  CheckCircle,
  Users,
  Bluetooth,
  Settings2,
  Wrench,
  Lock,
  Link2,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

export default function InBytePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      title: "Streamline complex sustainability reporting",
      desc: "Simplify your disclosures with AI-driven data aggregation and framework alignment."
    },
    {
      title: "Improve CDP scores with targeted recommendations",
      desc: "Get actionable insights to climb the Disclosure, Awareness, and Management levels."
    },
    {
      title: "Reduce dependency on costly third-party experts",
      desc: "In-house tools that replace the need for expensive CDP consulting sessions."
    },
    {
      title: "Strengthen transparency for investors and stakeholders",
      desc: "Ready-to-submit outputs that prove your commitment to sustainability."
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#0D1B3E] overflow-x-hidden font-[family-name:var(--font-sora)]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .float-anim { animation: float 6s ease-in-out infinite; }
        
        .text-gradient {
          background: linear-gradient(to right, #4DB846, #3DD68C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 50px rgba(0,0,0,0.05);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0D1B3E]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0D1B3E]/60 z-10" />
          <Image
            src="/technology/inbyte/bg3.webp"
            alt="InByte Hero"
            fill
            className="object-cover object-bottom opacity-80 brightness-75"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DB846]/10 border border-[#4DB846]/20 text-[#4DB846] text-sm font-bold tracking-wider uppercase mb-8">
                <Zap className="w-4 h-4" />
                AI-Powered CDP Automation
              </div>
              <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.9]">
                In<span className="text-[#4DB846]">Byte</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-medium mb-12 leading-relaxed max-w-xl">
                Automate your <span className="text-white font-bold underline decoration-[#4DB846] underline-offset-8">CDP Reporting</span>. Smarter, not harder.
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <GreenButton href="#demo">Schedule a Demo</GreenButton>
                <Link
                  href="#features"
                  className="flex items-center gap-3 text-white font-black text-lg hover:text-[#4DB846] transition-all group"
                >
                  Explore Capabilities <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Comprehensive Dashboard View Section */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-[#0D1B3E] mb-8">Comprehensive Dashboard View</h2>
          <div className="w-32 h-2 bg-[#4DB846] mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-[#4DB846]/10 rounded-full blur-[100px]" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-8 border-white float-anim">
                <Image
                  src="/technology/inbyte/inbyte.png"
                  alt="InByte Dashboard"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <div className="space-y-12">
              {carouselItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-start gap-6"
                >
                  <div className="w-10 h-10 rounded-full bg-[#4DB846] flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_5px_15px_rgba(77,184,70,0.4)] group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#0D1B3E] leading-tight mb-2 group-hover:text-[#4DB846] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-lg font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <GreenButton href="#demo">Schedule a Demo</GreenButton>
        </div>
      </section>

      {/* Quick Features Section */}
      <section id="features" className="pb-32 pt-0 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Auto-analyze CDP response with AI Suggestions",
                icon: "/technology/fixbyte/Auto-analyze.svg",
                color: "from-[#4DB846]/20 to-transparent",
                glow: "bg-[#4DB846]/5"
              },
              {
                title: "Benchmark against industry leaders",
                icon: "/technology/fixbyte/Benchmark-1.svg",
                color: "from-[#0D1B3E]/10 to-transparent",
                glow: "bg-[#0D1B3E]/5"
              },
              {
                title: "Track Scope 1 & 2 Carbon metrics with ready-to-submit outputs",
                icon: "/technology/fixbyte/Generate.svg",
                color: "from-[#4DB846]/20 to-transparent",
                glow: "bg-[#4DB846]/5"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="group relative p-12 rounded-[3.5rem] bg-[#F8FAFC] border border-gray-100 hover:border-[#4DB846]/40 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden text-center"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.color} rounded-full blur-3xl -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="w-32 h-32 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mb-10 mx-auto group-hover:scale-110 group-hover:border-[#4DB846]/40 transition-all duration-500 p-6">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-black text-[#0D1B3E] leading-[1.1] mb-8 group-hover:text-[#4DB846] transition-all">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center gap-3 text-[#4DB846] font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Learn more <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Key Capabilities Section */}
      <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-[#0D1B3E] mb-8">Key Capabilities</h2>
            <div className="w-32 h-2 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16">
            {[
              {
                title: "Automated Scoring",
                desc: "Intelligent scoring across Disclosure, Awareness, Management, and Leadership levels.",
                icon: "/technology/fixbyte/Automated-Scoring.svg"
              },
              {
                title: "Industry Benchmarking",
                desc: "Compare performance against industry leaders and top-performing organizations.",
                icon: "/technology/fixbyte/Benchmark-1.svg"
              },
              {
                title: "Smart Recommendations",
                desc: "AI-powered sector-specific improvements tailored to your industry.",
                icon: "/technology/fixbyte/Recommendation.svg"
              },
              {
                title: "Framework Adaptation",
                desc: "Automatically adapts to annual CDP framework changes without consultants.",
                icon: "/technology/fixbyte/Framework.svg"
              }
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 rounded-[2.5rem] flex gap-8 items-center group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-[#4DB846]/40 transition-all duration-500 p-4">
                  <Image
                    src={cap.icon}
                    alt={cap.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-[#0D1B3E] mb-2">{cap.title}</h4>
                  <p className="text-gray-600 text-lg font-medium">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Driving Real Results Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#4DB846] font-black tracking-[0.3em] uppercase mb-4 block"
            >
              The Impact
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0D1B3E] mb-8">Driving Real Results</h2>
            <div className="w-32 h-2 bg-[#4DB846] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Lower downtime through checklist-driven preventive actions",
                icon: ShieldCheck,
                color: "from-[#4DB846]/20 to-transparent"
              },
              {
                title: "Boost productivity with clear KPI dashboards",
                icon: BarChart3,
                color: "from-[#3DD68C]/20 to-transparent"
              },
              {
                title: "Reduce manual errors and improve resource allocation",
                icon: CheckCircle2,
                color: "from-[#4DB846]/20 to-transparent"
              },
              {
                title: "Real-time visibility into maintenance operations",
                icon: LayoutDashboard,
                color: "from-[#3DD68C]/20 to-transparent"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="glass-card p-10 rounded-[2.5rem] flex gap-8 items-center group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-[#4DB846]/40 transition-all duration-500">
                  <item.icon className="w-10 h-10 text-[#4DB846]" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#0D1B3E] leading-tight mb-2 group-hover:text-[#4DB846] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#4DB846] font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Learn more <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-32 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4DB846]/10 rounded-full blur-[150px] -mr-[400px] -mt-[400px]" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight">
              Ready to Master Your <br /><span className="text-gradient">CDP Disclosures?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
              Empower your sustainability team with the AI-powered platform that turns complex reporting into a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/contact" className="px-12 py-6 bg-[#4DB846] text-white rounded-full font-black text-xl hover:bg-[#3da338] transition-all shadow-[0_20px_50px_rgba(77,184,70,0.3)]">
                Get Started Now
              </Link>
              <Link href="/contact" className="px-12 py-6 border-2 border-white/10 text-white rounded-full font-black text-xl hover:bg-white hover:text-[#0D1B3E] transition-all">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
