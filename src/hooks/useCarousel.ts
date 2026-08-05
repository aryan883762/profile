"use client";

import { useCallback, useEffect, useState } from "react";

export type CarouselDirection = "next" | "previous";

interface UseCarouselOptions {
  itemCount: number;
  intervalMs: number;
  autoplayDisabledIndexes?: readonly number[];
}

export const useCarousel = ({
  itemCount,
  intervalMs,
  autoplayDisabledIndexes = [],
}: UseCarouselOptions) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<CarouselDirection>("next");
  const [isPaused, setIsPaused] = useState(false);
  const isAutoplayEnabled = !autoplayDisabledIndexes.includes(activeIndex);

  const showNext = useCallback(() => {
    setDirection("next");
    setActiveIndex((currentIndex) => (currentIndex + 1) % itemCount);
  }, [itemCount]);

  const showPrevious = useCallback(() => {
    setDirection("previous");
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? itemCount - 1 : currentIndex - 1,
    );
  }, [itemCount]);

  const selectIndex = useCallback(
    (index: number) => {
      if (index === activeIndex) return;

      setDirection(index > activeIndex ? "next" : "previous");
      setActiveIndex(index);
    },
    [activeIndex],
  );

  useEffect(() => {
    if (!isAutoplayEnabled || isPaused || itemCount <= 1) return;

    const timer = window.setInterval(showNext, intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs, isAutoplayEnabled, isPaused, itemCount, showNext]);

  return {
    activeIndex,
    direction,
    selectIndex,
    setIsPaused,
    showNext,
    showPrevious,
  };
};
