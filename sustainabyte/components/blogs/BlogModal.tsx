"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  Quote,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { BlogPost } from "@/lib/blogsData";
import ShareButtons from "@/app/blogs/[slug]/ShareButtons";

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!post) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [post, onClose]);

  return (
    <AnimatePresence>
      {post && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0D1B3E]/85 backdrop-blur-md z-[101]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl z-[102] flex flex-col overflow-hidden border border-white/20"
          >
            {/* Modal Top Bar (Above Navbar) */}
            <div className="shrink-0 bg-[#0D1B3E] text-white px-5 sm:px-8 py-3.5 flex items-center justify-between border-b border-white/10 shadow-sm z-10">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-3 py-1 rounded-full bg-[#4DB846]/20 border border-[#4DB846]/40 text-[#4DB846] text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                  {post.tag}
                </span>
                <span className="hidden md:inline-block text-xs text-gray-300">
                  {post.category}
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close article popup"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 hover:text-[#4DB846] text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-8 md:px-10 py-6 sm:py-8 space-y-6 sm:space-y-8 font-[family-name:var(--font-sora)]">
              {/* Title & Metadata */}
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0D1B3E] leading-tight mb-4">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-gray-100 text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#4DB846] flex items-center justify-center font-bold text-white text-sm shrink-0">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0D1B3E] text-sm leading-snug">{post.author.name}</p>
                      <p className="text-gray-400 text-xs">{post.author.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#4DB846]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#4DB846]" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              {/* Intro Box */}
              <div className="text-sm sm:text-base text-[#0D1B3E] font-medium leading-relaxed p-5 sm:p-6 rounded-2xl bg-gray-50 border-l-4 border-[#4DB846]">
                {post.content.intro}
              </div>

              {/* Sections */}
              <div className="space-y-8 sm:space-y-10">
                {post.content.sections.map((section) => (
                  <div key={section.id} className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0D1B3E]">
                      {section.heading}
                    </h2>

                    {section.subheading && (
                      <p className="text-xs font-semibold text-[#4DB846] uppercase tracking-wider">
                        {section.subheading}
                      </p>
                    )}

                    {section.paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}

                    {/* Bullet Points */}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="space-y-2.5 my-3 sm:my-4 pl-1">
                        {section.bulletPoints.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-gray-700 text-xs sm:text-sm leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#4DB846] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Quote */}
                    {section.quote && (
                      <div className="my-5 p-5 rounded-2xl bg-[#0D1B3E] text-white relative overflow-hidden">
                        <Quote className="w-10 h-10 text-[#4DB846]/20 absolute right-3 bottom-2" />
                        <p className="text-xs sm:text-sm md:text-base font-semibold italic text-white leading-relaxed relative z-10">
                          &ldquo;{section.quote}&rdquo;
                        </p>
                      </div>
                    )}

                    {/* Callout */}
                    {section.callout && (
                      <div className="my-5 p-4 sm:p-5 rounded-2xl bg-[#eaf4eb] border border-[#4DB846]/30">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#3DA45C] mb-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          {section.callout.title}
                        </div>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          {section.callout.text}
                        </p>
                      </div>
                    )}

                    {/* Metrics */}
                    {section.metrics && section.metrics.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
                        {section.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col justify-between"
                          >
                            <div className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                              <TrendingUp className="w-3 h-3 text-[#4DB846]" />
                              {metric.label}
                            </div>
                            <div className="text-lg sm:text-xl font-bold text-[#0D1B3E] mb-1">
                              {metric.value}
                            </div>
                            <p className="text-[10px] sm:text-[11px] text-gray-500 leading-snug">
                              {metric.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-[#eaf4eb]/50 border border-[#4DB846]/20">
                <h3 className="text-base sm:text-lg font-bold text-[#0D1B3E] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4DB846]" />
                  Key Takeaways
                </h3>
                <ul className="space-y-2">
                  {post.content.keyTakeaways.map((takeaway, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4DB846] shrink-0 mt-1.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200">
                <h3 className="text-sm sm:text-base font-bold text-[#0D1B3E] mb-2">Conclusion</h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {post.content.conclusion}
                </p>
              </div>

              {/* Share & Actions */}
              <div className="pt-4 border-t border-gray-100">
                <ShareButtons title={post.title} slug={post.slug} />
              </div>
            </div>

            {/* Modal Bottom Sticky Bar */}
            <div className="shrink-0 bg-gray-50/95 backdrop-blur px-5 sm:px-8 py-3 border-t border-gray-100 flex items-center justify-end z-10">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-[#0D1B3E] hover:bg-[#0A1530] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close Reader
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
