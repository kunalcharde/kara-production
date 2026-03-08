"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { contact } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { fadeUpView } from "@/lib/animations";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const socialIcons: Record<string, (props: { className?: string }) => JSX.Element> = {
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
};

export function Contact() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <motion.div
          initial={fadeUpView.initial}
          whileInView={fadeUpView.whileInView}
          viewport={fadeUpView.viewport}
          transition={fadeUpView.transition}
          className="text-center mb-16"
        >
          <SectionHeading title="Contact" subtitle="Get in touch" />
          <p className="text-muted font-sans max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            {contact.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 max-w-5xl mx-auto">
          <motion.a
            href={`mailto:${contact.email}`}
            className="group text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 transition-colors" aria-hidden>
              <Mail className="size-6" />
            </span>
            <p className="text-xs font-medium uppercase tracking-wider text-muted font-sans mb-2">
              {contact.cardLabels.email}
            </p>
            <span className="text-foreground font-sans font-medium group-hover:text-accent transition-colors break-all">
              {contact.email}
            </span>
          </motion.a>

          <motion.a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="group text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 transition-colors" aria-hidden>
              <Phone className="size-6" />
            </span>
            <p className="text-xs font-medium uppercase tracking-wider text-muted font-sans mb-2">
              {contact.cardLabels.phone}
            </p>
            <span className="text-foreground font-sans font-medium group-hover:text-accent transition-colors">
              {contact.phone}
            </span>
          </motion.a>

          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4" aria-hidden>
              <MapPin className="size-6" />
            </span>
            <p className="text-xs font-medium uppercase tracking-wider text-muted font-sans mb-2">
              {contact.cardLabels.location}
            </p>
            <p className="text-foreground font-sans font-medium">
              {contact.officeAddress}
            </p>
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4" aria-hidden>
              <Share2 className="size-6" />
            </span>
            <p className="text-xs font-medium uppercase tracking-wider text-muted font-sans mb-2">
              {contact.cardLabels.connect}
            </p>
          
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {contact.socials.map((s, i) => {
                const Icon = socialIcons[s.name] ?? Share2;
                return (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[var(--border)] text-muted hover:text-foreground hover:border-accent/50 hover:bg-accent/5 transition-colors"
                    aria-label={s.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="size-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {contact.mapEmbedUrl && (
          <motion.div
            className="mt-16 rounded-2xl overflow-hidden border border-[var(--border)] aspect-video max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe
              src={contact.mapEmbedUrl}
              title="Office location"
              className="w-full h-full min-h-[280px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        )}

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-sans font-medium bg-accent text-background hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent"
          >
            Get in Touch
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
