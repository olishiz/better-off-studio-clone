"use client";

import { useEffect, useRef } from "react";
import { SOURCE_ORIGIN, images } from "./data";
import { SectionLabel } from "./Shared";
import { BigWord, Reveal } from "./Reveal";

export function Projects() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
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
    <section className="relative bg-white">
      <div className="site-max pt-30 pb-100">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Projects</SectionLabel>
          <div>(BO® — 02)</div>
        </div>
        <Reveal className="flex flex-col items-center gap-y-8 s:gap-y-30 relative font-[family-name:var(--font-display)] text-[11.75rem] s:text-[47.5rem] leading-none mt-50">
          <div className="overflow-hidden">
            <BigWord>Premium</BigWord>
          </div>
          <div className="overflow-hidden">
            <BigWord delay={0.1}>Work</BigWord>
          </div>
        </Reveal>
        <div className="flex justify-center mt-50">
          <a href={`${SOURCE_ORIGIN}/work`} className="uline-double">
            See all of our work
          </a>
        </div>
        <div className="relative mt-50">
          <a href={`${SOURCE_ORIGIN}/work`} className="relative media-fill block bg-black" aria-label="View client work">
            <div className="pt-[75%]" />
            <video
              ref={videoRef}
              src={images.clientWorkVideo}
              poster={images.clientWorkPoster}
              preload="metadata"
              muted
              loop
              playsInline
            />
          </a>
          <div className="relative pt-10 flex justify-between">
            <div className="pb-5">Client work</div>
            <div className="pb-5 text-right">(2012—2026)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
