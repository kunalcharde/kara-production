import Link from "next/link";
import { contact, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="#" className="font-serif text-lg font-semibold text-foreground hover:opacity-90">
            {site.name}
          </Link>
          <div className="flex flex-wrap gap-6 justify-center sm:justify-end">
            <Link href="#about" className="text-sm text-muted hover:text-foreground transition-colors font-sans">
              About
            </Link>
            <Link href="#pageants" className="text-sm text-muted hover:text-foreground transition-colors font-sans">
              Our Pageants
            </Link>
            <Link href="#services" className="text-sm text-muted hover:text-foreground transition-colors font-sans">
              Services
            </Link>
            <Link href="/apply" className="text-sm text-muted hover:text-foreground transition-colors font-sans">
              Apply Now
            </Link>
            <Link href="#contact" className="text-sm text-muted hover:text-foreground transition-colors font-sans">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted font-sans text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </p>
            {site.footer?.copyrightTagline && (
              <p className="mt-1">{site.footer.copyrightTagline}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a href={`mailto:${contact.email}`} className="text-sm text-muted hover:text-foreground transition-colors font-sans shrink-0">
              {contact.email}
            </a>
            {site.footer?.cookieLabel && (
              <button
                type="button"
                className="text-sm text-muted hover:text-foreground transition-colors font-sans"
                aria-label={site.footer.cookieLabel}
              >
                {site.footer.cookieLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
