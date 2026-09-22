import { GitCommitHorizontal, Tag, ChevronLeft } from "lucide-react";
import { RELEASES, RELEASES_URL } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function News() {
  return (
    <section id="news" className="relative scroll-mt-24 py-24">
      <div className="pattern-stars-soft absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionHeading
            kicker="آخر الأخبار"
            title="رحلة التطوير نسخةً بعد نسخة"
            subtitle="سِراج يتطور باستمرار بفضل المساهمات المفتوحة — تابع أحدث الإصدارات وما جاء فيها من إصلاحات وميزات."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* timeline spine */}
          <span className="absolute inset-y-0 right-[7px] hidden w-px bg-gradient-to-b from-brand-gold/60 via-brand-gold/20 to-transparent md:block" aria-hidden />

          <div className="space-y-8">
            {RELEASES.map((release, index) => (
              <Reveal key={release.version} delay={index * 60}>
                <article className="relative md:pe-12">
                  {/* spine node */}
                  <span
                    className={`absolute -top-1 right-0 hidden size-4 rounded-full border-2 md:block ${
                      release.latest ? "border-brand-gold bg-brand-gold/40 pulse-ring" : "border-brand-gold/50 bg-brand-ink"
                    }`}
                    aria-hidden
                  />
                  <div
                    className={`glass-card rounded-3xl p-6 md:p-7 ${
                      release.latest ? "ring-1 ring-brand-gold/45" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1.5 rounded-full bg-brand-green/30 px-3 py-1 font-mono text-sm font-black text-brand-gold-light" dir="ltr">
                        <Tag className="size-3.5" />
                        {release.version}
                      </span>
                      {release.latest ? (
                        <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-black text-brand-ink">أحدث إصدار</span>
                      ) : null}
                      <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                        <GitCommitHorizontal className="size-4" />
                        {release.date}
                      </span>
                      <div className="ms-auto flex flex-wrap gap-1.5">
                        {release.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] font-bold text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="mt-4 font-amiri text-2xl font-bold text-white md:text-3xl">{release.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {release.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm leading-7 text-slate-300">
                          <ChevronLeft className="mt-2 size-4 shrink-0 text-brand-gold" aria-hidden />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-7 py-3.5 text-sm font-black text-brand-gold-light transition hover:bg-brand-gold/20"
          >
            عرض جميع الإصدارات على GitHub Releases
          </a>
        </Reveal>
      </div>
    </section>
  );
}
