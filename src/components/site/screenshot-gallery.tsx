"use client";

import { useEffect, useState, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  Mic,
  Clock,
  Compass,
  Shield,
  Calculator,
  GraduationCap,
  Star,
  Settings,
} from "lucide-react";

/* ─── بيانات اللقطات ─────────────────────────────── */
const SHOTS = [
  { title: "الرئيسية",        Icon: Home         },
  { title: "المصحف الشريف",   Icon: BookOpen     },
  { title: "التسميع الذكي",   Icon: Mic          },
  { title: "مواقيت الصلاة",  Icon: Clock        },
  { title: "بوصلة القبلة",   Icon: Compass      },
  { title: "حصن المسلم",     Icon: Shield       },
  { title: "حاسبة الزكاة",   Icon: Calculator   },
  { title: "الأكاديمية",     Icon: GraduationCap },
  { title: "السيرة النبوية", Icon: Star         },
  { title: "الإعدادات",      Icon: Settings     },
];

const N = SHOTS.length;
const src = (i: number) => `screenshots/shot-${i + 1}.jpg`;

/* ─── المكوّن الرئيسي ─────────────────────────────── */
export function ScreenshotGallery() {
  const [active, setActive] = useState(0);
  const [lb, setLb] = useState<number | null>(null);

  /* مفاتيح lightbox */
  useEffect(() => {
    if (lb === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape")      setLb(null);
      if (e.key === "ArrowLeft")   setLb(p => p === null ? null : (p + 1) % N);
      if (e.key === "ArrowRight")  setLb(p => p === null ? null : (p - 1 + N) % N);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lb]);

  const prev = useCallback(() => setActive(p => (p - 1 + N) % N), []);
  const next = useCallback(() => setActive(p => (p + 1) % N), []);

  /* دوران تلقائي */
  useEffect(() => {
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [next]);

  const LEFT  = SHOTS.slice(0, 5);
  const RIGHT = SHOTS.slice(5);

  return (
    <div className="w-full" dir="rtl">
      {/* ════════════════════════════════════════════════════
          الهيكل الرئيسي: 3 أعمدة (مصغّرات | هاتف | مصغّرات)
      ════════════════════════════════════════════════════ */}
      <div className="grid w-full items-center gap-6 grid-cols-1 sm:grid-cols-[1fr_auto_1fr]">

        {/* ── العمود الأيمن: 5 مصغّرات ── */}
        <div className="flex flex-row justify-center gap-2 sm:flex-col sm:items-end sm:gap-3">
          {LEFT.map((shot, i) => (
            <ThumbCard key={i} idx={i} shot={shot} active={active} onClick={setActive} />
          ))}
        </div>

        {/* ── العمود الأوسط: الهاتف الكبير ── */}
        <div className="flex flex-col items-center gap-5 order-first sm:order-none">
          {/* إطار الهاتف */}
          <div className="relative" style={{ width: "min(200px, 42vw)" }}>
            {/* هالة ضوئية */}
            <div
              className="absolute inset-0 -z-10 rounded-[1.8rem] blur-3xl opacity-35"
              style={{ background: "radial-gradient(ellipse, #d4af3770 0%, transparent 70%)" }}
            />

            {/* جسم الهاتف */}
            <div
              className="relative w-full overflow-hidden bg-[#0c1018]"
              style={{
                aspectRatio: "9 / 19.5",
                borderRadius: "1.75rem",
                boxShadow:
                  "0 0 0 1.5px rgba(255,255,255,0.10), 0 25px 70px rgba(0,0,0,0.85), inset 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              {/* شق الكاميرا */}
              <div
                className="absolute top-[6px] left-1/2 -translate-x-1/2 z-20 bg-[#0c1018]"
                style={{ width: 48, height: 13, borderRadius: "0 0 8px 8px" }}
              />

              {/* الصور — كلها مكدسة، تتفادل بـ opacity */}
              {SHOTS.map((_, i) => (
                <img
                  key={i}
                  src={src(i)}
                  alt={SHOTS[i].title}
                  onClick={() => setLb(i)}
                  className="absolute inset-0 h-full w-full object-cover cursor-zoom-in"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transition: "opacity 0.6s ease",
                  }}
                  loading={i < 3 ? "eager" : "lazy"}
                />
              ))}

              {/* طبقة hover */}
              <div
                className="absolute inset-0 z-10 flex items-end justify-center pb-5 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-zoom-in"
                onClick={() => setLb(active)}
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
              >
                <span
                  className="rounded-full px-3 py-1 text-[10px] font-bold text-white/90 backdrop-blur-sm"
                  style={{ background: "rgba(212,175,55,0.25)", border: "1px solid rgba(212,175,55,0.4)" }}
                >
                  اضغط للتكبير
                </span>
              </div>
            </div>

            {/* ظل أرضي */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 -z-10"
              style={{
                width: "70%", height: 20,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.5)",
                filter: "blur(12px)",
              }}
            />
          </div>

          {/* اسم الشاشة النشطة */}
          <div className="text-center">
            <p className="text-sm font-bold text-white font-amiri flex items-center justify-center gap-2">
              {(() => { const { Icon } = SHOTS[active]; return <Icon className="size-4 text-brand-gold" />; })()}
              {SHOTS[active].title}
            </p>
            <p className="mt-1 text-[11px] text-slate-500">{active + 1} / {N}</p>
          </div>

          {/* أزرار + نقاط */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="flex size-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition"
              aria-label="السابق"
            >
              <ChevronRight className="size-4" />
            </button>

            <div className="flex gap-1.5">
              {SHOTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 18 : 5,
                    height: 5,
                    background: i === active ? "#d4af37" : "rgba(255,255,255,0.18)",
                  }}
                  aria-label={`شاشة ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex size-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition"
              aria-label="التالي"
            >
              <ChevronLeft className="size-4" />
            </button>
          </div>
        </div>

        {/* ── العمود الأيسر: 5 مصغّرات ── */}
        <div className="flex flex-row justify-center gap-2 sm:flex-col sm:items-start sm:gap-3">
          {RIGHT.map((shot, i) => (
            <ThumbCard key={i + 5} idx={i + 5} shot={shot} active={active} onClick={setActive} />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════
          Lightbox
      ═══════════════════════════════════ */}
      {lb !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
          onClick={() => setLb(null)}
        >
          {/* إغلاق */}
          <button
            onClick={() => setLb(null)}
            className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition"
          >
            <X className="size-5" />
          </button>

          {/* السابق */}
          <button
            onClick={e => { e.stopPropagation(); setLb(p => p === null ? null : (p - 1 + N) % N); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* التالي */}
          <button
            onClick={e => { e.stopPropagation(); setLb(p => p === null ? null : (p + 1) % N); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition"
          >
            <ChevronRight className="size-5" />
          </button>

          <div
            className="flex flex-col items-center gap-4 px-16"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={src(lb)}
              alt={SHOTS[lb].title}
              className="object-contain shadow-2xl"
              style={{
                maxHeight: "80vh",
                maxWidth: "90vw",
                borderRadius: "1.5rem",
              }}
            />
            <p className="flex items-center gap-2 text-sm font-bold text-brand-gold font-amiri">
              {(() => { const { Icon } = SHOTS[lb]; return <Icon className="size-4" />; })()}
              {SHOTS[lb].title}
              <span className="text-slate-500 font-normal text-xs">{lb + 1} / {N}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── بطاقة مصغّرة ─────────────────────────────────── */
function ThumbCard({
  idx,
  shot,
  active,
  onClick,
}: {
  idx: number;
  shot: { title: string; Icon: React.ComponentType<{ className?: string }> };
  active: number;
  onClick: (i: number) => void;
}) {
  const isActive = idx === active;
  const { Icon } = shot;

  return (
    <button
      onClick={() => onClick(idx)}
      className="group relative shrink-0 overflow-hidden transition-all duration-300"
      style={{
        width: "min(58px, 13vw)",
        aspectRatio: "9/19.5",
        borderRadius: "0.75rem",
        outline: isActive ? "2px solid #d4af37" : "2px solid rgba(255,255,255,0.06)",
        outlineOffset: isActive ? 3 : 1,
        opacity: isActive ? 1 : 0.5,
        transform: isActive ? "scale(1.1)" : "scale(1)",
        boxShadow: isActive ? "0 8px 24px rgba(212,175,55,0.25)" : "none",
      }}
      aria-label={shot.title}
    >
      <img
        src={`screenshots/shot-${idx + 1}.jpg`}
        alt={shot.title}
        className="h-full w-full object-cover"
        loading="lazy"
      />

      {/* تدرج أسفلي + أيقونة */}
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-1 pt-4"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)" }}
      >
        <Icon className="size-2.5 text-white/80 mb-0.5" />
        <span className="text-[7px] font-bold text-white/75 leading-tight text-center px-0.5 truncate w-full">
          {shot.title}
        </span>
      </div>
    </button>
  );
}
