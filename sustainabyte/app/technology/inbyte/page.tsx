"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Zap,
  Thermometer,
  Calendar,
  Smartphone,
  Activity,
  Radio,
  Shield,
  ArrowRight,
  CheckCircle2,
  Clock,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";

const irImages = [
  "/IR/2650e771-d6a0-4486-936f-1693d25d59ae-removebg-preview.png",
  "/IR/5a5c7974-905b-4f27-b350-e15b878e1371-removebg-preview.png",
  "/IR/a9a4d25f-6c3c-4975-843f-b7d539afb9c7-removebg-preview.png",
];

const problems = [
  { icon: Clock, text: "Users forget to turn OFF the AC when leaving a room or office, causing significant energy waste" },
  { icon: Activity, text: "No way to monitor whether an AC is ON or OFF without physically being present" },
  { icon: Thermometer, text: "Maintaining unnecessarily low temperatures leads to higher electricity consumption" },
  { icon: Calendar, text: "During lunch breaks or non-working hours, ACs continue to run with no one to switch them off" },
  { icon: BarChart3, text: "No centralized system to view and manage multiple ACs from a single interface" },
];

const purposes = [
  {
    icon: Zap,
    title: "Energy Saving",
    desc: "Automated schedules and lunch-break automation ensure the AC turns OFF when no one is present, eliminating wasteful operation and reducing electricity bills.",
    color: "#37E093",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    desc: "The mobile app displays live AC status (Online/Offline/Active), current temperature, humidity sensor data, and last-seen timestamp in real time via MQTT.",
    color: "#3b82f6",
  },
  {
    icon: Smartphone,
    title: "Remote Control",
    desc: "Users can turn the AC ON/OFF, adjust temperature, and configure WiFi from anywhere using the mobile app — no physical remote required.",
    color: "#8b5cf6",
  },
];

const features = [
  { icon: Radio, title: "MQTT Communication", desc: "Reliable real-time bidirectional messaging between device and mobile app over any network." },
  { icon: Thermometer, title: "Temperature & Humidity", desc: "Onboard sensors continuously track ambient conditions and surface them in the dashboard." },
  { icon: Calendar, title: "Smart Schedules", desc: "Configure automatic ON/OFF schedules and lunch-break automation for every device." },
  { icon: Wifi, title: "WiFi Configuration", desc: "Remote WiFi provisioning — no need for physical access to reconfigure network settings." },
  { icon: Shield, title: "Device Status Alerts", desc: "Instant Online/Offline/Active status with last-seen timestamps for every AC unit." },
  { icon: Smartphone, title: "Centralized App", desc: "Manage all AC devices from one mobile application with a clean intuitive interface." },
];

