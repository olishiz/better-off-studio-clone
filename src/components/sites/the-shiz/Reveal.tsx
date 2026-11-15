"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type RevealProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  threshold?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/** Adds `is-in` once the element scrolls into view so nested `.reveal-*` children animate. */
export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className,
  threshold = 0.15,
  ...rest
}: RevealProps<T>) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={cn(className)} {...rest}>
      {children}
    </Tag>
  );
}

/** One line of oversized display type that slides up out of a clipping mask. */
export function BigWord({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn("big-word reveal-up", className)}
      style={{ ["--delay" as string]: `${delay}s` }}
    >
      {children}
    </div>
  );
}
