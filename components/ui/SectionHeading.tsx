interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      {subtitle && (
        <p className="text-section-label uppercase text-muted mb-3 font-sans">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
        {title}
      </h2>
    </div>
  );
}