export default function IRBlasterPage() {
  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden font-[family-name:var(--font-sora)]">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#37E093]/8 rounded-full blur-[180px] -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3b82f6]/6 rounded-full blur-[140px] -ml-48 -mb-48" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#37E093]/10 border border-[#37E093]/25 text-[#37E093] text-sm font-semibold tracking-wider uppercase mb-8">
                <Radio className="w-4 h-4" />
                Smart IoT AC Automation
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.9]">
                IR{" "}
                <span className="text-[#37E093]">
                  Blaster
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-lg">
                Smart AC monitoring and remote control system built on{" "}
                <span className="text-white font-semibold">MQTT communication</span> and hardware integration.
              </p>
              <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-lg">
                Control AC devices, manage temperature, configure schedules, and monitor device status through a centralized mobile application.
              </p>

              <div className="flex flex-wrap gap-4">
                <GreenButton href="#features">Explore Features</GreenButton>
                <Link
                  href="#why"
                  className="flex items-center gap-2 text-white/80 font-semibold text-base hover:text-[#37E093] transition-colors group"
                >
                  Why IR Blaster? <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-12">
                {[
                  { val: "MQTT", label: "Protocol" },
                  { val: "Real-Time", label: "Monitoring" },
                  { val: "Multi-AC", label: "Control" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-black text-[#37E093]">{s.val}</div>
                    <div className="text-xs text-gray-400 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — device images */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[#37E093]/10 rounded-full blur-[100px]" />
              <div className="relative flex items-end justify-center gap-4">
                {irImages.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative ${i === 1 ? "scale-110 z-10" : "scale-90 opacity-80"}`}
                  >
                    <Image
                      src={src}
                      alt={`IR Blaster device ${i + 1}`}
                      width={220}
                      height={220}
                      className="object-contain drop-shadow-[0_0_40px_rgba(61,214,140,0.35)]"
                      priority={i === 1}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why This Product Was Developed ── */}
      <section id="why" className="py-28 bg-[#0F1C3F] relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] -mt-64" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
              The Problem
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Why This Product Was{" "}
              <span className="text-[#37E093]">
                Developed
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              In most offices and homes, air conditioners are operated manually using traditional IR remotes. While this works for basic control, it creates serious limitations when it comes to monitoring, automation, and energy management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex gap-4 p-6 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:border-[#37E093]/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#37E093]/10 border border-[#37E093]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#37E093]/20 transition-colors">
                  <p.icon className="w-5 h-5 text-[#37E093]" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three Core Purposes ── */}
      <section className="py-28 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/6 rounded-full blur-[130px] -mr-32 -mb-32" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#37E093]/30 bg-[#37E093]/10 text-[#37E093] text-sm font-semibold mb-6">
              Our Solution
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Three Core{" "}
              <span className="text-[#37E093]">
                Purposes
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              The IR Blaster is built on three pillars that solve every pain point of traditional AC management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {purposes.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group relative p-8 rounded-3xl bg-white/[0.04] border border-white/[0.07] hover:border-white/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(circle at top left, ${p.color}15, transparent 70%)` }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
                >
                  <p.icon className="w-7 h-7" style={{ color: p.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Purpose table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 rounded-3xl overflow-hidden border border-white/[0.08]"
          >
            <div className="grid grid-cols-2 bg-white/[0.05] border-b border-white/[0.08]">
              <div className="px-8 py-4 text-sm font-bold text-gray-400 uppercase tracking-wider">Purpose</div>
              <div className="px-8 py-4 text-sm font-bold text-gray-400 uppercase tracking-wider">How the Product Addresses It</div>
            </div>
            {[
              { purpose: "Energy Saving", how: "Automated schedules and lunch-break automation ensure the AC turns OFF when no one is present, eliminating wasteful operation and reducing electricity bills." },
              { purpose: "Real-Time Monitoring", how: "The mobile app displays live AC status (Online/Offline/Active), current temperature, humidity sensor data, and last-seen timestamp in real time via MQTT." },
              { purpose: "Remote Control", how: "Users can turn the AC ON/OFF, adjust temperature, and configure WiFi from anywhere using the mobile app — no physical remote required." },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"} border-b border-white/[0.05] last:border-b-0`}>
                <div className="px-8 py-5 font-semibold text-[#37E093] text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  {row.purpose}
                </div>
                <div className="px-8 py-5 text-gray-300 text-sm leading-relaxed">{row.how}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section id="features" className="py-28 bg-[#0F1C3F] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#37E093]/5 rounded-full blur-[120px] -translate-y-1/2 -ml-32" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#37E093]/30 bg-[#37E093]/10 text-[#37E093] text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" /> Capabilities
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Key Features</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Everything you need to automate and monitor your AC infrastructure from a single platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-7 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:border-[#37E093]/30 hover:bg-[#37E093]/[0.04] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#37E093]/10 border border-[#37E093]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#37E093]/20 transition-all duration-300">
                  <f.icon className="w-6 h-6 text-[#37E093]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Device Showcase ── */}
      <section className="py-28 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-[#37E093]/5 blur-[160px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Meet the Device</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Compact, robust, and WiFi-enabled — the IR Blaster hardware integrates seamlessly into any environment.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            {irImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`flex flex-col items-center gap-4 ${i === 1 ? "" : "md:mt-8"}`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#37E093]/20 rounded-full blur-[60px] scale-110" />
                  <Image
                    src={src}
                    alt={`IR Blaster view ${i + 1}`}
                    width={i === 1 ? 260 : 200}
                    height={i === 1 ? 260 : 200}
                    className="object-contain relative z-10 drop-shadow-[0_0_50px_rgba(61,214,140,0.3)]"
                  />
                </div>
                <span className="text-gray-500 text-xs font-medium tracking-widest uppercase">
                  {["Front View", "Top View", "Side View"][i]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="demo" className="py-28 bg-[#0F1C3F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#37E093]/8 rounded-full blur-[140px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/6 rounded-full blur-[120px] -ml-32 -mb-32" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#37E093]/30 bg-[#37E093]/10 text-[#37E093] text-sm font-semibold mb-8">
              <Radio className="w-4 h-4" />
              Get Started
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Automate Your{" "}
              <span className="text-[#37E093]">
                AC Infrastructure?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Deploy the IR Blaster in your office or facility and start saving energy, gaining visibility, and controlling every AC unit from your phone today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <GreenButton href="/contact">Request a Demo</GreenButton>
              <Link
                href="/contact"
                className="px-8 py-3.5 border border-white/15 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
