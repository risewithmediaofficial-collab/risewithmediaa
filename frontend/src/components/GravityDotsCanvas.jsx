export default function GravityDotsCanvas() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <linearGradient id="heroLine" x1="180" y1="130" x2="1380" y2="680" gradientUnits="userSpaceOnUse">
            <stop stopColor="#12B7D4" stopOpacity="0" />
            <stop offset="0.48" stopColor="#12B7D4" stopOpacity="0.38" />
            <stop offset="1" stopColor="#12B7D4" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="heroGlow" cx="0" cy="0" r="1" gradientTransform="translate(1240 180) rotate(90) scale(330 460)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#12B7D4" stopOpacity="0.12" />
            <stop offset="1" stopColor="#12B7D4" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="1240" cy="180" rx="460" ry="330" fill="url(#heroGlow)" />
        <circle cx="-30" cy="720" r="310" stroke="#0A0A0A" strokeOpacity="0.07" />
        <circle cx="-30" cy="720" r="235" stroke="#12B7D4" strokeOpacity="0.16" />
        <path d="M-40 545C260 430 390 125 760 150" stroke="url(#heroLine)" strokeWidth="1.5" />

        <g transform="translate(1245 112) rotate(8)">
          <rect width="248" height="178" rx="34" stroke="#0A0A0A" strokeOpacity="0.08" />
          <rect x="18" y="18" width="212" height="142" rx="24" stroke="#12B7D4" strokeOpacity="0.22" />
          <circle cx="202" cy="42" r="5" fill="#12B7D4" />
        </g>

        <path d="M1220 610H1485" stroke="#0A0A0A" strokeOpacity="0.09" />
        <circle cx="1220" cy="610" r="5" fill="#12B7D4" />
        <circle cx="1485" cy="610" r="3" fill="#0A0A0A" fillOpacity="0.22" />
        <circle cx="118" cy="130" r="3" fill="#12B7D4" fillOpacity="0.65" />
        <circle cx="148" cy="130" r="2" fill="#12B7D4" fillOpacity="0.3" />
        <circle cx="118" cy="160" r="2" fill="#12B7D4" fillOpacity="0.3" />
      </svg>

      <div className="absolute bottom-[14%] right-[12%] hidden text-[10px] font-bold tracking-[0.32em] text-black/25 sm:block">
        STRATEGY · CREATIVE · GROWTH
      </div>
    </div>
  );
}
