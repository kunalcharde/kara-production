"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";

type Pageant = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  link: string;
};

export default function ApplyPageClient({ pageants }: { pageants: Pageant[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {pageants.map((pageant, i) => (
        <motion.a
          key={pageant.id}
          href={pageant.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="block group"
        >
          <Card
            hover={false}
            className="h-full flex flex-col p-6 transition-shadow duration-300 group-hover:shadow-[0_0_32px_rgba(58,48,120,0.25)] group-hover:border-accent/30"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              {pageant.title}
            </h3>
            <p className="text-muted font-sans text-sm leading-relaxed flex-1 mb-4">
              {pageant.shortDescription}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:underline">
              Apply on official site
              <ExternalLink className="size-4 shrink-0" />
            </span>
          </Card>
        </motion.a>
      ))}
    </div>
  );
}
