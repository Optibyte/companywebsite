"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GreenButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "dark";
  className?: string;
  type?: "button" | "submit";
}

export default function GreenButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: GreenButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-[#3DD68C] text-[#0D1B3E] hover:bg-[#2bc478] hover:shadow-[0_0_30px_rgba(61,214,140,0.4)]",
    outline:
      "border-2 border-[#3DD68C] text-[#3DD68C] hover:bg-[#3DD68C] hover:text-[#0D1B3E]",
    dark: "bg-[#1A3A4A] text-white hover:bg-[#1A2D5A] hover:shadow-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const MotionComponent = motion.create("button");
  const MotionLink = motion.create(Link);

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </MotionComponent>
  );
}
