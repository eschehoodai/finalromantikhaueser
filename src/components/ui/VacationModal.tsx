import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'lh_vacation_notice_nov2026_dismissed';

function getInitialDismissedState(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export default function VacationModal() {
  const [hasBeenDismissed, setHasBeenDismissed] = useState<boolean>(getInitialDismissedState);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setHasBeenDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleReopen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (hasBeenDismissed) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 350);
    return () => clearTimeout(timer);
  }, [hasBeenDismissed]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  return (
    <>
      {/* Dezenter Info-Button unten links, falls das Modal geschlossen wurde */}
      {hasBeenDismissed && !isOpen && (
        <button
          type="button"
          className="vacation-reopen-badge"
          onClick={handleReopen}
          aria-label="Hinweis zur Betriebsruhe anzeigen"
          title="Aktueller Hinweis zur Betriebsruhe (13.11. – 21.11.2026)"
        >
          <span className="vacation-reopen-dot" />
          <span>Betriebsruhe 13.11. – 21.11.</span>
        </button>
      )}

      {/* Modal Overlay beim Betreten der Website */}
      {isOpen && (
        <div
          className="vacation-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="vacation-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <div className="vacation-modal-card">
            {/* Feine dekorative Eck-Winkel im "Modern Heirloom" Stil */}
            <div className="form-corner-bracket cb-top-left" />
            <div className="form-corner-bracket cb-top-right" />
            <div className="form-corner-bracket cb-bottom-left" />
            <div className="form-corner-bracket cb-bottom-right" />

            <button
              type="button"
              className="vacation-modal-close"
              onClick={handleClose}
              aria-label="Hinweis schließen"
              title="Schließen"
            >
              ✕
            </button>

            <div className="vacation-modal-header">
              <div className="vacation-modal-emblem">ZL</div>
              <p className="overline">Aktuelle Gäste-Information</p>
              <h2 id="vacation-modal-title" className="vacation-modal-title">
                Herbstliche Betriebsruhe
              </h2>
            </div>

            <div className="vacation-modal-body">
              <p className="vacation-modal-salutation">Sehr geehrte Gäste,</p>
              <p className="vacation-modal-text">
                unser Haus bleibt von{' '}
                <strong>Freitag, den 13.11.2026</strong> bis einschließlich{' '}
                <strong>Samstag, den 21.11.2026</strong> wegen Betriebsruhe geschlossen.
              </p>

              <div className="vacation-modal-reopen-box">
                <span className="vacation-reopen-icon" aria-hidden="true">
                  ✦
                </span>
                <p>
                  Am <strong>Sonntag, den 22.11.2026 ab 15:00 Uhr</strong> sind wir
                  wieder frisch erholt für Sie da.
                </p>
              </div>

              <div className="vacation-modal-booking-note">
                <h3 className="vacation-note-heading">
                  Hinweis zu Buchungen &amp; Anfragen
                </h3>
                <p>
                  <strong>Online-Buchungen</strong> über unsere Website sind auch während
                  unserer Auszeit jederzeit direkt und mit Sofortbestätigung möglich.
                </p>
                <p style={{ marginTop: '0.45rem' }}>
                  Bei <strong>individuellen Anfragen</strong> per E-Mail, Kontaktformular
                  oder Telefon bitten wir Sie um ein wenig Geduld – wir beantworten Ihr
                  Anliegen umgehend, sobald wir wieder geöffnet haben.
                </p>
              </div>

              <p className="vacation-modal-signoff">
                Mit freundlichen Grüßen
                <br />
                <strong>Jens Kunath &amp; Team</strong>
              </p>
            </div>

            <div className="vacation-modal-actions">
              <Link
                to="/buchung"
                className="btn btn-primary vacation-btn-book"
                onClick={handleClose}
              >
                Direkt online buchen
              </Link>
              <button
                type="button"
                className="btn btn-secondary vacation-btn-continue"
                onClick={handleClose}
              >
                Zur Website
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
