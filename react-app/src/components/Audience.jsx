import { useReveal } from '../hooks/useReveal';

const audiences = [
  {
    title: 'Established consultancies',
    text: 'Expand into new cities, add services and grow your enrolments with a team that extends your reach.',
    icon: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  },
  {
    title: 'New entrepreneurs',
    text: 'Start a study abroad business from scratch, without building the brand, marketing and sales engine alone.',
    icon: <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />,
  },
  {
    title: 'Universities and schools',
    text: 'Place a dedicated representative in India, or build a career guidance department inside your school.',
    icon: <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />,
  },
];

function AudienceCard({ audience }) {
  const revealRef = useReveal();

  return (
    <li className="reveal" ref={revealRef}>
      <article className="audience">
        <span className="icon-tile">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {audience.icon}
          </svg>
        </span>
        <h3>{audience.title}</h3>
        <p className="audience__text">{audience.text}</p>
      </article>
    </li>
  );
}

function Audience() {
  const headRevealRef = useReveal();

  return (
    <section className="section" aria-labelledby="audience-title">
      <div className="container">
        <div className="section-head section-head--center reveal" ref={headRevealRef}>
          <p className="eyebrow">Who we work with</p>
          <h2 className="section-head__title" id="audience-title">
            One partner, whatever stage you are at.
          </h2>
          <p className="section-head__lead">
            India is one of the world&apos;s largest sources of international students. We help you build a
            presence there, with an experienced team already in place.
          </p>
        </div>

        <ul className="audience-list stack-top" role="list">
          {audiences.map((audience) => (
            <AudienceCard audience={audience} key={audience.title} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Audience;
