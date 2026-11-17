import Hero from '../components/Hero';
import StatCards from '../components/StatCards';
import Audience from '../components/Audience';
import Services from '../components/Services';
import HowWeWork from '../components/HowWeWork';
import WhyBand from '../components/WhyBand';
import Founder from '../components/Founder';
import Testimonials from '../components/Testimonials';
import CtaBand from '../components/CtaBand';

// Header, <main>, and footer now live in Layout.jsx - this is just the
// sequence of sections for the "/" route.
function Home() {
  return (
    <>
      <Hero />
      <StatCards />
      <Audience />
      <Services />
      <HowWeWork />
      <WhyBand />
      <Founder />
      <Testimonials />
      <CtaBand />
    </>
  );
}

export default Home;
