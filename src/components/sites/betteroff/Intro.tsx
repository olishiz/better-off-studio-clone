"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GlobeMark } from "./GlobeMark";

/** Black loader with the globe mark that wipes upward once the page is ready. */
export function Intro() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const out = window.setTimeout(() => setPhase("out"), 1100);
    const done = window.setTimeout(() => setPhase("done"), 2100);
    return () => {
      window.clearTimeout(out);
      window.clearTimeout(done);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-[clip-path] duration-1000 ease-in-out-circ",
        phase === "out" ? "[clip-path:inset(0_0_100%_0)]" : "[clip-path:inset(0)]",
      )}
    >
      <figure
        className={cn(
          "relative text-white transition-opacity duration-500",
          phase === "out" ? "opacity-0" : "opacity-100 animate-in fade-in duration-700",
        )}
      >
        <GlobeMark className="w-[27.9rem] h-[16.1rem]" />
      </figure>
    </div>
  );
}
