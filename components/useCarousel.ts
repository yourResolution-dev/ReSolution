"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useCarousel(itemCount: number, getPerView: (width: number) => number) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [step, setStep] = useState(0);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const slideRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const updatePerView = () => setPerView(getPerView(window.innerWidth));
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, [getPerView]);

  useEffect(() => {
    const track = trackRef.current;
    const slide = slideRef.current;
    if (!track || !slide) return;

    const measure = () => {
      const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0") || 0;
      setStep(slide.getBoundingClientRect().width + gap);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(slide);
    return () => observer.disconnect();
  }, [perView]);

  const maxIndex = Math.max(0, itemCount - perView);
  const prevDisabled = index <= 0;
  const nextDisabled = index >= maxIndex;

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  const previous = useCallback(() => {
    setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  return {
    index,
    perView,
    step,
    maxIndex,
    prevDisabled,
    nextDisabled,
    trackRef,
    slideRef,
    next,
    previous,
  };
}
