"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  const baseClass =
    "backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-out";

  if (hover) {
    return (
      <motion.div
        className={`${baseClass} ${className}`}
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseClass} ${className}`}>{children}</div>;
}
