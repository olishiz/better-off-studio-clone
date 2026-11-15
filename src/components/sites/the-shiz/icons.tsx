export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 11" fill="none" aria-hidden="true" className={className}>
      <path
        d="m11.18 7.84-1.56-.02V2.88L1.94 10.6.8 9.44l7.72-7.7H3.56V.2h7.62v7.64Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" className={className}>
      <path d="M1 4.5L5 8.5L12.5 1" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function PlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <rect x="8" width="2" height="18" fill="currentColor" className="plus-line" />
      <rect x="0" y="8" width="18" height="2" fill="currentColor" />
    </svg>
  );
}

/** The Shiz "=>" mark. */
export function ShizMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 24" fill="currentColor" aria-hidden="true" className={className}>
      <rect x="0" y="5" width="20" height="4.5" />
      <rect x="0" y="14.5" width="20" height="4.5" />
      <path d="M24.5 2.5 34 12l-9.5 9.5" fill="none" stroke="currentColor" strokeWidth="4.75" />
    </svg>
  );
}

export function ShizLogo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-x-[.35em] ${className ?? ""}`}>
      <ShizMark className="h-[.78em] w-auto" />
      <span className="font-[family-name:var(--font-wordmark)] font-bold tracking-[-0.02em] leading-none translate-y-[.06em]">
        The Shiz
      </span>
    </span>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16 .5C7.439.5.5 7.439.5 16c0 2.777.726 5.45 2.105 7.8L.5 31.5l7.93-2.076A15.434 15.434 0 0016 31.5C24.561 31.5 31.5 24.561 31.5 16S24.561.5 16 .5zm0 28.2a13.113 13.113 0 01-6.682-1.826l-.48-.286-4.706 1.233 1.255-4.58-.313-.498A13.073 13.073 0 012.84 16C2.84 9.268 8.268 3.84 16 3.84S29.16 9.268 29.16 16 23.732 28.7 16 28.7zm7.17-9.788c-.394-.197-2.328-1.148-2.69-1.279-.362-.131-.625-.197-.888.197-.263.394-1.018 1.279-1.248 1.542-.23.263-.46.296-.854.099-.394-.197-1.662-.613-3.166-1.952-1.17-1.044-1.960-2.333-2.190-2.727-.23-.394-.025-.607.172-.804.177-.176.394-.46.591-.69.197-.23.263-.394.394-.657.131-.263.066-.493-.033-.69-.099-.197-.888-2.141-1.217-2.930-.32-.77-.646-.665-.888-.677l-.757-.013c-.263 0-.69.099-1.051.493-.362.394-1.380 1.348-1.380 3.290 0 1.942 1.413 3.818 1.610 4.081.197.263 2.781 4.247 6.738 5.956.942.407 1.678.65 2.250.832.945.3 1.806.258 2.487.156.759-.113 2.328-.952 2.657-1.872.329-.92.329-1.710.23-1.872-.098-.164-.362-.263-.756-.46z" />
    </svg>
  );
}
