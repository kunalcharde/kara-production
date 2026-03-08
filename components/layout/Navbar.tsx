"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { site } from "@/lib/data";

const LOGO_SRC = "/images/kara.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#pageants", label: "Our Pageants" },
  { href: "#services", label: "Services" },
  { href: "#founder", label: "Leadership" },
  { href: "#gallery", label: "Gallery" },
  { href: "#winners", label: "Past Winners" },
  { href: "#sponsors", label: "Sponsors" },
  // { href: "#media", label: "Media" },
  { href: "/apply", label: "Apply Now" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme !== "light";

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--border)]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity h-12" aria-label={site.name + " home"}>
            <Image
              src={LOGO_SRC}
              alt=""
              width={56}
              height={56}
              className="h-12 w-auto object-contain rounded-sm"
            />
          </Link>
        </motion.div>
        <ul className="hidden lg:flex flex-wrap gap-x-6 gap-y-1 items-center">
          {navLinks.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
            >
              <Link
                href={item.href}
                className="text-sm font-sans text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </motion.button>
          <motion.button
            type="button"
            className="md:hidden p-2 text-muted hover:text-foreground"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
            whileTap={{ scale: 0.95 }}
          >
            {mobileOpen ? "Close" : "Menu"}
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            className="md:hidden border-t border-[var(--border)] py-4 px-4 flex flex-col gap-1 glass overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {navLinks.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
              >
                <Link
                  href={item.href}
                  className="block py-2 text-muted hover:text-foreground font-sans"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
