"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const SHOT_COUNT = 10;

const SHOTS: { title: string; subtitle: string; icon: string }[] = [
  { title: "الرئيسية", subtitle: "لوحة المتابعة والأدوات", icon: "🏠" },
  { title: "المصحف الشريف", subtitle: "تلاوة ترتيل احترافية", icon: "📖" },
  { title: "التسميع الذكي", subtitle: "بدون إنترنت — أوفلاين", icon: "🎙️" },
  { title: "مواقيت الصلاة", subtitle: "الأذان الشريف تلقائياً", icon: "🕌" },
  { title: "بوصلة القبلة", subtitle: "اتجاه مكة بدقة عالية", icon: "🧭" },
  { title: "حصن المسلم", subtitle: "أذكار وأدعية مصنّفة", icon: "🤲" },
  { title: "حاسبة الزكاة", subtitle: "احسب زكاتك بدقة", icon: "💰" },
  { title: "الأكاديمية", subtitle: "مسارات تعلم شرعية", icon: "🎓" },
  { title: "السيرة النبوية", subtitle: "أحداث السيرة المطهرة", icon: "⭐" },
  { title: "الإعدادات", subtitle: "تخصيص وتشخيص متقدم", icon: "⚙️" },
];

export function ScreenshotGallery() {
  const [statuses, setStatuses] = useState<boolean[]>(() =>
    Array(SHOT_COUNT).fill(true)
  );
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      Array.from({ length: SHOT_COUNT }, (_, i) =>
        fetch(`screenshots/shot-${i + 1}.jpg`, { method: "HEAD" })
          .then((r) => r.ok)
          .catch(() => false)
      )
    ).then((results) => {
      if (!cancelled) setStatuses(results);
    });
    return () => { cancelled = true; };
  }, []);

  // تحديث الشريحة النشطة عند التمرير
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = el.scrollWidth / SHOT_COUNT;
      setActiveIdx(Math.round(el.scrollLeft / cardW));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.scrollWidth / SHOT_COUNT;
    el.scrollTo({ left: cardW * idx, behavior: "smooth" });
    setActiveIdx(idx);
  };

  const navigate = (dir: 1 | -1) => {
    const next = Math.max(0, Math.min(SHOT_COUNT - 1, activeIdx + dir));
    scrollTo(next);
  };

  const openLightbox = (idx: number) => {
    if (statuses[idx]) setSelectedIdx(idx);
  };

  const navLightbox = (dir: 1 | -1) => {
    if (selectedIdx === null) return;
    const next = (selectedIdx + dir + SHOT_COUNT) % SHOT_COUNT;
    setSelectedIdx(next);
  };

  return (
    <div className="relative select-none">
      {/* ===== الكاروسيل ===== */}
      <div className="relative">
        {/* أزرار التنقل */}
        <button
          onClick={() => navigate(-1)}
          disabled={activeIdx === 0}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-2 hidden md:flex size-11 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-ink/90 text-brand-gold shadow-lg backdrop-blur-sm transition hover:border-brand-gold/70 hover:bg-brand-ink disabled:opacity-30 disabled:pointer-events-none"
          aria-label="السابق"
        >
          <ChevronRight className="size-5" />
        </button>
        <button
          onClick={() => navigate(1)}
          disabled={activeIdx >= SHOT_COUNT - 1}
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-2 hidden md:flex size-11 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-ink/90 text-brand-gold shadow-lg backdrop-blur-sm transition hover:border-brand-gold/70 hover:bg-brand-ink disabled:opacity-30 disabled:pointer-events-none"
          aria-label="التالي"
        >
          <ChevronLeft className="size-5" />
        </button>

        {/* التلاشي الجانبي */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-brand-ink,#050a12)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-brand-ink,#050a12)] to-transparent" />

        {/* شريط التمرير */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-6 px-8 md:px-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SHOTS.map((shot, idx) => {
            const src = `screenshots/shot-${idx + 1}.jpg`;
            const found = statuses[idx];
            const isActive = idx === activeIdx;

            return (
              <div
                key={idx}
                onClick={() => { scrollTo(idx); openLightbox(idx); }}
                className="group shrink-0 cursor-pointer"
                style={{ width: "clamp(140px, 18vw, 190px)" }}
              >
                {/* إطار الهاتف */}
                <div
                  className={`relative transition-all duration-500 ${
                    isActive ? "scale-105 -translate-y-2" : "scale-100 translate-y-0"
                  }`}
                >
                  {/* الإطار الخارجي للهاتف */}
                  <div
                    className="relative rounded-[2.2rem] border-2 border-brand-gold/40 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-2xl"
                    style={{ aspectRatio: "9/19.5", padding: "3px" }}
                  >
                    {/* الشاشة الداخلية */}
                    <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-brand-ink">
                      {/* حافة الهاتف العلوية - الشق الديناميكي */}
                      <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2 h-5 w-16 rounded-b-full bg-slate-800" />

                      {found ? (
                        <>
                          <img
                            src={src}
                            alt={`${shot.title} — سِراج`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          {/* طبقة التحويم */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/50 backdrop-blur-[2px]">
                            <ZoomIn className="size-7 text-brand-gold drop-shadow" />
                            <span className="text-[10px] font-bold text-brand-gold-light">
                              اضغط للتكبير
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
                          <Camera className="size-8 text-brand-gold/40" />
                          <p className="font-amiri text-xs text-slate-500">{shot.title}</p>
                        </div>
                      )}
                    </div>

                    {/* توهج ذهبي نشط */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-[2.2rem] ring-2 ring-brand-gold/60 ring-offset-2 ring-offset-brand-ink pointer-events-none" />
                    )}
                  </div>

                  {/* ظل الهاتف الديناميكي */}
                  <div
                    className={`absolute -bottom-3 left-1/2 -translate-x-1/2 h-6 rounded-full bg-black/40 blur-md transition-all duration-500 ${
                      isActive ? "w-3/4 opacity-80" : "w-1/2 opacity-40"
                    }`}
                  />
                </div>

                {/* معلومات الشاشة */}
                <div className="mt-5 text-center px-1">
                  <p
                    className={`text-sm font-bold font-amiri transition-colors duration-300 ${
                      isActive ? "text-brand-gold" : "text-slate-300 group-hover:text-brand-gold-light"
                    }`}
                  >
                    <span className="ml-1">{shot.icon}</span>
                    {shot.title}
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-500 leading-tight">
                    {shot.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* نقاط التتبع */}
      <div className="mt-2 flex justify-center gap-1.5">
        {SHOTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === activeIdx
                ? "w-6 h-2 bg-brand-gold"
                : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
            }`}
            aria-label={`انتقل إلى شاشة ${idx + 1}`}
          />
        ))}
      </div>

      {/* نص أسفل */}
      <p className="mt-5 text-center text-xs leading-6 text-slate-500">
        ✨ لقطات حقيقية من شاشة الهاتف — تطبيق سِراج v0.3.26
        <span className="mx-2 text-brand-gold/30">|</span>
        اضغط على أي شاشة لاستعراضها بحجمها الكامل
      </p>

      {/* ===== Lightbox ===== */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setSelectedIdx(null)}
        >
          {/* زر الإغلاق */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition z-10"
            aria-label="إغلاق"
          >
            <X className="size-5" />
          </button>

          {/* زر السابق */}
          <button
            onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition z-10"
            aria-label="السابق"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* زر التالي */}
          <button
            onClick={(e) => { e.stopPropagation(); navLightbox(1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition z-10"
            aria-label="التالي"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* الصورة */}
          <div
            className="relative flex flex-col items-center gap-4 p-4 max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            {/* إطار هاتف فاخر */}
            <div
              className="relative rounded-[2.8rem] border-4 border-slate-600 bg-slate-900 shadow-[0_0_80px_rgba(212,175,55,0.3)] overflow-hidden"
              style={{ maxHeight: "78vh", aspectRatio: "9/19.5" }}
            >
              <img
                src={`screenshots/shot-${selectedIdx + 1}.jpg`}
                alt={SHOTS[selectedIdx]?.title}
                className="h-full w-full object-cover"
                style={{ maxHeight: "78vh" }}
              />
            </div>

            {/* عنوان الشاشة */}
            <div className="text-center">
              <p className="text-lg font-bold font-amiri text-brand-gold">
                {SHOTS[selectedIdx]?.icon} {SHOTS[selectedIdx]?.title}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {SHOTS[selectedIdx]?.subtitle}
              </p>
              {/* مؤشر الرقم */}
              <p className="text-xs text-slate-600 mt-1">
                {selectedIdx + 1} / {SHOT_COUNT}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
