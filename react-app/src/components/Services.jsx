import ServiceCard from './ServiceCard';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    number: '01',
    image: 'assets/images/svc-accelerator.svg',
    alt: 'Illustration of an office building beside a rising bar chart.',
    title: 'Study Abroad Business Accelerator',
    text: 'You fund it, we run it. We build, market and grow your study abroad consultancy from the ground up.',
    items: ['Business setup and operations', 'Brand and positioning', 'Marketing and lead generation', 'Sales team and conversion'],
    best: 'entrepreneurs and investors entering the study abroad market.',
    link: { href: 'study-abroad-business-accelerator.html', label: 'Explore the Accelerator' },
  },
  {
    number: '02',
    image: 'assets/images/svc-representation.svg',
    alt: 'Illustration of a globe with a location pin, two representatives and a university building.',
    title: 'In-Country Representation',
    text: 'Dedicated representatives on the ground in India, from a single professional to a fully managed team.',
    items: ['Vetted, managed representatives', 'Student recruitment and enquiries', 'Partner and institution relations', 'Flexible scaling, individual to team'],
    best: 'international universities seeking a presence in India.',
    link: { href: 'in-country-representation.html', label: 'Explore Representation' },
  },
  {
    number: '03',
    image: 'assets/images/svc-career.svg',
    alt: 'Illustration of seven rising steps from Grade 6 to Grade 12, a flag at the top and a graduation cap.',
    title: 'Career Guidance Department',
    text: 'A complete career guidance department for Grades 6 to 12, built by us and run with your school every year.',
    items: ['Seven-year curriculum', 'Counsellor training and mentoring', 'University fairs and masterclasses', 'Ongoing programme management'],
    best: 'schools that want guidance to be a journey, not a one-day event.',
    link: { href: 'career-guidance-department.html', label: 'Explore Career Guidance' },
  },
];

function Services() {
  const headRevealRef = useReveal();

  return (
    <section className="section section--alt" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head section-head--center reveal" ref={headRevealRef}>
          <p className="eyebrow">Our services</p>
          <h2 className="section-head__title" id="services-title">
            Three ways we build and grow your business.
          </h2>
          <p className="section-head__lead">
            Choose the service that fits you. Each page explains the model in detail and how to get started.
          </p>
        </div>

        <ul className="grid grid--3 stack-top" role="list">
          {services.map((service) => (
            <ServiceCard service={service} key={service.number} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
