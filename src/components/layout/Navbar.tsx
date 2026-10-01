import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Synchronize body scroll lock with mobile menu state
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile drawer on route change during render
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    if (mobileOpen) {
      setMobileOpen(false);
    }
  }

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            Romantik Hotel <span>Lindengarten</span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Start
              </NavLink>
            </li>
            <li>
              <NavLink to="/romantik-hotel">
                Romantik-Hotel
              </NavLink>
            </li>
            <li>
              <NavLink to="/bauernhaus">
                Bauernhaus
              </NavLink>
            </li>
            <li>
              <NavLink to="/restaurant">
                Restaurant
              </NavLink>
            </li>
            <li>
              <NavLink to="/arrangements">
                Arrangements
              </NavLink>
            </li>
            <li>
              <NavLink to="/umgebung">
                Umgebung
              </NavLink>
            </li>
            <li>
              <NavLink to="/buchung">
                Buchung
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontakt">
                Kontakt
              </NavLink>
            </li>
          </ul>

          {/* Hamburger Button für Mobilgeräte */}
          <button
            className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Dedizierter Mobile Drawer */}
      <aside
        id="mobile-drawer"
        className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
        aria-label="Hauptnavigation Mobil"
      >
        <div className="mobile-drawer-inner">
          {/* Drawer Header mit Branding und Schließen-Button */}
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-brand">
              <span className="mobile-brand-title">Romantik Hotel</span>
              <span className="mobile-brand-subtitle">Zum Lindengarten</span>
            </div>
            <button
              type="button"
              className="mobile-drawer-close"
              aria-label="Menü schließen"
              onClick={closeMobileMenu}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mobile-drawer-nav">
            <ul className="mobile-nav-list">
              <li>
                <NavLink to="/" end onClick={closeMobileMenu}>
                  <span>Start</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/romantik-hotel" onClick={closeMobileMenu}>
                  <span>Romantik-Hotel</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/bauernhaus" onClick={closeMobileMenu}>
                  <span>Bauernhaus</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/restaurant" onClick={closeMobileMenu}>
                  <span>Restaurant</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/arrangements" onClick={closeMobileMenu}>
                  <span>Arrangements</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/umgebung" onClick={closeMobileMenu}>
                  <span>Umgebung</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/buchung" onClick={closeMobileMenu}>
                  <span>Buchung</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/kontakt" onClick={closeMobileMenu}>
                  <span>Kontakt</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* CTA & Service / Kontaktbereich */}
          <div className="mobile-drawer-footer">
            <Link
              to="/buchung"
              className="mobile-drawer-cta-btn"
              onClick={closeMobileMenu}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Zimmer buchen</span>
            </Link>

            <div className="mobile-drawer-contact">
              <a href="tel:+493584470654" className="mobile-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>035844 70654</span>
              </a>
              <div className="mobile-contact-item location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Jonsdorf · Zittauer Gebirge</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop Overlay mit sanfter Ausblendung */}
      <div
        className={`nav-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden={!mobileOpen}
      />
    </>
  );
}
