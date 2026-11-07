import styles from "./Projects.module.css";

export function AirplaneVisual() {
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      className={styles.visualSvg}
      role="img"
      aria-label="SKYFLICK airliner banking above the clouds"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor="var(--color-accent-soft)" />
          <stop offset="0.55" stopColor="var(--color-paper)" />
          <stop offset="1" stopColor="var(--color-mist-deep)" />
        </linearGradient>
        <linearGradient id="fuselage" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-paper)" />
          <stop offset="0.7" stopColor="var(--color-mist)" />
          <stop offset="1" stopColor="var(--color-line-strong)" />
        </linearGradient>
        <linearGradient id="tail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-accent)" />
          <stop offset="1" stopColor="var(--color-violet)" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="var(--color-paper)" stopOpacity="0.95" />
          <stop offset="1" stopColor="var(--color-paper)" stopOpacity="0" />
        </radialGradient>
        <clipPath id="body-clip">
          <path d="M118 200c4-20 36-32 82-34l268-2c52 2 86 12 100 32-14 24-52 36-100 36l-268 2c-46 0-78-14-82-34Z" />
        </clipPath>
        <filter id="cloud-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <rect width="640" height="400" fill="url(#sky)" />
      <circle cx="520" cy="80" r="150" fill="url(#sun)" />

      <g fill="var(--color-paper)" filter="url(#cloud-blur)" opacity="0.85">
        <ellipse cx="120" cy="330" rx="130" ry="34" />
        <ellipse cx="430" cy="360" rx="170" ry="40" />
        <ellipse cx="560" cy="300" rx="100" ry="24" opacity="0.7" />
        <ellipse cx="260" cy="86" rx="90" ry="20" opacity="0.55" />
      </g>

      <g transform="rotate(-13 320 200)">
        {/* Contrail */}
        <path
          d="M470 186c50-6 90-2 132-14"
          fill="none"
          stroke="var(--color-paper)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Far wing */}
        <path
          d="M318 172 408 78c8-9 24-8 30 3l6 12-106 92Z"
          fill="var(--color-paper)"
          stroke="var(--color-line-strong)"
          strokeWidth="1.2"
        />
        <path
          d="M408 78c8-9 24-8 30 3l6 12-18 16-24-18Z"
          fill="var(--color-accent)"
          opacity="0.8"
        />

        {/* Near wing */}
        <path
          d="M300 228 390 322c8 9 24 8 30-3l6-12-106-92Z"
          fill="var(--color-mist)"
          stroke="var(--color-line-strong)"
          strokeWidth="1.2"
        />
        <path
          d="M390 322c8 9 24 8 30-3l6-12-18-16-24 18Z"
          fill="var(--color-accent)"
          opacity="0.8"
        />

        {/* Tail plane */}
        <path
          d="M508 168 572 132c7-4 15 2 13 10l-2 8-66 24Z"
          fill="var(--color-paper)"
          stroke="var(--color-line-strong)"
          strokeWidth="1"
        />
        <path
          d="M508 224 572 260c7 4 15-2 13-10l-2-8-66-24Z"
          fill="var(--color-mist)"
          stroke="var(--color-line-strong)"
          strokeWidth="1"
        />

        {/* Vertical fin */}
        <path d="M500 170 552 112c5-6 14-4 16 4l10 52Z" fill="url(#tail)" />
        <path
          d="M520 158 553 122l5 2 6 32Z"
          fill="var(--color-paper)"
          opacity="0.3"
        />

        {/* Engine pylons + nacelles */}
        <g>
          <path
            d="M352 168 384 132l10 5-26 35Z"
            fill="var(--color-line-strong)"
          />
          <rect
            x="362"
            y="116"
            width="30"
            height="54"
            rx="15"
            transform="rotate(38 377 143)"
            fill="var(--color-paper)"
            stroke="var(--color-line-strong)"
            strokeWidth="1.2"
          />
          <ellipse
            cx="366"
            cy="131"
            rx="12"
            ry="15"
            transform="rotate(38 366 131)"
            fill="var(--color-ink)"
            opacity="0.55"
          />
          <path
            d="M336 240 368 276l10-5-26-36Z"
            fill="var(--color-line-strong)"
          />
          <rect
            x="352"
            y="238"
            width="30"
            height="54"
            rx="15"
            transform="rotate(-38 367 265)"
            fill="var(--color-paper)"
            stroke="var(--color-line-strong)"
            strokeWidth="1.2"
          />
          <ellipse
            cx="356"
            cy="253"
            rx="12"
            ry="15"
            transform="rotate(-38 356 253)"
            fill="var(--color-ink)"
            opacity="0.55"
          />
        </g>

        {/* Fuselage */}
        <path
          d="M118 200c4-20 36-32 82-34l268-2c52 2 86 12 100 32-14 24-52 36-100 36l-268 2c-46 0-78-14-82-34Z"
          fill="url(#fuselage)"
          stroke="var(--color-line-strong)"
          strokeWidth="1.3"
        />

        {/* Livery */}
        <g clipPath="url(#body-clip)">
          <path
            d="M110 204h470v22H110Z"
            fill="var(--color-accent)"
            opacity="0.95"
          />
          <path
            d="M110 204h470v3H110Z"
            fill="var(--color-violet)"
            opacity="0.75"
          />
          <path
            d="M430 166h150v20H430Z"
            fill="var(--color-accent)"
            opacity="0.1"
          />
        </g>

        {/* Cockpit */}
        <path
          d="M128 190c10-8 24-13 42-15l4 22h-44Z"
          fill="var(--color-ink)"
          opacity="0.7"
        />
        <path
          d="M134 187c8-5 18-9 28-11"
          fill="none"
          stroke="var(--color-paper)"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Windows */}
        <g fill="var(--color-ink)" opacity="0.42">
          {[196, 220, 244, 268, 292, 316].map((cx) => (
            <circle key={cx} cx={cx} cy="182" r="3.6" />
          ))}
          {[196, 220, 244, 268, 292].map((cx) => (
            <circle key={`b${cx}`} cx={cx} cy="222" r="3.6" />
          ))}
        </g>

        {/* Doors */}
        <rect
          x="356"
          y="172"
          width="14"
          height="56"
          rx="7"
          fill="none"
          stroke="var(--color-line-strong)"
          strokeWidth="1.2"
        />

        {/* Wordmark on the nose */}
        <text x="196" y="221" className={styles.skyText}>
          SKYFLICK
        </text>
      </g>

      <g fill="var(--color-paper)" filter="url(#cloud-blur)" opacity="0.55">
        <ellipse cx="560" cy="240" rx="90" ry="18" />
      </g>
    </svg>
  );
}

