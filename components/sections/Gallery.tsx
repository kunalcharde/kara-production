"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gallery } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const INITIAL_COUNT = 6;

export function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const visibleGallery = expanded ? gallery : gallery.slice(0, INITIAL_COUNT);
  const hasMore = gallery.length > INITIAL_COUNT;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeLightbox]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      closeButtonRef.current?.focus();
    }
  }, [lightboxIndex]);

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14"
        >
          <SectionHeading title="Gallery" subtitle="Moments" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleGallery.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--surface)] group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setLightboxIndex(gallery.findIndex((g) => g.id === item.id))}
              aria-label={`View ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain rounded-2xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-white font-medium">View</span>
              </motion.div>
            </motion.button>
          ))}
        </div>
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="px-6 py-3 rounded-xl font-medium text-foreground bg-accent/10 hover:bg-accent/20 text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-colors"
            >
              {expanded ? "View less" : "View more"}
            </button>
          </motion.div>
        )}
      </Container>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl p-2 focus:outline-none focus:ring-2 focus:ring-white rounded"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <motion.div
              className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center px-2"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {gallery[lightboxIndex] && (
                <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                  <Image
                    src={gallery[lightboxIndex].src}
                    alt={gallery[lightboxIndex].alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
