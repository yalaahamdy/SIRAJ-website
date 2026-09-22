/**
 * رسمة معمارية إسلامية فاخرة لأفق المسجد الجامع (Grand Mosque Skyline)
 * مصممة بدقة هندسية وجمالية احترافية خالية تماماً من أي أخطاء:
 * - قبة كبرى مركزية ذات انحناء إسلامي أصيل (Ogee Curve) مع رقبة بنوافذ مقوسة وجامور وهلال ذهبي
 * - قباب مساندة متدرجة تمنح عمقاً واقعياً للحرم
 * - مآذن شامخة رباعية وثنائية الشرفات بمقرنصات وجوسق وأقلام مخروطية وأهلة شريفة
 * - أروقة واجهة بأقواس إسلامية مدببة ذات إضاءة داخلية دافئة
 * - شرفات ومسننات معمارية (Crenellations) على طول الأسقف
 * - طبقات عمق متعددة (مقدمة، وسط، أفق بعيد مع نخيل الواحة)
 */

export function MosqueSkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 280"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* هالة فجر / سحر خلف القبة الكبرى */}
        <radialGradient id="skylineAura" cx="50%" cy="55%" r="45%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.16" />
          <stop offset="45%" stopColor="#0f5132" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
        </radialGradient>

        {/* ذهب أصيل للأهلة والجامور */}
        <linearGradient id="goldFinial" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>

        {/* إضاءة دافئة هادئة لنوافذ الحرم */}
        <linearGradient id="archLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.32" />
          <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* 0. هالة نور سماوية خلف المسجد */}
      <ellipse cx="720" cy="160" rx="420" ry="110" fill="url(#skylineAura)" />

      {/* ============================================================== */}
      {/* 1. الطبقة البعيدة (الأفق والواحة والمآذن النائية) - Opacity 0.28 */}
      {/* ============================================================== */}
      <g fill="currentColor" opacity="0.28">
        {/* تلال أفق بعيدة */}
        <path d="M 0 258 C 220 250 440 256 720 248 C 1000 256 1220 250 1440 258 L 1440 280 L 0 280 Z" />

        {/* مئذنة نائية في أقصى اليسار */}
        <DistantMinaret cx={140} topY={105} />
        {/* قباب نائية يسار */}
        <path d="M 210 262 C 210 244 222 232 235 224 C 248 232 260 244 260 262 Z" />
        <path d="M 185 264 C 185 250 193 240 202 234 C 211 240 220 250 220 264 Z" />

        {/* مئذنة نائية في أقصى اليمين */}
        <DistantMinaret cx={1300} topY={105} />
        {/* قباب نائية يمين */}
        <path d="M 1180 262 C 1180 244 1192 232 1205 224 C 1218 232 1230 244 1230 262 Z" />
        <path d="M 1220 264 C 1220 250 1229 240 1238 234 C 1247 240 1255 250 1255 264 Z" />

        {/* نخيل الواحة العربي */}
        <ArabianPalm cx={80} baseY={262} scale={1.05} />
        <ArabianPalm cx={1370} baseY={262} scale={1.05} flip />
      </g>

      {/* ============================================================== */}
      {/* 2. الطبقة المتوسطة (الأجنحة الجانبية والأروقة الملحقة) - Opacity 0.6 */}
      {/* ============================================================== */}
      <g fill="currentColor" opacity="0.6">
        {/* مئذنة جناح أيسر */}
        <MidMinaret cx={340} topY={68} />
        {/* قبة جناح أيسر */}
        <path d="M 388 235 C 388 206 405 186 422 174 C 439 186 456 206 456 235 Z" />
        <FinialSimple cx={422} baseY={174} height={18} />

        {/* مئذنة جناح أيمن */}
        <MidMinaret cx={1100} topY={68} />
        {/* قبة جناح أيمن */}
        <path d="M 984 235 C 984 206 1001 186 1018 174 C 1035 186 1052 206 1052 235 Z" />
        <FinialSimple cx={1018} baseY={174} height={18} />

        {/* رواق جانبي يسار */}
        <rect x="270" y="235" width="220" height="35" />
        {/* رواق جانبي يمين */}
        <rect x="950" y="235" width="220" height="35" />

        {/* شرفات الأروقة الجانبية */}
        <Crenellations startX={270} endX={490} y={235} />
        <Crenellations startX={950} endX={1170} y={235} />
      </g>

      {/* ============================================================== */}
      {/* 3. الطبقة الرئيسية (الحرم المركزي والمآذن الكبرى) - Full Opacity */}
      {/* ============================================================== */}
      <g fill="currentColor">
        {/* أرضية الحرم الكاملة */}
        <rect x="0" y="265" width="1440" height="15" />

        {/* واجهة مبنى الحرم المركزي */}
        <rect x="540" y="210" width="360" height="58" />

        {/* شرفات سقف الحرم المركزي */}
        <Crenellations startX={540} endX={900} y={210} />

        {/* قبة مساندة يسرى (Left Semi-Dome) */}
        <path d="M 570 210 C 564 186 590 162 618 148 C 646 162 672 186 666 210 Z" />
        <FinialWithCrescent cx={618} baseY={148} height={22} />

        {/* قبة مساندة يمنى (Right Semi-Dome) */}
        <path d="M 774 210 C 768 186 794 162 822 148 C 850 162 876 186 870 210 Z" />
        <FinialWithCrescent cx={822} baseY={148} height={22} />

        {/* رقبة القبة الكبرى (Central Dome Drum) */}
        <rect x="644" y="152" width="152" height="60" />
        {/* إفريز رقبة القبة */}
        <rect x="640" y="150" width="160" height="4" rx="1" />

        {/* القبة الكبرى المركزية (Grand Central Dome) - منحنى إسلامي مدبب أصيل */}
        <path d="M 646 150 C 636 126 668 96 720 68 C 772 96 804 126 794 150 Z" />

        {/* مئذنة الحرم الكبرى اليسرى */}
        <GrandMinaret cx={490} />

        {/* مئذنة الحرم الكبرى اليمنى */}
        <GrandMinaret cx={950} />
      </g>

      {/* ============================================================== */}
      {/* 4. تفاصيل النوافذ والأقواس الداخلية المضيئة                     */}
      {/* ============================================================== */}
      <g fill="url(#archLight)">
        {/* نوافذ رقبة القبة الكبرى (5 نوافذ مقوسة) */}
        <PointedArchWindow cx={668} baseY={195} width={10} height={28} />
        <PointedArchWindow cx={694} baseY={195} width={10} height={28} />
        <PointedArchWindow cx={720} baseY={195} width={11} height={30} />
        <PointedArchWindow cx={746} baseY={195} width={10} height={28} />
        <PointedArchWindow cx={772} baseY={195} width={10} height={28} />

        {/* أقواس الواجهة السفلية للحرم (7 بوابات إسلامية مدببة) */}
        <PointedArchWindow cx={575} baseY={265} width={20} height={36} />
        <PointedArchWindow cx={615} baseY={265} width={20} height={36} />
        <PointedArchWindow cx={655} baseY={265} width={22} height={40} />
        <PointedArchWindow cx={720} baseY={265} width={26} height={45} />
        <PointedArchWindow cx={785} baseY={265} width={22} height={40} />
        <PointedArchWindow cx={825} baseY={265} width={20} height={36} />
        <PointedArchWindow cx={865} baseY={265} width={20} height={36} />

        {/* أقواس الأروقة الجانبية */}
        <PointedArchWindow cx={310} baseY={265} width={15} height={24} />
        <PointedArchWindow cx={350} baseY={265} width={15} height={24} />
        <PointedArchWindow cx={390} baseY={265} width={15} height={24} />
        <PointedArchWindow cx={430} baseY={265} width={15} height={24} />

        <PointedArchWindow cx={1010} baseY={265} width={15} height={24} />
        <PointedArchWindow cx={1050} baseY={265} width={15} height={24} />
        <PointedArchWindow cx={1090} baseY={265} width={15} height={24} />
        <PointedArchWindow cx={1130} baseY={265} width={15} height={24} />
      </g>

      {/* ============================================================== */}
      {/* 5. التفاحات والهلال الذهبي للقبة الكبرى والمآذن                */}
      {/* ============================================================== */}
      <g>
        {/* جامور وهلال القبة الكبرى */}
        <GrandDomeFinial cx={720} baseY={68} />

        {/* أهلة المآذن الكبرى */}
        <MinaretCrescent cx={490} cy={22} r={5} />
        <MinaretCrescent cx={950} cy={22} r={5} />

        {/* أهلة المآذن المتوسطة */}
        <MinaretCrescent cx={340} cy={54} r={3.8} />
        <MinaretCrescent cx={1100} cy={54} r={3.8} />
      </g>
    </svg>
  );
}

