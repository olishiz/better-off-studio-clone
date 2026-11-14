"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { testimonials } from "./data";
import { SectionLabel } from "./Shared";

const AUTOPLAY_MS = 7000;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % testimonials.length), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, paused]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="relative bg-black text-white pt-35 pb-30"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="site-max site-grid">
        <SectionLabel className="col-span-4">Client approval</SectionLabel>
        <div className="col-span-6">
          <p className="uppercase font-medium">Creative as bundled projects</p>
        </div>
        <div className="col-span-6 s:col-span-2 s:flex s:justify-end font-medium">(BO® — 04)</div>
      </div>

      <div className="relative my-100 s:my-150">
        <div className="relative s:absolute s:top-0 s:left-0 w-full pointer-events-none">
          <div className="site-max" aria-live="polite">
            {active + 1} — {testimonials.length}
          </div>
        </div>
        <div className="relative mt-30 s:mt-0 stack">
          {testimonials.map((t, i) => {
            const isActive = i === active;
            return (
              <div
                key={t.name}
                aria-hidden={!isActive}
                className={cn(
                  "relative transition-[opacity,visibility] duration-700",
                  isActive ? "visible opacity-100" : "invisible opacity-0",
                )}
              >
                <div className="site-max site-grid">
                  <figure className="s:col-start-5 col-span-6 s:col-span-8">
                    <blockquote
                      className={cn(
                        "h2 transition-transform duration-1000 ease-expo",
                        isActive ? "translate-y-0" : "translate-y-20",
                      )}
                    >
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-50 flex items-center gap-x-20">
                      <span className="relative min-w-[5.6rem] max-w-[5.6rem] rounded-full overflow-hidden media-fill block">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.avatar} alt="" draggable={false} loading="lazy" />
                        <span className="block pt-[100%]" />
                      </span>
                      <span className="flex flex-col items-start font-medium">
                        <span>{t.name}</span>
                        <span>{t.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="site-max select-none">
        <div className="relative overflow-x-auto s:overflow-hidden border border-white/20 [scrollbar-width:none]">
          <div className="relative flex" role="tablist" aria-label="Choose a client">
            {testimonials.map((t, i) => (
              <button
                key={t.company}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={t.company}
                data-active={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "logo-tab relative min-w-[40%] s:min-w-[20%] max-w-[40%] s:max-w-[20%] flex items-center justify-center",
                  i < testimonials.length - 1 && "border-r border-white/20",
                )}
              >
                <span className="w-[12rem] h-[5.5rem] s:w-[16.5rem] s:h-[7.5rem] relative media-contain block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.logo} alt="" draggable={false} loading="lazy" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
