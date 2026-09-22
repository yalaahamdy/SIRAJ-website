import { Download, Github, MonitorSmartphone, ShieldCheck, Tag, FolderDown } from "lucide-react";
import { GITHUB_URL, LATEST_VERSION, RELEASES_URL } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { ScreenshotGallery } from "./screenshot-gallery";

const STEPS = [
  {
    title: "افتح صفحة الإصدارات",
    text: "انتقل إلى صفحة GitHub Releases الخاصة بالتطبيق من الزر أدناه.",
  },
  {
    title: "حمّل ملف APK",
    text: "من أحدث إصدار، نزّل ملف app-release.apk المرفق مع الإصدار.",
  },
  {
    title: "ثبّت التطبيق",
    text: "افتح الملف على هاتفك وفعّل «التثبيت من مصادر غير معروفة» عند الطلب، ثم أكمل التثبيت.",
  },
];

export function DownloadSection() {
  return (
    <section id="download" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionHeading
            kicker="التحميل"
            title="ابدأ رحلتك مع سِراج اليوم"
            subtitle="مجاني بالكامل ومفتوح المصدر — حمّله مباشرة من إصدارات GitHub الرسمية."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="keep-dark relative overflow-hidden rounded-[2.5rem] border border-brand-gold/25">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0a3622_0%,#0f5132_45%,#0b1526_100%)]" aria-hidden />
            <div className="pattern-stars absolute inset-0 -z-10 opacity-50" aria-hidden />
            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-1.5 text-sm font-black text-brand-ink">
                    <Tag className="size-4" />
                    الإصدار {LATEST_VERSION}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 text-sm font-bold text-white">
                    <MonitorSmartphone className="size-4" />
                    أندرويد 5.0+
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 text-sm font-bold text-white">
                    <ShieldCheck className="size-4" />
                    مجاني • بلا إعلانات
                  </span>
                </div>

                <h3 className="mt-6 font-amiri text-4xl font-bold leading-snug text-white md:text-5xl">
                  حمّل سِراج واجعل يومك أنور
                </h3>
                <p className="mt-4 max-w-xl leading-8 text-slate-200">
                  الحزمة الرسمية تُنشر في صفحة الإصدارات على GitHub. التطبيق يعمل فور التثبيت بلا حساب
                  ولا صلاحيات زائدة، وبياناتك تبقى على جهازك حصراً.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={RELEASES_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="gold-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-black"
                  >
                    <Download className="size-5" />
                    تحميل من GitHub Releases
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white/10"
                  >
                    <Github className="size-4.5" />
                    تصفح الكود المصدري
                  </a>
                </div>

                <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-emerald-100/80">
                  <FolderDown className="mt-0.5 size-4 shrink-0" />
                  متوفر حالياً لأندرويد بصيغة APK، مع إمكانية بناء نسخ iOS والويب من الكود المصدري عبر Flutter.
                </p>
              </div>

              {/* steps */}
              <ol className="space-y-4">
                {STEPS.map((step, index) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-white/15 bg-black/20 p-5 backdrop-blur">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-gold font-amiri text-xl font-bold text-brand-ink">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-white">{step.title}</h4>
                      <p className="mt-1 text-sm leading-7 text-slate-300">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        {/* real screenshots */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-center font-amiri text-3xl font-bold text-white">لقطات من التطبيق</h3>
            {/* ملاحظة للناشر: المعرض تلقائي — ضع صور الشاشة في public/screenshots/
                بأسماء shot-1.jpg حتى shot-6.jpg وستحل محل الخانات الفارغة
                دون أي تعديل على الكود. */}
            <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-7 text-slate-400">
              نافذة على واجهات سِراج كما هي على الهاتف: المصحف، المواقيت، القبلة، والأذكار.
            </p>
          </Reveal>
          <Reveal className="mt-10" delay={120}>
            <ScreenshotGallery />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
