"use client";

import { motion } from "framer-motion";
import { Globe, Award, Users, TrendingUp, LucideIcon } from "lucide-react";
import { achievements } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { fadeUpView } from "@/lib/animations";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  award: Award,
  users: Users,
  "trending-up": TrendingUp,
};

export function Achievements() {
  const cards = achievements.cards;

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <motion.div
          initial={fadeUpView.initial}
          whileInView={fadeUpView.whileInView}
          viewport={fadeUpView.viewport}
          transition={fadeUpView.transition}
          className="mb-14 text-center"
        >


          <SectionHeading title={achievements.title} subtitle={achievements.sectionLabel} />

          <p className="text-muted font-sans mt-4 max-w-2xl mx-auto">
            {achievements.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((item, i) => {
            const IconComponent = iconMap[item.icon] ?? Award;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-full"
              >
                <Card hover={false} className="text-center p-6 sm:p-8 h-full flex flex-col items-center">
                  <span
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-accent text-accent mb-4"
                    aria-hidden
                  >
                    <IconComponent className="size-7" />
                  </span>
                  <p className="text-foreground font-sans font-medium">{item.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="text-center text-muted font-sans mt-10 sm:mt-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {achievements.footerText.split(achievements.footerHighlight).map((part, i) => (
            <span key={i}>
              {part}
              {i === 0 && (
                <strong className="text-accent font-semibold">
                  {achievements.footerHighlight}
                </strong>
              )}
            </span>
          ))}
        </motion.p>
      </Container>
    </section>
  );
}
