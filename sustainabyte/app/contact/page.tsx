"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import GreenButton from "@/components/ui/GreenButton";

const contactInfo = [
  { icon: Phone, label: "Phone", lines: ["+91 83770 07638", "+91 73059 54384"] },
  { icon: Mail, label: "Email", lines: ["info@sustainabyte.ai"] },
  { icon: MapPin, label: "Address", lines: ["Chennai, Tamil Nadu, India"] },
  { icon: Clock, label: "Working Hours", lines: ["Monday to Friday"] },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px]" style={{ background: "radial-gradient(circle, rgba(61,214,140,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-4 sm:mb-6">
              <MessageCircle className="w-4 h-4" /> Get In Touch
            </span>
            <h1 className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Contact <span className="text-[#3DD68C]">Us</span>
            </h1>
            <p className="text-[#B0BEC5] text-base sm:text-lg leading-relaxed">Ready to make your facility EPIC? Get in touch with our team to discuss your energy efficiency and sustainability goals.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-[#0D1B3E] mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input id="firstName" type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3DD68C] focus:outline-none focus:ring-2 focus:ring-[#3DD68C]/20 transition-all bg-[#F5F7FA] text-[#0D1B3E]" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input id="lastName" type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3DD68C] focus:outline-none focus:ring-2 focus:ring-[#3DD68C]/20 transition-all bg-[#F5F7FA] text-[#0D1B3E]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input id="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3DD68C] focus:outline-none focus:ring-2 focus:ring-[#3DD68C]/20 transition-all bg-[#F5F7FA] text-[#0D1B3E]" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input id="company" type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3DD68C] focus:outline-none focus:ring-2 focus:ring-[#3DD68C]/20 transition-all bg-[#F5F7FA] text-[#0D1B3E]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3DD68C] focus:outline-none focus:ring-2 focus:ring-[#3DD68C]/20 transition-all bg-[#F5F7FA] text-[#0D1B3E] resize-none" />
                </div>
                <GreenButton type="submit" variant="primary">
                  <Send className="w-4 h-4" />
                  {submitted ? "Message Sent!" : "Send Message"}
                </GreenButton>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-[#0D1B3E] mb-8">Contact Information</h2>
              <div className="space-y-8 mb-12">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#3DD68C]/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#3DD68C]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-sora)] font-semibold text-[#0D1B3E] mb-1">{info.label}</h3>
                      {info.lines.map((line, j) => (
                        <p key={j} className="text-gray-600 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1B3E] text-center">
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-white mb-3">Prefer WhatsApp?</h3>
                <p className="text-[#B0BEC5] text-sm mb-6">Chat with us directly for quick responses</p>
                <GreenButton href="https://wa.me/918377007638" variant="primary">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </GreenButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
