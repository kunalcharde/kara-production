import { pageants } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ApplyPageClient from "./ApplyPageClient";

export const metadata = {
  title: "Apply Now | KARA PRODUCTION",
  description: "Apply for Miss & Mrs Maharashtra, Mrs India Supranational, or Mrs Supranational.",
};

export default function ApplyPage() {
  return (
    <section className="py-20 sm:py-28 relative min-h-[60vh]">
      <div className="absolute inset-0 section-white-gradient pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <SectionHeading
          title="Apply Now"
          subtitle="Choose your platform"
        />
        <p className="text-muted font-sans text-center max-w-xl mx-auto mb-12">
          Apply through the official pageant website for the platform you wish to participate in.
        </p>
        <ApplyPageClient pageants={pageants} />
      </Container>
    </section>
  );
}
