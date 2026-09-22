"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Activity, BookOpenText, Compass, ScrollText, CalendarClock, PlayCircle } from "lucide-react";
import { MockAdhkar, MockHome, MockMushaf, MockPrayer, MockQibla } from "./mocks";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

type ScreenKey = "home" | "mushaf" | "prayer" | "qibla" | "adhkar";

const SCREENS: {
  key: ScreenKey;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  icon: typeof Activity;
  render: () => React.ReactNode;
}[] = [
  {
    key: "home",
    label: "الرئيسية",
    title: "لوحة الرفيق اليومي",
    description:
      "تفتح التطبيق على بطاقة حية تعرض الصلاة القادمة والوقت المتبقي، مع شبكة أقسام التطبيق الأحد عشر ومسار «ابدأ من هنا» الذي يوصلك مباشرة إلى المصحف والأذكار والأكاديمية.",
    bullets: ["بطاقة الصلاة القادمة بالتوقيت المحلي", "أحد عشر قسماً بضغطة واحدة", "تاريخ هجري دقيق تلقائياً"],
    icon: Activity,
    render: () => <MockHome />,
  },
  {
    key: "mushaf",
    label: "المصحف",
    title: "مصحف المدينة النبوية",
    description:
      "صفحة بصفحة مطابقة لمصحف مجمع الملك فهد (604 صفحات) بخط عثماني محكم، مع وضعي القراءة المتصلة والتمرير، وتبويب التفسير وإعراب الكلمة والترجمات بلمسة واحدة.",
    bullets: ["604 صفحات مطابقة تماماً", "تفسير وإعراب وترجمة عند اللمس", "وضع التلاوة مع تظليل الآيات"],
    icon: BookOpenText,
    render: () => <MockMushaf />,
  },
  {
    key: "prayer",
    label: "المواقيت",
    title: "مواقيت وأذان لا يسقطان",
    description:
      "حسابات فلكية دقيقة تعمل بلا إنترنت بطرق أم القرى ورابطة العالم الإسلامي والهيئة المصرية وغيرها، مع أذان كامل بصوت كبار المؤذنين وإشعارات خارجية تستعيد نفسها تلقائياً بعد إعادة تشغيل الهاتف.",
    bullets: ["أذان كامل في الخلفية والتطبيق مغلق", "تنبيه مستقل لكل صلاة", "مركز تشخيص يوضح حالة الجدولة"],
    icon: CalendarClock,
    render: () => <MockPrayer />,
  },
  {
    key: "qibla",
    label: "القبلة",
    title: "قبلة موثوقة في أي مكان",
    description:
      "بوصلة تدمج الجيروسكوب ومقياس المغناطيسية لتحديد زاوية الكعبة المشرفة بثبات عالٍ، مع مؤشر موثوقية المعايرة وحماية من التشويش المغناطيسي للأجهزة والحافظات.",
    bullets: ["دمج حساسين لثقة أعلى", "مؤشر جودة المعايرة لحظياً", "يعمل أوفلاين تماماً"],
    icon: Compass,
    render: () => <MockQibla />,
  },
  {
    key: "adhkar",
    label: "الأذكار",
    title: "حصنك اليومي",
    description:
      "أذكار مبوّبة بالتخريج من صحيحي البخاري ومسلم (الصباح والمساء، النوم، الصلاة…) مع مسبحة إلكترونية باهتزاز لمسي وعدادات إنجاز تُحفظ محلياً على جهازك حصراً.",
    bullets: ["أكثر من 35 ذكراً ودعاءً موثقاً", "مسبحة تفاعلية باهتزاز لمسي", "أهداف يومية تُحفظ على جهازك"],
    icon: ScrollText,
    render: () => <MockAdhkar />,
  },
];

const ROTATE_MS = 6500;

