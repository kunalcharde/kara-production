"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pastWinners } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { fadeUpView } from "@/lib/animations";

export function PastWinners() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="winners">
      <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <motion.div
          initial={fadeUpView.initial}
          whileInView={fadeUpView.whileInView}
          viewport={fadeUpView.viewport}
          transition={fadeUpView.transition}
          className="mb-12"
        >
          <SectionHeading title="Past Winners" subtitle="Celebrating excellence" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastWinners.map((winner, i) => (
            <motion.div
              key={winner.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card hover={false} className="h-full overflow-hidden flex flex-col">
                <div className="relative aspect-[3/4] bg-[var(--surface)]">
                  <Image
                    src={winner.image}
                    alt={winner.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="font-serif font-semibold text-foreground text-lg">
                    {winner.name}
                  </p>
                  <p className="text-accent font-sans text-sm font-medium mt-1">
                    {winner.title} · {winner.year}
                  </p>
                  <p className="text-muted font-sans text-sm leading-relaxed mt-2">
                    {winner.achievement}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
