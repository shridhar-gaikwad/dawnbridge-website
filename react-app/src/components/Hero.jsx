import { ArrowIcon, CheckIcon } from './icons';
import { asset } from '../lib/asset';

const highlights = ['India-focused', 'End-to-end partner', 'Three service models'];

function Hero() {
  return (
    <section className="hero theme-dark" aria-labelledby="hero-title">
      <img
        className="hero__bg"
        src={asset('assets/images/hero-growth.svg')}
        width="1600"
        height="900"
        alt=""
        fetchPriority="high"
        decoding="async"
      />

      <div className="container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-tag">India</span>
            Insight | Strategy | Impact
          </p>
          <h1 className="hero__title" id="hero-title">
            We Build, Staff &amp; Grow <span className="hero__title-highlight">International Education</span> Businesses in India.
          </h1>
          <p className="hero__lead">
            Whether you are an established study abroad consultancy looking to expand, a new entrepreneur starting
            from scratch, or a university or school seeking an in-country representative in India, DawnBridge
            Strategies sets up the business, builds the team and drives the growth, end to end.
          </p>

          <div className="btn-group hero__actions">
            <a className="btn btn--white" href="contact.html">
              Book a Free Consultation
              <ArrowIcon className="btn__icon" />
            </a>
            <a className="btn btn--outline-light" href="#services">
              Explore Our Services
            </a>
          </div>

          {/* .map() instead of writing the same <li> three times. Each item
              needs a unique "key" prop so React can track it across renders. */}
          <ul className="hero__highlights" role="list">
            {highlights.map((highlight) => (
              <li className="hero__highlight" key={highlight}>
                <CheckIcon />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <svg className="hero__curve" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 90V40C240 80 480 90 720 70S1200 10 1440 30V90z" fill="currentColor" />
      </svg>
    </section>
  );
}

export default Hero;
