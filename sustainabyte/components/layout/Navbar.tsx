"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap, BarChart3, ShieldCheck, Database, Leaf, Globe, Cpu, BookOpen, Users } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
  megaMenu?: {
    title: string;
    gridCols?: number;
    columns: {
      title: string;
      href?: string;
      items: { name: string; href: string }[];
    }[];
  };
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "Energy",
    href: "/energy",
    megaMenu: {
      title: "Energy",
      columns: [
        {
          title: "Energy Efficiency and Consulting",
          href: "/energy/efficiency-consulting",
          items: [
            { name: "Equip-Ops Analytics", href: "/energy#equip-ops" },
            { name: "Compressed Air Leakage Audits", href: "/energy#compressed-air" },
            { name: "Chiller Reliability & Performance Audits", href: "/energy#chiller" },
            { name: "Boiler Performance Audits", href: "/energy#boiler" },
            { name: "ASHRAE Level 1 & 2 Audits", href: "/energy#ashrae" },
            { name: "Electrical Safety Audits", href: "/energy#electrical" },
            { name: "Power Quality Analysis", href: "/energy#power" },
          ]
        },
        {
          title: "Energy Analytics",
          href: "/energy/analytics",
          items: [
            { name: "Utility Data Analytics", href: "/energy/analytics#utility" },
            { name: "BMS Data Analytics", href: "/energy/analytics#bms" },
            { name: "Solar Data Analytics", href: "/energy/analytics#solar" },
            { name: "Design & Development of Analytical Systems", href: "/energy/analytics#design" },
          ]
        },
        {
          title: "Energy Management Solutions",
          href: "/energy/management-solutions",
          items: [
            { name: "ISO 50001 System Implementation Support", href: "/energy/management-solutions#iso-50001" },
            { name: "ISO 50002 System Implementation Support", href: "/energy/management-solutions#iso-50002" },
            { name: "Measurement & Verification (IPMVP)", href: "/energy/management-solutions#ipmvp" },
            { name: "Digitisation for savings tracking", href: "/energy/management-solutions#digitalisation" },
          ]
        }
      ]
    }
  },
  {
    name: "Sustainability",
    href: "/sustainability",
    megaMenu: {
      title: "Sustainability",
      gridCols: 4,
      columns: [
        {
          title: "Carbon Accounting",
          href: "/sustainability/carbon-accounting",
          items: [
            { name: "GHG Protocol", href: "/sustainability/carbon-accounting#ghg" },
            { name: "ISO 14064", href: "/sustainability/carbon-accounting#iso14064" },
            { name: "CDP Reporting", href: "/sustainability/carbon-accounting#cdp" },
          ]
        },
        {
          title: "Water Management",
          href: "/sustainability/water-management",
          items: [
            { name: "Key Objectives", href: "/sustainability/water-management#objectives" },
            { name: "Conservation Strategies", href: "/sustainability/water-management#strategies" },
            { name: "Audit Journey", href: "/sustainability/water-management#timeline" },
          ]
        },
        {
          title: "Decarbonization",
          href: "/sustainability/decarbonization",
          items: [
            { name: "Target the Right Asset", href: "/sustainability/decarbonization#approach" },
            { name: "Measurable Results", href: "/sustainability/decarbonization#results" },
            { name: "Immediate Impact", href: "/sustainability/decarbonization#impact" },
          ]
        },
        {
          title: "Net Zero RoadMap",
          href: "/sustainability/net-zero-roadmap",
          items: [
            { name: "Baseline & Target Setting", href: "/sustainability/net-zero-roadmap#baseline" },
            { name: "Science-Aligned Actions", href: "/sustainability/net-zero-roadmap#science" },
            { name: "Performance Monitoring", href: "/sustainability/net-zero-roadmap#monitoring" },
          ]
        }
      ]
    }
  },
  {
    name: "Technology",
    href: "/technology",
    megaMenu: {
      title: "Technology",
      gridCols: 2,
      columns: [
        {
          title: "Software",
          items: [
            { name: "Optibyte", href: "/technology/optibyte" },
            { name: "Fixbyte", href: "/technology#fixbyte" },
            { name: "Inbyte", href: "/technology#inbyte" },
            { name: "Fusionbyte", href: "/technology#fusionbyte" },
            { name: "Digiweld", href: "/technology#digiweld" },
          ]
        },
        {
          title: "IOT Solutions",
          items: [
            { name: "OptiedgeW", href: "/technology#optiedgew" },
            { name: "OptiedgeAC", href: "/technology#optiedgeac" },
            { name: "OptiedgeCT", href: "/technology#optiedgect" },
            { name: "OptiedgeCPM", href: "/technology#optiedgecpm" },
            { name: "OptiedgeCAM", href: "/technology#optiedgecam" },
            { name: "OptiedgeDM", href: "/technology#optiedgedm" },
          ]
        }
      ]
    }
  },
  {
    name: "Resources",
    href: "/resources",
    megaMenu: {
      title: "Resources",
      gridCols: 2,
      columns: [
        {
          title: "Blogs",
          items: []
        },
        {
          title: "News",
          items: []
        }
      ]
    }
  },
  {
    name: "Company",
    href: "/company",
    megaMenu: {
      title: "Company",
      gridCols: 3,
      columns: [
        {
          title: "About Us",
          items: []
        },
        {
          title: "Clients",
          items: []
        },
        {
          title: "Careers",
          items: []
        }
      ]
    }
  },
  { name: "Regions", href: "/regions" },
  { name: "Contact us", href: "/contact" },
];

