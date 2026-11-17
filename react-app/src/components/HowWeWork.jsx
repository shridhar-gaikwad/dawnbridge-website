import { useReveal } from '../hooks/useReveal';
import { asset } from '../lib/asset';

const steps = [
  {
    title: 'Build',
    text: 'We set up the business, brand, systems and processes so you launch on a solid foundation.',
    open: true,
  },
  {
    title: 'Staff',
    text: 'We recruit, train and manage the team that delivers, from sales to representatives to counsellors.',
  },
  {
    title: 'Grow',
    text: 'We drive leads, relationships and results, with clear reporting and a strategy that improves every year.',
  },
];

function HowWeWork() {
  const textRevealRef = useReveal();
  const mediaRevealRef = useReveal();

  return (
    <section className="section" id="how-we-work" aria-labelledby="how-title">
      <div className="container split">
        <div className="reveal" ref={textRevealRef}>
          <div className="section-head">
            <p className="eyebrow">How we work</p>
            <h2 className="section-head__title" id="how-title">
              Build. Staff. Grow. End to end.
            </h2>
            <p className="section-head__lead">One partner covering everything it takes to launch and grow.</p>
          </div>

          {/* <details> keeps its own open/closed state in the browser, just
              like it did in plain HTML - React doesn't need to manage it. */}
          <div className="accordion how__accordion">
            {steps.map((step) => (
              <details className="accordion__item" open={step.open} key={step.title}>
                <summary className="accordion__summary">
                  <h3 className="accordion__title">{step.title}</h3>
                  <span className="accordion__icon" aria-hidden="true"></span>
                </summary>
                <p className="accordion__panel">{step.text}</p>
              </details>
            ))}
          </div>
        </div>

        <figure className="how__media reveal" ref={mediaRevealRef}>
          <img
            className="how__image"
            src={asset('assets/images/growth-path.svg')}
            width="640"
            height="560"
            loading="lazy"
            decoding="async"
            alt="Illustration of a path climbing a mountain past three milestone flags: Build, Staff and Grow."
          />
          <figcaption className="how__note">
            <span className="icon-tile icon-tile--solid">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 3v18h18" />
                <path d="M7 14l4-4 3 3 5-6" />
              </svg>
            </span>
            A strategy that improves every year.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default HowWeWork;
