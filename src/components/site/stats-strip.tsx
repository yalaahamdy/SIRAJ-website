import { STATS } from "@/lib/site-data";
import { Reveal } from "./reveal";

export function StatsStrip() {
  return (
    <section id="stats" className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <dl className="glass-card grid grid-cols-2 gap-x-4 gap-y-8 rounded-3xl px-6 py-10 md:grid-cols-3 lg:grid-cols-6 md:py-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
                <dt className="order-2 max-w-[10rem] text-xs font-bold leading-5 text-slate-300 md:text-sm">{stat.label}</dt>
                <dd className="order-1 font-amiri text-4xl font-bold gold-text md:text-5xl" aria-label={stat.value}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
