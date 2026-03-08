import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Pageants } from "@/components/sections/Pageants";
import { Services } from "@/components/sections/Services";
import { Founder } from "@/components/sections/Founder";
import { Gallery } from "@/components/sections/Gallery";
import { PastWinners } from "@/components/sections/PastWinners";
import { Sponsors } from "@/components/sections/Sponsors";
import { MediaCoverage } from "@/components/sections/MediaCoverage";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about" aria-label="About">
        <About />
      </section>
      <section id="pageants" aria-label="Our Pageants">
        <Pageants />
      </section>
      <section id="services" aria-label="Services">
        <Services />
      </section>
      <section id="founder" aria-label="Leadership">
        <Founder />
      </section>
      <section id="gallery" aria-label="Gallery">
        <Gallery />
      </section>
      <section id="winners" aria-label="Past Winners">
        <PastWinners />
      </section>
      <section id="sponsors" aria-label="Sponsors & Partners">
        <Sponsors />
      </section>
      {/* <section id="media" aria-label="Media Coverage">
        <MediaCoverage />
      </section> */}
      <CTA />
      <section id="contact" aria-label="Contact">
        <Contact />
      </section>
    </>
  );
}
