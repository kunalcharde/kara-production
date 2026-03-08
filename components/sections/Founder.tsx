"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Ribbon } from "lucide-react";
import { founder } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUpView, slideInLeft, slideInRight } from "@/lib/animations";

export function Founder() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <motion.div
          initial={fadeUpView.initial}
          whileInView={fadeUpView.whileInView}
          viewport={fadeUpView.viewport}
          transition={fadeUpView.transition}
          className="mb-14"
        >
          <SectionHeading title="Leadership" subtitle="Founder" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={slideInLeft.initial}
            whileInView={slideInLeft.whileInView}
            viewport={slideInLeft.viewport}
            transition={{ ...slideInLeft.transition, delay: 0.1 }}
          >
            <motion.div
              className="relative aspect-[4/5] max-w-md mx-auto rounded-lg overflow-hidden ring-1 ring-black/10 dark:ring-white/10 ring-offset-4 ring-offset-background bg-surface"
              aria-hidden
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 448px"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2 space-y-6"
            initial={slideInRight.initial}
            whileInView={slideInRight.whileInView}
            viewport={slideInRight.viewport}
            transition={{ ...slideInRight.transition, delay: 0.15 }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-1">
              {founder.name}
            </h3>
            <p className="text-accent font-medium text-sm sm:text-base mb-8 font-sans">{founder.role}</p>

            <div>
              <h4 className="flex items-center gap-2 text-foreground font-sans font-medium mb-3">
                <span className="text-accent" aria-hidden>
                  <Trophy className="size-5 shrink-0" />
                </span>
                Achievements
              </h4>
              <ul className="space-y-2.5 font-sans">
                {founder.achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2.5 text-foreground"
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  >
                    <span className="text-accent mt-0.5 shrink-0" aria-hidden>
                      <Ribbon className="size-4 shrink-0" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.blockquote
              className="border-l-4 border-accent pl-5 py-3 my-8 text-foreground italic font-serif text-lg sm:text-xl"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              &ldquo;{founder.quote}&rdquo;
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button href="#contact" variant="primary">
                {founder.ctaLabel}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
