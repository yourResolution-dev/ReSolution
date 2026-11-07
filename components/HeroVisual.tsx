"use client";

import { useEffect, useRef } from "react";
import { Globe, Layers, Palette, Smartphone, Sparkles } from "lucide-react";
import styles from "./HeroVisual.module.css";

const CHIPS = [
  {
    id: "web",
    Icon: Globe,
    lines: ["Web", "Development"],
    tone: "accent",
    depth: 1,
  },
  {
    id: "ux",
    Icon: Palette,
    lines: ["UI / UX", "Design"],
    tone: "teal",
    depth: 2,
  },
  {
    id: "mobile",
    Icon: Smartphone,
    lines: ["Mobile", "Applications"],
    tone: "accent",
    depth: 2,
  },
  {
    id: "systems",
    Icon: Layers,
    lines: ["Software", "Systems"],
    tone: "violet",
    depth: 1,
  },
  {
    id: "ai",
    Icon: Sparkles,
    lines: ["AI &", "Automation"],
    tone: "violet",
    depth: 2,
  },
] as const;

function Plant() {
  return (
    <svg
      viewBox="0 0 120 160"
      className={styles.plantArt}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="plant-pot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-card)" />
          <stop offset="1" stopColor="var(--color-line-strong)" />
        </linearGradient>
        <linearGradient id="plant-leaf" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="var(--color-leaf-light)" />
          <stop offset="1" stopColor="var(--color-leaf-deep)" />
        </linearGradient>
      </defs>
      <ellipse
        cx="62"
        cy="152"
        rx="40"
        ry="6"
        fill="var(--color-ink)"
        opacity="0.08"
      />
      <g fill="url(#plant-leaf)">
        <path d="M58 106C38 100 22 84 20 54c28 3 42 24 43 52Z" opacity="0.95" />
        <path d="M60 108c-2-28 8-52 30-64 6 26-4 48-24 64Z" opacity="0.9" />
        <path d="M61 108c-14-16-18-36-10-56 16 12 22 32 14 56Z" opacity="0.75" />
        <path d="M62 104C48 88 44 70 50 50c14 14 18 34 12 54Z" opacity="0.65" />
      </g>
      <path
        d="M40 104h42l-5 40a7 7 0 0 1-7 6H52a7 7 0 0 1-7-6Z"
        fill="url(#plant-pot)"
        stroke="var(--color-line-strong)"
        strokeWidth="1"
      />
      <path d="M40 104h42v7H40Z" fill="var(--color-line)" opacity="0.8" />
    </svg>
  );
}

