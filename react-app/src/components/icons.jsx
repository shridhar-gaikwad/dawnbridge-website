// These two SVGs repeated many times in the original HTML (every service
// card bullet, every highlight, every check-list item, every "explore" link).
// In plain HTML you'd copy-paste the markup each time. In React you write it
// once as a component and reuse it like any other tag: <CheckIcon />.

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function ArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function QuoteMarkIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M10 6C5.6 8.3 3 12.2 3 17v9h10V16H7.4c.4-3.3 2.2-5.6 5.6-7.2L10 6zm16 0c-4.4 2.3-7 6.2-7 11v9h10V16h-5.6c.4-3.3 2.2-5.6 5.6-7.2L26 6z" />
    </svg>
  );
}
