"use client";

import { motion } from "framer-motion";
import { Video, Sparkles, Megaphone, Handshake } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { fadeUpView } from "@/lib/animations";

const serviceIcons = [Video, Sparkles, Megaphone, Handshake];

export function Services() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="services">
      <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <motion.div
          initial={fadeUpView.initial}
          whileInView={fadeUpView.whileInView}
          viewport={fadeUpView.viewport}
          transition={fadeUpView.transition}
          className="mb-12"
        >
          <SectionHeading title="Services" subtitle="What we offer" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const IconComponent = serviceIcons[i] ?? Video;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Card hover={false} className="h-full flex flex-col items-center text-center p-6 sm:p-8">
                  <span
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-accent text-accent mb-4"
                    aria-hidden
                  >
                    <IconComponent className="size-7" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted font-sans text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
