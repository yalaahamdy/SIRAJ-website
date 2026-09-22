"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "siraj-theme";
const LIGHT_BG = "#f6f7f3";
const DARK_BG = "#070d18";

function applyTheme(light: boolean) {
  document.documentElement.classList.toggle("light", light);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", light ? LIGHT_BG : DARK_BG);
}

/**
 * Dark/light switch. Dark is the site's brand identity (the app's night theme);
 * the light palette is taken from the app's own Light Mode (app_colors.dart).
 * The choice persists in localStorage and is restored pre-paint by the inline
 * script in layout.tsx to avoid any flash.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("light");
    applyTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next ? "light" : "dark");
    } catch {
      /* storage unavailable — the toggle still works for this visit */
    }
    setLight(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "التبديل إلى الوضع الليلي" : "التبديل إلى الوضع النهاري"}
      title={light ? "الوضع الليلي" : "الوضع النهاري"}
      aria-pressed={light}
      className={`flex size-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-brand-gold/40 hover:text-brand-gold-light ${className}`}
    >
      {mounted ? (
        light ? <Moon className="size-4.5" /> : <Sun className="size-4.5" />
      ) : (
        <Sun className="size-4.5 opacity-0" aria-hidden />
      )}
    </button>
  );
}