/**
 * مئذنة الحرم الكبرى (Grand Minaret)
 * تفاصيل دقيقة: قاعدة متدرجة، جذع سفلي بنافذة شريطية، شرفة أولى بمقرنصات ودرابزين،
 * جذع علوي، شرفة ثانية، جوسق بأعمدة، قلم مخروطي عثماني، وعمود الهلال.
 */
function GrandMinaret({ cx }: { cx: number }) {
  return (
    <g>
      {/* قاعدة المئذنة */}
      <rect x={cx - 15} y={235} width={30} height={32} />
      <polygon points={`${cx - 15},235 ${cx - 12},226 ${cx + 12},226 ${cx + 15},235`} />

      {/* الجذع السفلي */}
      <rect x={cx - 11} y={166} width={22} height={60} />
      {/* نافذة شريطية في الجذع السفلي */}
      <rect x={cx - 2} y={185} width={4} height={18} rx={1.5} fill="url(#archLight)" />

      {/* الشرفة الأولى (First Balcony) ومقرنصاتها */}
      <polygon points={`${cx - 17},166 ${cx + 17},166 ${cx + 12},172 ${cx - 12},172`} />
      <rect x={cx - 17} y={154} width={34} height={12} rx={1} />
      {/* فتحات درابزين الشرفة */}
      <rect x={cx - 13} y={156} width={4} height={4} fill="url(#archLight)" />
      <rect x={cx - 2} y={156} width={4} height={4} fill="url(#archLight)" />
      <rect x={cx + 9} y={156} width={4} height={4} fill="url(#archLight)" />

      {/* الجذع الأوسط */}
      <rect x={cx - 9} y={112} width={18} height={42} />
      <rect x={cx - 1.5} y={122} width={3} height={12} rx={1} fill="url(#archLight)" />

      {/* الشرفة الثانية (Second Balcony) */}
      <polygon points={`${cx - 14},112 ${cx + 14},112 ${cx + 10},116 ${cx - 10},116`} />
      <rect x={cx - 14} y={104} width={28} height={8} rx={1} />

      {/* الجوسق (Lantern Pavilion) بأعمدة مفتوحة */}
      <rect x={cx - 7} y={72} width={14} height={32} />
      <rect x={cx - 3.5} y={78} width={7} height={18} rx={3} fill="url(#archLight)" />

      {/* القلم المخروطي المستدق (Pencil Spire) */}
      <path d={`M ${cx - 7} 72 C ${cx - 4} 55 ${cx - 2} 42 ${cx} 36 C ${cx + 2} 42 ${cx + 4} 55 ${cx + 7} 72 Z`} />
    </g>
  );
}

