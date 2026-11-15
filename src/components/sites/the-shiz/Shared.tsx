import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center uppercase font-medium", className)}>
      {index ? (
        <span aria-hidden="true" className="font-mono text-[.85em] opacity-60 mr-[.6em]">
          {index}
        </span>
      ) : (
        <span aria-hidden="true" className="mr-[.25em]">
          ●
        </span>
      )}
      {children}
    </div>
  );
}

export function ExploreLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={cn("group uline-double gap-x-70", className)}>
      {children}
      <span className="relative overflow-hidden rotate-[-90deg]" aria-hidden="true">
        <span className="block transition-transform duration-700 ease-expo delay-200 group-hover:translate-y-full group-hover:delay-0">
          ↓
        </span>
        <span className="absolute bottom-full left-0 max-s:hidden transition-transform duration-700 ease-expo group-hover:translate-y-full group-hover:delay-200">
          ↓
        </span>
      </span>
    </a>
  );
}
