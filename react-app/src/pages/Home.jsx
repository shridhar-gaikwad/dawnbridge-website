import SiteHeader from '../components/SiteHeader';
import Hero from '../components/Hero';
import StatCards from '../components/StatCards';
import Audience from '../components/Audience';
import Services from '../components/Services';
import HowWeWork from '../components/HowWeWork';
import WhyBand from '../components/WhyBand';
import Founder from '../components/Founder';
import Testimonials from '../components/Testimonials';
import CtaBand from '../components/CtaBand';
import SiteFooter from '../components/SiteFooter';

// This mirrors the <!-- SECTION --> comments in the original index.html
// almost one-for-one: each section became its own component, and this
// file just lists them in order. Reading this file should tell you the
// whole shape of the page without opening anything else.
function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <StatCards />
        <Audience />
        <Services />
        <HowWeWork />
        <WhyBand />
        <Founder />
        <Testimonials />
        <CtaBand />
      </main>

      <SiteFooter />
    </>
  );
}

export default Home;
