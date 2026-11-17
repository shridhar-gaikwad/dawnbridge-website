import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { useHashScroll } from '../hooks/useHashScroll';

// Header and footer are the same on every page, so they live here once.
// <Outlet /> is where React Router drops in whichever page component
// matches the current route (Home, ServicesPage, ...).
function Layout() {
  useHashScroll();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main">
        <Outlet />
      </main>

      <SiteFooter />
    </>
  );
}

export default Layout;