function DropdownMenu({
  items,
  isOpen,
}: {
  items: { name: string; href: string }[];
  isOpen: boolean;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scaleY: 0.96 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          exit={{ opacity: 0, y: -8, scaleY: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 mt-1 w-64 rounded-xl overflow-hidden shadow-2xl z-50 origin-top"
          style={{
            background: "rgba(13, 27, 62, 0.98)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(13, 27, 62, 0.1)",
          }}
        >
          <div className="py-2">
            {items.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block px-5 py-3 text-sm text-[#B0BEC5] hover:text-[#3DD68C] hover:bg-white/5 hover:pl-7 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
        ? "bg-[#0D1B3E]/90 backdrop-blur-xl shadow-lg border-b border-white/5"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <Image
              src="/Company-Logo-3-1.webp"
              alt="Sustainabyte Technologies"
              width={280}
              height={60}
              className="h-14 w-auto object-contain group-hover:brightness-110 transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  (link.dropdown || link.megaMenu) && handleMouseEnter(link.name)
                }
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm xl:text-base transition-colors duration-200 font-semibold border-b-2 ${activeDropdown === link.name
                    ? "text-[#3DD68C] border-[#3DD68C]"
                    : "text-white border-transparent hover:text-white/80"
                    }`}
                >
                  {link.name}
                  {(link.dropdown || link.megaMenu) && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>
                {link.dropdown && (
                  <DropdownMenu
                    items={link.dropdown}
                    isOpen={activeDropdown === link.name}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[72px] bg-[#193F70] z-50 overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3.5 text-lg text-white/70 hover:text-[#3DD68C] transition-colors border-b border-white/5 font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-0.5 pb-2">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block py-2 text-sm text-white/50 hover:text-[#3DD68C] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {navLinks.map((link) =>
          link.megaMenu && activeDropdown === link.name && (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[#0D1B3E]/95 backdrop-blur-3xl border-t border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 pb-16 pt-12 overflow-hidden"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4DB846]/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#4DB846]/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Close Button */}
                <button
                  onClick={() => setActiveDropdown(null)}
                  className="absolute -top-4 right-0 text-white/40 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Columns */}
                <div className={`grid grid-cols-1 gap-12 ${link.megaMenu.gridCols === 4 ? "md:grid-cols-4" :
                  link.megaMenu.gridCols === 2 ? "md:grid-cols-2" :
                    "md:grid-cols-3"
                  }`}>
                  {link.megaMenu.columns.map((col, idx) => (
                    <div key={idx} className="group/col">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4DB846]/20 to-[#3DD68C]/5 border border-white/10 flex items-center justify-center group-hover/col:border-[#4DB846]/40 transition-colors duration-500">
                          {col.title.includes("Consulting") || col.title.includes("Accounting") ? <Zap className="w-5 h-5 text-[#4DB846]" /> :
                            col.title.includes("Analytics") || col.title.includes("Water") ? <BarChart3 className="w-5 h-5 text-[#4DB846]" /> :
                              col.title.includes("Management") || col.title.includes("Decarbonization") ? <ShieldCheck className="w-5 h-5 text-[#4DB846]" /> :
                                col.title.includes("Software") || col.title.includes("Net Zero") ? <Cpu className="w-5 h-5 text-[#4DB846]" /> :
                                  col.title.includes("IOT") ? <Database className="w-5 h-5 text-[#4DB846]" /> :
                                    col.title.includes("Blogs") ? <BookOpen className="w-5 h-5 text-[#4DB846]" /> :
                                      col.title.includes("About") ? <Users className="w-5 h-5 text-[#4DB846]" /> :
                                        <Globe className="w-5 h-5 text-[#4DB846]" />}
                        </div>
                        {col.href ? (
                          <Link
                            href={col.href}
                            className="text-xl font-black text-white hover:text-[#4DB846] transition-colors duration-300"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {col.title}
                          </Link>
                        ) : (
                          <h4 className="text-xl font-black text-white">
                            {col.title}
                          </h4>
                        )}
                      </div>

                      <ul className="space-y-4 pl-1">
                        {col.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className="group/link flex items-center gap-2 text-[16px] text-gray-300 hover:text-[#4DB846] transition-all duration-300"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover/link:bg-[#4DB846] group-hover/link:scale-125 transition-all duration-300" />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </nav>
  );
}
