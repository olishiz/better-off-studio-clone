"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { cultureSlides } from "./data";

/** Full-bleed stop-motion loop of studio photos; only runs while on screen. */
export function CultureSlideshow() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % cultureSlides.length), 900);
    return () => window.clearInterval(id);
  }, [visible]);

  return (
    <div ref={ref} className="h-svh relative overflow-hidden -mt-1 bg-black" aria-hidden="true">
      {cultureSlides.map((src, i) => (
        <figure
          key={src}
          className={cn("absolute inset-0 media-fill", i === index ? "opacity-100" : "opacity-0")}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" loading="lazy" />
        </figure>
      ))}
    </div>
  );
}
