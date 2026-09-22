"use client";

import { bp } from "@/lib/base-path";
import { useEffect, useState } from "react";
import { Download, Github, Menu, X } from "lucide-react";
import { GITHUB_URL, LATEST_VERSION, NAV_LINKS } from "@/lib/site-data";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "nav-shell" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 md:px-8" aria-label="التنقل الرئيسي">
        {/* brand */}
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <img src={bp("/brand/app_icon.png")} alt="شعار تطبيق سِراج" className="size-10 rounded-xl shadow-lg shadow-black/40" />
          <span className="flex flex-col leading-none">
            <span className="font-amiri text-2xl font-bold gold-text">سِراج</span>
            <span className="mt-0.5 text-[10px] font-bold tracking-wide text-slate-400">SIRAJ • الإصدار {LATEST_VERSION}</span>
          </span>
        </a>

        {/* desktop links */}
        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/5 hover:text-brand-gold-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* actions */}
        <div className="ms-auto flex items-center gap-2 lg:ms-0">
          <ThemeToggle />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="مستودع سِراج على GitHub"
            className="hidden size-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-brand-gold/40 hover:text-brand-gold-light sm:flex"
          >
            <Github className="size-4.5" />
          </a>
          <a
            href="#download"
            className="gold-btn hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-black sm:inline-flex"
          >
            <Download className="size-4" />
            تحميل التطبيق
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            className="flex size-10 items-center justify-center rounded-full border border-white/10 text-slate-200 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open ? (
        <div className="nav-panel border-t border-white/5 px-4 pb-5 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/5 hover:text-brand-gold-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="gold-btn flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black"
              >
                <Download className="size-4" />
                تحميل التطبيق
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