export function HeroVisual() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = wrapRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    if (reduceMotion.matches || coarsePointer.matches) return;

    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.setProperty("--px", x.toFixed(3));
        element.style.setProperty("--py", y.toFixed(3));
      });
    };

    const onPointerLeave = () => {
      element.style.setProperty("--px", "0");
      element.style.setProperty("--py", "0");
    };

    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <div className={`${styles.glow} ${styles.glowA}`} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glowB}`} aria-hidden="true" />

      <div className={styles.card}>
        <svg
          className={styles.curves}
          viewBox="0 0 560 400"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="hero-curve" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0" />
              <stop offset="0.5" stopColor="var(--color-accent)" stopOpacity="0.28" />
              <stop offset="1" stopColor="var(--color-violet)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M-30 330C90 300 120 150 250 132s190 44 330-44"
            stroke="url(#hero-curve)"
            strokeWidth="1.4"
          />
          <path
            d="M-20 70C110 90 140 210 270 224s190-52 320 18"
            stroke="url(#hero-curve)"
            strokeWidth="1"
          />
          <path
            d="M420 400C420 300 480 270 560 258"
            stroke="url(#hero-curve)"
            strokeWidth="1"
          />
        </svg>

        <svg
          className={styles.ribbons}
          viewBox="0 0 560 400"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ribbon-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="0.4" stopColor="#8B5CF6" stopOpacity="0.55" />
              <stop offset="1" stopColor="#5570F2" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="ribbon-b" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5570F2" stopOpacity="0.1" />
              <stop offset="0.55" stopColor="#7C6BF5" stopOpacity="0.42" />
              <stop offset="1" stopColor="#A78BFA" stopOpacity="0" />
            </linearGradient>
            <filter id="ribbon-soft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="9" />
            </filter>
          </defs>
          <path
            d="M18 336c84-92 58-186 150-230 96-46 168 32 264-4 44-16 90-36 132-22"
            stroke="url(#ribbon-a)"
            strokeWidth="34"
            strokeLinecap="round"
            filter="url(#ribbon-soft)"
            opacity="0.5"
          />
          <path
            d="M96 380c44-70 34-132 92-160 62-30 118 6 158-34 26-26 54-46 104-44"
            stroke="url(#ribbon-b)"
            strokeWidth="16"
            strokeLinecap="round"
            filter="url(#ribbon-soft)"
            opacity="0.6"
          />
          <path
            d="M420 356c44-32 68-86 62-134"
            stroke="url(#ribbon-a)"
            strokeWidth="9"
            strokeLinecap="round"
            filter="url(#ribbon-soft)"
            opacity="0.45"
          />
        </svg>

        <div className={styles.plant}>
          <Plant />
        </div>

        <div className={styles.laptop}>
          <div className={styles.lid}>
            <span className={styles.camera} aria-hidden="true" />
            <div className={styles.screen}>
              <div className={styles.screenSky} aria-hidden="true" />
              <svg
                className={styles.mountains}
                viewBox="0 0 400 250"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <circle
                  cx="306"
                  cy="58"
                  r="30"
                  fill="var(--color-snowcap)"
                  opacity="0.7"
                />
                <path
                  d="M0 250 86 118l38 30 54-66 62 92 46-38 114 114Z"
                  fill="var(--color-peak-1)"
                />
                <path
                  d="M86 118l20 24 18-10 54-50 34 52 28-22 46 46-22 12-52-30-34 26-50-46-20 10-22-12Z"
                  fill="var(--color-snowcap)"
                  opacity="0.72"
                />
                <path
                  d="M0 250 124 170l54 28 66-46 58 52 40-16 58 62Z"
                  fill="var(--color-peak-2)"
                  opacity="0.92"
                />
                <path
                  d="M0 250 110 212l68 12 62-30 54 34 44-10 62 32Z"
                  fill="var(--color-peak-3)"
                  opacity="0.72"
                />
                <path
                  d="M0 250h400v-16c-64-14-112 6-182-2-70-8-140 5-218-4Z"
                  fill="var(--color-lake)"
                  opacity="0.48"
                />
              </svg>

              <div className={styles.screenBrand}>
                <svg viewBox="0 0 34 34" className={styles.screenMark} aria-hidden="true">
                  <path
                    d="M4 2h11.4c6.5 0 10.9 3.9 10.9 9.8 0 4.3-2.1 7.3-5.9 8.8L28 32h-8l-6.1-9.6h-2.8V32H4V2Zm7 6v8h4.2c2.6 0 4.2-1.5 4.2-4s-1.6-4-4.2-4H11Z"
                    fill="var(--color-ink)"
                    opacity="0.86"
                  />
                </svg>
                <span className={styles.screenWord}>Resolution</span>
                <span className={styles.screenTag}>Build · Innovate · Grow</span>
              </div>

              <span className={styles.screenGlare} aria-hidden="true" />
            </div>
          </div>
          <div className={styles.base} aria-hidden="true">
            <span className={styles.notch} />
          </div>
          <div className={styles.laptopShadow} aria-hidden="true" />
        </div>

        {CHIPS.map(({ id, Icon, lines, tone, depth }) => (
          <div
            key={id}
            className={styles.chip}
            data-pos={id}
            data-tone={tone}
            data-depth={depth}
          >
            <span className={styles.chipIcon}>
              <Icon size={12} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <span className={styles.chipLabel}>
              {lines[0]}
              <br />
              {lines[1]}
            </span>
          </div>
        ))}

        <div className={styles.note}>
          <span>
            Ideas to
            <br />
            Real Products
          </span>
          <svg
            className={styles.noteArrow}
            viewBox="0 0 54 40"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M50 36C36 36 18 30 12 6"
              stroke="var(--color-muted)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M6 14 12 3l7 9"
              stroke="var(--color-muted)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
