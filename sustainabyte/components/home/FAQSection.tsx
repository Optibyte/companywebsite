"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import Script from "next/script";
import { faqPageSchema } from "@/lib/seo";

const faqs = [
  {
    q: "What is AI-powered energy management?",
    a: "AI-powered energy management uses artificial intelligence and machine learning to continuously monitor, analyze, and optimize your facility's energy consumption in real-time. It automates decision-making to reduce energy costs, emissions, and operational complexity.",
  },
  {
    q: "How much energy savings can I expect with Sustainabyte?",
    a: "Our clients typically achieve 25-35% energy cost reductions within the first year through a combination of efficiency improvements, optimization, and behavioral changes. Results are validated using IPMVP-compliant Measurement & Verification.",
  },
  {
    q: "Which industries does Sustainabyte serve?",
    a: "We support commercial buildings, manufacturing facilities, hospitals, retail chains, educational institutions, and data centers across India. Our solutions are customized for each industry's unique energy challenges.",
  },
  {
    q: "Is Sustainabyte available across India?",
    a: "Yes, we operate across India with headquarters in Chennai and serve clients nationwide. We also support clients in the Middle East and are expanding globally.",
  },
];

const faqSchema = faqPageSchema(
  faqs.map(faq => ({
    question: faq.q,
    answer: faq.a,
  }))
);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-4 max-w-2xl mx-auto text-sm"
          >
            Find quick answers about our solutions, technology, and approach to
            energy efficiency and sustainability. These FAQs help you understand
            how Sustainabyte supports your  journey toward Net Zero.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-10 sm:mb-14"
          >
            <span className="text-[#3DD68C]">FAQ</span>
          </motion.h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="border-b border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
                >
                  <span className="font-[family-name:var(--font-sora)] font-semibold text-[#0D1B3E] text-sm md:text-base pr-4 group-hover:text-[#3DD68C] transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? "bg-[#3DD68C]" : "bg-gray-100"
                      }`}
                  >
                    {openIndex === i ? (
                      <X className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#0D1B3E]" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="pb-5 text-gray-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
