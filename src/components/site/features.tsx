import {
  AudioLines,
  BellRing,
  BookOpenText,
  CalendarClock,
  Coins,
  Compass,
  GraduationCap,
  Landmark,
  Library,
  MapPinned,
  Mic,
  ScrollText,
  type LucideIcon,
} from "lucide-react";
import { FEATURES } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const ICONS: Record<string, LucideIcon> = {
  BookOpenText,
  Mic,
  AudioLines,
  CalendarClock,
  BellRing,
  Compass,
  ScrollText,
  Coins,
  Library,
  GraduationCap,
  Landmark,
  MapPinned,
};

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-24">
      <div className="pattern-stars-soft absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionHeading
            kicker="وحدات التطبيق"
            title="كل ما يحتاجه يومك في مكان واحد"
            subtitle="أحد عشر نظاماً متكاملاً بُنيت بمعمارية نظيفة (Clean Architecture) وتغطية اختبارية تتجاوز 187 اختباراً — من المصحف إلى الأكاديمية، ومن القبلة إلى الزكاة."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.icon] ?? BookOpenText;
            return (
              <Reveal key={feature.title} delay={(index % 3) * 90}>
                <article
                  className={`group glass-card relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                    feature.highlight ? "ring-1 ring-brand-gold/50" : ""
                  }`}
                >
                  {feature.highlight ? (
                    <span className="absolute left-4 top-4 rounded-full bg-brand-gold px-2.5 py-1 text-[10px] font-black text-brand-ink">
                      نقطة قوة
                    </span>
                  ) : null}
                  <span className="keep-dark flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-deep text-brand-gold-light shadow-lg shadow-brand-green/30 ring-1 ring-brand-gold/25 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-amiri text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-2.5 text-sm leading-7 text-slate-300">{feature.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