export function Showcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  useEffect(() => {
    if (paused) {
      stop();
      return;
    }
    timer.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SCREENS.length);
    }, ROTATE_MS);
    return stop;
  }, [paused, stop]);

  const current = SCREENS[active];

  return (
    <section id="showcase" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionHeading
            kicker="جولة تفاعلية"
            title="شاهد التطبيق كما لو كان بين يديك"
            subtitle="معاينات حية مبنية على الواجهات الفعلية للتطبيق وألوانه الحقيقية — تتنقل تلقائياً بين الشاشات، أو اختر الشاشة التي تريدها بنفسك."
          />
        </Reveal>

        <div
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* tabs */}
          <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-2" role="tablist" aria-label="شاشات التطبيق">
            {SCREENS.map((screen, index) => {
              const Icon = screen.icon;
              const selected = index === active;
              return (
                <button
                  key={screen.key}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setActive(index);
                    setPaused(true);
                  }}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-black transition ${
                    selected
                      ? "gold-btn"
                      : "border border-white/10 bg-white/5 text-slate-300 hover:border-brand-gold/40 hover:text-brand-gold-light"
                  }`}
                >
                  <Icon className="size-4" />
                  {screen.label}
                </button>
              );
            })}
          </div>

          {/* stage */}
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            {/* description (right side in RTL) */}
            <div className="order-2 lg:order-1">
              <div key={current.key} className="reveal is-visible glass-card rounded-3xl p-7 md:p-8">
                <h3 className="font-amiri text-3xl font-bold text-white">{current.title}</h3>
                <p className="mt-3 leading-8 text-slate-300">{current.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {current.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5 text-sm font-bold text-slate-200">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green/40 text-brand-gold-light" aria-hidden>
                        <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* phone (center) */}
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative">
                <div className="absolute -inset-8 -z-10 rounded-full bg-brand-green/20 blur-[70px]" aria-hidden />
                <div key={current.key} className="reveal is-visible">{current.render()}</div>
              </div>
            </div>

            {/* progress rail (left side in RTL) */}
            <div className="order-3 hidden flex-col gap-3 lg:flex">
              {SCREENS.map((screen, index) => (
                <button
                  key={screen.key}
                  type="button"
                  onClick={() => {
                    setActive(index);
                    setPaused(true);
                  }}
                  aria-label={`الانتقال إلى شاشة ${screen.label}`}
                  className="group flex items-center gap-3"
                >
                  <span
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === active ? "w-14 bg-brand-gold" : "w-7 bg-white/15 group-hover:bg-white/30"
                    }`}
                  />
                  <span className={`text-xs font-bold transition ${index === active ? "text-brand-gold-light" : "text-slate-500"}`}>
                    {screen.label}
                  </span>
                </button>
              ))}
              <p className="mt-2 text-[11px] leading-5 text-slate-500">
                {paused ? "التشغيل التلقائي متوقف — انقر أي شاشة للمتابعة" : "تنقل تلقائي بين الشاشات"}
              </p>
            </div>
          </div>
        </div>

        {/* real video slot */}
        <Reveal className="mt-16">
          <DemoVideo />
        </Reveal>
      </div>
    </section>
  );
}

function DemoVideo() {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("media/demo.mp4", { method: "HEAD" })
      .then((res) => {
        if (!cancelled && res.ok) setVideoReady(true);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="glass-card relative overflow-hidden rounded-3xl p-5 md:p-7">
      <div className="pattern-stars absolute inset-0 opacity-40" aria-hidden />
      <div className="relative grid items-center gap-6 md:grid-cols-[auto_1fr]">
        {/* إطار الفيديو: يكفي وضع ملف public/media/demo.mp4 ليعمل تلقائياً
            (يُفضّل تسجيل 1080p عمودي 9:16 أو أفقي 16:9). */}
        <div className="keep-dark flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-brand-gold/20 bg-brand-ink md:w-[420px]">
          {videoReady ? (
            <video className="h-[220px] w-full bg-black object-contain md:h-[250px]" controls playsInline preload="metadata">
              <source src="media/demo.mp4" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          ) : (
            <div className="flex flex-col items-center gap-3 p-8 text-center">
              <span className="pulse-ring flex size-16 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold">
                <PlayCircle className="size-8" />
              </span>
              <p className="font-amiri text-xl font-bold text-white">فيديو من داخل التطبيق</p>
              <span className="block h-px w-16 bg-gradient-to-l from-transparent via-brand-gold/50 to-transparent" aria-hidden />
              <p className="text-xs font-bold text-slate-400">جولة مصوّرة كاملة — قريباً</p>
            </div>
          )}
        </div>
        <div>
          <h3 className="font-amiri text-2xl font-bold text-white">شاهد سِراج وهو يعمل</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            رحلة كاملة داخل التطبيق: فتح المصحف والتلاوة بصوت كبار القرّاء، سماع الأذان عند دخول الوقت،
            ضبط القبلة بالجيروسكوب، وتسميع ورد الحفظ يومياً — كل ذلك بلا إنترنت.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "جولة مصوّرة على واجهات التطبيق الحقيقية",
              "مشاهد مركزة لكل وحدة: المصحف، المواقيت، القبلة، الأذكار",
              "بديل تفاعلي متاح الآن في الجولة أعلاه",
            ].map((line) => (
              <li key={line} className="flex items-center gap-2.5 text-sm font-bold text-slate-200">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green/40 text-brand-gold-light" aria-hidden>
                  <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
