/* ==========================================================================
   nav.js — Mobile navigation (hamburger)
   - Toggles .primary-nav--open and aria-expanded
   - Closes on link click, Escape, outside click, and when resized to desktop
   React: becomes local state inside <SiteHeader /> (useState + useEffect).
   ========================================================================== */

function initNav() {
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  var OPEN_CLASS = 'primary-nav--open';
  var desktopQuery = window.matchMedia('(min-width: 64em)');

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open, options) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle(OPEN_CLASS, open);

    if (open) {
      var firstLink = nav.querySelector('a');
      if (firstLink) firstLink.focus();
    } else if (options && options.returnFocus) {
      toggle.focus();
    }
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  // Close when any nav link is chosen
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a') && isOpen()) setOpen(false);
  });

  // Close on Escape and return focus to the toggle
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) setOpen(false, { returnFocus: true });
  });

  // Close on click outside the header
  document.addEventListener('click', function (event) {
    if (isOpen() && !event.target.closest('.site-header')) setOpen(false);
  });

  // Reset when moving to the desktop layout
  desktopQuery.addEventListener('change', function (event) {
    if (event.matches && isOpen()) setOpen(false);
  });
}
