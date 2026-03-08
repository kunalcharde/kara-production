"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";

interface ClientIconProps {
  icon: LucideIcon;
  className?: string;
  "aria-hidden"?: boolean;
}

/**
 * Renders a Lucide icon only after mount to avoid Next.js hydration mismatch
 * (server SVG structure can differ from client with lucide-react).
 */
export function ClientIcon({ icon: Icon, className, "aria-hidden": ariaHidden }: ClientIconProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className={className}
        style={{ width: "1em", height: "1em", display: "inline-block", verticalAlign: "middle" }}
        aria-hidden={ariaHidden}
      />
    );
  }

  return <Icon className={className} aria-hidden={ariaHidden} />;
}
