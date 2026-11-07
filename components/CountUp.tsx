"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function CountUp({ value, suffix = "", duration = 1500 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let started = false;
    let fallback = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started) return;
        started = true;
        observer.disconnect();

        const start = performance.now();
        // Guarantees the final figure even if animation frames are throttled.
        fallback = window.setTimeout(() => setDisplay(value), duration + 200);

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(progress >= 1 ? value : Math.round(value * eased));
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
    };
  }, [value, duration]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {display}
        {suffix}
      </span>
    </span>
  );
}
