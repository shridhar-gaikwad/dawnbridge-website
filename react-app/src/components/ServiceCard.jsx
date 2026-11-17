import { ArrowIcon, CheckIcon } from './icons';
import { useReveal } from '../hooks/useReveal';
import { asset } from '../lib/asset';

// Used on both the Home page (3-up grid) and the Services page (2-up grid) -
// pulled out once both pages needed the exact same card markup.
function ServiceCard({ service }) {
  const revealRef = useReveal();

  return (
    <li className="reveal" ref={revealRef}>
      <article className="service-card">
        <div className="service-card__media">
          <img
            className="service-card__image"
            src={asset(service.image)}
            width="480"
            height="260"
            loading="lazy"
            decoding="async"
            alt={service.alt}
          />
          <span className="service-card__number" aria-hidden="true">
            {service.number}
          </span>
        </div>
        <div className="service-card__body">
          <h3 className="service-card__title">{service.title}</h3>
          <p className="service-card__text">{service.text}</p>
          <ul className="service-card__list" role="list">
            {service.items.map((item) => (
              <li className="service-card__item" key={item}>
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
          <p className="service-card__best">
            <strong>Best for:</strong> {service.best}
          </p>
          <a className="service-card__link" href={service.link.href}>
            {service.link.label}
            <ArrowIcon />
          </a>
        </div>
      </article>
    </li>
  );
}

export default ServiceCard;
