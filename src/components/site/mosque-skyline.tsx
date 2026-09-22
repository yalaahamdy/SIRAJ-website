export function MosqueSkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 230"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g fill="currentColor">
        {/* ground */}
        <rect x="0" y="208" width="1440" height="24" />

        {/* central grand mosque */}
        <rect x="600" y="152" width="240" height="60" />
        <path d="M 662 152 A 58 58 0 0 1 778 152 Z" />
        <rect x="688" y="78" width="64" height="14" rx="3" />
        <line x1="720" y1="78" x2="720" y2="58" strokeWidth="3" stroke="currentColor" />
        <Crescent cx={720} cy={48} r={9} />

        {/* side drums with small domes */}
        <rect x="560" y="176" width="44" height="36" />
        <path d="M 566 176 A 16 16 0 0 1 598 176 Z" />
        <rect x="836" y="176" width="44" height="36" />
        <path d="M 842 176 A 16 16 0 0 1 874 176 Z" />

        {/* minarets */}
        <Minaret x={520} />
        <Minaret x={906} />

        {/* distant domes */}
        <rect x="330" y="186" width="90" height="26" />
        <path d="M 344 186 A 31 31 0 0 1 406 186 Z" />
        <rect x="1020" y="186" width="90" height="26" />
        <path d="M 1034 186 A 31 31 0 0 1 1096 186 Z" />

        {/* palms */}
        <Palm x={200} />
        <Palm x={1230} />
      </g>
    </svg>
  );
}

function Minaret({ x }: { x: number }) {
  return (
    <g>
      <rect x={x} y={116} width="14" height="94" />
      <rect x={x - 6} y={140} width="26" height="7" rx="2" />
      <rect x={x - 4} y={168} width="22" height="6" rx="2" />
      <path d={`M ${x + 7} 116 A 9 9 0 0 1 ${x + 7} 98 A 9 9 0 0 1 ${x + 7} 116 Z`} />
      <line x1={x + 7} y1={98} x2={x + 7} y2={86} strokeWidth="2.5" stroke="currentColor" />
      <circle cx={x + 7} cy={83} r="2.6" />
    </g>
  );
}

function Palm({ x }: { x: number }) {
  return (
    <g>
      <path d={`M ${x} 208 C ${x - 3} 188 ${x + 3} 172 ${x} 150`} fill="none" strokeWidth="4" stroke="currentColor" />
      <path d={`M ${x} 150 C ${x - 16} 144 ${x - 26} 132 ${x - 30} 124 C ${x - 16} 128 ${x - 6} 138 ${x} 150 Z`} />
      <path d={`M ${x} 150 C ${x + 16} 144 ${x + 26} 132 ${x + 30} 124 C ${x + 16} 128 ${x + 6} 138 ${x} 150 Z`} />
      <path d={`M ${x} 150 C ${x - 10} 140 ${x - 8} 126 ${x - 4} 116 C ${x + 2} 128 ${x + 2} 140 ${x} 150 Z`} />
    </g>
  );
}

function Crescent({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <path
      d={`M ${cx} ${cy - r} A ${r} ${r} 0 1 0 ${cx} ${cy + r} A ${r * 1.35} ${r * 1.35} 0 1 1 ${cx} ${cy - r} Z`}
    />
  );
}
