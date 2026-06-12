type HeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, center }: HeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold ${
            center ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-6 bg-gold/60" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
    </div>
  );
}
