/* ==========================================================================
   main.js — Entry point. Loaded last (defer), after nav.js and reveal.js.
   Marks JS as available, then starts each self-contained feature.
   ========================================================================== */

(function () {
  document.documentElement.classList.add('js');

  initNav();
  initReveal();
})();
