"use client";

import { useEffect, useRef } from "react";
import { media } from "./data";

/** Full-bleed loop of the studio's hero animation; only plays while on screen. */
export function Showreel() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.1 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <div className="h-svh relative overflow-hidden -mt-1 bg-black text-white">
      <video
        ref={ref}
        className="absolute inset-0 w-full h-full object-cover"
        poster={media.heroPoster}
        preload="metadata"
        muted
        loop
        playsInline
        aria-hidden="true"
        disablePictureInPicture
      >
        <source src={media.heroVideoWebm} type="video/webm" />
        <source src={media.heroVideoMp4} type="video/mp4" />
      </video>
      <div className="absolute inset-x-0 bottom-0 site-max flex justify-between pb-30 text-white/80">
        <span>Design, engineering &amp; applied AI</span>
        <span className="text-right">(Kuala Lumpur, Malaysia)</span>
      </div>
    </div>
  );
}
