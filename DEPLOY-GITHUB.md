# 🚀 دليل نشر موقع سِراج على GitHub Pages

هذا الموقع مُهيأ مسبقاً للنشر التلقائي على **GitHub Pages** بمجرد رفعه إلى مستودع GitHub. اتبع الخطوات التالية بالترتيب.

---

## الخطوة 1: أنشئ مستودعاً جديداً على GitHub

1. ادخل إلى <https://github.com/new>
2. اسم المستودع المقترح: **SIRAJ-website** (أو أي اسم تريده).
3. اترك المستودع **عام (Public)** حتى يعمل GitHub Pages مجاناً.
4. لا تضف README ولا .gitignore (سنرفع الموجود كما هو).
5. اضغط **Create repository**.

---

## الخطوة 2: ارفع ملفات الموقع إلى المستودع

من داخل مجلد هذا المشروع نفّذ الأوامر التالية (استبدل `yalaahamdy` باسم مستخدمك و`SIRAJ-website` باسم المستودع):

```bash
git init
git add .
git commit -m "SIRAJ official website — first release"
git branch -M main
git remote add origin https://github.com/yalaahamdy/SIRAJ-website.git
git push -u origin main
```

---

## الخطوة 3: فعّل GitHub Pages

1. في صفحة المستودع: **Settings** ← من القائمة الجانبية **Pages**.
2. تحت **Build and deployment** اختر:
   - **Source**: `GitHub Actions`
3. هذا كل شيء! سيظهر رابط موقعك بعد دقيقة أو دقيقتين في نفس الصفحة:
   ```
   https://yalaahamdy.github.io/SIRAJ-website/
   ```

> يوجد في المشروع ملف جاهز: `.github/workflows/deploy-pages.yml` يقوم تلقائياً ببناء الموقع ونشره عند كل Push. يمكنك متابعة تقدمه من تبويب **Actions** في المستودع.

---

## ملاحظة مهمة عن مسار الموقع (Base Path)

إذا نشرت الموقع في مستودع باسم غير `yalaahamdy.github.io`، فسيعمل تحت مسار فرعي مثل `/SIRAJ-website`. الملف `.github/workflows/deploy-pages.yml` يتكفل بضبط هذا المسار تلقائياً عبر متغير البيئة:

```yaml
NEXT_PUBLIC_BASE_PATH: "/${{ github.event.repository.name }}"
```

- ✅ لا تحتاج تعديل أي شيء إذا كنت تستخدم الـ workflow المرفق.
- 🔧 فقط إذا كنت تبني يدوياً على جهازك:

```bash
BUILD_STATIC=1 NEXT_PUBLIC_BASE_PATH="/SIRAJ-website" npm run build
# ستظهر ملفات الموقع الجاهزة للرفع في مجلد out/
```

---

## إضافة فيديو تعريفي حقيقي من التطبيق (اختياري)

قسم «فيديو تعريفي من داخل التطبيق» جاهز ويظهر تلقائياً بمجرد إضافة الملف:

1. سجّل شاشة الهاتف أثناء استخدام التطبيق (1080p، عمودي أو أفقي).
2. سمّ الملف: **`demo.mp4`**
3. ضعه في المسار: `public/media/demo.mp4`
4. ارفع التغيير — سيظهر الفيديو داخل إطاره في الموقع فوراً.

```bash
git add public/media/demo.mp4
git commit -m "Add real app demo video"
git push
```

---

## إضافة لقطات شاشة حقيقية من التطبيق (اختياري)

معرض «لقطات من التطبيق» يعرض صورك الحقيقية تلقائياً دون أي تعديل على الكود:

1. خذ لقطات شاشة من التطبيق (المصحف، المواقيت، القبلة، الأذكار…).
2. سمّها بالأسماء التالية بالترتيب: `shot-1.jpg` ، `shot-2.jpg` … حتى `shot-6.jpg`
3. ضعها في المسار: `public/screenshots/`
4. ارفعها — الخانات الفارغة ستتحول إلى صور حقيقية تلقائياً.

```bash
git add public/screenshots/
git commit -m "Add real app screenshots"
git push
```

> 💡 كلما زادت الدقة زادت جودة العرض — يُنصح بلقطات بدقة هاتفك الأصلية (مثلاً 1080×2400).

---

## تحديث اسم النطاق (اختياري)

لتشغيل الموقع على نطاقك الخاص مثل `siraj.app`:

1. ضع ملفاً باسم `CNAME` في جذر المشروع يحتوي اسم النطاق فقط:
   ```
   siraj.example.com
   ```
2. من إعدادات DNS لدى مزوّد النطاق أضف سجل `CNAME` يشير إلى `yalaahamdy.github.io`.
3. من **Settings ← Pages** فعّل خيار Custom domain وانتظر التحقق.

---

## استكشاف الأخطاء

| المشكلة | الحل |
|---|---|
| صفحة 404 بعد النشر | تأكد من أن Source في Pages = GitHub Actions، ومن نجاح workflow في تبويب Actions |
| الموقع يظهر بلا تنسيق | تأكد من وجود `NEXT_PUBLIC_BASE_PATH` في الـ workflow (موجود تلقائياً) |
| الفيديو لا يظهر | تأكد أن الملف بالضبط `public/media/demo.mp4` وبارتفاع الحروف كما هو |
| اللقطات لا تظهر | تأكد من الأسماء `shot-1.jpg` حتى `shot-6.jpg` داخل `public/screenshots/` |

---

## الملخص التقني

- **الإطار**: Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- **النشر**: تصدير ساكن كامل (Static Export) ← GitHub Pages
- **الخطوط**: Amiri (عناوين ونصوص شرعية) + Scheherazade New (القرآن) + Tajawal (الواجهة) — من Google Fonts
- **الألوان**: مستخرجة من كود التطبيق نفسه (`lib/shell/theme/app_colors.dart`): الأخضر الإسلامي `#0F5132` والذهبي `#D4AF37`
- **الواجهة**: عربية RTL بالكامل، متجاوبة مع الجوال والحاسوب
