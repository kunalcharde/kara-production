"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { mediaCoverage } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { fadeUpView } from "@/lib/animations";

export function MediaCoverage() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="media">
      <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <motion.div
          initial={fadeUpView.initial}
          whileInView={fadeUpView.whileInView}
          viewport={fadeUpView.viewport}
          transition={fadeUpView.transition}
          className="mb-12"
        >
          <SectionHeading title="Media Coverage" subtitle="As seen in" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {mediaCoverage.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 hover:bg-[var(--surface)] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className="text-xs font-medium uppercase tracking-wider text-muted font-sans mb-3">
                {item.type}
              </span>
              <div className="relative w-24 h-12 mb-3">
                <Image
                  src={item.logoUrl}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-sans font-medium text-foreground">{item.title}</span>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
