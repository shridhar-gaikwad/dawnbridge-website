import { Link } from 'react-router-dom';
import { asset } from '../lib/asset';

function SiteFooter() {
  return (
    <footer className="site-footer theme-dark">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__about">
            <Link className="brand brand--light" to="/" aria-label="DawnBridge Strategies, home">
              <img className="brand__mark" src={asset('assets/images/logo-mark.png')} width="40" height="38" alt="" loading="lazy" decoding="async" />
              <span className="brand__name">DawnBridge</span>
              <span className="brand__suffix">Strategies</span>
            </Link>
            <p className="site-footer__tagline">
              Insight | Strategy | Impact. We build, staff and grow international education businesses in India.
            </p>
          </div>

          <nav aria-labelledby="footer-services">
            <h2 className="site-footer__heading" id="footer-services">
              Services
            </h2>
            <ul className="site-footer__list" role="list">
              <li>
                <a className="site-footer__link" href="study-abroad-business-accelerator.html">
                  Business Accelerator
                </a>
              </li>
              <li>
                <a className="site-footer__link" href="in-country-representation.html">
                  In-Country Representation
                </a>
              </li>
              <li>
                <a className="site-footer__link" href="career-guidance-department.html">
                  Career Guidance
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-company">
            <h2 className="site-footer__heading" id="footer-company">
              Company
            </h2>
            <ul className="site-footer__list" role="list">
              <li>
                <Link className="site-footer__link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="site-footer__link" to="/#founder">
                  Meet the founder
                </Link>
              </li>
              <li>
                <a className="site-footer__link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="site-footer__heading">Get in touch</h2>
            <ul className="site-footer__list" role="list">
              <li>
                <a className="site-footer__link" href="mailto:hello@dawnbridge.example">
                  hello@dawnbridge.example
                </a>
              </li>
              <li>
                <span className="site-footer__text">[PLACEHOLDER] Phone</span>
              </li>
              <li>
                <a className="site-footer__link" href="contact.html">
                  Book a free consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>&copy; 2026 DawnBridge Strategies. All rights reserved.</p>
          <p>[PLACEHOLDER] Privacy Policy &middot; Terms</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
