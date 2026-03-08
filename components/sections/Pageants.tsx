"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pageants } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { fadeUpView } from "@/lib/animations";

export function Pageants() {
  return (
    <section
      className="py-16 sm:py-24 relative bg-section-gradient overflow-hidden"
      id="pageants"
    >
      <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <motion.div
          initial={fadeUpView.initial}
          whileInView={fadeUpView.whileInView}
          viewport={fadeUpView.viewport}
          transition={fadeUpView.transition}
          className="mb-12"
        >
          <SectionHeading title="Our Pageants" subtitle="Our platforms" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pageants.map((pageant, i) => (
            <motion.div
              key={pageant.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="h-full group"
            >
              <Card
                hover={false}
                className="h-full flex flex-col transition-shadow duration-300 group-hover:shadow-[0_0_32px_rgba(58,48,120,0.4)]"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {pageant.title}
                </h3>
                <p className="text-muted font-sans text-sm leading-relaxed flex-1">
                  {pageant.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={`/pageants/${pageant.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    About & Gallery
                    <span aria-hidden>→</span>
                  </Link>
                  <a
                    href={pageant.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm py-2 px-4 rounded font-medium border border-black/15 dark:border-white/20 text-foreground bg-black/[0.04] dark:bg-white/[0.03] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Apply
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
