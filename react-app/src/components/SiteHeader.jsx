import { useEffect, useRef, useState } from 'react';

// Original nav.js did everything by directly touching the DOM:
// toggle.setAttribute(...), nav.classList.toggle(...), etc.
//
// In React, we don't touch the DOM ourselves. Instead we keep one piece of
// state - isOpen - and describe what the header should look like for each
// value of that state. React then updates the real DOM to match. This is
// the single biggest mental shift coming from vanilla JS: you stop asking
// "how do I change this element" and start asking "what state changed, and
// what should the UI look like now".
function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // We still need a couple of raw DOM refs, because "click outside the
  // header" and "focus the first link" are things React's state model
  // doesn't express directly - they need the actual DOM node.
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);

  function closeMenu(returnFocus) {
    setIsOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }

  // Runs whenever isOpen changes. Mirrors nav.js's setOpen(true) behaviour
  // of focusing the first link when the menu opens.
  useEffect(() => {
    if (isOpen) firstLinkRef.current?.focus();
  }, [isOpen]);

  // Document-level listeners (Escape key, outside click, resize to desktop)
  // still have to be attached with addEventListener, same as the original -
  // React has no special API for "listen to the whole document". We just do
  // it inside useEffect, and useEffect's cleanup function (the "return")
  // removes the listener, which replaces manually tracking it ourselves.
  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 64em)');

    function handleKeydown(event) {
      if (event.key === 'Escape' && isOpen) closeMenu(true);
    }
    function handleOutsideClick(event) {
      if (isOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu(false);
      }
    }
    function handleDesktopChange(event) {
      if (event.matches && isOpen) closeMenu(false);
    }

    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('click', handleOutsideClick);
    desktopQuery.addEventListener('change', handleDesktopChange);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('click', handleOutsideClick);
      desktopQuery.removeEventListener('change', handleDesktopChange);
    };
  }, [isOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container">
        <div className="site-header__inner">
          <a className="brand" href="/" aria-label="DawnBridge Strategies, home">
            <img className="brand__mark" src="/assets/images/logo-mark.png" width="40" height="38" alt="" />
            <span className="brand__name">DawnBridge</span>
            <span className="brand__suffix">Strategies</span>
          </a>

          <button
            ref={toggleRef}
            className="nav-toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="primary-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="nav-toggle__box" aria-hidden="true">
              <span className="nav-toggle__bar"></span>
              <span className="nav-toggle__bar"></span>
              <span className="nav-toggle__bar"></span>
            </span>
          </button>

          {/* className is built from the isOpen state instead of
              classList.toggle - the class is just a function of the state. */}
          <nav
            className={isOpen ? 'primary-nav primary-nav--open' : 'primary-nav'}
            id="primary-nav"
            aria-label="Main"
          >
            <ul className="primary-nav__list" role="list">
              <li>
                <a ref={firstLinkRef} className="primary-nav__link" href="/" aria-current="page" onClick={() => closeMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a className="primary-nav__link" href="study-abroad-business-accelerator.html" onClick={() => closeMenu(false)}>
                  Business Accelerator
                </a>
              </li>
              <li>
                <a className="primary-nav__link" href="services.html" onClick={() => closeMenu(false)}>
                  Services
                </a>
              </li>
            </ul>
            <a className="btn btn--primary btn--sm primary-nav__cta" href="contact.html" onClick={() => closeMenu(false)}>
              Talk to Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
