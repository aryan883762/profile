"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

const AosInitializer = () => {
  useEffect(() => {
    let isCancelled = false;

    const initializeAos = async () => {
      const { default: AOS } = await import("aos");

      if (!isCancelled) {
        AOS.init({
          duration: 700,
          once: true,
        });
      }
    };

    void initializeAos();

    return () => {
      isCancelled = true;
    };
  }, []);

  return null;
};

export default AosInitializer;
