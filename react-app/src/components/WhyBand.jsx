import { ArrowIcon, QuoteMarkIcon } from './icons';
import { useReveal } from '../hooks/useReveal';
import { asset } from '../lib/asset';

const reasons = [
  { title: 'An expert team from day one', text: 'No hiring gamble. No learning curve at your expense.' },
  { title: 'One partner, full coverage', text: 'Setup, brand, marketing and sales under one roof.' },
  { title: 'Transparent reporting', text: 'You stay informed and in control.' },
  { title: 'Flexible commitment', text: 'Start small, test the market and grow with confidence.' },
];

function WhyBand() {
  const panelRevealRef = useReveal();
  const contentRevealRef = useReveal();

  return (
    <section className="why-band" aria-labelledby="why-title">
      <div className="why-band__panel theme-dark reveal" ref={panelRevealRef}>
        <img className="why-band__bg" src={asset('assets/images/hero-growth.svg')} width="1600" height="900" alt="" loading="lazy" decoding="async" />
        <figure>
          <QuoteMarkIcon className="why-band__quote-mark" />
          <blockquote className="why-band__quote">
            <p>We do not hand you a plan and leave. We take responsibility for making it work.</p>
          </blockquote>
          <figcaption className="why-band__cite">DawnBridge Strategies</figcaption>
        </figure>
      </div>

      <div className="why-band__content reveal" ref={contentRevealRef}>
        <div className="section-head">
          <p className="eyebrow">Why DawnBridge</p>
          <h2 className="section-head__title" id="why-title">
            A partner who stays beyond launch day.
          </h2>
        </div>

        <ul className="check-list why-band__list" role="list">
          {reasons.map((reason) => (
            <li className="check-list__item" key={reason.title}>
              <h3 className="check-list__title">{reason.title}</h3>
              <p className="check-list__text">{reason.text}</p>
            </li>
          ))}
        </ul>

        <div className="btn-group why-band__actions">
          <a className="btn btn--primary" href="contact.html">
            Talk to Our Team
            <ArrowIcon className="btn__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyBand;