export function DashboardVisual() {
  const bars = [38, 62, 46, 78, 58, 92, 70];

  return (
    <div className={styles.dashScene} aria-hidden="true">
      <div className={styles.dashShell}>
        <div className={styles.dashScreen}>
          <aside className={styles.dashRail}>
            <span className={styles.dashLogo}>R</span>
            <span className={styles.railDot} data-active="true" />
            <span className={styles.railDot} />
            <span className={styles.railDot} />
            <span className={styles.railDot} />
          </aside>
          <div className={styles.dashMain}>
            <div className={styles.dashHeader}>
              <div>
                <p className={styles.dashKicker}>Overview</p>
                <p className={styles.dashTitle}>Expense Tracker</p>
              </div>
              <span className={styles.dashPill}>This month</span>
            </div>
            <div className={styles.dashGrid}>
              <div className={styles.dashCard}>
                <span className={styles.dashLabel}>Spending</span>
                <div className={styles.donut}>
                  <span>$1.2k</span>
                </div>
              </div>
              <div className={`${styles.dashCard} ${styles.dashWide}`}>
                <span className={styles.dashLabel}>Balance</span>
                <svg viewBox="0 0 120 52" className={styles.lineChart}>
                  <path
                    d="M2 44 18 34 34 38 50 22 66 28 82 12 98 18 118 4"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 44 18 34 34 38 50 22 66 28 82 12 98 18 118 4V52H2Z"
                    fill="var(--color-accent)"
                    opacity="0.14"
                  />
                </svg>
                <span className={styles.dashDelta}>+12.4%</span>
              </div>
              <div className={styles.dashCard}>
                <span className={styles.dashLabel}>Weekly</span>
                <div className={styles.bars}>
                  {bars.map((height, index) => (
                    <i
                      key={index}
                      style={{ height: `${height}%` }}
                      data-highlight={index === 5 || undefined}
                    />
                  ))}
                </div>
              </div>
              <div className={`${styles.dashCard} ${styles.dashWide}`}>
                <span className={styles.dashLabel}>Recent</span>
                <ul className={styles.txList}>
                  <li>
                    <span />
                    Groceries
                    <b>−$48</b>
                  </li>
                  <li>
                    <span />
                    Transport
                    <b>−$12</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dashBase} aria-hidden="true" />
    </div>
  );
}

export function GymVisual() {
  const bars = [42, 66, 38, 82, 54, 94, 62];

  return (
    <div className={styles.gymScene} aria-hidden="true">
      <div className={`${styles.phone} ${styles.phoneA}`}>
        <span className={styles.speaker} />
        <div className={styles.phoneScreen}>
          <p className={styles.gymKicker}>Today&apos;s minute</p>
          <div className={styles.ring}>
            <div className={styles.ringInner}>
              <b>48</b>
              <span>min</span>
            </div>
          </div>
          <div className={styles.gymRow}>
            <span>Calories</span>
            <b>320</b>
          </div>
          <div className={styles.gymRow}>
            <span>Steps</span>
            <b>7,842</b>
          </div>
          <div className={styles.gymBars}>
            {bars.map((height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.phone} ${styles.phoneB}`}>
        <span className={styles.speaker} />
        <div className={styles.phoneScreen}>
          <p className={styles.gymKicker}>Progress</p>
          <p className={styles.gymBig}>+18%</p>
          <svg viewBox="0 0 100 54" className={styles.gymChart}>
            <path
              d="M2 46 16 34 30 38 44 24 58 28 72 14 86 18 98 6"
              fill="none"
              stroke="var(--color-teal)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
          <ul className={styles.gymGoals}>
            <li>
              <span />
              Morning run
            </li>
            <li>
              <span />
              Upper body
            </li>
            <li>
              <span />
              Stretch
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
