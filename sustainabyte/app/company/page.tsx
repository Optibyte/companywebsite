"use client";

import { motion } from "framer-motion";
import { Building, Users, Award, Heart, Target, Briefcase } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", description: "Committed to making every facility energy efficient and Net Zero aligned." },
  { icon: Heart, title: "Customer-First", description: "We build lasting partnerships by putting our clients' success at the center." },
  { icon: Award, title: "Excellence", description: "Delivering verified, measurable results through proven methodologies." },
  { icon: Users, title: "Collaboration", description: "Working together with OEMs, facility managers, and sustainability teams." },
];

const team = [
  { name: "Leadership Team", description: "Experienced professionals from energy, technology, and sustainability domains driving our vision." },
  { name: "Engineering Team", description: "AI/ML engineers, IoT specialists, and full-stack developers building cutting-edge solutions." },
  { name: "Advisory Board", description: "Industry veterans providing strategic guidance on energy markets and sustainability trends." },
];

export default function CompanyPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-16 sm:py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-4 sm:mb-6">
              <Building className="w-4 h-4" /> About Us
            </span>
            <h1 className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              About <span className="text-[#3DD68C]">Sustainabyte</span>
            </h1>
            <p className="text-[#B0BEC5] text-base sm:text-lg leading-relaxed">Based in Chennai, India, we are a team of passionate engineers and sustainability experts working to make every facility EPIC — Efficient, Predictive, Intelligent, and Controlled.</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-10 sm:mb-14">
            Our <span className="text-[#3DD68C]">Values</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center">
                  <v.icon className="w-8 h-8 text-[#3DD68C]" />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold text-[#0D1B3E] mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-10 sm:mb-14">
            Our <span className="text-[#3DD68C]">Team</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {team.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#3DD68C]/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-[#3DD68C]" />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#0D1B3E] mb-3">{t.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
