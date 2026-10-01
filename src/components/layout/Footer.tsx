import { Link } from 'react-router-dom';
import { useCookieConsent } from '../../context/useCookieConsent';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { openSettings } = useCookieConsent();
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        {/* Footer Preheader mit Qualitäts- & Lage-Highlights */}
        <div className="footer-preheader">
          <div className="footer-preheader-item">
            <span className="footer-preheader-dot" />
            <span>Historisches Umgebindehaus im Luftkurort Jonsdorf</span>
          </div>
          <div className="footer-preheader-item">
            <span className="footer-preheader-dot" />
            <span>Kulinarik &amp; Kaminzimmer im Dreiländereck</span>
          </div>
          <div className="footer-preheader-item">
            <span className="footer-preheader-dot" />
            <span>Romantik Hotels &amp; Miles &amp; More Partnerhotel</span>
          </div>
        </div>

        {/* 4-Spalten Grid */}
        <div className="footer-grid">
          {/* Spalte 1: Haus & Kontakt */}
          <div className="footer-col">
            <h4 className="footer-brand-title">Romantik Hotel Zum Lindengarten</h4>
            <p className="footer-tagline">
              Urlaub &amp; Gastlichkeit in romantischer Atmosphäre im Naturpark Zittauer Gebirge.
            </p>
            <address className="footer-address">
              <div className="footer-contact-line">
                <svg
                  className="footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  Großschönauer Straße 21
                  <br />
                  02796 Jonsdorf Luftkurort
                </div>
              </div>
              <div className="footer-contact-line">
                <svg
                  className="footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  Tel:{' '}
                  <a href="tel:03584470654" title="Jetzt anrufen">
                    035844 70654
                  </a>
                  <br />
                  Fax: 035844 70611
                </div>
              </div>
              <div className="footer-contact-line">
                <svg
                  className="footer-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:buchung@romantikhaeuser.de" title="E-Mail schreiben">
                  buchung@romantikhaeuser.de
                </a>
              </div>
            </address>
            <div className="footer-action-link">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Großschönauer+Str.+21,+02796+Kurort+Jonsdorf"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-maps-btn"
                title="Route mit Google Maps planen"
              >
                <span>Route auf Google Maps planen</span> &rarr;
              </a>
            </div>
          </div>

          {/* Spalte 2: Entdecken */}
          <div className="footer-col">
            <h4>Entdecken</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Startseite</Link>
              </li>
              <li>
                <Link to="/romantik-hotel">Romantik-Hotel</Link>
              </li>
              <li>
                <Link to="/bauernhaus">Bauernhaus „Am Lindengarten“</Link>
              </li>
              <li>
                <Link to="/restaurant">Restaurant &amp; Kaminzimmer</Link>
              </li>
              <li>
                <Link to="/arrangements">Arrangements &amp; Angebote</Link>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Gästeservice */}
          <div className="footer-col">
            <h4>Gästeservice</h4>
            <ul className="footer-links">
              <li>
                <Link to="/buchung">Online Zimmer buchen</Link>
              </li>
              <li>
                <a
                  href="https://www.yovite.com/Restaurant-Gutschein-R-84114902.html?REF=REST"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-external-link"
                >
                  <span>Geschenkgutscheine</span>
                  <span className="footer-pill-tag">Yovite</span>
                </a>
              </li>
              <li>
                <Link to="/umgebung">Zittauer Gebirge &amp; Ausflüge</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt &amp; Anfrage</Link>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Partner & Logos */}
          <div className="footer-col footer-col-partners">
            <h4>Partner &amp; Kooperation</h4>
            <p className="footer-partner-desc">
              Als Partner renommierter Netzwerke bieten wir Ihnen geprüfte Qualität und exklusive Privilegien:
            </p>
            <div className="footer-badges-list">
              {/* Romantik Hotels & Restaurants */}
              <a
                href="https://www.romantikhotels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-badge-card"
                title="Romantik Hotels & Restaurants International besuchen"
              >
                <div className="footer-badge-img-wrap romantik-wrap">
                  <img
                    src="/logos/romantik-hotel-logo.png"
                    alt="Romantik Hotels & Restaurants Logo"
                    className="footer-badge-logo romantik-logo"
                  />
                </div>
                <div className="footer-badge-text">
                  <span className="badge-title">Romantik Hotels &amp; Restaurants</span>
                  <span className="badge-sub">Offizielles Partnerhotel</span>
                </div>
              </a>

              {/* Miles & More */}
              <a
                href="https://www.miles-and-more.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-badge-card"
                title="Miles & More Partnerprogramm"
              >
                <div className="footer-badge-img-wrap miles-wrap">
                  <img
                    src="/logos/Miles_&_More_Logo.svg"
                    alt="Miles & More Logo"
                    className="footer-badge-logo miles-logo"
                  />
                </div>
                <div className="footer-badge-text">
                  <span className="badge-title">Miles &amp; More</span>
                  <span className="badge-sub">Prämienmeilen bei Aufenthalt sammeln</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar mit Sicherheitsabstand zum schwebenden DIRS21 Quick-Book Button */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <span className="footer-copyright">
              &copy; {CURRENT_YEAR} Lindengarten Kunath GmbH &middot; Alle Rechte vorbehalten
            </span>
            <div className="footer-legal-links">
              <Link to="/impressum">Impressum</Link>
              <Link to="/datenschutz">Datenschutz</Link>
              <Link to="/kontakt">Anfahrt &amp; Kontakt</Link>
              <button
                type="button"
                className="footer-privacy-btn"
                onClick={openSettings}
                title="Datenschutz- & Cookie-Einstellungen anpassen"
              >
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
