export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-start";
  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-sm font-bold text-brand-gold-light">
        <span className="inline-block size-1.5 rounded-full bg-brand-gold" aria-hidden />
        {kicker}
      </span>
      <h2 className="font-amiri text-4xl font-bold leading-snug text-white md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg md:leading-9">{subtitle}</p>
      ) : null}
      <OrnamentDivider />
    </div>
  );
}

export function OrnamentDivider() {
  return (
    <div className="flex items-center gap-3" aria-hidden>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-brand-gold/60" />
      <svg width="26" height="26" viewBox="0 0 26 26" className="text-brand-gold">
        <g fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="7" y="7" width="12" height="12" />
          <rect x="7" y="7" width="12" height="12" transform="rotate(45 13 13)" />
        </g>
        <circle cx="13" cy="13" r="2.2" fill="currentColor" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-brand-gold/60" />
    </div>
  );
}
