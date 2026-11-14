"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CALENDLY, navLinks, pricingHref } from "./data";
import { ArrowUpRight } from "./icons";

function Logo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/sites/betteroff/logo.svg" alt="Better Off" className="h-20 w-auto" />
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[999] mix-blend-difference text-white-off">
        <div className="site-max site-grid items-center pt-20 s:pt-30">
          <div className="col-span-2">
            <a href="#top" aria-label="Better Off — back to top" className="block">
              <Logo />
            </a>
          </div>
          <nav className="s:col-start-6 col-span-4 max-s:flex max-s:justify-end">
            <ul className="flex gap-x-30 capitalize">
              {navLinks.map((link, i) => (
                <li key={link.label} className="hidden s:block">
                  <a
                    href={link.href}
                    aria-current={i === 0 ? "page" : undefined}
                    className="uline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="s:hidden">
                <a href={pricingHref} className="uline">
                  Pricing
                </a>
              </li>
              <li className="s:hidden">
                <button
                  type="button"
                  className="relative"
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  onClick={() => setMenuOpen(true)}
                >
                  Menu
                </button>
              </li>
            </ul>
          </nav>
          <div className="s:col-start-11 s:col-span-2 hidden s:flex justify-end">
            <a href={pricingHref} className="uline-double">
              Pricing
            </a>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 z-[1000] bg-black text-white flex flex-col s:hidden transition-[clip-path,visibility] duration-700 ease-expo",
          menuOpen ? "visible [clip-path:inset(0)]" : "invisible [clip-path:inset(0_0_100%_0)]",
        )}
      >
        <div className="site-max flex items-center justify-between pt-20">
          <a href="#top" onClick={() => setMenuOpen(false)} aria-label="Better Off — back to top">
            <Logo />
          </a>
          <button type="button" onClick={() => setMenuOpen(false)} className="text-white-off">
            Close
          </button>
        </div>
        <ul className="mt-50 border-t border-white/20">
          {navLinks.map((link, i) => (
            <li key={link.label} className="border-b border-white/20">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "block px-30 py-25 text-[4rem] leading-tight",
                  i === 0 && "text-white/50",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto px-30 pb-30">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between h-80 px-40 rounded-[.7rem] bg-white text-black"
          >
            Subscribe today
            <ArrowUpRight className="h-12 w-11" />
          </a>
        </div>
      </div>
    </>
  );
}
