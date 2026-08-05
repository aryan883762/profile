"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const InitialPageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let animationFrameId: number | undefined;

    const hideLoader = () => {
      animationFrameId = window.requestAnimationFrame(() => {
        setIsVisible(false);
      });
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader, { once: true });
    }

    return () => {
      window.removeEventListener("load", hideLoader);

      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
    >
      <div className="relative flex h-28 w-28 items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-spin rounded-full border-4 border-purple-100 border-r-cyan-400 border-t-pink-500 motion-reduce:animate-none"
        />
        <span className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg shadow-purple-500/20">
          <Image
            src="/logos/aryan-logo-1.png"
            alt=""
            width={64}
            height={64}
            sizes="64px"
            className="h-16 w-16 object-contain"
            priority
          />
        </span>
      </div>
      <span className="sr-only">Loading portfolio</span>
    </div>
  );
};

export default InitialPageLoader;