/**
 * مئذنة متوسطة للأجنحة (Mid Minaret)
 */
function MidMinaret({ cx, topY }: { cx: number; topY: number }) {
  return (
    <g>
      <rect x={cx - 11} y={235} width={22} height={32} />
      <polygon points={`${cx - 11},235 ${cx - 9},228 ${cx + 9},228 ${cx + 11},235`} />

      {/* جذع سفلي */}
      <rect x={cx - 8} y={178} width={16} height={50} />

      {/* شرفة */}
      <rect x={cx - 13} y={168} width={26} height={10} rx={1} />

      {/* جذع علوي */}
      <rect x={cx - 6} y={124} width={12} height={44} />

      {/* شرفة علوية وجوسق */}
      <rect x={cx - 9} y={118} width={18} height={6} rx={1} />
      <rect x={cx - 5} y={96} width={10} height={22} />

      {/* مخروط */}
      <path d={`M ${cx - 5} 96 C ${cx - 3} 82 ${cx - 1} 70 ${cx} 64 C ${cx + 1} 70 ${cx + 3} 82 ${cx + 5} 96 Z`} />
    </g>
  );
}

/**
 * مئذنة نائية في خط الأفق (Distant Minaret)
 */
function DistantMinaret({ cx, topY }: { cx: number; topY: number }) {
  return (
    <g>
      <rect x={cx - 6} y={210} width={12} height={60} />
      <rect x={cx - 9} y={204} width={18} height={6} rx={1} />
      <rect x={cx - 5} y={150} width={10} height={54} />
      <rect x={cx - 7} y={146} width={14} height={4} />
      <rect x={cx - 4} y={124} width={8} height={22} />
      <path d={`M ${cx - 4} 124 L ${cx} ${topY} L ${cx + 4} 124 Z`} />
      <circle cx={cx} cy={topY - 3} r={1.5} />
    </g>
  );
}

