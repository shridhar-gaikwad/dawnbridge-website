import { QuoteMarkIcon } from './icons';
import { useReveal } from '../hooks/useReveal';

// [PLACEHOLDER] No real testimonials exist yet. Replace with client-approved
// quotes and remove the "placeholder" flag (or remove this component) at launch.
const testimonials = [
  { quote: '[PLACEHOLDER] Testimonial from a study abroad consultancy client.', role: 'Role, Organisation' },
  { quote: '[PLACEHOLDER] Testimonial from a university partner.', role: 'Role, Institution' },
  { quote: '[PLACEHOLDER] Testimonial from a partner school.', role: 'Role, School' },
];

function TestimonialCard({ testimonial }) {
  const revealRef = useReveal();

  return (
    <li className="reveal" ref={revealRef}>
      <figure className="testimonial testimonial--placeholder">
        <QuoteMarkIcon className="testimonial__mark" />
        <blockquote className="testimonial__quote">
          <p>{testimonial.quote}</p>
        </blockquote>
        <figcaption className="testimonial__author">
          <span className="testimonial__avatar" aria-hidden="true">
            ?
          </span>
          <span>
            <span className="testimonial__name">[PLACEHOLDER] Client name</span>
            <span className="testimonial__role">{testimonial.role}</span>
          </span>
        </figcaption>
      </figure>
    </li>
  );
}

function Testimonials() {
  const headRevealRef = useReveal();

  return (
    <section className="section section--alt" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head section-head--center reveal" ref={headRevealRef}>
          <p className="eyebrow">Client stories</p>
          <h2 className="section-head__title" id="testimonials-title">
            What our partners say.
          </h2>
        </div>

        <ul className="grid grid--3 stack-top" role="list">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
