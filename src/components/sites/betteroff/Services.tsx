"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { services } from "./data";
import { PlusIcon } from "./icons";
import { BigWord, Reveal } from "./Reveal";
import { SectionLabel } from "./Shared";

export function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-black text-white pt-35 pb-150 s:pb-250 border-b border-white/20">
      <div className="site-max site-grid items-start">
        <div className="col-span-6 s:col-span-3 order-first">
          <SectionLabel>Concierge Creative</SectionLabel>
          <div>(BO® — 03)</div>
        </div>
        <Reveal
          as="h2"
          aria-label="Services"
          className="col-span-6 s:col-span-12 whitespace-nowrap font-[family-name:var(--font-display)] text-[11.75rem] s:text-[47.5rem] leading-none overflow-hidden my-40 s:my-100 s:order-3"
        >
          <BigWord className="s:text-center">Services</BigWord>
        </Reveal>
        <Reveal className="s:col-start-5 col-span-6 s:col-span-8 s:order-2">
          <p className="h2 reveal-fade">
            Superior brands require sophisticated capabilities that many businesses couldn&apos;t
            access until now.
          </p>
        </Reveal>
        <div className="s:col-start-5 col-span-6 s:col-span-7 pl order-last mt-60 s:mt-0">
          <h3>Our process and capabilites include:</h3>
          <ul className="flex flex-col mt-25">
            {services.map((service, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={service.title}
                  data-open={isOpen}
                  className={cn("w-full border-b border-white/20", i === 0 && "border-t")}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full py-30 flex items-center text-left"
                  >
                    <span className="hidden s:inline-flex s:w-110">{i + 1}</span>
                    <span className="pr-30">{service.title}</span>
                    <PlusIcon className="plus-icon w-18 h-18 ml-auto" />
                  </button>
                  <div id={`service-${i}`} className="accordion-panel">
                    <div>
                      <div className="txt tag-list pb-50 s:pl-110">
                        <p>{service.body}</p>
                        <ul>
                          {service.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
