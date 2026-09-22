import { bp } from "@/lib/base-path";
import { PhoneFrame } from "./phone-frame";

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function StatusBar({ dark = false }: { dark?: boolean }) {
  const tone = dark ? "text-brand-ink/80" : "text-white/90";
  return (
    <div className={`flex items-center justify-between px-4 pt-2 text-[9px] font-bold ${tone}`} aria-hidden>
      <span>4:56</span>
      <span className="flex items-center gap-1">
        <span className="tracking-tighter">▮▮▮</span>
        <span>WiFi</span>
        <span className="inline-block h-2 w-4 rounded-[2px] border border-current">
          <span className="block h-full w-3/4 rounded-[1px] bg-current" />
        </span>
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Home dashboard (recreated from home_dashboard_view.dart)         */
/* ------------------------------------------------------------------ */

const HOME_CHIPS = [
  { title: "الصلاة والقبلة", icon: "compass" },
  { title: "المصحف الشريف", icon: "book" },
  { title: "الصوتيات والإذاعة", icon: "audio" },
  { title: "حفظ القرآن", icon: "mic" },
  { title: "الأذكار والأدعية", icon: "scroll" },
  { title: "حساب الزكاة", icon: "coins" },
  { title: "المعرفة والحديث", icon: "library" },
  { title: "المناهج والمسارات", icon: "grad" },
] as const;

function ChipIcon({ name }: { name: (typeof HOME_CHIPS)[number]["icon"] }) {
  const cls = "size-3.5";
  switch (name) {
    case "compass":
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>;
    case "book":
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>;
    case "audio":
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 10v3M6 6v11M10 3v18M14 8v7M18 5v13M22 10v3" /></svg>;
    case "mic":
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>;
    case "scroll":
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 12h-5" /><path d="M15 8h-5" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" /></svg>;
    case "coins":
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7.71-2.82 2.82" /></svg>;
    case "library":
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" /></svg>;
    case "grad":
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>;
  }
}

export function MockHome() {
  return (
    <PhoneFrame label="الشاشة الرئيسية في تطبيق سِراج">
      <div className="flex h-full flex-col bg-[#f8f9fa]">
        <StatusBar dark />
        {/* app bar */}
        <div className="flex items-center gap-2 bg-white px-3 py-2 shadow-sm">
          <div className="relative">
            <img src={bp("/brand/app_icon.png")} alt="" className="size-8 rounded-lg" />
          </div>
          <div>
            <p className="font-amiri text-[15px] font-bold leading-none text-brand-ink">سِراج</p>
            <p className="mt-0.5 text-[8px] leading-none text-slate-500">رفيقك اليومي</p>
          </div>
          <span className="ms-auto rounded-full bg-brand-green/10 px-2 py-1 text-[8px] font-bold text-brand-green">
            ٢٤ ربيع الآخر
          </span>
        </div>

        {/* now card */}
        <div className="mx-3 mt-2 overflow-hidden rounded-2xl bg-gradient-to-l from-brand-green via-brand-green-light to-brand-green p-3 text-white shadow-lg shadow-brand-green/30">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold opacity-90">الصلاة القادمة</p>
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[8px] font-bold">الأذان مفعّل</span>
          </div>
          <div className="mt-1.5 flex items-end justify-between">
            <div>
              <p className="font-amiri text-2xl font-bold leading-none">الفجر</p>
              <p className="mt-1 text-[10px] opacity-90">4:56 صباحاً</p>
            </div>
            <div className="text-end">
              <p className="text-[8px] opacity-80">المتبقي</p>
              <p className="font-amiri text-lg font-bold leading-none">6:24 س</p>
            </div>
          </div>
        </div>

        {/* nav chips grid */}
        <div className="mt-3 grid grid-cols-4 gap-1.5 px-3">
          {HOME_CHIPS.map((chip) => (
            <div
              key={chip.title}
              className="flex flex-col items-center gap-1 rounded-xl border border-slate-200/80 bg-white px-1 py-2 text-center"
            >
              <span className="flex size-6 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                <ChipIcon name={chip.icon} />
              </span>
              <span className="text-[7.5px] font-bold leading-tight text-brand-ink">{chip.title}</span>
            </div>
          ))}
        </div>

        {/* start here tiles */}
        <div className="mt-3 space-y-1.5 px-3 pb-4">
          <p className="text-[9px] font-black text-slate-500">ابدأ من هنا</p>
          {[
            { t: "المصحف الشريف: 114 سورة كاملة", s: "اقرأ الفاتحة وجزء عم الموثق" },
            { t: "حصن المسلم: 35+ ذكراً ودعاءً", s: "مخرجة من صحيحي البخاري ومسلم" },
            { t: "الأكاديمية: 12 كلية و49 مساراً", s: "دروس تفاعلية واختبارات فهم" },
          ].map((tile) => (
            <div key={tile.t} className="rounded-xl border border-brand-gold/30 bg-brand-gold/10 px-2.5 py-1.5">
              <p className="text-[9px] font-bold text-brand-ink">{tile.t}</p>
              <p className="mt-0.5 text-[8px] text-slate-500">{tile.s}</p>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Mushaf page (Medina mushaf style)                                */
/* ------------------------------------------------------------------ */

export function MockMushaf() {
  return (
    <PhoneFrame label="مصحف المدينة النبوية داخل التطبيق">
      <div className="flex h-full flex-col bg-[#10141c]">
        <StatusBar />
        <div className="flex items-center justify-between px-3 py-1.5">
          <p className="text-[10px] font-bold text-white">الفاتحة</p>
          <span className="rounded-full bg-brand-green/25 px-2 py-0.5 text-[8px] font-bold text-brand-gold-light">
            وضع المصحف
          </span>
        </div>
        {/* page */}
        <div className="mx-2.5 mb-3 flex-1 overflow-hidden rounded-lg border-2 border-[#a8873a] bg-[#f8f1e1] p-2 shadow-inner">
          <div className="mb-1.5 rounded border border-[#c8b078] bg-[#f3e8cf] py-1 text-center">
            <p className="font-amiri text-[10px] font-bold text-[#6b5218]">سُورَةُ الْفَاتِحَة</p>
            <p className="text-[7px] text-[#8a6d2f]">مكية • 7 آيات • الجزء الأول</p>
          </div>
          <p
            className="font-quran text-center text-[15px] leading-[2.15] text-[#233020]"
            style={{ textAlign: "justify", textAlignLast: "center" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾
          </p>
          <div className="mt-2 flex items-center justify-between border-t border-[#d9c79a] pt-1">
            <span className="text-[7.5px] font-bold text-[#8a6d2f]">حفص عن عاصم</span>
            <span className="flex size-5 items-center justify-center rounded-full border border-[#a8873a] font-amiri text-[9px] font-bold text-[#6b5218]">
              ١
            </span>
            <span className="text-[7.5px] font-bold text-[#8a6d2f]">٦٠٤ صفحة</span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Prayer times                                                     */
/* ------------------------------------------------------------------ */

const PRAYERS = [
  { name: "الفجر", time: "4:56", period: "ص", icon: "fajr", active: false },
  { name: "الشروق", time: "6:11", period: "ص", icon: "sunrise", active: false },
  { name: "الظهر", time: "12:01", period: "م", icon: "sun", active: false },
  { name: "العصر", time: "3:42", period: "م", icon: "sun", active: true },
  { name: "المغرب", time: "6:04", period: "م", icon: "sunset", active: false },
  { name: "العشاء", time: "7:24", period: "م", icon: "moon", active: false },
] as const;

function PrayerIcon({ name }: { name: (typeof PRAYERS)[number]["icon"] }) {
  const cls = "size-3.5";
  if (name === "moon") {
    return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>;
  }
  if (name === "sunrise") {
    return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v8" /><path d="m4.93 10.93 1.41 1.41" /><path d="M2 18h2" /><path d="M20 18h2" /><path d="m19.07 10.93-1.41 1.41" /><path d="M22 22H2" /><path d="m8 6 4-4 4 4" /><path d="M16 18a4 4 0 0 0-8 0" /></svg>;
  }
  if (name === "sunset") {
    return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 10V2" /><path d="m4.93 10.93 1.41 1.41" /><path d="M2 18h2" /><path d="M20 18h2" /><path d="m19.07 10.93-1.41 1.41" /><path d="M22 22H2" /><path d="m16 6-4 4-4-4" /><path d="M16 18a4 4 0 0 0-8 0" /></svg>;
  }
  return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>;
}

export function MockPrayer() {
  return (
    <PhoneFrame label="شاشة مواقيت الصلاة في التطبيق">
      <div className="flex h-full flex-col bg-[#121416]">
        <StatusBar />
        <div className="flex items-center justify-between px-4 pb-2.5 pt-3">
          <p className="text-[12.5px] font-black text-white">مواقيت الصلاة</p>
          <span className="rounded-full bg-white/5 px-2.5 py-1 text-[8px] font-bold text-slate-400">
            القاهرة • ٢٤ ربيع الآخر ١٤٤٧هـ
          </span>
        </div>

        <div className="mx-3.5 rounded-2xl bg-gradient-to-l from-brand-green to-brand-green-light p-4 text-white shadow-lg shadow-brand-green/25">
          <div className="flex items-center justify-between">
            <p className="text-[9.5px] font-bold opacity-90">الصلاة القادمة</p>
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[8px] font-bold">الأذان مفعّل</span>
          </div>
          <div className="mt-1.5 flex items-end justify-between">
            <p className="font-amiri text-[26px] font-bold leading-none">العصر</p>
            <p className="whitespace-nowrap font-amiri text-xl font-bold leading-none">
              3:42 <span className="text-[11px] font-bold">م</span>
            </p>
          </div>
          <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/20" aria-hidden>
            <span className="block h-full w-[62%] rounded-full bg-brand-gold" />
          </div>
          <p className="mt-1.5 text-[8.5px] opacity-90">المتبقي حتى الأذان — ساعتان و11 دقيقة</p>
        </div>

        <div className="mt-3 flex-1 space-y-2 px-3.5">
          {PRAYERS.map((p) => (
            <div
              key={p.name}
              className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 ${
                p.active
                  ? "border-brand-gold/60 bg-brand-gold/10"
                  : "border-[#334155] bg-[#1e2227]"
              }`}
            >
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-lg ${
                  p.active ? "bg-brand-gold/20 text-brand-gold-light" : "bg-white/5 text-slate-300"
                }`}
              >
                <PrayerIcon name={p.icon} />
              </span>
              <p className={`text-[11px] font-bold ${p.active ? "text-brand-gold-light" : "text-slate-200"}`}>
                {p.name}
              </p>
              {p.active && <span className="rounded-full bg-brand-gold px-1.5 py-px text-[7.5px] font-black text-brand-ink">القادمة</span>}
              <p className={`ms-auto whitespace-nowrap font-amiri text-[13px] font-bold ${p.active ? "text-white" : "text-slate-300"}`}>
                {p.time}
                <span className="ms-0.5 text-[8.5px] opacity-75">{p.period}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="px-3 pb-4 pt-2.5 text-center text-[8px] text-slate-500">
          طريقة الحساب: رابطة العالم الإسلامي • تعمل بلا إنترنت
        </p>
      </div>
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Qibla compass                                                    */
/* ------------------------------------------------------------------ */

export function MockQibla() {
  return (
    <PhoneFrame label="بوصلة القبلة في التطبيق">
      <div className="flex h-full flex-col bg-[#0b1526]">
        <StatusBar />
        <p className="py-2 text-center text-[11px] font-black text-white">بوصلة القبلة</p>

        <div className="relative mx-auto mt-1 size-56">
          {/* dial */}
          <div className="absolute inset-0 rounded-full border border-brand-gold/40 bg-gradient-to-b from-[#12233c] to-[#0a1424] shadow-[0_0_40px_-10px_rgba(212,175,55,0.4)]">
            {/* ticks */}
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 h-[94px] w-px origin-top"
                style={{ transform: `rotate(${i * 30}deg) translateX(-50%)`, background: i % 3 === 0 ? "rgba(212,175,55,0.7)" : "rgba(255,255,255,0.14)" }}
                aria-hidden
              />
            ))}
            {/* cardinal letters */}
            <span className="absolute left-1/2 top-2 -translate-x-1/2 text-[9px] font-black text-brand-gold">ش</span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-400">ج</span>
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-slate-400">ق</span>
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-slate-400">غ</span>
            {/* kaaba marker */}
            <div className="absolute left-1/2 top-6 -translate-x-1/2 pulse-ring rounded-md" aria-hidden>
              <div className="flex size-5 flex-col items-center justify-center gap-[2px] rounded-[3px] bg-[#101010] shadow-[0_0_12px_rgba(212,175,55,0.65)] ring-1 ring-brand-gold/70">
                <span className="block h-[3px] w-3 rounded-sm bg-brand-gold" />
                <span className="block h-[2px] w-2 rounded-sm bg-brand-gold/60" />
              </div>
            </div>
            {/* center readout */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-3">
              <p className="font-amiri text-3xl font-bold leading-none text-white">136°</p>
              <p className="mt-1 text-[8px] font-bold text-brand-gold-light">جنوب شرق</p>
              <p className="mt-2 rounded-full bg-brand-green/25 px-2 py-0.5 text-[7.5px] font-bold text-emerald-200">
                المعايرة: ممتازة
              </p>
            </div>
          </div>
        </div>

        <div className="mx-3 mt-4 rounded-xl border border-white/10 bg-white/5 px-2.5 py-2">
          <p className="text-[8.5px] font-bold text-slate-200">زاوية الكعبة من شمالك: 136°</p>
          <p className="mt-1 text-[7.5px] leading-4 text-slate-400">
            أدر هاتفك ببطء حتى يشير المؤشر الذهبي إلى الكعبة المشرفة. يدمج التطبيق الجيروسكوب والمغناطيسية معاً.
          </p>
        </div>
        <div className="mt-2 flex justify-center gap-1.5 pb-4">
          {["تثبيت الاتجاه", "إعادة المعايرة"].map((t) => (
            <span key={t} className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-2.5 py-1 text-[8px] font-bold text-brand-gold-light">
              {t}
            </span>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Adhkar + tasbih                                                  */
/* ------------------------------------------------------------------ */

export function MockAdhkar() {
  return (
    <PhoneFrame label="شاشة الأذكار والمسبحة في التطبيق">
      <div className="flex h-full flex-col bg-[#121416]">
        <StatusBar />
        <div className="flex items-center justify-between px-3 py-2">
          <p className="text-[11px] font-black text-white">الأذكار والأدعية</p>
          <span className="rounded-full bg-brand-green/20 px-2 py-0.5 text-[8px] font-bold text-emerald-300">حصن المسلم</span>
        </div>

        {/* يتوزع المحتوى رأسياً كالشاشة الفعلية، والشرائح السفلية مثبتة أسفلها */}
        <div className="flex flex-1 flex-col justify-evenly">
        <div className="mx-3 rounded-2xl border border-brand-gold/40 bg-gradient-to-b from-[#17241c] to-[#101a14] p-3">
          <div className="flex items-center gap-1.5">
            <span className="rounded-full bg-brand-gold/15 px-2 py-0.5 text-[7.5px] font-bold text-brand-gold-light">أذكار الصباح</span>
            <span className="text-[7px] text-slate-400">ذكر 3 من 12</span>
          </div>
          <p className="font-amiri mt-2 text-[13px] font-bold leading-[1.9] text-white">
            أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ
          </p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-[7.5px] text-slate-400">رواه مسلم</p>
            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[7.5px] font-bold text-brand-gold-light">التكرار: مرة واحدة</span>
          </div>
        </div>

        {/* tasbih */}
        <div className="mx-3 mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="relative size-16 shrink-0">
            <svg viewBox="0 0 64 64" className="size-16 -rotate-90">
              <circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
              <circle
                cx="32" cy="32" r="27" fill="none" stroke="#d4af37" strokeWidth="6"
                strokeLinecap="round" strokeDasharray="169.6" strokeDashoffset="56"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-amiri text-lg font-bold text-white">٢٢</span>
          </div>
          <div className="min-w-0">
            <p className="text-[9.5px] font-black text-white">المسبحة الإلكترونية</p>
            <p className="mt-1 text-[8px] leading-4 text-slate-400">
              سُبْحَانَ اللَّهِ وَبِحَمْدِهِ — عدّة اليوم 100 تسبيحة مع اهتزاز لمسي عند كل عدّة.
            </p>
          </div>
        </div>

        {/* عدادات الإنجاز اليومية */}
        <div className="mx-3 grid grid-cols-3 gap-1.5">
          {[
            { v: "١٠٠", l: "تسبيحة اليوم" },
            { v: "٥ من ١٢", l: "أذكاراً مكتملة" },
            { v: "٧", l: "أياماً متتالية" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-[#334155] bg-[#1e2227] px-1 py-2 text-center">
              <p className="font-amiri text-[13px] font-bold leading-none text-brand-gold-light">{s.v}</p>
              <p className="mt-1 text-[7px] font-bold text-slate-400">{s.l}</p>
            </div>
          ))}
        </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5 px-3 pb-4 pt-2">
          {["أذكار المساء", "أذكار النوم", "الاستيقاظ"].map((t) => (
            <div key={t} className="rounded-xl border border-[#334155] bg-[#1e2227] px-1.5 py-2 text-center text-[8px] font-bold text-slate-200">
              {t}
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
