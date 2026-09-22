"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── بيانات اللقطات ─────────────────────────────── */
const SHOTS = [
  { title: "الرئيسية",        icon: "🏠" },
  { title: "المصحف الشريف",   icon: "📖" },
  { title: "التسميع الذكي",   icon: "🎙️" },
  { title: "مواقيت الصلاة",  icon: "🕌" },
  { title: "بوصلة القبلة",   icon: "🧭" },
  { title: "حصن المسلم",     icon: "🤲" },
  { title: "حاسبة الزكاة",   icon: "💰" },
  { title: "الأكاديمية",     icon: "🎓" },
  { title: "السيرة النبوية", icon: "⭐" },
  { title: "الإعدادات",      icon: "⚙️" },
];

const N = SHOTS.length;
const src = (i: number) => `screenshots/shot-${i + 1}.jpg`;

/* ─── المكوّن الرئيسي ─────────────────────────────── */
export function ScreenshotGallery() {
  const [active, setActive] = useState(0);
  const [lb, setLb]         = useState<number | null>(null); // lightbox index

  /* إغلاق lightbox بـ Escape */
  useEffect(() => {
    if (lb === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowLeft")  setLb(p => p === null ? null : (p + 1) % N);
      if (e.key === "ArrowRight") setLb(p => p === null ? null : (p - 1 + N) % N);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lb]);

  const prev = useCallback(() => setActive(p => (p - 1 + N) % N), []);
  const next = useCallback(() => setActive(p => (p + 1) % N), []);

  /* تدوير تلقائي كل 3.5 ث */
  useEffect(() => {
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="w-full" dir="rtl">
      {/* ═══════════════════════════════════════════════
          الشاشة الرئيسية المميزة (Featured Hero Shot)
      ══════════════════════════════════════════════ */}
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">

        {/* الهاتف الكبير في المنتصف */}
        <div className="flex flex-col items-center gap-4 lg:order-2">
          {/* إطار الهاتف */}
          <div
            className="relative"
            style={{ width: 220 }}
          >
            {/* ظل ضوئي خلف الهاتف */}
            <div
              className="absolute inset-0 rounded-[2.5rem] blur-3xl opacity-40 -z-10"
              style={{ background: "radial-gradient(ellipse, #d4af3780 0%, transparent 70%)" }}
            />

            {/* جسم الهاتف */}
            <div
              className="relative overflow-hidden rounded-[2.5rem] bg-[#0d1117]"
              style={{
                aspectRatio: "9 / 19.5",
                boxShadow: "0 0 0 1.5px #ffffff18, 0 30px 80px #00000090, inset 0 0 0 1px #ffffff08",
              }}
            >
              {/* شق الكاميرا */}
              <div className="absolute top-0 left-1/2 z-20 -translate-x-1/2 mt-2 h-[14px] w-[52px] rounded-full bg-[#0d1117]" />

              {/* الصورة */}
              {SHOTS.map((shot, i) => (
                <img
                  key={i}
                  src={src(i)}
                  alt={shot.title}
                  onClick={() => setLb(i)}
                  className="absolute inset-0 h-full w-full cursor-zoom-in object-cover transition-opacity duration-700"
                  style={{ opacity: i === active ? 1 : 0 }}
                  loading={i < 3 ? "eager" : "lazy"}
                />
              ))}

              {/* طبقة hover للتكبير */}
              <div
                className="absolute inset-0 z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-zoom-in"
                onClick={() => setLb(active)}
                style={{ background: "rgba(0,0,0,0.3)" }}
              >
                <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-sm">
                  اضغط للتكبير
                </span>
              </div>
            </div>

            {/* عنوان الشاشة */}
            <div className="mt-4 text-center">
              <p className="text-base font-bold text-white font-amiri">
                {SHOTS[active].icon}&nbsp;{SHOTS[active].title}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {active + 1}&nbsp;/&nbsp;{N}
              </p>
            </div>
          </div>

          {/* أزرار التنقل */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="flex size-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition"
              aria-label="السابق"
            >
              <ChevronRight className="size-4" />
            </button>

            {/* نقاط */}
            <div className="flex gap-1.5">
              {SHOTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 20 : 6,
                    height: 6,
                    background: i === active ? "#d4af37" : "#ffffff22",
                  }}
                  aria-label={`شاشة ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex size-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition"
              aria-label="التالي"
            >
              <ChevronLeft className="size-4" />
            </button>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            الشريط الجانبي (5+5 مصغّرات)
        ══════════════════════════════════════ */}
        <div className="flex flex-row flex-wrap justify-center gap-3 lg:order-1 lg:w-[200px] lg:flex-col lg:flex-nowrap lg:justify-start">
          {SHOTS.slice(0, 5).map((shot, i) => (
            <ThumbCard key={i} idx={i} shot={shot} active={active} onClick={setActive} />
          ))}
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-3 lg:order-3 lg:w-[200px] lg:flex-col lg:flex-nowrap lg:justify-start">
          {SHOTS.slice(5).map((shot, i) => (
            <ThumbCard key={i + 5} idx={i + 5} shot={shot} active={active} onClick={setActive} />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════
          Lightbox
      ══════════════════════════ */}
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

          {/* الصورة */}
          <div
            className="relative flex flex-col items-center gap-3"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={src(lb)}
              alt={SHOTS[lb].title}
              className="rounded-3xl object-contain shadow-2xl"
              style={{ maxHeight: "82vh", maxWidth: "90vw" }}
            />
            <p className="text-sm font-bold text-brand-gold font-amiri">
              {SHOTS[lb].icon}&nbsp;{SHOTS[lb].title}
              <span className="ml-2 text-slate-500 font-normal text-xs">
                {lb + 1} / {N}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── بطاقة مصغّرة ─────────────────────────────────── */
function ThumbCard({
  idx, shot, active, onClick,
}: {
  idx: number;
  shot: { title: string; icon: string };
  active: number;
  onClick: (i: number) => void;
}) {
  const isActive = idx === active;
  return (
    <button
      onClick={() => onClick(idx)}
      className="group relative shrink-0 overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        width: 68,
        aspectRatio: "9/19.5",
        outline: isActive ? "2px solid #d4af37" : "2px solid transparent",
        outlineOffset: 2,
        opacity: isActive ? 1 : 0.55,
        transform: isActive ? "scale(1.08)" : "scale(1)",
      }}
      aria-label={shot.title}
    >
      <img
        src={`screenshots/shot-${idx + 1}.jpg`}
        alt={shot.title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      {/* تدرج أسفل البطاقة */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/80 to-transparent" />
      <span className="absolute bottom-1 left-0 right-0 text-center text-[8px] font-bold text-white/80 leading-tight px-0.5 truncate">
        {shot.title}
      </span>
    </button>
  );
}
