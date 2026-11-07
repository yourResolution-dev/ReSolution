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
    setIndex((current) => Math.min(current + 1, maxIndex));
  }, [maxIndex]);

  const previous = useCallback(() => {
    setIndex((current) => Math.max(current - 1, 0));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isSwiping = true;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isSwiping || e.changedTouches.length !== 1) return;
      isSwiping = false;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = endX - startX;
      const diffY = endY - startY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX < 0) {
          next();
        } else {
          previous();
        }
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        previous();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };

    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });
    track.addEventListener("keydown", onKeyDown);

    return () => {
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchend", onTouchEnd);
      track.removeEventListener("keydown", onKeyDown);
    };
  }, [next, previous]);

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
