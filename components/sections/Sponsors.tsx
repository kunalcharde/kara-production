"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sponsors } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { fadeUpView } from "@/lib/animations";

export function Sponsors() {
  // Duplicate list for seamless infinite scroll
  const duplicated = [...sponsors, ...sponsors];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="sponsors">
      <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <motion.div
          initial={fadeUpView.initial}
          whileInView={fadeUpView.whileInView}
          viewport={fadeUpView.viewport}
          transition={fadeUpView.transition}
          className="mb-12"
        >
          <SectionHeading title="Sponsors & Partners" subtitle="Our partners" />
        </motion.div>
        <motion.div
          className="relative -mx-4 sm:-mx-6 md:-mx-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex gap-12 md:gap-16 animate-sponsor-scroll shrink-0"
              style={{ width: "max-content" }}
              aria-hidden
            >
              {duplicated.map((sponsor, i) => (
                <div
                  key={`${sponsor.category}-${sponsor.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center w-36 h-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={144}
                    height={96}
                    className="object-contain max-h-20 w-auto"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="sr-only">
            Auto-scrolling list of {sponsors.length} sponsors and partners.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
