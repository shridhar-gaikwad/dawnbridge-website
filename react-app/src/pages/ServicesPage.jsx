import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import CtaBand from '../components/CtaBand';
import { ArrowIcon } from '../components/icons';
import { useReveal } from '../hooks/useReveal';
import { asset } from '../lib/asset';

const services = [
  {
    number: '01',
    image: 'assets/images/svc-representation.svg',
    alt: 'Illustration of a globe with a location pin, two representatives and a university building.',
    title: 'In-Country Representation',
    text: 'Dedicated representatives on the ground in India, from a single professional to a fully managed team.',
    items: ['Vetted, managed representatives', 'Student recruitment and enquiries', 'Partner and institution relations', 'Flexible scaling, individual to team'],
    best: 'international universities seeking a presence in India.',
    link: { href: 'in-country-representation.html', label: 'Explore Representation' },
  },
  {
    number: '02',
    image: 'assets/images/svc-career.svg',
    alt: 'Illustration of seven rising steps from Grade 6 to Grade 12, a flag at the top and a graduation cap.',
    title: 'Career Guidance Department',
    text: 'A complete career guidance department for Grades 6 to 12, built by us and run with your school every year.',
    items: ['Seven-year curriculum', 'Counsellor training and mentoring', 'University fairs and masterclasses', 'Ongoing programme management'],
    best: 'schools that want guidance to be a journey, not a one-day event.',
    link: { href: 'career-guidance-department.html', label: 'Explore Career Guidance' },
  },
];

function ServicesPage() {
  const headRevealRef = useReveal();
  const crosslinkRevealRef = useReveal();

  return (
    <>
      <section className="hero hero--page theme-dark" aria-labelledby="hero-title">
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
            {/* Link, not <a>, for the in-app route to "/" - a real <a> would
                force a full page reload instead of an instant client-side
                navigation. */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol className="breadcrumb__list" role="list">
                <li className="breadcrumb__item">
                  <Link className="breadcrumb__link" to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb__item">
                  <span aria-current="page">Services</span>
                </li>
              </ol>
            </nav>
            <h1 className="hero__title" id="hero-title">
              Services for <span className="hero__title-highlight">Universities and Schools</span>
            </h1>
            <p className="hero__lead">
              Place a dedicated representative in India, or build a career guidance department inside your school.
            </p>

            <div className="btn-group hero__actions">
              <a className="btn btn--white" href="contact.html">
                Talk to Our Team
                <ArrowIcon className="btn__icon" />
              </a>
            </div>
          </div>
        </div>

        <svg className="hero__curve" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 90V40C240 80 480 90 720 70S1200 10 1440 30V90z" fill="currentColor" />
        </svg>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head section-head--center reveal" ref={headRevealRef}>
            <p className="eyebrow">Our services</p>
            <h2 className="section-head__title" id="services-title">
              Choose the service that fits you.
            </h2>
            <p className="section-head__lead">Each page explains the model in detail and how to get started.</p>
          </div>

          <ul className="grid grid--2 services-list stack-top" role="list">
            {services.map((service) => (
              <ServiceCard service={service} key={service.number} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--flush-top" aria-labelledby="crosslink-title">
        <div className="container">
          <div className="crosslink reveal" ref={crosslinkRevealRef}>
            <span className="icon-tile icon-tile--solid">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 20h16M6 20V10M10 20V6M14 20v-8M18 20V4" />
              </svg>
            </span>
            <div className="crosslink__body">
              <h2 className="crosslink__title" id="crosslink-title">
                Starting a study abroad business?
              </h2>
              <p className="crosslink__text">
                You fund it, we run it. The Study Abroad Business Accelerator builds, markets and grows your
                consultancy from the ground up.
              </p>
            </div>
            <a className="btn btn--outline crosslink__action" href="study-abroad-business-accelerator.html">
              Explore the Accelerator
              <ArrowIcon className="btn__icon" />
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        flushTop
        title="Let's talk about your market."
        text="Every institution and every country is different. In a no-obligation conversation we will explain how our models work and which one fits you."
      />
    </>
  );
}

export default ServicesPage;
