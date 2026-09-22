import { BadgeCheck, BookOpenText, Mic } from "lucide-react";
import { RECITERS } from "@/lib/site-data";
import { MockMushaf } from "./mocks";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function QuranSection() {
  return (
    <section id="quran" className="relative scroll-mt-24 overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_500px_at_50%_0%,rgba(15,81,50,0.35),transparent_65%)]" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionHeading
            kicker="القرآن الكريم"
            title="مصحفٌ يُشبه المصحف الذي في بيتك"
            subtitle="صفحات مطابقة لمصحف المدينة النبوية بخط عثماني موثق، مع محرك تسميع ذكي يصحّح حفظك بصوتك، ومكتبة تلاوات تضم كبار قراء العالم الإسلامي."
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto w-fit">
              <div className="absolute -inset-8 -z-10 rounded-full bg-brand-gold/10 blur-[70px]" aria-hidden />
              <MockMushaf />
            </div>
          </Reveal>

          <div className="order-1 flex flex-col gap-5 lg:order-2">
            {[
              {
                icon: BookOpenText,
                title: "خط عثماني موثق صفحة بصفحة",
                text: "604 صفحات مطابقة تماماً لمصحف مجمع الملك فهد، بوضع التقليب الأفقي المتصل بين السور ووضع التمرير الرأسي — كما تقرأ في المصحف الورقي تماماً.",
              },
              {
                icon: Mic,
                title: "تسميع ذكي بلا إنترنت",
                text: "اقرأ من حفظك وسيستمع التطبيق: مطابقة لحظية للكلمات، تلوين الأخطاء والسهو فور وقوعها، ونافذة ثلاث كلمات مرنة تجعل المراجعة متدفقة بلا انقطاع.",
              },
              {
                icon: BadgeCheck,
                title: "تفسير وإعراب وترجمات معتمدة",
                text: "لمس أي آية لعرض التفسير المختصر والتفاسير الموسعة، معجم الكلمات واللغويات، والترجمات العالمية المعتمدة — كلها تعمل محلياً بعد التحميل الأول.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 110}>
                <article className="glass-card flex gap-4 rounded-3xl p-6">
                  <span className="keep-dark flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-deep text-brand-gold-light ring-1 ring-brand-gold/25">
                    <item.icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-amiri text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* reciters marquee */}
      <div className="mt-16 space-y-5">
        <p className="text-center text-sm font-black tracking-wide text-brand-gold-light">
          مكتبة تضم أشهر +40 قارئاً معتمداً — برواية حفص عن عاصم
        </p>
        <div className="relative overflow-hidden" dir="ltr">
          <div className="fade-edge-l pointer-events-none absolute inset-y-0 left-0 z-10 w-24" aria-hidden />
          <div className="fade-edge-r pointer-events-none absolute inset-y-0 right-0 z-10 w-24" aria-hidden />
          <MarqueeRow items={RECITERS.slice(0, 15)} duration="52s" />
          <div className="h-4" aria-hidden />
          <MarqueeRow items={RECITERS.slice(15)} duration="64s" reverse />
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, duration, reverse = false }: { items: string[]; duration: string; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden" dir="ltr">
      <div
        className="marquee-track gap-3 px-3"
        style={{ "--marquee-duration": duration, animationDirection: reverse ? "reverse" : "normal" } as React.CSSProperties}
      >
        {doubled.map((name, index) => (
          <span
            key={`${name}-${index}`}
            dir="rtl"
            className="glass-card whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold text-slate-200"
          >
            <span className="me-2 inline-block size-1.5 rounded-full bg-brand-gold align-middle" aria-hidden />
            الشيخ {name}
          </span>
        ))}
      </div>
    </div>
  );
}
