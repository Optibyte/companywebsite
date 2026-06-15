"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  ShieldCheck,
  Users,
  GitBranch,
  Bell,
  FileText,
  Award,
  Settings,
  TrendingUp,
  Target,
  Clock,
  Zap,
  CheckCircle2,
  ArrowRight,
  Layers,
  Database,
  Lock,
  Activity,
  GitPullRequest,
  Calendar,
  Star,
  Brain,
  ChevronRight,
  Cpu,
  LineChart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GreenButton from "@/components/ui/GreenButton";

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const coreFeatures = [
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Unified Metrics Dashboard",
    route: "/metrics-dashboard",
    description:
      "Context-aware data fencing with hierarchical filtering across Org → Market → Account → Project → Team → Member scopes.",
    highlights: ["Role-based data fencing", "Flexible date ranges", "Visual trend charts"],
    color: "from-[#3DD68C]/20 to-[#3DD68C]/5",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Hierarchical Drilldown",
    route: "/drilldown",
    description:
      "Multi-level breadcrumb navigation from CTO overview down to individual developer profiles with badges and AI skill details.",
    highlights: ["CTO → PM → TL → Member", "Sprint velocity tracking", "Capacity analysis"],
    color: "from-[#4DB846]/20 to-[#4DB846]/5",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "SLA Tracking & Governance",
    route: "/sla",
    description:
      "Define warning/critical thresholds. Automatically flag breaches with duration, variance, and resolution note tracking.",
    highlights: ["Custom thresholds", "Breach auto-detection", "Compliance reports"],
    color: "from-[#3DD68C]/20 to-[#3DD68C]/5",
  },
  {
    icon: <GitBranch className="w-7 h-7" />,
    title: "Integration Management",
    route: "/integrations",
    description:
      "Bi-directional sync with Jira and GitHub via webhooks and API tokens. Pull commits, PR reviews, builds, and sprint tickets automatically.",
    highlights: ["Jira sprint sync", "GitHub workflow pull", "Real-time webhooks"],
    color: "from-[#4DB846]/20 to-[#4DB846]/5",
  },
  {
    icon: <Lock className="w-7 h-7" />,
    title: "Role-Based Access Control",
    route: "/role-features",
    description:
      "Granular feature-level permissions for 11 system roles from SUPERADMIN to MEMBER, with per-user override capabilities.",
    highlights: ["11 distinct roles", "Feature-level matrix", "User overrides"],
    color: "from-[#3DD68C]/20 to-[#3DD68C]/5",
  },
  {
    icon: <Calendar className="w-7 h-7" />,
    title: "Automated Report Scheduler",
    route: "/reports",
    description:
      "Schedule automated exports of engineering metrics with daily, weekly, or monthly cadences delivered to specific recipients.",
    highlights: ["Email delivery", "Custom frequency", "Multi-recipient"],
    color: "from-[#4DB846]/20 to-[#4DB846]/5",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Badges & AI Skill Profiles",
    description:
      "Gamify developer growth with industry credentials. Track AI tool proficiency, primary/secondary AI skills, and adoption metrics per developer.",
    highlights: ["Dev gamification", "AI proficiency 1–10", "Active tools tracking"],
    color: "from-[#3DD68C]/20 to-[#3DD68C]/5",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Audit Logging",
    route: "/audit",
    description:
      "Immutable logs of every CREATE, UPDATE, DELETE, EXPORT, LOGIN, and LOGOUT action with IP, user agent, and request IDs.",
    highlights: ["Full action capture", "IP & agent logging", "Compliance-ready"],
    color: "from-[#4DB846]/20 to-[#4DB846]/5",
  },
];

