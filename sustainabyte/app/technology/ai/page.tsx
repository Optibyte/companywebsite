"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Zap,
  LineChart,
  ShieldCheck,
  Cpu,
  Activity,
  ArrowRight,
  CheckCircle2,
  Layers,
  Network,
  Bot,
  Eye,
  TrendingDown,
  Settings2,
} from "lucide-react";
import GreenButton from "@/components/ui/GreenButton";

const aiCapabilities = [
  {
    icon: Bot,
    title: "Agentic AI Workflows",
    desc: "Autonomous AI agents continuously monitor, analyse and act — detecting anomalies, triggering optimizations and escalating only what matters.",
    color: "#3DD68C",
  },
  {
    icon: Eye,
    title: "Predictive Intelligence",
    desc: "Deep learning models trained on real facility data anticipate equipment failures and energy spikes before they occur — keeping operations proactive.",
    color: "#4DB846",
  },
  {
    icon: Layers,
    title: "Multi-Source Data Fusion",
    desc: "AI ingests data across BACnet, Modbus, MQTT and IoT sensors — fusing it into a single intelligent operational picture across your entire portfolio.",
    color: "#3DD68C",
  },
  {
    icon: Settings2,
    title: "Autonomous Optimisation",
    desc: "Closed-loop AI continuously tunes setpoints, schedules and control parameters in real time — delivering sustained energy savings without manual input.",
    color: "#4DB846",
  },
  {
    icon: LineChart,
    title: "Verified Savings Analytics",
    desc: "AI-powered M&V (IPMVP-aligned) tracks, attributes and reports every kilowatt saved — giving stakeholders auditable, bankable results.",
    color: "#3DD68C",
  },
  {
    icon: ShieldCheck,
    title: "Intelligent FDD",
    desc: "Fault Detection & Diagnostics powered by AI surfaces hidden equipment inefficiencies and emerging faults across chillers, compressors, boilers and more.",
    color: "#4DB846",
  },
];

const aiProducts = [
  {
    name: "OptiByte",
    tagline: "AI Energy Intelligence Platform",
    desc: "The central AI brain — consolidating energy data, running predictive models and orchestrating autonomous optimisation across your full facility portfolio.",
    href: "/technology/optibyte",
    accent: "#3DD68C",
  },
  {
    name: "InByte",
    tagline: "AI-Powered Audit Intelligence",
    desc: "Transforms manual energy audits into AI-assisted deep-dives — auto-flagging inefficiencies, generating recommendations and calculating verified savings potential.",
    href: "/technology/inbyte",
    accent: "#4DB846",
  },
  {
    name: "FixByte",
    tagline: "Predictive Maintenance AI",
    desc: "AI-driven fault detection that monitors equipment health continuously, predicts failures before they happen and auto-generates work orders.",
    href: "/technology/fixbyte",
    accent: "#3DD68C",
  },
  {
    name: "FusionByte",
    tagline: "AI Production Intelligence",
    desc: "Integrates production and energy data through AI models to reveal the true cost of every process — and where to cut without cutting output.",
    href: "/technology/fusionbyte",
    accent: "#4DB846",
  },
];

const metrics = [
  { value: "30%", label: "Energy Savings", sub: "average across facilities" },
  { value: "24/7", label: "Autonomous Monitoring", sub: "no human-in-loop required" },
  { value: "15min", label: "Anomaly Detection", sub: "average time to surface faults" },
  { value: "100%", label: "Audit Trail", sub: "every AI action logged" },
];

const protocols = [
  "BACnet", "Modbus", "MQTT", "Zigbee", "LoRaWAN", "OPC-UA", "M-Bus", "HTTP/REST",
];

