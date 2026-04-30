"use client";

import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

const regions = [
  { name: "South India", cities: ["Chennai", "Bangalore", "Hyderabad", "Coimbatore"], status: "Active" },
  { name: "West India", cities: ["Mumbai", "Pune", "Ahmedabad"], status: "Active" },
  { name: "North India", cities: ["Delhi NCR", "Jaipur", "Lucknow"], status: "Expanding" },
  { name: "East India", cities: ["Kolkata", "Bhubaneswar"], status: "Expanding" },
  { name: "Southeast Asia", cities: ["Singapore", "Malaysia", "Thailand"], status: "Coming Soon" },
  { name: "Middle East", cities: ["Dubai", "Saudi Arabia", "Qatar"], status: "Coming Soon" },
];

export default function RegionsPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-6">
              <Globe className="w-4 h-4" /> Our Presence
            </span>
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-bold text-white mb-6">
              Where We <span className="text-[#3DD68C]">Operate</span>
            </h1>
            <p className="text-[#B0BEC5] text-lg leading-relaxed">Currently serving clients across India with expanding footprint in Southeast Asia and the Middle East.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#0D1B3E]">{r.name}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${r.status === "Active" ? "bg-[#3DD68C]/10 text-[#3DD68C]" : r.status === "Expanding" ? "bg-yellow-50 text-yellow-600" : "bg-blue-50 text-blue-600"}`}>{r.status}</span>
                </div>
                <div className="space-y-2">
                  {r.cities.map((c, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-3.5 h-3.5 text-[#3DD68C]" />{c}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
