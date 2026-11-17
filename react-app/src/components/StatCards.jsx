import { useReveal } from '../hooks/useReveal';

// The content for the 3 cards lives in one array. The JSX below just
// describes how to render ONE card; .map() repeats it for each entry.
// This is the pattern you'll use constantly in React: separate the data
// from the markup that displays it.
const stats = [
  {
    value: '15+ Years',
    label: 'of leadership in corporate management and international education',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M8.2 13.9L7 22l5-3 5 3-1.2-8.1" />
      </svg>
    ),
  },
  {
    value: '7 Countries',
    label: 'of university partners, from the UK to Australia',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20" />
      </svg>
    ),
  },
  {
    value: '3 Models',
    label: 'Business accelerator, in-country representation and career guidance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

function StatCard({ stat }) {
  // Each card calls the hook itself, so each one gets its own ref and its
  // own IntersectionObserver - they reveal independently as you scroll.
  const revealRef = useReveal();

  return (
    <li className="reveal" ref={revealRef}>
      <div className="stat-card">
        <span className="icon-tile icon-tile--solid">{stat.icon}</span>
        <div>
          <span className="stat-card__value">{stat.value}</span>
          <span className="stat-card__label">{stat.label}</span>
        </div>
      </div>
    </li>
  );
}

function StatCards() {
  return (
    <section aria-label="Key facts">
      <div className="container">
        <ul className="stat-cards" role="list">
          {stats.map((stat) => (
            <StatCard stat={stat} key={stat.value} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default StatCards;
