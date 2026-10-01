import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import InteractiveMap from '../components/ui/InteractiveMap';

export default function Kontakt() {
  useScrollReveal();

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = { form_type: 'kontakt' };
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const res = await fetch('/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json().catch(() => null);

      if (res.ok && result?.success) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
        setErrorMessage(
          result?.error ||
            'Beim Senden ist leider ein Fehler aufgetreten. Bitte rufen Sie uns direkt unter 035844 70654 an.'
        );
      }
    } catch {
      setFormStatus('error');
      setErrorMessage(
        'Die Nachricht konnte nicht übermittelt werden. Bitte prüfen Sie Ihre Verbindung oder rufen Sie uns direkt an.'
      );
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero hero-sub">
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('/bilder/romantik-hotel-abend.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="overline">Wir freuen uns auf Sie</p>
          <h1>Kontakt</h1>
        </div>
      </section>

      {/* KONTAKT SPLIT */}
      <section className="section">
        <div className="container">
          <div className="split reveal">
            {/* KONTAKT-DETAILS */}
            <div className="split-text">
              <p className="overline">So erreichen Sie uns</p>
              <h2>
                Romantik Hotel
                <br />
                Zum Lindengarten
              </h2>
              <div style={{ marginTop: '1.5rem' }}>
                <p>
                  <strong>Adresse</strong>
                  <br />
                  Großschönauer Straße 21
                  <br />
                  02796 Jonsdorf Luftkurort
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>Telefon</strong>
                  <br />
                  <a href="tel:03584470654">035844 70654</a>
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>Fax</strong>
                  <br />
                  035844 70611
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>E-Mail</strong>
                  <br />
                  <a href="mailto:buchung@romantikhaeuser.de">
                    buchung@romantikhaeuser.de
                  </a>
                </p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/buchung" className="btn btn-primary">
                  Zur Buchung
                </Link>
              </div>
            </div>

            {/* KONTAKT-FORMULAR */}
            <div
              className="split-media"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <div
                style={{
                  width: '100%',
                  background: 'var(--surface-container-lowest)',
                  borderRadius: '.5rem',
                  padding: 'clamp(1.5rem,3vw,2.5rem)',
                  boxShadow: 'var(--shadow-ambient)',
                }}
              >
                {formStatus === 'success' ? (
                  <div className="form-success-box">
                    <div className="form-success-icon">✓</div>
                    <h3 className="form-success-title">Vielen Dank für Ihre Nachricht!</h3>
                    <p className="form-success-text">
                      Wir haben Ihre Nachricht erfolgreich erhalten und werden uns schnellstmöglich persönlich bei Ihnen melden.
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setFormStatus('idle')}
                    >
                      Weitere Nachricht senden
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'var(--headline-md)',
                        marginBottom: '1.5rem',
                      }}
                    >
                      Schreiben Sie uns
                    </h3>

                    {formStatus === 'error' && (
                      <div
                        style={{
                          background: 'rgba(186, 26, 26, 0.08)',
                          border: '1px solid rgba(186, 26, 26, 0.3)',
                          borderRadius: '6px',
                          padding: '1rem 1.25rem',
                          marginBottom: '1.5rem',
                          color: '#ba1a1a',
                          fontSize: '0.95rem',
                          lineHeight: '1.5',
                        }}
                      >
                        <strong>Hinweis:</strong> {errorMessage}
                      </div>
                    )}

                    {/* Honeypot Spam-Schutz */}
                    <div style={{ display: 'none' }} aria-hidden="true">
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="k-name">Name *</label>
                      <input
                        type="text"
                        id="k-name"
                        name="name"
                        className="form-control"
                        placeholder="Ihr vollständiger Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="k-telefon">Telefon</label>
                      <input
                        type="tel"
                        id="k-telefon"
                        name="telefon"
                        className="form-control"
                        placeholder="Für eventuelle Rückfragen"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="k-email">E-Mail *</label>
                      <input
                        type="email"
                        id="k-email"
                        name="email"
                        className="form-control"
                        placeholder="ihre.adresse@beispiel.de"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="k-nachricht">Nachricht *</label>
                      <textarea
                        id="k-nachricht"
                        name="nachricht"
                        className="form-control"
                        rows={5}
                        placeholder="Wie können wir Ihnen weiterhelfen?"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KARTE / ANFAHRT */}
      <section className="section section-alt">
        <div className="container-narrow">
          <div className="section-header reveal" style={{ textAlign: 'center' }}>
            <p className="overline">Anfahrt</p>
            <h2>So finden Sie uns</h2>
          </div>
          <div
            className="reveal"
            style={{
              marginTop: '2rem',
              borderRadius: 'var(--radius-lg, .5rem)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card, var(--shadow-ambient))',
            }}
          >
            <InteractiveMap />
          </div>
          <p
            className="reveal"
            style={{
              textAlign: 'center',
              marginTop: '1rem',
              fontSize: 'var(--body-sm)',
              color: 'var(--on-surface-variant)',
            }}
          >
            Großschönauer Straße 21, 02796 Jonsdorf — direkt im Zittauer Gebirge
          </p>
        </div>
      </section>
    </main>
  );
}
