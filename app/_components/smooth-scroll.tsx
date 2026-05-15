"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.85,
      smoothWheel: true,
      wheelMultiplier: 1.18,
      touchMultiplier: 1,
      overscroll: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      window.requestAnimationFrame(raf);
    };

    const frame = window.requestAnimationFrame(raf);

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) {
        return;
      }

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") {
        return;
      }

      const destination = document.querySelector<HTMLElement>(hash);
      if (!destination) {
        return;
      }

      event.preventDefault();
      lenis.scrollTo(destination, {
        offset: -80,
        duration: 1.2,
      });
      window.history.pushState(null, "", hash);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("click", handleClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
