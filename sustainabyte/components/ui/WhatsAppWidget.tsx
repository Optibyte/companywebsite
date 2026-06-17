"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  // Show tooltip after a brief delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleWidgetToggle = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
    setHasNotification(false);
  };

  const closeTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
    setHasNotification(false);
  };

  const whatsappUrl = "https://wa.me/918377007638?text=Hello!%20I%20visited%20your%20website%20and%20would%20like%20to%20learn%20more%20about%20Sustainabyte%27s%20AI-Powered%20Energy%20Intelligence%20solutions.";

  return (
    <div className="fixed bottom-6 right-6 z-50 font-[family-name:var(--font-dm-sans)]">
      {/* Small notification/welcome tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={handleWidgetToggle}
            className="absolute bottom-18 right-2 bg-[#0D1B3E]/95 border border-[#3DD68C]/30 text-white p-3.5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-md w-64 cursor-pointer hover:border-[#3DD68C]/60 transition-colors"
          >
            <div className="flex justify-between items-start gap-2 mb-1">
              <span className="font-semibold text-xs text-[#00FFAA] tracking-wider uppercase">Sustainabyte Support</span>
              <button
                onClick={closeTooltip}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close message"
              >
                <X size={14} />
              </button>
            </div>
            <p className="text-xs text-gray-200 leading-relaxed">
              👋 Have questions about optimizing your facility's energy or Net Zero? Let's chat!
            </p>
            {/* Tooltip speech bubble tail */}
            <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-[#0D1B3E] border-r border-b border-[#3DD68C]/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute bottom-18 right-0 w-[320px] sm:w-[350px] rounded-2xl bg-[#0D1B3E]/95 border border-[#3DD68C]/30 shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Avatar with pulsing online indicator */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg border border-white/40">
                    S
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#128C7E] animate-pulse" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Sustainabyte Support</h4>
                  <p className="text-[11px] text-white/80">Typically replies in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-black/15 hover:bg-black/30 flex items-center justify-center transition-colors text-white"
                aria-label="Close chat window"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Body Area */}
            <div className="p-4 bg-[#0A1128]/80 space-y-4 max-h-[260px] overflow-y-auto min-h-[150px] flex flex-col justify-end">
              {/* Message from support */}
              <div className="bg-[#1A2D5A] border border-[#27A37B]/10 rounded-2xl rounded-tl-none p-3.5 max-w-[85%] text-sm text-gray-100 shadow-sm self-start">
                <p className="leading-relaxed">
                  Hi there! 👋 Welcome to Sustainabyte Technologies.
                </p>
                <p className="mt-2 leading-relaxed">
                  How can we assist you with our AI-powered energy management solutions or Net Zero roadmap today?
                </p>
                <span className="block text-[10px] text-gray-400 text-right mt-1.5">
                  Just now
                </span>
              </div>
            </div>

            {/* CTA / Action Button */}
            <div className="p-4 bg-[#0D1B3E] border-t border-[#3DD68C]/10 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-[#0D1B3E] font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] group hover:scale-[1.02]"
              >
                {/* Custom SVG logo inside button */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 transition-transform group-hover:rotate-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.948 9.948 0 0 0 4.808 1.226h.004c5.505 0 9.99-4.477 9.99-9.985C22.008 6.478 17.521 2 12.012 2zm6.59 14.16c-.287.808-1.42 1.484-1.96 1.547-.492.057-1.127.087-2.316-.395-2.091-.847-3.418-2.986-3.523-3.125-.104-.14-1.13-1.496-1.13-2.854 0-1.359.704-2.025.955-2.285.251-.26.549-.325.733-.325.183 0 .367.001.527.009.168.008.396-.062.617.472.229.554.778 1.884.846 2.024.068.14.114.304.022.487-.09.183-.137.297-.274.456-.137.16-.288.358-.41.48-.137.137-.282.287-.122.56.16.273.712 1.168 1.527 1.892.815.724 1.503.95 1.716 1.056.213.106.338.087.46-.057.123-.144.527-.611.666-.819.14-.207.279-.174.472-.102.193.072 1.222.574 1.431.678.209.104.348.156.402.247.054.092.054.53-.233 1.338z" />
                </svg>
                <span>Start WhatsApp Chat</span>
                <Send size={14} className="ml-1 opacity-80" />
              </a>
              <span className="text-[10px] text-center text-gray-400 mt-1">
                Opens secure WhatsApp application or web portal.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Floating Button Badge */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWidgetToggle}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_5px_20px_rgba(37,211,102,0.4)] hover:bg-[#20ba5a] transition-colors cursor-pointer"
        aria-label="Open WhatsApp Chat Widget"
      >
        {/* Pulsing outer ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-md animate-pulse pointer-events-none" />

        {/* Dynamic Notification Indicator */}
        {hasNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFAA] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00FFAA] border-2 border-[#0A1128] text-[8px] font-bold text-[#0D1B3E] items-center justify-center">
              1
            </span>
          </span>
        )}

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.948 9.948 0 0 0 4.808 1.226h.004c5.505 0 9.99-4.477 9.99-9.985C22.008 6.478 17.521 2 12.012 2zm6.59 14.16c-.287.808-1.42 1.484-1.96 1.547-.492.057-1.127.087-2.316-.395-2.091-.847-3.418-2.986-3.523-3.125-.104-.14-1.13-1.496-1.13-2.854 0-1.359.704-2.025.955-2.285.251-.26.549-.325.733-.325.183 0 .367.001.527.009.168.008.396-.062.617.472.229.554.778 1.884.846 2.024.068.14.114.304.022.487-.09.183-.137.297-.274.456-.137.16-.288.358-.41.48-.137.137-.282.287-.122.56.16.273.712 1.168 1.527 1.892.815.724 1.503.95 1.716 1.056.213.106.338.087.46-.057.123-.144.527-.611.666-.819.14-.207.279-.174.472-.102.193.072 1.222.574 1.431.678.209.104.348.156.402.247.054.092.054.53-.233 1.338z" />
        </svg>
      </motion.button>
    </div>
  );
}
