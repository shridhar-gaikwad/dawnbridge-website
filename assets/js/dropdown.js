/* ==========================================================================
   dropdown.js — Nav submenus (e.g. "Services")
   - Click / Enter / Space toggles; aria-expanded kept in sync
   - Desktop mouse users also open on hover
   - Closes on Escape (focus returns to the trigger), outside click,
     choosing a link, and when another submenu opens
   React: becomes local state inside a <NavDropdown /> component.
   ========================================================================== */

function initDropdown() {
  var items = document.querySelectorAll('[data-dropdown]');
  if (!items.length) return;

  var OPEN_CLASS = 'primary-nav__item--open';
  var HOVER_DELAY = 150;
  var desktopQuery = window.matchMedia('(min-width: 64em) and (hover: hover)');
  var closers = []; // one close function per submenu

  items.forEach(function (item) {
    var trigger = item.querySelector('[data-dropdown-toggle]');
    var menu = trigger && document.getElementById(trigger.getAttribute('aria-controls'));
    if (!menu) return;

    var closeTimer = null;
    var openedByHover = false;

    function isOpen() {
      return trigger.getAttribute('aria-expanded') === 'true';
    }

    function setOpen(open) {
      clearTimeout(closeTimer);
      if (!open) openedByHover = false;
      trigger.setAttribute('aria-expanded', String(open));
      item.classList.toggle(OPEN_CLASS, open);
      if (open) closeOthers(close);
    }

    // A click right after a hover-open keeps it open instead of closing it
    trigger.addEventListener('click', function () {
      if (openedByHover) {
        openedByHover = false;
        return;
      }
      setOpen(!isOpen());
    });

    // Hover (desktop mouse only); a short delay forgives small slips
    item.addEventListener('mouseenter', function () {
      clearTimeout(closeTimer);
      if (!desktopQuery.matches || isOpen()) return;
      openedByHover = true;
      setOpen(true);
    });

    item.addEventListener('mouseleave', function () {
      if (!desktopQuery.matches) return;
      closeTimer = setTimeout(function () { setOpen(false); }, HOVER_DELAY);
    });

    // Escape closes this submenu only (stops the mobile menu closing too)
    item.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        event.stopPropagation();
        setOpen(false);
        trigger.focus();
      }
    });

    // Close when keyboard focus leaves the item (desktop panel)
    item.addEventListener('focusout', function (event) {
      if (desktopQuery.matches && !item.contains(event.relatedTarget)) setOpen(false);
    });

    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('click', function (event) {
      if (isOpen() && !item.contains(event.target)) setOpen(false);
    });

    function close() { setOpen(false); }
    closers.push(close);
  });

  function closeOthers(keep) {
    closers.forEach(function (close) {
      if (close !== keep) close();
    });
  }
}
