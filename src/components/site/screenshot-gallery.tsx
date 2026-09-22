"use client";

import { useEffect, useState } from "react";
import { Camera, Eye } from "lucide-react";

const SHOT_COUNT = 10;

const SHOT_TITLES = [
  "الرئيسية ولوحة المتابعة",
  "المصحف الشريف المرتل",
  "التسميع الذكي بدون نت",
  "مواقيت الصلاة والأذان",
  "بوصلة القبلة الحساسة",
  "حصن المسلم والأذكار",
  "حاسبة الزكاة الدقيقة",
  "الأكاديمية والمسارات",
  "السيرة النبوية المطهرة",
  "مركز الإعدادات والتشخيص",
];

export function ScreenshotGallery() {
  const [statuses, setStatuses] = useState<boolean[]>(() => Array(SHOT_COUNT).fill(true));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      Array.from({ length: SHOT_COUNT }, (_, i) =>
        fetch(`screenshots/shot-${i + 1}.jpg`, { method: "HEAD" })
          .then((res) => res.ok)
          .catch(() => false)
      )
    ).then((results) => {
      if (!cancelled) setStatuses(results);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {statuses.map((found, index) => {
          const title = SHOT_TITLES[index] || `شاشة من التطبيق ${index + 1}`;
          const imageSrc = `screenshots/shot-${index + 1}.jpg`;

          return (
            <figure
              key={index}
              className="keep-dark group relative aspect-[9/19] cursor-pointer overflow-hidden rounded-3xl border border-brand-gold/15 bg-brand-ink transition-all duration-300 hover:border-brand-gold/50 hover:shadow-xl hover:shadow-brand-green/20"
              onClick={() => found && setSelectedImage(imageSrc)}
            >
              {found ? (
                <>
                  <img
                    src={imageSrc}
                    alt={`لقطة حقيقية من تطبيق سِراج — ${title}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* تدرج هادئ مع عنوان الشاشة */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-8 text-center">
                    <p className="font-amiri text-xs font-bold text-brand-gold-light md:text-sm">
                      {title}
                    </p>
                  </div>
                  {/* زر المعاينة عند التحويم */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
                    <span className="flex size-10 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/40">
                      <Eye className="size-5" />
                    </span>
                  </div>
                </>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 p-5 text-center">
                  <span className="pattern-stars absolute inset-0 opacity-60" aria-hidden />
                  <span className="relative flex size-12 items-center justify-center rounded-full border border-brand-gold/25 bg-white/5 text-brand-gold/70">
                    <Camera className="size-5" />
                  </span>
                  <span className="relative block h-px w-14 bg-gradient-to-l from-transparent via-brand-gold/50 to-transparent" aria-hidden />
                  <p className="relative font-amiri text-sm font-bold text-slate-400">{title}</p>
                </div>
              )}
            </figure>
          );
        })}
      </div>

      <p className="mt-5 text-center text-xs leading-6 text-slate-400">
        ✨ لقطات حقيقية من شاشة الهاتف لتطبيق سِراج v0.3.26 — اضغط على أي شاشة لتكبيرها واستعراضها.
      </p>

      {/* نافذة التكبير عند النقر على أي لقطة */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md transition duration-300 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[92vh] max-w-[92vw] overflow-hidden rounded-3xl border border-brand-gold/30 shadow-2xl">
            <img
              src={selectedImage}
              alt="معاينة الشاشة بحجم كامل"
              className="max-h-[90vh] w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition text-lg font-bold border border-white/20"
              aria-label="إغلاق"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
