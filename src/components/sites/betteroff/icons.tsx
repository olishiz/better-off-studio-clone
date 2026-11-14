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
