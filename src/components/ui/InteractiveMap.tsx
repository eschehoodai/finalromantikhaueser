import { useState } from 'react';
import { useCookieConsent } from '../../context/useCookieConsent';

export default function InteractiveMap() {
  const { consent, saveCustomSettings } = useCookieConsent();
  const [temporaryAllowed, setTemporaryAllowed] = useState(false);

  const isMapAllowed = consent?.externalMedia || temporaryAllowed;

  const handleAllowPermanent = () => {
    saveCustomSettings({ externalMedia: true });
  };

  const handleAllowOnce = () => {
    setTemporaryAllowed(true);
  };

  if (isMapAllowed) {
    return (
      <div className="interactive-map-wrapper">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=14.695%2C50.855%2C14.72%2C50.87&layer=mapnik&marker=50.862%2C14.708"
          width="100%"
          height="420"
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          title="Standort Romantik Hotel Zum Lindengarten"
        />
      </div>
    );
  }

  return (
    <div className="map-placeholder-card">
      <div className="map-placeholder-content">
        <div className="map-placeholder-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="36"
            height="36"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <h3 className="map-placeholder-title">
          Interaktive Anfahrtskarte laden
        </h3>
        <p className="map-placeholder-address">
          Romantik Hotel Zum Lindengarten &middot; Großschönauer Straße 21, 02796 Kurort Jonsdorf
        </p>
        <p className="map-placeholder-privacy">
          Zum Schutz Ihrer Privatsphäre wird die interaktive Karte von OpenStreetMap erst nach Ihrer Bestätigung geladen. Dabei wird Ihre IP-Adresse an den Kartendienst übertragen.
        </p>
        <div className="map-placeholder-actions">
          <button
            type="button"
            className="btn btn-primary map-btn-load"
            onClick={handleAllowOnce}
          >
            Karte einmalig laden
          </button>
          <button
            type="button"
            className="map-btn-secondary"
            onClick={handleAllowPermanent}
          >
            Externe Medien dauerhaft erlauben
          </button>
        </div>
        <div className="map-placeholder-external">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Großschönauer+Str.+21,+02796+Kurort+Jonsdorf"
            target="_blank"
            rel="noopener noreferrer"
            className="map-ext-link"
          >
            Alternativ: Route direkt in Google Maps öffnen &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
