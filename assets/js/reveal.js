/* ==========================================================================
   reveal.js — Light scroll reveal with IntersectionObserver
   Adds .is-visible to .reveal elements once, as they enter the viewport.
   Skipped entirely for reduced-motion users or old browsers.
   React: becomes a useReveal() hook or <Reveal> wrapper.
   ========================================================================== */

function initReveal() {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(function (item) { item.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  items.forEach(function (item) { observer.observe(item); });
}
