import { bp } from "@/lib/base-path";
import { Github, Tag } from "lucide-react";
import { GITHUB_URL, LATEST_VERSION, NAV_LINKS, RELEASES_URL } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="keep-dark relative mt-8 border-t border-brand-gold/15 bg-[#060b14]">
      <div className="pattern-stars absolute inset-0 opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={bp("/brand/app_icon.png")} alt="شعار سِراج" className="size-14 rounded-2xl shadow-lg shadow-black/50" />
              <div>
                <p className="font-amiri text-3xl font-bold gold-text">سِراج</p>
                <p className="mt-1 text-xs font-bold text-slate-400">المنصة الإسلامية الشاملة • SIRAJ</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              تطبيق إسلامي شامل مفتوح المصدر: القرآن، المواقيت، القبلة، الأذكار، الحديث، الزكاة، والأكاديمية —
              مبني بـ Flutter ومعمارية نظيفة، ويعمل بلا إنترنت مع خصوصية كاملة.
            </p>
          </div>

          {/* site links */}
          <nav aria-label="روابط الموقع">
            <h3 className="font-amiri text-xl font-bold text-white">استكشف</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-bold text-slate-400 transition hover:text-brand-gold-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* project links */}
          <div>
            <h3 className="font-amiri text-xl font-bold text-white">المشروع</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-brand-gold-light">
                  <Github className="size-4" />
                  مستودع الكود المصدري
                </a>
              </li>
              <li>
                <a href={RELEASES_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-brand-gold-light">
                  <Tag className="size-4" />
                  الإصدارات والتحميل ({LATEST_VERSION})
                </a>
              </li>
              <li>
                <a href={`${GITHUB_URL}/issues`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-brand-gold-light">
                  <span className="size-1.5 rounded-full bg-brand-gold" aria-hidden />
                  الإبلاغ عن مشكلة أو اقتراح
                </a>
              </li>
              <li>
                <a href={`${GITHUB_URL}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-brand-gold-light">
                  <span className="size-1.5 rounded-full bg-brand-gold" aria-hidden />
                  دليل المساهمة
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/5 pt-7 text-center">
          <p className="font-amiri text-lg text-brand-gold-light">صُنع بإتقان واحتساب لخدمة المسلمين في كل مكان</p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} سِراج — تطبيق مفتوح المصدر تحت رخصة MIT
          </p>
        </div>
      </div>
    </footer>
  );
}
