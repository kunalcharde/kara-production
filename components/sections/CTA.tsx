"use client";

import { motion } from "framer-motion";
import { Handshake, Users, MessageCircle, ArrowRight } from "lucide-react";
import { cta } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ClientIcon } from "@/components/ui/ClientIcon";
import { fadeUpView } from "@/lib/animations";

const cardIcons = [Users, Handshake, MessageCircle];

export function CTA() {
  return (
    <section className="py-20 sm:py-28 relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none dark:from-white/5" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.03] dark:via-white/[0.03] to-transparent pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={fadeUpView.initial}
          whileInView={fadeUpView.whileInView}
          viewport={fadeUpView.viewport}
          transition={fadeUpView.transition}
        >
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-3">
            {cta.headline}
          </h2>
          <span className="block w-16 h-0.5 bg-white/70 mx-auto mb-6 rounded-full" aria-hidden />
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-sans">
            {cta.subheadline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cta.cards.map((card, i) => {
            const IconComponent = cardIcons[i] ?? MessageCircle;
            const isFirst = i === 0;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-lg bg-black/[0.08] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 backdrop-blur-xl p-6 sm:p-8 flex flex-col text-center h-full"
              >
                <span
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/15 border border-white/25 text-white mx-auto mb-4"
                  aria-hidden
                >
                  <ClientIcon icon={IconComponent} className="size-7" aria-hidden />
                </span>
                <h3 className="font-serif text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/75 text-sm font-sans mb-6 flex-1">
                  {card.description}
                </p>
                <Button
                  href={i === 0 ? "/apply" : "#contact"}
                  variant={isFirst ? "primary" : "secondary"}
                  className={`w-full sm:w-auto min-w-[140px] inline-flex items-center justify-center gap-1.5 font-sans ${!isFirst ? "text-white border-white/30 hover:bg-white/15" : ""}`}
                >
                  {i === 0 ? cta.buttonLabelApply : cta.buttonLabelPartner}
                  <ClientIcon icon={ArrowRight} className="size-4" aria-hidden />
                </Button>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
