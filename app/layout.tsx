import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const serif = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KARA PRODUCTION | Creating Icons. Producing Excellence.",
  description: "India's premier beauty pageant & event production company. Miss & Mrs Maharashtra, Mrs India Supranational. Pageant production, event management, talent grooming, and brand partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=document.documentElement,e=localStorage.getItem('kara-theme');if(e==='dark'||(!e&&window.matchMedia('(prefers-color-scheme: dark)').matches)){t.classList.add('dark')}else{t.classList.remove('dark')}})();`,
          }}
        />
      </head>
      <body className="relative min-h-screen antialiased bg-background text-foreground font-sans">
        <ThemeProvider>
        {/* Full-page gradient orbs - theme aware via CSS */}
        <div
          className="fixed inset-0 pointer-events-none z-0 theme-gradient-bg"
          aria-hidden
        />
        <a
          href="#main-content"
          className="absolute left-4 top-4 -translate-x-[200%] focus:translate-x-0 z-[100] px-4 py-2 bg-accent text-white rounded focus:outline-none focus:ring-2 focus:ring-accent transition-transform"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="relative z-10 pt-0">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
