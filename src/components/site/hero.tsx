import { ChevronDown, Download, Github, ShieldCheck, WifiOff, Scale, Sparkles } from "lucide-react";
import { GITHUB_URL, LATEST_VERSION } from "@/lib/site-data";
import { MosqueSkyline } from "./mosque-skyline";
import { MockHome } from "./mocks";

const FLOATING_CHIPS = [
  { text: "604 صفحات مصحف", className: "-top-3 -right-4 float-slow" },
  { text: "+40 قارئاً", className: "top-1/3 -left-6 float-slower" },
  { text: "بلا إنترنت", className: "bottom-24 -right-5 float-slower" },
  { text: "أذان في الخلفية", className: "-bottom-4 left-2 float-slow" },
] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-28 md:pt-36">
      {/* backdrop layers */}
      <div className="hero-backdrop absolute inset-0 -z-10" aria-hidden />
      <div className="pattern-stars absolute inset-0 -z-10 opacity-70" aria-hidden />
      <div className="absolute inset-0 -z-10" aria-hidden>
        {[
          { top: "12%", right: "18%", size: 3, delay: "0s" },
          { top: "22%", right: "8%", size: 2, delay: "1.1s" },
          { top: "9%", left: "22%", size: 2, delay: "0.6s" },
          { top: "30%", left: "10%", size: 3, delay: "1.7s" },
          { top: "18%", left: "42%", size: 2, delay: "2.3s" },
          { top: "38%", right: "30%", size: 2, delay: "0.9s" },
        ].map((star, i) => (
          <span
            key={i}
            className="twinkle absolute rounded-full bg-brand-gold"
            style={{ top: star.top, right: star.right, left: star.left, width: star.size, height: star.size, animationDelay: star.delay }}
          />
        ))}
      </div>
      <div className="hero-skyline absolute inset-x-0 bottom-0 -z-10">
        <MosqueSkyline className="h-48 w-full md:h-64 lg:h-80" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-8 lg:grid-cols-2">
        {/* copy */}
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/35 bg-brand-gold/10 px-4 py-2 text-sm font-bold text-brand-gold-light">
            <Sparkles className="size-4" />
            مفتوح المصدر • الإصدار {LATEST_VERSION} • رخصة MIT
          </span>

          <h1 className="font-amiri text-5xl font-bold leading-[1.25] text-white md:text-7xl md:leading-[1.2]">
            <span className="gold-text">سِراج</span> — نورك في كل يوم
          </h1>

          <p className="max-w-xl text-lg leading-9 text-slate-300 md:text-xl md:leading-10">
            المنصة الإسلامية الشاملة: مصحف المدينة النبوية، مواقيت صلاة فلكية دقيقة، بوصلة قبلة حساسة،
            أذكار وحديث محقق، وأكاديمية كاملة بـ 49 مساراً — كل ذلك في تطبيق واحد{" "}
            <strong className="text-white">يعمل بلا إنترنت</strong> ويحفظ خصوصيتك بالكامل.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#download" className="gold-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-black">
              <Download className="size-5" />
              حمّل لأندرويد مجاناً
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-white/5 px-7 py-3.5 text-base font-black text-brand-gold-light backdrop-blur transition hover:bg-brand-gold/10"
            >
              جولة داخل التطبيق
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3.5 text-sm font-bold text-slate-300 transition hover:border-brand-gold/40 hover:text-brand-gold-light"
            >
              <Github className="size-4.5" />
              المستودع
            </a>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-bold text-slate-400">
            <li className="flex items-center gap-1.5"><WifiOff className="size-4 text-brand-gold" /> يعمل بدون إنترنت</li>
            <li className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-brand-gold" /> صفر تتبع وإعلانات</li>
            <li className="flex items-center gap-1.5"><Scale className="size-4 text-brand-gold" /> رخصة MIT مفتوحة</li>
          </ul>
        </div>

        {/* phone */}
        <div className="relative mx-auto w-fit">
          <div className="absolute -inset-10 -z-10 rounded-full bg-brand-green/25 blur-[90px]" aria-hidden />
          <div className="absolute -inset-4 rounded-[3rem] border border-brand-gold/15" aria-hidden />
          <div className="float-slow">
            <MockHome />
          </div>
          {FLOATING_CHIPS.map((chip) => (
            <span
              key={chip.text}
              className={`glass-card absolute z-10 rounded-full px-3.5 py-2 text-xs font-black text-brand-gold-light ${chip.className}`}
            >
              {chip.text}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#stats"
        aria-label="انتقل إلى الأسفل"
        className="bob absolute bottom-5 left-1/2 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 text-slate-300"
      >
        <ChevronDown className="size-5" />
      </a>
    </section>
  );
}