export default function AIPage() {
  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden font-[family-name:var(--font-sora)]">
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        .float-anim { animation: float 7s ease-in-out infinite; }
        @keyframes scan { 0%{top:0%} 100%{top:100%} }
        .scan-line { animation: scan 3s linear infinite; }
        @keyframes grid-fade { 0%,100%{opacity:0.03} 50%{opacity:0.07} }
        .grid-bg { animation: grid-fade 5s ease-in-out infinite; }
        .glow-green { box-shadow: 0 0 40px rgba(61,214,140,0.25), 0 0 80px rgba(61,214,140,0.1); }
        .card-glass {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
        }
        .card-glass:hover {
          background: rgba(61,214,140,0.06);
          border-color: rgba(61,214,140,0.25);
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .pulse-ring { animation: pulse-ring 2.5s ease-out infinite; }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 grid-bg pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(61,214,140,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(61,214,140,0.06) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(61,214,140,0.12) 0%, transparent 70%)" }} />

        {/* Animated orbs */}
        <motion.div className="absolute top-32 left-16 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(61,214,140,0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-24 right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(77,184,70,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#3DD68C]/30 bg-[#3DD68C]/10 mb-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#3DD68C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3DD68C]" />
            </span>
            <span className="text-[#3DD68C] text-sm font-semibold tracking-widest uppercase">Sustainabyte AI</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.0] mb-8 tracking-tight">
            Intelligence<br />
            <span style={{ background: "linear-gradient(135deg, #3DD68C 0%, #4DB846 50%, #3DD68C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Built In.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Sustainabyte embeds AI at every layer — from sensor data ingestion to autonomous optimisation — so your facilities run smarter without adding complexity.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <GreenButton href="/contact">Request a Demo</GreenButton>
            <Link href="#capabilities" className="flex items-center gap-2 text-white/70 hover:text-[#3DD68C] font-semibold transition-colors group">
              Explore AI Capabilities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Metric strip */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 rounded-2xl overflow-hidden border border-white/[0.06]">
            {metrics.map((m, i) => (
              <div key={i} className="card-glass px-6 py-8 text-center transition-all duration-300">
                <div className="text-4xl md:text-5xl font-black text-[#3DD68C] mb-1">{m.value}</div>
                <div className="text-white font-bold text-sm mb-1">{m.label}</div>
                <div className="text-gray-500 text-xs">{m.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── AI CAPABILITIES ── */}
      <section id="capabilities" className="py-28 relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(61,214,140,0.04) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-20">
            <p className="text-[#3DD68C] text-sm font-bold tracking-widest uppercase mb-4">Core AI Capabilities</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              What Our AI<br />Actually Does
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Six pillars of AI capability — each purpose-built for industrial energy and operational intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((cap, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-glass rounded-2xl p-8 group cursor-default transition-all duration-400 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${cap.color}15`, border: `1px solid ${cap.color}30` }}>
                  <cap.icon className="w-7 h-7" style={{ color: cap.color }} />
                </div>
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#3DD68C] transition-colors">{cap.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW AI WORKS ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#071022] via-[#0a1530] to-[#071022] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-20">
            <p className="text-[#3DD68C] text-sm font-bold tracking-widest uppercase mb-4">The AI Loop</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">From Data to Action</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              A continuous intelligence loop — ingesting data, learning patterns, predicting outcomes and taking autonomous action.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, #3DD68C, #4DB846, #3DD68C, transparent)" }} />

            {[
              { icon: Network, step: "01", title: "Ingest", desc: "Real-time data streams from IoT sensors, BMS, meters and production systems — unified across protocols." },
              { icon: Brain, step: "02", title: "Learn", desc: "AI models continuously learn normal vs. anomalous behaviour, building facility-specific intelligence over time." },
              { icon: Activity, step: "03", title: "Predict", desc: "Forecasting engines surface energy spikes, equipment faults and optimisation opportunities hours in advance." },
              { icon: Zap, step: "04", title: "Act", desc: "Autonomous agents implement optimisations, trigger alerts and generate reports — closing the loop without delay." },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center">
                <div className="relative w-32 h-32 rounded-full flex items-center justify-center mb-8 glow-green"
                  style={{ background: "linear-gradient(135deg, rgba(61,214,140,0.15), rgba(77,184,70,0.08))", border: "1px solid rgba(61,214,140,0.3)" }}>
                  <step.icon className="w-10 h-10 text-[#3DD68C]" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#3DD68C] flex items-center justify-center text-[#0D1B3E] text-xs font-black">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI-POWERED PRODUCTS ── */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-20">
            <p className="text-[#3DD68C] text-sm font-bold tracking-widest uppercase mb-4">AI-Powered Products</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">AI in Every Product</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Each product in the Sustainabyte suite is an AI-native application — not AI bolted on, but intelligence built in from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiProducts.map((product, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-glass rounded-2xl p-8 group transition-all duration-400 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: product.accent }}>
                      {product.tagline}
                    </span>
                    <h3 className="text-3xl font-black text-white">{product.name}</h3>
                  </div>
                  <Link href={product.href}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#3DD68C]/40 group-hover:bg-[#3DD68C]/10 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#3DD68C] transition-colors" />
                  </Link>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">{product.desc}</p>
                <div className="h-px bg-white/[0.06] mb-6" />
                <Link href={product.href} className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#3DD68C] text-gray-400 group/link">
                  Explore {product.name} <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECTIVITY ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#071022] to-[#0D1B3E] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#3DD68C] text-sm font-bold tracking-widest uppercase mb-4">Universal Connectivity</p>
            <h2 className="text-3xl md:text-5xl font-black mb-6">Connects to Everything</h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-12">
              Our AI layer speaks every industrial protocol — integrating your existing infrastructure without rip-and-replace.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {protocols.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-xl card-glass text-sm font-bold text-gray-300 hover:text-[#3DD68C] transition-colors cursor-default">
                  {p}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card-glass rounded-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: ShieldCheck, title: "Responsible AI", desc: "Every AI decision is logged, explainable and auditable. No black-box outputs — only transparent, traceable intelligence." },
              { icon: Cpu, title: "Edge + Cloud Hybrid", desc: "AI runs at the edge for latency-sensitive tasks and in the cloud for deep analytics — the best of both worlds." },
              { icon: TrendingDown, title: "Outcome-Focused", desc: "We measure AI success by verified savings, uptime improvements and audit-ready reports — not model accuracy metrics." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15 }} className="group">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(61,214,140,0.1)", border: "1px solid rgba(61,214,140,0.2)" }}>
                  <item.icon className="w-8 h-8 text-[#3DD68C]" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(61,214,140,0.1) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Ready to Make Your<br />
              <span style={{ background: "linear-gradient(135deg, #3DD68C, #4DB846)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Facility Intelligent?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Talk to our team and discover how Sustainabyte AI can deliver measurable, verified savings across your operations within weeks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <GreenButton href="/contact">Book a Discovery Call</GreenButton>
              <Link href="/technology" className="px-8 py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white hover:text-[#0D1B3E] transition-all duration-300">
                See All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
