"use client";

import { CALENDLY_FOOTER, footerColumns, workLoopImages } from "./data";
import { Marquee } from "./Marquee";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="site-max">
        <div className="flex flex-col s:flex-row items-start s:items-end s:justify-between py-50 s:pt-120 s:pb-50">
          <h3 className="h2 s:max-w-[62.5rem]">Still unsure whether our plans are right for you?</h3>
          <a
            href={CALENDLY_FOOTER}
            target="_blank"
            rel="noopener noreferrer"
            className="h2 uline-double mb-[.25em] mt-50 s:mt-0"
          >
            Let’s chat
          </a>
        </div>
        <hr className="border-white/20" />
        <div className="site-grid pt-70 s:pt-225 gap-y-50">
          {footerColumns.map((col) => (
            <div key={col.title} className="col-span-3 s:col-span-2 pl">
              <h4>{col.title}</h4>
              <ul className="flex flex-col mt-20 s:mt-25">
                {col.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        aria-current={link.href === "/" ? "page" : undefined}
                        className="sf-link"
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Marquee word="Subscribe" images={workLoopImages} className="text-[22rem] s:text-[47.5rem] mt-70" />
      <div className="site-max flex flex-col s:flex-row items-center s:items-start s:justify-between pl py-50 text-center s:text-left gap-y-10">
        <button
          type="button"
          className="s:order-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top ↑
        </button>
        <p className="s:order-1">Copyright © Better Off {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
