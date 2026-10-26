/* ==========================================================================
   main.js — Entry point. Loaded last (defer), after the feature files.
   Marks JS as available, then starts each self-contained feature.
   ========================================================================== */

(function () {
  document.documentElement.classList.add('js');

  initNav();
  initDropdown();
  initReveal();
})();