const sprintMetrics = [
  {
    number: "01",
    name: "Throughput Points",
    definition: "Velocity delivered within the sprint period.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    number: "02",
    name: "Quality Score",
    definition: "Measured as test pass rates combined with defect densities.",
    icon: <Star className="w-5 h-5" />,
  },
  {
    number: "03",
    name: "Velocity Points",
    definition: "Total story points completed during the sprint.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    number: "04",
    name: "Done-to-Said Ratio",
    definition: "Commitment reliability: completed vs. planned story points.",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
  {
    number: "05",
    name: "Technical Debt Index",
    definition: "Trend of static code analysis violations and tech debt hours.",
    icon: <Activity className="w-5 h-5" />,
  },
  {
    number: "06",
    name: "User Stories Delivered",
    definition: "Total quantity of product increments completed.",
    icon: <FileText className="w-5 h-5" />,
  },
];

const transformationPhases = [
  {
    phase: "Before",
    label: "Baseline",
    color: "#B0BEC5",
    bgColor: "bg-white/10",
    borderColor: "border-white/20",
    description: "Establish pre-transformation benchmarks using historical sprint data. Compute statistical baselines, standard deviations, and control limits.",
    metrics: ["Historical sprint mean", "UCL / LCL calculation", "Baseline StdDev capture", "Team capacity mapping"],
  },
  {
    phase: "During",
    label: "Adoption",
    color: "#FFB74D",
    bgColor: "bg-[#FFB74D]/10",
    borderColor: "border-[#FFB74D]/30",
    description: "Track real-time AI tool adoption. Monitor which sprints are 'AI-enabled' and measure the delta in throughput, quality, and velocity week-over-week.",
    metrics: ["AI-enabled sprint flag", "Tool adoption rate", "Velocity delta tracking", "SPC control chart alerts"],
  },
  {
    phase: "After",
    label: "Validated",
    color: "#3DD68C",
    bgColor: "bg-[#3DD68C]/10",
    borderColor: "border-[#3DD68C]/30",
    description: "Validate transformation ROI using Statistical Process Control. Compare post-AI metrics against pre-transformation baselines with confidence-backed evidence.",
    metrics: ["ROI quantification", "Defect leakage reduction", "Cycle time improvement", "Capability index (Cpk)"],
  },
];

const roles = [
  { role: "SUPERADMIN", level: 1, scope: "Full system access", color: "#3DD68C" },
  { role: "ADMIN", level: 1, scope: "System configuration", color: "#3DD68C" },
  { role: "CTO", level: 2, scope: "Organization-wide view", color: "#4DB846" },
  { role: "ORG", level: 2, scope: "Org hierarchy management", color: "#4DB846" },
  { role: "MARKET", level: 3, scope: "Geographic market scope", color: "#7EC8E3" },
  { role: "ACCOUNT", level: 3, scope: "Customer portfolio view", color: "#7EC8E3" },
  { role: "PROJECT_MANAGER", level: 3, scope: "Project-level control", color: "#7EC8E3" },
  { role: "TEAM_LEAD", level: 4, scope: "Team performance insights", color: "#B0BEC5" },
  { role: "TEAM", level: 4, scope: "Sprint & team metrics", color: "#B0BEC5" },
  { role: "MEMBER", level: 5, scope: "Personal dashboard & badges", color: "#90A4AE" },
];

const integrations = [
  {
    name: "Jira",
    icon: "J",
    iconBg: "bg-[#0052CC]",
    description: "Full bidirectional sprint synchronization with Jira via email + API token authentication.",
    features: [
      "Maps Jira projects, boards, and sprint endpoints",
      "Processes issue transitions in real-time via webhooks",
      "Syncs story points, status changes, and sprint completions",
      "Supports custom field mappings per project",
    ],
  },
  {
    name: "GitHub",
    icon: "G",
    iconBg: "bg-[#24292E]",
    description: "Connect to GitHub Organizations and Repositories using encrypted tokens and webhook secrets.",
    features: [
      "Pulls commit logs and authorship statistics",
      "Syncs GitHub Actions build & deployment results",
      "Captures PR review comments and approval rates",
      "Tracks contributor counts and milestone progress",
    ],
  },
];

const extendedMetrics = [
  { name: "Defect Density", desc: "Bugs per KLOC in the sprint codebase" },
  { name: "Defect Leakage", desc: "Bugs leaked to production vs. caught in QA" },
  { name: "Build Success Rate", desc: "DORA metric — successful CI builds percentage" },
  { name: "Deployment Failure Rate", desc: "DORA metric — failed deploys over total deploys" },
  { name: "Capacity Utilization", desc: "Effort spent hours vs. employee capacity hours" },
  { name: "MTTR", desc: "Mean Time to Recovery from production incidents" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CompassPage() {
  const [activePhase, setActivePhase] = useState(0);
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhase((p) => (p + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">

      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(61,214,140,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(61,214,140,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(61,214,140,0.08)_0,transparent_70%)]" />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0D1B3E] to-transparent z-10" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1B3E] to-transparent z-10" />

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/6 w-72 h-72 bg-[#3DD68C]/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-[#4DB846]/5 rounded-full blur-[120px]"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full flex flex-col items-center text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8"
          >
            {/* Badge chip */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/25 backdrop-blur-sm"
            >
              <Cpu className="w-4 h-4" />
              AI Engineering Governance Platform
            </motion.span>

            {/* Main headline */}
            <h1 className="font-[family-name:var(--font-sora)] text-5xl sm:text-6xl md:text-8xl font-black leading-none tracking-tighter">
              <span className="block text-white">Compass</span>
           
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-[family-name:var(--font-sora)] text-xl sm:text-2xl md:text-3xl font-light text-white/70 tracking-wide max-w-3xl"
            >
              Govern.{" "}
              <span className="text-[#3DD68C] font-semibold">Measure.</span>{" "}
              Transform.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              The AI-powered command center for engineering leaders to track team performance,
              measure sprint excellence, enforce SLA compliance, and validate AI transformation
              ROI — before, during, and after adoption.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <GreenButton
                href="/contact"
                className="px-10 py-5 text-base font-black tracking-wider shadow-[0_0_40px_rgba(61,214,140,0.25)] hover:shadow-[0_0_60px_rgba(61,214,140,0.4)]"
              >
                Request a Demo
              </GreenButton>
              <Link
                href="#features"
                className="flex items-center gap-2 text-white/60 hover:text-[#3DD68C] transition-colors font-semibold group"
              >
                Explore Features
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 w-full max-w-5xl"
          >
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#3DD68C]/30 via-white/5 to-[#4DB846]/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
              <div className="bg-[#0A1428] rounded-3xl overflow-hidden relative aspect-[3/2] w-full">
                <Image
                  src="/technology/compoos%20cto/compass.png"
                  alt="Compass Dashboard Mockup"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(13,27,62,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,27,62,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 11, suffix: "", label: "System Roles", sublabel: "From SUPERADMIN to MEMBER" },
              { value: 6, suffix: "", label: "Core Sprint Metrics", sublabel: "Throughput to Debt Index" },
              { value: 8, suffix: "+", label: "Platform Modules", sublabel: "Unified governance suite" },
              { value: 3, suffix: "", label: "Native Integrations", sublabel: "Jira, GitHub & more" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="font-[family-name:var(--font-sora)] text-5xl md:text-6xl font-black text-[#0D1B3E] mb-2 group-hover:text-[#3DD68C] transition-colors duration-500">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-semibold text-[#0D1B3E] text-base">{stat.label}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE FEATURES ───────────────────────────────────────────────────── */}
      <section id="features" className="py-32 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_50%_at_50%_0%,rgba(61,214,140,0.05)_0,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-6">
              <Settings className="w-4 h-4" />
              Platform Modules
            </span>
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-black text-white mb-6">
              Everything You Need to{" "}
              <span className="text-[#3DD68C]">Govern</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Eight tightly integrated modules working together to give engineering leaders complete visibility and control.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:border-[#3DD68C]/40 hover:bg-white/[0.06] transition-all duration-500 p-6 flex flex-col overflow-hidden"
              >
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#3DD68C]/10 border border-[#3DD68C]/20 flex items-center justify-center text-[#3DD68C] mb-5 group-hover:bg-[#3DD68C] group-hover:text-[#0D1B3E] group-hover:border-transparent transition-all duration-400">
                    {feature.icon}
                  </div>

                  <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold text-white mb-3 group-hover:text-[#3DD68C] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3DD68C] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6 SPRINT METRICS ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#0D1B3E]/8 text-[#0D1B3E] border border-[#0D1B3E]/15 mb-6">
              <LineChart className="w-4 h-4" />
              Engineering Intelligence
            </span>
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-black text-[#0D1B3E] mb-6">
              6 Core{" "}
              <span className="text-[#3DD68C]">Sprint Metrics</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A comprehensive measurement framework that goes beyond story points to capture true engineering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sprintMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-2xl border border-gray-100 hover:border-[#3DD68C]/40 hover:shadow-[0_20px_60px_-15px_rgba(61,214,140,0.15)] transition-all duration-500 bg-white overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3DD68C] to-[#4DB846] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="font-[family-name:var(--font-sora)] text-6xl font-black text-[#0D1B3E]/10 mb-4 leading-none group-hover:text-[#3DD68C]/20 transition-colors">
                  {metric.number}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0D1B3E]/5 flex items-center justify-center text-[#3DD68C] group-hover:bg-[#3DD68C] group-hover:text-white transition-all duration-300">
                    {metric.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-sora)] text-xl font-black text-[#0D1B3E]">
                    {metric.name}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed">{metric.definition}</p>
              </motion.div>
            ))}
          </div>

          {/* Extended metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-3xl bg-[#0D1B3E]/[0.03] border border-[#0D1B3E]/8"
          >
            <h3 className="font-[family-name:var(--font-sora)] text-2xl font-black text-[#0D1B3E] mb-8 flex items-center gap-3">
              <span className="w-10 h-1 bg-[#3DD68C] rounded-full" />
              Extended Engineering Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {extendedMetrics.map((m, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-2 h-2 rounded-full bg-[#3DD68C] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <div>
                    <p className="font-bold text-[#0D1B3E] text-sm">{m.name}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── AI TRANSFORMATION JOURNEY ───────────────────────────────────────── */}
      <section className="py-32 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(61,214,140,0.04)_0,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-6">
              <Brain className="w-4 h-4" />
              AI Adoption Intelligence
            </span>
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-black text-white mb-6">
              Measure Your{" "}
              <span className="text-[#3DD68C]">AI Transformation</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Compass uses Statistical Process Control (SPC) to provide evidence-backed measurement of AI tool adoption — from baseline capture to validated ROI.
            </p>
          </motion.div>

          {/* Phase selector tabs */}
          <div className="flex items-center justify-center gap-3 mb-12">
            {transformationPhases.map((phase, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activePhase === i
                    ? "text-[#0D1B3E] shadow-lg scale-105"
                    : "text-white/50 bg-white/5 border border-white/10 hover:border-white/20 hover:text-white/70"
                }`}
                style={activePhase === i ? { backgroundColor: phase.color } : {}}
              >
                {phase.phase}
              </button>
            ))}
          </div>

          {/* Phase detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`rounded-3xl border p-10 md:p-14 ${transformationPhases[activePhase].bgColor} ${transformationPhases[activePhase].borderColor} max-w-4xl mx-auto`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <div
                    className="inline-block px-4 py-1.5 rounded-full text-sm font-black mb-6"
                    style={{
                      backgroundColor: `${transformationPhases[activePhase].color}20`,
                      color: transformationPhases[activePhase].color,
                      border: `1px solid ${transformationPhases[activePhase].color}40`,
                    }}
                  >
                    Phase: {transformationPhases[activePhase].phase} — {transformationPhases[activePhase].label}
                  </div>
                  <h3 className="font-[family-name:var(--font-sora)] text-3xl font-black text-white mb-6 leading-tight">
                    {activePhase === 0 && "Capture the Baseline"}
                    {activePhase === 1 && "Track Live Adoption"}
                    {activePhase === 2 && "Validate & Prove ROI"}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {transformationPhases[activePhase].description}
                  </p>
                </div>
                <div className="space-y-3">
                  {transformationPhases[activePhase].metrics.map((m, i) => (
                    <motion.div
                      key={m}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-3.5 border border-white/8"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: transformationPhases[activePhase].color }} />
                      <span className="text-white/80 text-sm font-medium">{m}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

      
        </div>
      </section>

      {/* ─── PLATFORM INTEGRATIONS ───────────────────────────────────────────── */}
      <section id="integrations" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(13,27,62,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,27,62,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        {/* Animated flow styles */}
        <style>{`
          @keyframes flowDash {
            to {
              stroke-dashoffset: -20;
            }
          }
          .flow-line-animate {
            stroke-dasharray: 6, 6;
            animation: flowDash 1.2s linear infinite;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#0D1B3E]/8 text-[#0D1B3E] border border-[#0D1B3E]/15 mb-6">
              <Cpu className="w-4 h-4" />
              Automated Data Aggregation
            </span>
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-black text-[#0D1B3E] mb-6">
              Platform <span className="text-[#3DD68C]">Integrations</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Compass operates as a central aggregator, requiring minimal manual data entry by automatically syncing with your dev toolchain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
            {/* Column 1: Sources (4 Cards) */}
            <div className="lg:col-span-3 space-y-4">
              {[
                {
                  title: "Jira Cloud / Server",
                  label: "Webhooks / API",
                  desc: "Automated sync via Jira webhooks. Processes ticket transitions, story points, assignee workloads, priorities, and issue types.",
                  icon: <Settings className="w-5 h-5 text-blue-500" />,
                  borderClass: "hover:border-blue-500/30",
                },
                {
                  title: "GitHub / GitLab",
                  label: "Webhooks / Commits",
                  desc: "Captures repository metrics, milestones, commit frequencies, pull request reviews, and workflow actions.",
                  icon: <GitBranch className="w-5 h-5 text-purple-500" />,
                  borderClass: "hover:border-purple-500/30",
                },
                {
                  title: "CI/CD Pipelines",
                  label: "Deployment Logs",
                  desc: "Syncs GitHub Actions / GitLab build & deployment results, tracking deployment frequency and pipeline success.",
                  icon: <Activity className="w-5 h-5 text-emerald-500" />,
                  borderClass: "hover:border-emerald-500/30",
                },
                {
                  title: "CSV Import Engine",
                  label: "Manual Sync",
                  desc: "For legacy setups, import engineering data directly using standard template formats with live validation logs.",
                  icon: <FileText className="w-5 h-5 text-amber-500" />,
                  borderClass: "hover:border-amber-500/30",
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  className={`p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300 group ${card.borderClass}`}
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0D1B3E]">{card.title}</h4>
                      <span className="text-[9px] font-semibold text-gray-400">{card.label}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Column 2: Left Connectors (Desktop Only) */}
            <div className="lg:col-span-1 hidden lg:block relative h-[520px]">
              <svg className="w-full h-full" viewBox="0 0 100 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradient-flow-left" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.3" />
                    <stop offset="60%" stopColor="#3DD68C" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3DD68C" stopOpacity="1" />
                  </linearGradient>
                </defs>
                
                {/* Background path lines */}
                <path d="M 0 50 C 50 50, 50 200, 100 200" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 150 C 50 150, 50 200, 100 200" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 250 C 50 250, 50 200, 100 200" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 350 C 50 350, 50 200, 100 200" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
                
                {/* Animated flowing overlay paths */}
                <path d="M 0 50 C 50 50, 50 200, 100 200" fill="none" stroke="url(#gradient-flow-left)" strokeWidth="2" className="flow-line-animate" />
                <path d="M 0 150 C 50 150, 50 200, 100 200" fill="none" stroke="url(#gradient-flow-left)" strokeWidth="2" className="flow-line-animate" style={{ animationDelay: "0.3s" }} />
                <path d="M 0 250 C 50 250, 50 200, 100 200" fill="none" stroke="url(#gradient-flow-left)" strokeWidth="2" className="flow-line-animate" style={{ animationDelay: "0.6s" }} />
                <path d="M 0 350 C 50 350, 50 200, 100 200" fill="none" stroke="url(#gradient-flow-left)" strokeWidth="2" className="flow-line-animate" style={{ animationDelay: "0.9s" }} />
              </svg>
            </div>

            {/* Mobile transition spacer */}
            <div className="flex lg:hidden justify-center my-4 col-span-1">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm text-slate-400">
                <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Column 3: Compass AI Engine */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="w-full p-8 rounded-3xl bg-gradient-to-br from-[#0D1B3E] to-[#0A1530] border border-[#3DD68C]/20 shadow-[0_25px_55px_-10px_rgba(13,27,62,0.35)] text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(61,214,140,0.06)_0,transparent_70%)] pointer-events-none" />
                
                {/* Engine core icon */}
                <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-[#3DD68C]/15 border border-[#3DD68C]/20 flex items-center justify-center text-[#3DD68C] mb-6 shadow-inner">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  >
                    <Cpu className="w-8 h-8" />
                  </motion.div>
                  <div className="absolute inset-0 rounded-2xl border border-[#3DD68C]/30 animate-ping opacity-20" />
                </div>
                
                <h3 className="relative z-10 font-[family-name:var(--font-sora)] text-lg font-black text-white mb-1.5">
                  Compass Engine
                </h3>
                <span className="relative z-10 inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-wider bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/25 uppercase mb-4">
                  AI Aggregation Core
                </span>
                <p className="relative z-10 text-gray-400 text-xs leading-relaxed mb-6">
                  Aggregates, normalizes, and fencing sync datasets in real-time. Automatically tracks code commits, PR changes, and task completions.
                </p>
                
                {/* Engine modules status indicator */}
                <div className="relative z-10 space-y-2 text-left">
                  <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-[10px] text-white/70">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3DD68C] animate-pulse" />
                      Data Normalization
                    </span>
                    <span className="text-[#3DD68C] font-mono font-bold">Active</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-[10px] text-white/70">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3DD68C] animate-pulse" />
                      Framer Mapping
                    </span>
                    <span className="text-[#3DD68C] font-mono font-bold">Synced</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Column 4: Right Connector (Desktop Only) */}
            <div className="lg:col-span-1 hidden lg:block relative h-[520px]">
              <div className="w-full h-full flex items-center">
                <svg className="w-full h-10" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient-flow-right" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3DD68C" stopOpacity="1" />
                      <stop offset="50%" stopColor="#4DB846" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 20 L 100 20" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
                  <path d="M 0 20 L 100 20" fill="none" stroke="url(#gradient-flow-right)" strokeWidth="2.5" className="flow-line-animate" />
                </svg>
              </div>
            </div>

            {/* Mobile transition spacer */}
            <div className="flex lg:hidden justify-center my-4 col-span-1">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm text-slate-400">
                <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Column 5: Dashboards */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <motion.div
                whileHover={{ y: -4 }}
                className="w-full p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-[0_20px_45px_rgba(13,27,62,0.06)] hover:border-[#3DD68C]/20 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D1B3E]/5 flex items-center justify-center text-[#0D1B3E] mb-6 group-hover:bg-[#0D1B3E] group-hover:text-white transition-colors duration-300">
                  <BarChart3 className="w-6 h-6" />
                </div>
                
                <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold text-[#0D1B3E] mb-1.5 group-hover:text-[#3DD68C] transition-colors">
                  Interactive UI
                </h3>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-wider bg-[#0D1B3E]/5 text-[#0D1B3E] uppercase mb-4">
                  Next.js Dashboards
                </span>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  Renders unified organization overview charts, team-level sprint metrics, custom compliance reports, and active AI adoption indices.
                </p>
                
                {/* Simulated Graph Widget */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-100 space-y-3">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-gray-400 font-bold">Live Sync Render</span>
                    <span className="text-[#3DD68C] font-bold">100% Secure</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-12 pt-2">
                    {[30, 45, 55, 35, 50, 70, 85].map((val, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 rounded-t-sm transition-all duration-500 ${idx === 6 ? 'bg-[#3DD68C]' : 'bg-slate-200'}`}
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROLE HIERARCHY ──────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#0D1B3E] relative overflow-hidden">
        {/* Shimmer and text glow styles */}
        <style>{`
          .role-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
            transform: translateX(-100%);
            transition: transform 0.8s ease;
            pointer-events: none;
            z-index: 5;
          }
          .role-card:hover::before {
            transform: translateX(100%);
          }
          .role-text {
            transition: text-shadow 0.3s ease, transform 0.3s ease;
          }
          .role-card:hover .role-text {
            text-shadow: 0 0 10px currentColor;
          }
        `}</style>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(61,214,140,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(61,214,140,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-6">
              <Users className="w-4 h-4" />
              Access Governance
            </span>
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-black text-white mb-6">
              11-Level{" "}
              <span className="text-[#3DD68C]">Role Hierarchy</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Granular, feature-level permissions enforced at every layer — from system-wide admins to individual contributors.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-3 max-w-3xl mx-auto">
            {/* Group roles by level */}
            {[
              { level: 1, label: "System Admins", roles: roles.filter(r => r.level === 1) },
              { level: 2, label: "Executive", roles: roles.filter(r => r.level === 2) },
              { level: 3, label: "Management", roles: roles.filter(r => r.level === 3) },
              { level: 4, label: "Delivery Teams", roles: roles.filter(r => r.level === 4) },
              { level: 5, label: "Contributors", roles: roles.filter(r => r.level === 5) },
            ].map((group, gi) => (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                className="w-full"
                style={{ maxWidth: `${100 - gi * 8}%` }}
              >
                <div className="text-center mb-2">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{group.label}</span>
                </div>
                <div className={`flex gap-3 justify-center ${group.roles.length === 1 ? "" : ""}`}>
                  {group.roles.map((role, ri) => (
                    <div
                      key={ri}
                      onMouseEnter={() => setHoveredRole(role.role)}
                      onMouseLeave={() => setHoveredRole(null)}
                      className="role-card group flex-1 max-w-[220px] p-4 rounded-xl border transition-all duration-500 hover:scale-105 text-center cursor-default relative overflow-hidden"
                      style={{
                        borderColor: hoveredRole === role.role ? `${role.color}80` : `${role.color}30`,
                        backgroundColor: hoveredRole === role.role ? `${role.color}15` : `${role.color}08`,
                      }}
                    >
                      {/* Radial glow backdrop */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        style={{
                          background: `radial-gradient(120px circle at center, ${role.color}25 0%, transparent 80%)`,
                        }}
                      />
                      {/* Corner glows */}
                      <div
                        className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-750 pointer-events-none blur-xl"
                        style={{
                          background: role.color,
                        }}
                      />
                      <div
                        className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-750 pointer-events-none blur-xl"
                        style={{
                          background: role.color,
                        }}
                      />

                      <div className="relative z-10 role-text font-[family-name:var(--font-sora)] text-sm font-black mb-1" style={{ color: role.color }}>
                        {role.role}
                      </div>
                      <div className="relative z-10 text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{role.scope}</div>
                    </div>
                  ))}
                </div>
                {gi < 4 && (
                  <div className="flex justify-center mt-2">
                    <div className="w-px h-4 bg-white/15" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTEGRATIONS ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#0D1B3E]/8 text-[#0D1B3E] border border-[#0D1B3E]/15 mb-6">
              <GitPullRequest className="w-4 h-4" />
              Native Integrations
            </span>
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-black text-[#0D1B3E] mb-6">
              Connect Your{" "}
              <span className="text-[#3DD68C]">Dev Toolchain</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Compass speaks natively with your existing engineering tools, pulling real data automatically so you never enter metrics manually.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((int, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group p-10 rounded-3xl border border-gray-100 hover:border-[#3DD68C]/40 hover:shadow-[0_30px_80px_-15px_rgba(61,214,140,0.12)] transition-all duration-500"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className={`w-16 h-16 ${int.iconBg} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                    {int.icon}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-sora)] text-2xl font-black text-[#0D1B3E]">{int.name}</h3>
                    <p className="text-gray-400 text-sm">Native Integration</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">{int.description}</p>
                <ul className="space-y-4">
                  {int.features.map((f, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-[#3DD68C]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-[#3DD68C]" />
                      </div>
                      <span className="text-gray-600 text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#0D1B3E] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(61,214,140,0.1)_0,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(61,214,140,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(61,214,140,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Animated border ring */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#3DD68C]/20"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#3DD68C]/10"
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-8">
              <Zap className="w-4 h-4" />
              Get Started Today
            </span>

            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-none">
              Ready to{" "}
              <span className="text-[#3DD68C]">Govern</span>
              <br />
              Engineering Excellence?
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join forward-thinking CTOs using Compass to drive measurable engineering performance, ensure SLA compliance, and prove AI transformation ROI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <GreenButton
                href="/contact"
                className="px-12 py-5 text-base font-black tracking-wider shadow-[0_0_50px_rgba(61,214,140,0.3)] hover:shadow-[0_0_70px_rgba(61,214,140,0.5)]"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </GreenButton>
              <Link
                href="/technology"
                className="flex items-center gap-2 text-white/60 hover:text-[#3DD68C] transition-colors font-semibold group"
              >
                Explore All Products
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
