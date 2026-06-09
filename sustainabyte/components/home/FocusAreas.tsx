"use client";

import { motion } from "framer-motion";
import { Factory, Building2, ShoppingBag } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    title: "Industries",
    icon: Factory,
    description: "Tailored energy intelligence for manufacturing plants, process lines, and logistics hubs.",
    images: [
      { src: "/Industries/Factories.webp",        name: "Factories"       },
      { src: "/Industries/Warehouses.webp",        name: "Warehouses"      },
      { src: "/Industries/Power Plants.webp",      name: "Power Plants"    },
      { src: "/Industries/Chemical Plants.webp",   name: "Chemical Plants" },
      { src: "/Industries/Industry Parks.webp",    name: "Industry Parks"  },
      { src: "/Industries/Twilight.webp",          name: "Twilight Plants" },
    ],
  },
  {
    title: "Commercial Buildings",
    icon: Building2,
    description: "HVAC and chiller plant optimization for large-scale commercial real estate and institutions.",
    images: [
      { src: "/Commercial Buildings/IT-Parks-300x200.webp",        name: "IT Parks"       },
      { src: "/Commercial Buildings/Hospitals-300x271.webp",        name: "Hospitals"      },
      { src: "/Commercial Buildings/Shopping-Malls-300x199.webp",   name: "Shopping Malls" },
      { src: "/Commercial Buildings/Hotels-1-300x200.webp",         name: "Hotels"         },
      { src: "/Commercial Buildings/Resorts.webp",                  name: "Resorts"        },
      { src: "/Commercial Buildings/Educational-Institutions.webp", name: "Educational Institutions" },
    ],
  },
  {
    title: "Retail Spaces",
    icon: ShoppingBag,
    description: "Distributed telemetry and smart monitoring for multi-location retail chains and showrooms.",
    images: [
      { src: "/Retail Spaces/Department-Stores-300x199.webp", name: "Department Stores" },
      { src: "/Retail Spaces/Supermarkets-300x200.webp",      name: "Supermarkets" },
      { src: "/Retail Spaces/Franchise-Outlets-300x200.webp",   name: "Franchise Outlets" },
      { src: "/Retail Spaces/Restaurants.webp",                name: "Restaurants" },
      { src: "/Retail Spaces/Banks.webp",               name: "Banks" },
      { src: "/Retail Spaces/showerooms.webp",       name: "Automobile Showrooms" },
    ],
  },
];

export default function FocusAreas() {
  return (
    <section id="sectors" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #3DD68C 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#3DD68C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-4"
          >
            Areas of <span className="text-[#3DD68C]">Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-base max-w-xl mx-auto font-[family-name:var(--font-dm-sans)]"
          >
            We serve diverse industries and sectors with tailored energy and sustainability roadmaps.
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical progress line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#3DD68C] to-blue-500 -translate-x-1/2 origin-top"
          />

          <div className="space-y-20 md:space-y-32">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch">
                  {/* Timeline node marker */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-12 -translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 15, delay: idx * 0.1 }}
                      className="w-8 h-8 rounded-full bg-white border-2 border-[#3DD68C] flex items-center justify-center relative group transition-colors shadow-lg shadow-black/10"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3DD68C] animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Left spacer for desktop / alternating */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'pr-16 text-right' : 'order-2 pl-16 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="pt-8"
                    >
                      <div className={`inline-flex items-center gap-3 mb-4 ${isEven ? 'flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] border border-[#3DD68C]/20 flex items-center justify-center text-[#3DD68C]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-[#0D1B3E] uppercase tracking-wider">
                          {cat.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-md mx-auto md:mx-0 font-[family-name:var(--font-dm-sans)]">
                        {cat.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right container (The Cards Grid) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:order-2 md:pl-16' : 'md:pr-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-200 backdrop-blur-md hover:border-[#3DD68C]/50 hover:bg-white transition-all duration-300 shadow-lg"
                    >
                      {/* Mobile node header */}
                      <div className="md:hidden flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#3DD68C]/20 flex items-center justify-center text-[#3DD68C]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#0D1B3E] uppercase tracking-wider">
                          {cat.title}
                        </h3>
                      </div>
                      <p className="md:hidden text-gray-600 text-sm mb-6">
                        {cat.description}
                      </p>

                      {/* Sector Images Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {cat.images.map((img, jIdx) => (
                          <motion.div
                            key={img.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: jIdx * 0.05 }}
                            className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-default border border-white/5 shadow-md"
                          >
                            <Image
                              src={img.src}
                              alt={`${img.name} industry energy management and sustainability solutions by Sustainabyte`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 640px) 40vw, 15vw"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                              <p className="text-white text-xs font-semibold leading-tight drop-shadow-md font-[family-name:var(--font-sora)]">
                                {img.name}
                              </p>
                            </div>
                            {/* Accent border on hover */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-[#3DD68C]/60 rounded-xl transition-colors duration-300" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
