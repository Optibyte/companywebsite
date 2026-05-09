"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin
} from "lucide-react";
import Image from "next/image";
import GreenButton from "@/components/ui/GreenButton";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    mobile: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    const form = e.currentTarget as HTMLFormElement;
    const data = {
      type: "contact",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value,
      mobile: (form.elements.namedItem("mobile") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We will contact you soon.", { id: loadingToast });
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Error sending message. Check your connection.", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/Contact%20Us/Contact-Us-BG-scaled.webp"
          alt="Contact Us Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0D1B3E]/60 backdrop-blur-sm" />
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 font-[family-name:var(--font-sora)] text-5xl md:text-7xl font-bold text-white text-center"
        >
          Contact Us
        </motion.h1>
      </section>

      {/* ── MAIN CONTENT: LOCATIONS & FORM ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* LEFT: OUR LOCATIONS */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-[#0D1B3E] mb-10">Our Locations</h2>
                
                {/* Map Placeholder/Iframe */}
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl mb-10">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.2345!2d80.17!3d12.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0000000000%3A0x0!2sMadambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#3DD68C]/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#3DD68C]" />
                    </div>
                    <p className="text-gray-600 font-medium text-lg">Madambakkam, Chennai, Tamil Nadu, India</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#3DD68C]/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#3DD68C]" />
                    </div>
                    <p className="text-gray-600 font-medium text-lg">info@sustainabyte.ai</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#3DD68C]/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#3DD68C]" />
                    </div>
                    <p className="text-gray-600 font-medium text-lg">+91 8377007638, +917305954384</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-[3rem] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100"
            >
              <h2 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-[#0D1B3E] mb-4">Get In Touch</h2>
              <p className="text-gray-500 mb-10 text-lg">Fill out the form below and our team will get back to you within 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0D1B3E]">Name*</label>
                    <input name="name" type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0D1B3E]">Email*</label>
                    <input name="email" type="email" required className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0D1B3E]">Organization Name*</label>
                  <input name="organization" type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0D1B3E]">Mobile Number</label>
                  <input name="mobile" type="tel" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0D1B3E]">Message</label>
                  <textarea name="message" rows={4} className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] transition-all resize-none"></textarea>
                </div>
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-5 bg-[#3DD68C] hover:bg-[#2bc478] text-[#0D1B3E] rounded-xl font-bold text-lg transition-all shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
