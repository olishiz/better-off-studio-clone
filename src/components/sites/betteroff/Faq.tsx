"use client";

import { useState } from "react";
import { faqs } from "./data";
import { PlusIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./Shared";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white pt-35 pb-100 s:pb-250">
      <div className="site-max">
        <div className="site-grid items-start">
          <div className="col-span-6 s:col-span-3">
            <SectionLabel>Faq</SectionLabel>
            <div>(BO® — 07)</div>
          </div>
          <Reveal className="s:col-start-5 col-span-6 mt-60 s:mt-0">
            <h2 className="h2 reveal-fade">
              We love talking shop and answering questions. See the most common inquiries below or
              book a chat.
            </h2>
          </Reveal>
        </div>
        <hr className="mt-100 hidden s:block" />
        <div className="site-grid mt-70 s:mt-0">
          <h3 className="col-span-6 s:col-span-3 s:pt-35 pl">Frequently asked questions</h3>
          <hr className="col-span-6 mt-25 block s:hidden" />
          <div className="pl s:col-start-5 col-span-6 s:col-span-8">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} data-open={isOpen} className="relative border-b border-gray">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-x-20 py-35 text-left"
                  >
                    <span className="max-s:max-w-[25rem]">{item.q}</span>
                    <PlusIcon className="plus-icon w-18 h-18 shrink-0" />
                  </button>
                  <div id={`faq-${i}`} role="region" className="accordion-panel">
                    <div>
                      <div className="txt pb-50 max-w-[80rem]">
                        {item.a.map((p) => (
                          <p key={p.slice(0, 24)}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
