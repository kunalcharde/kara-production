"use client";

import { motion } from "framer-motion";
import { hero, site } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center border-b border-[var(--border)] bg-hero-gradient overflow-hidden"
      aria-label="Hero"
    >
      {/* Low-opacity gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 20%, rgba(58, 48, 120, 0.12) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 20% 70%, rgba(45, 91, 255, 0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 85% 50%, rgba(138, 43, 226, 0.06) 0%, transparent 45%)",
        }}
      />
      <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
      <Container className="relative z-10 pt-24 pb-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-section-label uppercase text-muted font-sans mb-4"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            {site.tagline}
          </motion.p>
          <motion.h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-4"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={fadeUp.transition}
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-muted font-sans mb-6"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
          >
            {hero.subline}
          </motion.p>
          <motion.div
            className="h-px w-16 mx-auto mb-8 bg-primary"
            initial={{ opacity: 1, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            aria-hidden
          />
          <motion.p
            className="text-base text-muted leading-relaxed text-center max-w-xl mx-auto mb-10"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            {hero.description}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            <Button href="#pageants" variant="primary" className="min-w-[160px]">
              {hero.ctaPrimary}
            </Button>
            <Button href="#contact" variant="secondary" className="min-w-[160px]">
              {hero.ctaSecondary}
            </Button>
            <Button href="/apply" variant="secondary" className="min-w-[160px]">
              {hero.ctaTertiary}
            </Button>
          </motion.div>
        </div>
      </Container>
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-sans">Scroll</span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
