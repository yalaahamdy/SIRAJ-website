import { BadgeCheck, Github, GitPullRequest, HardDrive, HeartHandshake, ShieldCheck, WifiOff } from "lucide-react";
import { GITHUB_URL } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const PRIVACY_POINTS = [
  {
    icon: ShieldCheck,
    title: "صفر تتبع",
    text: "لا إحصائيات ولا سجلات استخدام ولا أي استعلام يُرسل إلى خادم خارجي — التطبيق لا يعرف عنك شيئاً لأنه لا يسأل.",
  },
  {
    icon: HardDrive,
    title: "بياناتك ملكك",
    text: "العلامات المرجعية وسجلات التسميع وأوزان الزكاة تُحفظ محلياً على جهازك حصراً، ولا تغادر الهاتف أبداً.",
  },
  {
    icon: BadgeCheck,
    title: "نصوص موثقة",
    text: "النصوص القرآنية والأحاديث الشريفة مطابقة مباشرة لمجمع الملك فهد وأمهات كتب الحديث المحققة.",
  },
];

const CONTRIBUTE_POINTS = [
  { icon: GitPullRequest, title: "ساهم بالكود", text: "اختر مشكلة من قائمة Issues أو اقترح ميزة جديدة وافتح Pull Request." },
  { icon: ShieldCheck, title: "بلّغ عن مشكلة", text: "وجدت خللاً أو لديك اقتراح؟ افتح Issue مفصلة وسيراجعها فريق التطوير." },
  { icon: HeartHandshake, title: "انشر عن سِراج", text: "شارك الموقع والتطبيق مع من تحب — كل مستخدم جديد فرصة لأجرٍ جارٍ." },
];

export function PrivacyAndCommunity() {
  return (
    <section id="privacy" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionHeading
            kicker="الخصوصية أولاً"
            title="تقنية تحترم مستخدمها"
            subtitle="سِراج مبني من الأساس على مبدأ Local-First: كل شيء يعمل على جهازك، ولا شيء يخرج منه."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PRIVACY_POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 100}>
              <article className="glass-card h-full rounded-3xl p-7 text-center">
                <span className="keep-dark mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-deep text-brand-gold-light ring-1 ring-brand-gold/25">
                  <point.icon className="size-7" />
                </span>
                <h3 className="mt-5 font-amiri text-2xl font-bold text-white">{point.title}</h3>
                <p className="mt-2.5 text-sm leading-7 text-slate-300">{point.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="keep-dark relative overflow-hidden rounded-[2.5rem] border border-brand-gold/20 bg-[linear-gradient(160deg,#0b1526,#0a3622_120%)] p-8 md:p-12">
            <div className="pattern-stars absolute inset-0 opacity-40" aria-hidden />
            <div className="relative">
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-sm font-bold text-brand-gold-light">
                  <WifiOff className="size-4" />
                  مشروع مفتوح المصدر — رخصة MIT
                </span>
                <h3 className="font-amiri text-4xl font-bold text-white md:text-5xl">ساهم في بناء سِراج</h3>
                <p className="max-w-2xl leading-8 text-slate-300">
                  سِراج مشروع جماعي يُطوَّر علناً على GitHub. مساهمتك — مهما صغرت — تنفع مسلماً في كل بقاع
                  الأرض: كود، أو ترجمة، أو توثيق، أو حتى فكرة تُكتب في سطر.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {CONTRIBUTE_POINTS.map((point) => (
                  <div key={point.title} className="rounded-2xl border border-white/10 bg-black/25 p-6 backdrop-blur">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                      <point.icon className="size-5.5" />
                    </span>
                    <h4 className="mt-4 text-lg font-black text-white">{point.title}</h4>
                    <p className="mt-1.5 text-sm leading-7 text-slate-300">{point.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="gold-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-black"
                >
                  <Github className="size-5" />
                  انضم إلينا على GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
