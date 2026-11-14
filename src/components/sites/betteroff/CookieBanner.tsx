"use client";

import { useSyncExternalStore, useState } from "react";

const KEY = "bo-cookies-accepted";

function subscribe() {
  return () => {};
}

export function CookieBanner() {
  const stored = useSyncExternalStore(
    subscribe,
    () => window.localStorage.getItem(KEY) === "1",
    () => true,
  );
  const [accepted, setAccepted] = useState(false);

  if (stored || accepted) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed bottom-20 s:bottom-30 left-20 right-20 s:left-auto s:right-30 z-10 flex items-center max-s:justify-between gap-x-20 s:gap-x-100 py-15 px-20 rounded-[.7rem] bg-white text-[1.8rem] leading-none animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <p>This website uses Cookies</p>
      <button
        type="button"
        className="uline-double"
        style={{ ["--bottom" as string]: "-.1em" }}
        onClick={() => {
          window.localStorage.setItem(KEY, "1");
          setAccepted(true);
        }}
      >
        Accept
      </button>
    </div>
  );
}
