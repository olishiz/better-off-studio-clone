"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function CyclingImage({ images, interval }: { images: string[]; interval: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="text-image media-fill relative shrink-0">
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt=""
          draggable={false}
          loading={i === 0 ? "eager" : "lazy"}
          className={cn(i === index ? "visible" : "invisible")}
        />
      ))}
    </div>
  );
}

/** Endless "WORD [image]" ticker in the display face, used in the hero and footer. */
export function Marquee({
  word,
  images,
  className,
  duration = 22,
  interval = 450,
}: {
  word: string;
  images: string[];
  className?: string;
  duration?: number;
  interval?: number;
}) {
  const reversed = [...images].reverse();
  return (
    <div
      aria-label={word}
      className={cn(
        "font-[family-name:var(--font-display)] leading-none overflow-hidden select-none",
        className,
      )}
    >
      <div className="flex overflow-hidden" aria-hidden="true">
        {[images, reversed].map((set, i) => (
          <div
            key={i}
            className="marquee-track flex items-center gap-x-30 pr-30 whitespace-nowrap shrink-0"
            style={{ ["--duration" as string]: `${duration}s` }}
          >
            <div className="big-word">{word}</div>
            <CyclingImage images={set} interval={interval} />
          </div>
        ))}
      </div>
    </div>
  );
}
