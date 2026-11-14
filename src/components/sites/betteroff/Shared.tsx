import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center uppercase font-medium", className)}>
      <span aria-hidden="true" className="mr-[.25em]">
        ●
      </span>
      {children}
    </div>
  );
}

export function ExploreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="group uline-double mt-40 gap-x-70">
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
