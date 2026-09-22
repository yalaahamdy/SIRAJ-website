import type { Metadata } from "next";
import { bp } from "@/lib/base-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "سِراج | SIRAJ — المنصة الإسلامية الشاملة مفتوحة المصدر",
  description:
    "سِراج: رفيقك اليومي الشامل للقرآن الكريم ومواقيت الصلاة والقبلة والأذكار والحديث والأكاديمية المنهجية — يعمل بدون إنترنت، يحترم خصوصيتك بالكامل، ومفتوح المصدر تحت رخصة MIT.",
  keywords: [
    "سِراج",
    "SIRAJ",
    "القرآن الكريم",
    "مواقيت الصلاة",
    "القبلة",
    "الأذكار",
    "حصن المسلم",
    "تطبيق إسلامي",
    "مفتوح المصدر",
    "Flutter",
  ],
  authors: [{ name: "yalaahamdy" }],
  icons: {
    icon: bp("/brand/app_icon.png"),
    apple: bp("/brand/app_icon.png"),
  },
  openGraph: {
    title: "سِراج | SIRAJ — المنصة الإسلامية الشاملة",
    description:
      "مصحف المدينة، مواقيت دقيقة أوفلاين، بوصلة قبلة، أذكار، حديث، زكاة، وأكاديمية إسلامية بـ 49 مساراً — في تطبيق واحد مفتوح المصدر.",
    url: "https://yalaahamdy.github.io/SIRAJ",
    siteName: "سِراج | SIRAJ",
    type: "website",
    locale: "ar_AR",
    images: [{ url: bp("/brand/app_icon.png"), width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "سِراج | SIRAJ — المنصة الإسلامية الشاملة",
    description:
      "مصحف، مواقيت، قبلة، أذكار، حديث، زكاة وأكاديمية — تطبيق إسلامي مفتوح المصدر يعمل بدون إنترنت.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#070d18" />
        {/* Restores the visitor's saved theme before first paint (no flash). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('siraj-theme')==='light'){document.documentElement.classList.add('light');document.currentScript&&document.querySelector('meta[name=\"theme-color\"]').setAttribute('content','#f6f7f3');}}catch(e){}})();",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Scheherazade+New:wght@400;700&family=Tajawal:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased text-white">{children}</body>
    </html>
  );
}
