import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../../context/useCookieConsent';

export default function ConsentManager() {
  const {
    isOpen,
    consent,
    acceptAll,
    acceptEssentialOnly,
    saveCustomSettings,
    closeSettings,
  } = useCookieConsent();

  const [showDetails, setShowDetails] = useState(false);
  const [externalMediaSelected, setExternalMediaSelected] = useState(
    consent?.externalMedia ?? false
  );

  if (!isOpen) return null;

  const handleSaveCustom = (e: React.FormEvent) => {
    e.preventDefault();
    saveCustomSettings({ externalMedia: externalMediaSelected });
    setShowDetails(false);
  };

  return (
    <div
      className="lh-privacy-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lh-privacy-title"
    >
      <div className="lh-privacy-card">
        {/* Header mit Wappen/Badge */}
        <div className="lh-privacy-header">
          <div className="lh-privacy-badge">ZL</div>
          <div className="lh-privacy-header-text">
            <h2 id="lh-privacy-title" className="lh-privacy-title">
              Privatsphäre &amp; Datenschutz
            </h2>
            <p className="lh-privacy-subtitle">Romantik Hotel Zum Lindengarten</p>
          </div>
          {consent && (
            <button
              type="button"
              className="lh-privacy-close-btn"
              onClick={closeSettings}
              aria-label="Schließen"
              title="Schließen"
            >
              ✕
            </button>
          )}
        </div>

        {/* Kurzbeschreibung */}
        <div className="lh-privacy-body">
          <p className="lh-privacy-desc">
            Wir verwenden auf unserer Website ausschließlich technisch notwendige
            Technologien zur Bereitstellung der Seitenfunktionen und unseres
            Online-Buchungssystems. Mit Ihrer Einwilligung gestatten Sie das
            direkte Laden externer Medien (z.&nbsp;B. interaktive Anfahrtskarten).
          </p>

          {/* Detailansicht (Akkordeon) */}
          {showDetails && (
            <form onSubmit={handleSaveCustom} className="lh-privacy-details-panel">
              {/* Kategorie 1: Notwendig */}
              <div className="lh-privacy-category-item">
                <div className="lh-privacy-category-header">
                  <div className="lh-privacy-category-title-wrap">
                    <span className="lh-privacy-category-name">
                      Technisch notwendig
                    </span>
                    <span className="lh-privacy-category-status-badge">
                      Immer aktiv
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    aria-label="Technisch notwendig (immer aktiv)"
                    className="lh-privacy-toggle"
                  />
                </div>
                <p className="lh-privacy-category-desc">
                  Erforderlich für den sicheren Betrieb der Website, die
                  Navigation, die Speicherung Ihrer Datenschutzauswahl sowie die
                  Zimmerbuchungsfunktion über DIRS21. Es werden keine
                  Marketing-Profile erstellt.
                </p>
              </div>

              {/* Kategorie 2: Externe Medien */}
              <div className="lh-privacy-category-item">
                <div className="lh-privacy-category-header">
                  <div className="lh-privacy-category-title-wrap">
                    <span className="lh-privacy-category-name">Externe Medien</span>
                    <span className="lh-privacy-category-status-badge optional">
                      Optional
                    </span>
                  </div>
                  <label className="lh-privacy-switch">
                    <input
                      type="checkbox"
                      checked={externalMediaSelected}
                      onChange={(e) => setExternalMediaSelected(e.target.checked)}
                      aria-label="Externe Medien aktivieren"
                    />
                    <span className="lh-privacy-slider" />
                  </label>
                </div>
                <p className="lh-privacy-category-desc">
                  Ermöglicht die Anzeige interaktiver Inhalte von Drittanbietern
                  wie OpenStreetMap (interaktive Anfahrtskarte auf der
                  Kontaktseite). Wenn deaktiviert, wird eine datensparsame
                  Vorschau angezeigt.
                </p>
              </div>

              <div className="lh-privacy-details-actions">
                <button
                  type="submit"
                  className="btn btn-primary lh-privacy-btn-save"
                >
                  Auswahl bestätigen
                </button>
                <button
                  type="button"
                  className="lh-privacy-link-btn"
                  onClick={() => setShowDetails(false)}
                >
                  Zurück zur Übersicht
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Buttons (DSGVO-konform: Gleiche Wertigkeit) */}
        {!showDetails && (
          <div className="lh-privacy-actions">
            <button
              type="button"
              className="lh-privacy-btn lh-privacy-btn-essential"
              onClick={acceptEssentialOnly}
            >
              Nur Notwendige
            </button>
            <button
              type="button"
              className="lh-privacy-btn lh-privacy-btn-accept"
              onClick={acceptAll}
            >
              Alle akzeptieren
            </button>
          </div>
        )}

        {/* Footer-Links */}
        <div className="lh-privacy-footer">
          {!showDetails && (
            <button
              type="button"
              className="lh-privacy-toggle-details"
              onClick={() => setShowDetails(true)}
            >
              <span>Einstellungen anpassen</span> &darr;
            </button>
          )}
          <div className="lh-privacy-legal-links">
            <Link to="/datenschutz" onClick={() => consent && closeSettings()}>
              Datenschutz
            </Link>
            <span className="lh-privacy-sep">&middot;</span>
            <Link to="/impressum" onClick={() => consent && closeSettings()}>
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
