"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, TrendingDown, BarChart3, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function EfficiencyConsultingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Energy", url: "/energy" },
    { name: "Efficiency Consulting", url: "/energy/efficiency-consulting" },
  ];

  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/energy/Energy Efficiency and Consulting/Energy-Efficiency-Consulting-BG.webp"
            alt="Energy Efficiency Consulting Background"
            fill
            className="object-cover opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex items-center justify-center min-h-[40vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center"
          >
            <h1 className="font-[family-name:var(--font-sora)] text-5xl md:text-8xl font-black bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent leading-[1.1] mb-6">
              Energy Efficiency<br />Consulting Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Expert consulting to identify, quantify, and implement energy efficiency measures with verified savings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="relative z-10 -mt-6 mb-8">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl font-black text-[#0D1B3E] mb-5">
              Our Consulting <span className="bg-gradient-to-r from-[#4DB846] to-[#3DD68C] bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Systematically identify and implement energy efficiency opportunities with AI-powered audits and verified results
            </p>
            <div className="w-20 h-1.5 bg-[#4DB846] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Energy Audit",
                desc: "Comprehensive assessment of your facility's energy consumption patterns and efficiency potential",
              },
              {
                icon: Lightbulb,
                title: "AI-Powered Analysis",
                desc: "Machine learning models identify hidden inefficiencies and prioritize high-impact improvements",
              },
              {
                icon: TrendingDown,
                title: "Implementation Support",
                desc: "Guidance on deploying recommendations with ongoing monitoring and M&V verification",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-[#4DB846] mb-4" />
                <h3 className="text-2xl font-bold text-[#0D1B3E] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why Choose<br /><span className="text-[#4DB846]">Sustainabyte</span>
              </h2>
              <div className="space-y-6">
                {[
                  "ISO 50002 compliant energy audits",
                  "IPMVP-aligned measurement & verification",
                  "25-35% average energy cost reduction",
                  "Bankable, auditable savings documentation",
                  "Real-time monitoring dashboard setup",
                  "India-wide on-site consulting support",
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#4DB846] flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="/energy/Energy Efficiency and Consulting/Hero.webp"
                alt="Energy Efficiency Consulting Process"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4DB846] to-[#3DD68C]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Cut Energy Costs?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get a free energy audit and discover your facility's efficiency potential
          </p>
          <GreenButton href="/contact">
            Schedule Your Consultation
          </GreenButton>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-[#0D1B3E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-white mb-8">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Energy Management Solutions", href: "/energy/management-solutions" },
              { title: "AI & Machine Learning", href: "/technology/ai" },
              { title: "Net Zero Roadmap", href: "/sustainability/net-zero-roadmap" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="p-6 rounded-lg border border-white/10 hover:border-[#4DB846] hover:bg-[#4DB846]/5 transition-all duration-300 group"
              >
                <p className="text-white font-semibold group-hover:text-[#4DB846] transition-colors">
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
