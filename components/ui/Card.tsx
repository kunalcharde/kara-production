"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  const baseClass =
    "glass-card rounded-lg p-6 transition-all duration-200 hover:border-white/12 hover:bg-white/[0.07]";

  if (hover) {
    return (
      <motion.div
        className={`${baseClass} ${className}`}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseClass} ${className}`}>{children}</div>;
}