/**
 * نافذة مقوسة إسلامية مدببة (Pointed Horseshoe / Ogee Arch Window)
 */
function PointedArchWindow({
  cx,
  baseY,
  width,
  height,
}: {
  cx: number;
  baseY: number;
  width: number;
  height: number;
}) {
  const hw = width / 2;
  const apexY = baseY - height;
  const springY = baseY - height * 0.55;

  return (
    <path
      d={`M ${cx - hw} ${baseY} 
          V ${springY} 
          C ${cx - hw} ${springY - height * 0.22} ${cx - hw * 0.3} ${apexY + height * 0.05} ${cx} ${apexY} 
          C ${cx + hw * 0.3} ${apexY + height * 0.05} ${cx + hw} ${springY - height * 0.22} ${cx + hw} ${springY} 
          V ${baseY} Z`}
    />
  );
}

/**
 * مسننات وشرفات معمارية إسلامية مستمرة (Crenellations / Merlons)
 */
function Crenellations({ startX, endX, y }: { startX: number; endX: number; y: number }) {
  const toothWidth = 8;
  const toothHeight = 6;
  const gap = 6;
  const step = toothWidth + gap;
  const count = Math.floor((endX - startX) / step);

  const rects = [];
  for (let i = 0; i < count; i++) {
    rects.push(
      <rect
        key={i}
        x={startX + i * step + gap / 2}
        y={y - toothHeight}
        width={toothWidth}
        height={toothHeight}
        rx={0.5}
      />
    );
  }
  return <g>{rects}</g>;
}

/**
 * جامور القبة الكبرى مع الهلال الذهبي الشريف
 */
function GrandDomeFinial({ cx, baseY }: { cx: number; baseY: number }) {
  return (
    <g fill="url(#goldFinial)">
      {/* ساق الجامور */}
      <rect x={cx - 1.5} y={baseY - 42} width={3} height={42} rx={1} />

      {/* ثلاث تفاحات متدرجة الحجم (Traditional Jamour Spheres) */}
      <circle cx={cx} cy={baseY - 10} r={4.2} />
      <circle cx={cx} cy={baseY - 21} r={3.3} />
      <circle cx={cx} cy={baseY - 30} r={2.4} />

      {/* الهلال الشريف يعلو الجامور متجهاً للأعلى */}
      <MinaretCrescent cx={cx} cy={baseY - 44} r={8.5} />
    </g>
  );
}

/**
 * رأس مبسط للقباب المساندة
 */
function FinialSimple({ cx, baseY, height }: { cx: number; baseY: number; height: number }) {
  return (
    <g fill="url(#goldFinial)">
      <rect x={cx - 1} y={baseY - height} width={2} height={height} />
      <circle cx={cx} cy={baseY - height * 0.5} r={2} />
      <circle cx={cx} cy={baseY - height} r={2.5} />
    </g>
  );
}

/**
 * رأس قبة مع هلال
 */
function FinialWithCrescent({ cx, baseY, height }: { cx: number; baseY: number; height: number }) {
  return (
    <g fill="url(#goldFinial)">
      <rect x={cx - 1} y={baseY - height} width={2} height={height} />
      <circle cx={cx} cy={baseY - height * 0.4} r={2.2} />
      <circle cx={cx} cy={baseY - height * 0.75} r={1.6} />
      <MinaretCrescent cx={cx} cy={baseY - height - 4} r={4.5} />
    </g>
  );
}

/**
 * هلال إسلامي نقي ودقيق هندسياً — مرسوم بدقة رياضية بدائرتين متداخلتين
 * الدائرة الخارجية (fillCircle) ناقصاً الدائرة الداخلية (cutCircle) المنزاحة للأعلى
 * مما يعطي هلالاً واضحاً يستقيم لأعلى دون أي انحراف جانبي
 */
