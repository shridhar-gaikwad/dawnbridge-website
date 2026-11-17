import { useEffect, useRef } from 'react';

// Original: reveal.js queried every ".reveal" element once with
// document.querySelectorAll and observed them all from one global observer.
//
// React version: this hook is called once per element that wants the
// reveal effect. Each call gets its own ref and its own tiny
// IntersectionObserver, scoped to just that one DOM node.
export function useReveal() {
  const ref = useRef(null);

  // useEffect runs after React has put the element on the page, which is
  // the earliest point a ref is guaranteed to point at a real DOM node.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.classList.add('is-visible');
        observer.unobserve(node);
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    observer.observe(node);

    // Cleanup: if the component unmounts before it was ever revealed,
    // stop observing so we don't leak the observer.
    return () => observer.disconnect();
  }, []);

  return ref;
}
