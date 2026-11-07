import styles from "./About.module.css";

export function OfficeScene() {
  return (
    <svg
      viewBox="0 0 760 560"
      preserveAspectRatio="xMidYMid slice"
      className={styles.scene}
      role="img"
      aria-label="Sunlit Resolution studio: a full-height window, plants, a desk with a monitor and the Resolution mark on the back wall"
    >
      <defs>
        <linearGradient id="office-wall" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#FBFAFC" />
          <stop offset="0.55" stopColor="#F1EFF4" />
          <stop offset="1" stopColor="#E4E1EA" />
        </linearGradient>
        <linearGradient id="office-sky" x1="0.15" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor="#C9DDF6" />
          <stop offset="0.45" stopColor="#E4EEFA" />
          <stop offset="1" stopColor="#F8FAFD" />
        </linearGradient>
        <linearGradient id="office-glass" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.06" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.32" />
        </linearGradient>
        <linearGradient id="office-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#DCD6CD" />
          <stop offset="0.35" stopColor="#E7E2DA" />
          <stop offset="1" stopColor="#D6D0C6" />
        </linearGradient>
        <linearGradient id="office-wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C9A47C" />
          <stop offset="1" stopColor="#A8825B" />
        </linearGradient>
        <linearGradient id="office-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5570F2" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="office-screen" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#202C4C" />
          <stop offset="1" stopColor="#141B2E" />
        </linearGradient>
        <linearGradient id="office-sun" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="office-bloom" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="office-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="office-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="office-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      {/* Wall */}
      <rect width="760" height="560" fill="url(#office-wall)" />
      <path d="M0 54h760" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
      <path d="M0 398h760" stroke="#CFC9D4" strokeWidth="1.2" opacity="0.6" />

      {/* Window */}

      <g>
        <rect x="34" y="26" width="338" height="372" rx="4" fill="url(#office-sky)" />
        <circle cx="316" cy="104" r="96" fill="url(#office-bloom)" opacity="0.75" />

        {/* Distant city */}
        <g opacity="0.5">
          <rect x="34" y="292" width="338" height="106" fill="#D9E6F6" />
          <g fill="#B9CCE6">
            <rect x="56" y="252" width="40" height="146" rx="2" />
            <rect x="104" y="222" width="30" height="176" rx="2" />
            <rect x="142" y="266" width="48" height="132" rx="2" />
            <rect x="198" y="206" width="26" height="192" rx="2" />
            <rect x="232" y="246" width="44" height="152" rx="2" />
            <rect x="284" y="228" width="34" height="170" rx="2" />
            <rect x="326" y="262" width="46" height="136" rx="2" />
          </g>
          <g fill="#DCE8F7" opacity="0.9">
            <rect x="62" y="264" width="6" height="8" />
            <rect x="76" y="264" width="6" height="8" />
            <rect x="62" y="284" width="6" height="8" />
            <rect x="76" y="284" width="6" height="8" />
            <rect x="110" y="236" width="6" height="8" />
            <rect x="122" y="236" width="6" height="8" />
            <rect x="110" y="256" width="6" height="8" />
            <rect x="122" y="256" width="6" height="8" />
            <rect x="204" y="220" width="5" height="8" />
            <rect x="214" y="220" width="5" height="8" />
            <rect x="204" y="240" width="5" height="8" />
            <rect x="214" y="240" width="5" height="8" />
            <rect x="290" y="242" width="6" height="8" />
            <rect x="302" y="242" width="6" height="8" />
            <rect x="290" y="262" width="6" height="8" />
            <rect x="302" y="262" width="6" height="8" />
          </g>
          <g fill="#7FA07F" opacity="0.55">
            <circle cx="188" cy="368" r="26" />
            <circle cx="214" cy="374" r="18" />
            <circle cx="166" cy="376" r="16" />
          </g>
        </g>

        <rect x="34" y="26" width="338" height="372" fill="url(#office-glass)" />

        {/* Frame */}
        <rect
          x="34"
          y="26"
          width="338"
          height="372"
          fill="none"
          stroke="#FDFDFE"
          strokeWidth="13"
        />
        <path
          d="M203 26v372M34 212h338"
          stroke="#FDFDFE"
          strokeWidth="10"
        />
        <rect x="34" y="26" width="338" height="372" fill="none" stroke="#DFDAE3" strokeWidth="1.4" />
        <rect x="22" y="396" width="362" height="12" rx="3" fill="#FBF9FB" stroke="#DFDAE3" strokeWidth="1" />
      </g>

      {/* Wall mark */}
      <g>
        <g transform="translate(528 118)">
          <path
            d="M4 2h11.4c6.5 0 10.9 3.9 10.9 9.8 0 4.3-2.1 7.3-5.9 8.8L28 32h-8l-6.1-9.6h-2.8V32H4V2Zm7 6v8h4.2c2.6 0 4.2-1.5 4.2-4s-1.6-4-4.2-4H11Z"
            fill="url(#office-mark)"
            transform="scale(1.9)"
          />
        </g>
        <text x="562" y="204" textAnchor="middle" className={styles.sceneWord}>
          RESOLUTION
        </text>
        <text x="562" y="223" textAnchor="middle" className={styles.sceneTag}>
          BUILD · INNOVATE · GROW
        </text>
      </g>

      {/* Floor */}
      <rect y="398" width="760" height="162" fill="url(#office-floor)" />
      <path
        d="M34 398h338l178 162H60Z"
        fill="url(#office-sun)"
        opacity="0.55"
        filter="url(#office-blur)"
      />

      {/* Glass partition, right */}
      <g opacity="0.5">
        <rect x="676" y="96" width="118" height="302" fill="#E9EFF8" opacity="0.7" />
        <rect x="676" y="96" width="118" height="302" fill="none" stroke="#C9D2DF" strokeWidth="2" />
        <path d="M735 96v302" stroke="#C9D2DF" strokeWidth="2" />
        <path d="M676 96 760 46" stroke="#FFFFFF" strokeWidth="16" opacity="0.35" />
      </g>

      {/* Desk */}
      <g>
        <ellipse cx="592" cy="524" rx="168" ry="18" fill="#8B8272" opacity="0.22" filter="url(#office-soft)" />
        <rect x="452" y="438" width="286" height="13" rx="4" fill="url(#office-wood)" />
        <rect x="452" y="451" width="286" height="6" rx="3" fill="#8E6A48" opacity="0.55" />
        <rect x="472" y="457" width="9" height="76" rx="3" fill="#9A7552" />
        <rect x="708" y="457" width="9" height="76" rx="3" fill="#9A7552" />

        {/* Monitor */}
        <rect x="562" y="352" width="136" height="82" rx="7" fill="#1B2333" />
        <rect x="569" y="359" width="122" height="66" rx="3" fill="url(#office-screen)" />
        <path
          d="M569 425c24-16 44 2 62-8s36-6 60 8v0H569Z"
          fill="#5570F2"
          opacity="0.35"
        />
        <g fill="#8B9BD6" opacity="0.7">
          <rect x="584" y="372" width="44" height="5" rx="2.5" />
          <rect x="584" y="384" width="70" height="4" rx="2" />
          <rect x="584" y="394" width="58" height="4" rx="2" />
          <rect x="584" y="404" width="66" height="4" rx="2" />
        </g>
        <rect x="602" y="414" width="56" height="18" rx="4" fill="#5570F2" opacity="0.55" />
        <rect x="623" y="434" width="14" height="8" fill="#B9B2A4" />
        <rect x="596" y="442" width="68" height="6" rx="3" fill="#CFC8BA" />

        {/* Keyboard + mouse */}
        <rect x="566" y="430" width="96" height="10" rx="3" fill="#F7F5F1" />
        <rect x="570" y="433" width="88" height="4" rx="2" fill="#D8D2C6" opacity="0.8" />
        <rect x="676" y="430" width="16" height="10" rx="5" fill="#F7F5F1" />

        {/* Mug + notebook */}
        <path d="M716 428h16v-14h-16Z" fill="#FFFFFF" />
        <path d="M732 418c5 0 6 4 6 8" fill="none" stroke="#D8D2C6" strokeWidth="2" />
        <rect x="490" y="428" width="46" height="9" rx="2" fill="#FBFAF8" />
        <rect x="490" y="423" width="46" height="6" rx="2" fill="#EFEBE4" />
      </g>

      {/* Chair */}
      <g opacity="0.9">
        <path
          d="M446 470c0-26 18-44 44-44s44 18 44 44v22h-88Z"
          fill="#2F3A52"
        />
        <path
          d="M490 448c-16 0-28 10-28 24h56c0-14-12-24-28-24Z"
          fill="#3E4C68"
        />
        <path
          d="M490 492v26M458 528h64"
          stroke="#8E8577"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Plant, left */}
      <g>
        <ellipse cx="150" cy="530" rx="86" ry="13" fill="#8B8272" opacity="0.25" filter="url(#office-soft)" />
        <g stroke="#7E9B6E" strokeWidth="2" fill="none" opacity="0.75">
          <path d="M150 466c-6-52-30-84-58-100" />
          <path d="M152 466c4-58 26-92 58-106" />
          <path d="M150 470c-16-32-20-60-10-88" />
        </g>
        <g fill="#6E9364">
          <path d="M92 366c-34-4-58-26-64-58 32-4 58 16 70 48Z" />
          <path d="M116 350c-22-18-28-46-16-72 24 12 36 40 30 66Z" opacity="0.9" />
          <path d="M210 360c22-20 30-48 18-76 26 12 38 44 30 70Z" />
          <path d="M186 344c-10-24-4-48 14-64 14 18 16 44 4 62Z" />
          <path d="M74 384c-18-10-30-28-32-48 20 2 34 20 38 40Z" />
          <path d="M232 384c16-12 26-30 26-50-20 4-32 22-34 42Z" opacity="0.85" />
          <path d="M148 386c-26-14-42-38-42-66 26 8 42 34 44 58Z" />
        </g>
        <path
          d="M108 456h84l-9 62a10 10 0 0 1-10 9h-46a10 10 0 0 1-10-9Z"
          fill="#FAF8F5"
          stroke="#DED9D0"
          strokeWidth="1.4"
        />
        <path d="M108 456h84v9h-84Z" fill="#EDE8E0" />
        <path d="M116 466v54" stroke="#E4DFD6" strokeWidth="3" opacity="0.7" />
      </g>

      {/* Small desk plant */}
      <g>
        <path d="M738 424h24l-3 16a5 5 0 0 1-5 4h-8a5 5 0 0 1-5-4Z" fill="#FAF8F5" />
        <g fill="#6E9364">
          <path d="M748 424c-12-4-20-16-20-30 14 2 22 14 24 28Z" />
          <path d="M751 424c2-16 10-26 22-28-2 14-10 24-20 28Z" opacity="0.9" />
        </g>
      </g>

      {/* Sun wash */}
      <rect width="760" height="560" fill="url(#office-sun)" opacity="0.12" filter="url(#office-blur)" />
    </svg>
  );
}