function MinaretCrescent({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  // الدائرة الداخلية مرفوعة بنسبة 40% من r لصنع فتحة الهلال
  const innerOffset = r * 0.48;
  const innerR = r * 0.88;
  // نبني الهلال بـ clipPath: دائرة خارجية كاملة مطروح منها دائرة داخلية مرفوعة
  // نستخدم even-odd fill rule بدلاً من clipPath للتوافق الكامل
  const id = `crescent-${Math.round(cx)}-${Math.round(cy)}`;
  return (
    <g>
      <defs>
        <mask id={id}>
          <circle cx={cx} cy={cy} r={r} fill="white" />
          <circle cx={cx} cy={cy - innerOffset} r={innerR} fill="black" />
        </mask>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="url(#goldFinial)" mask={`url(#${id})`} />
    </g>
  );
}

/**
 * نخلة عربية أنيقة ذات سعف منحني طبيعي
 */
function ArabianPalm({
  cx,
  baseY,
  scale = 1,
  flip = false,
}: {
  cx: number;
  baseY: number;
  scale?: number;
  flip?: boolean;
}) {
  const dir = flip ? -1 : 1;
  const crownY = baseY - 65 * scale;
  const trunkX = cx + 8 * dir * scale;

  return (
    <g>
      {/* الجذع المقوس برشاقة */}
      <path
        d={`M ${cx} ${baseY} 
            C ${cx + 3 * dir} ${baseY - 25 * scale} ${cx + 6 * dir} ${baseY - 45 * scale} ${trunkX} ${crownY}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={3.5 * scale}
        strokeLinecap="round"
      />

      {/* سعفات النخلة السبع المنحنية بانسيابية */}
      {/* سعفة علوية يمنى */}
      <path
        d={`M ${trunkX} ${crownY} 
            C ${trunkX + 16 * dir} ${crownY - 14} ${trunkX + 28 * dir} ${crownY - 8} ${trunkX + 34 * dir} ${crownY + 4}
            C ${trunkX + 26 * dir} ${crownY - 3} ${trunkX + 14 * dir} ${crownY - 5} ${trunkX} ${crownY} Z`}
      />
      {/* سعفة علوية يسرى */}
      <path
        d={`M ${trunkX} ${crownY} 
            C ${trunkX - 16 * dir} ${crownY - 14} ${trunkX - 28 * dir} ${crownY - 8} ${trunkX - 34 * dir} ${crownY + 4}
            C ${trunkX - 26 * dir} ${crownY - 3} ${trunkX - 14 * dir} ${crownY - 5} ${trunkX} ${crownY} Z`}
      />
      {/* سعفة وسطى يمنى متدلية */}
      <path
        d={`M ${trunkX} ${crownY} 
            C ${trunkX + 22 * dir} ${crownY - 6} ${trunkX + 36 * dir} ${crownY + 8} ${trunkX + 40 * dir} ${crownY + 24}
            C ${trunkX + 30 * dir} ${crownY + 12} ${trunkX + 18 * dir} ${crownY + 4} ${trunkX} ${crownY} Z`}
      />
      {/* سعفة وسطى يسرى متدلية */}
      <path
        d={`M ${trunkX} ${crownY} 
            C ${trunkX - 22 * dir} ${crownY - 6} ${trunkX - 36 * dir} ${crownY + 8} ${trunkX - 40 * dir} ${crownY + 24}
            C ${trunkX - 30 * dir} ${crownY + 12} ${trunkX - 18 * dir} ${crownY + 4} ${trunkX} ${crownY} Z`}
      />
      {/* سعفة سفلية يمنى */}
      <path
        d={`M ${trunkX} ${crownY} 
            C ${trunkX + 18 * dir} ${crownY + 8} ${trunkX + 28 * dir} ${crownY + 24} ${trunkX + 30 * dir} ${crownY + 36}
            C ${trunkX + 22 * dir} ${crownY + 24} ${trunkX + 12 * dir} ${crownY + 14} ${trunkX} ${crownY} Z`}
      />
      {/* سعفة سفلية يسرى */}
      <path
        d={`M ${trunkX} ${crownY} 
            C ${trunkX - 18 * dir} ${crownY + 8} ${trunkX - 28 * dir} ${crownY + 24} ${trunkX - 30 * dir} ${crownY + 36}
            C ${trunkX - 22 * dir} ${crownY + 24} ${trunkX - 12 * dir} ${crownY + 14} ${trunkX} ${crownY} Z`}
      />
      {/* سعفة تاج رأسية */}
      <path
        d={`M ${trunkX} ${crownY} 
            C ${trunkX - 4 * dir} ${crownY - 18} ${trunkX + 4 * dir} ${crownY - 26} ${trunkX + 2 * dir} ${crownY - 32}
            C ${trunkX + 7 * dir} ${crownY - 22} ${trunkX + 3 * dir} ${crownY - 12} ${trunkX} ${crownY} Z`}
      />
    </g>
  );
}
