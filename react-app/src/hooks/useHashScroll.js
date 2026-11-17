import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// With HashRouter, the URL's "#" is already spoken for by the router (it's
// what encodes the current route), so a link like "/#founder" doesn't get
// the browser's native "jump to this element id" behavior for free anymore.
// React Router still parses that trailing fragment into location.hash
// though, so we just do the scrolling ourselves whenever it changes.
export function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);
}
