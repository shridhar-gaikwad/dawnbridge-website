import { ArrowIcon } from './icons';
import { useReveal } from '../hooks/useReveal';
import { asset } from '../lib/asset';

// This band appears on both Home and the Services page with different
// copy, so the text comes in as props (with Home's original copy as the
// defaults) instead of being hardcoded.
function CtaBand({
  title = "Let's build your education business in India.",
  text = 'Tell us where you are and where you want to go. In a free, no-obligation conversation we will explain how our models work and which one fits you.',
  flushTop = false,
}) {
  const revealRef = useReveal();

  return (
    <section className={flushTop ? 'section section--flush-top' : 'section'} aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-band theme-dark reveal" ref={revealRef}>
          <img className="cta-band__bg" src={asset('assets/images/hero-growth.svg')} width="1600" height="900" alt="" loading="lazy" decoding="async" />
          <div>
            <h2 className="cta-band__title" id="cta-title">
              {title}
            </h2>
            <p className="cta-band__text">{text}</p>
          </div>
          <div className="btn-group">
            <a className="btn btn--white" href="contact.html">
              Book a Free Consultation
              <ArrowIcon className="btn__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
