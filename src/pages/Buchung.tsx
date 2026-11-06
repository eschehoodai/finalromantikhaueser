import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FaqAccordion from '../components/ui/FaqAccordion';

export default function Buchung() {
  useScrollReveal();

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = { form_type: 'buchung' };
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
        'Die Buchungsanfrage konnte nicht übermittelt werden. Bitte prüfen Sie Ihre Verbindung oder kontaktieren Sie uns direkt unter 035844 70654.'
      );
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    let attempts = 0;

    const renderWidgets = () => {
      attempts++;
      const win = window as any;
      if (win.dirs21 && typeof win.dirs21.render === 'function') {
        win.dirs21.render();
      }
      const cal = document.getElementById('d21-availabilityCalendar');
      const rl = document.getElementById('d21-roomList');
      // If both sub-widgets have mounted their DOM trees, stop polling
      if (cal && cal.children.length > 0 && rl && rl.children.length > 0) {
        clearInterval(timer);
      }
      if (attempts >= 40) {
        clearInterval(timer);
      }
    };

    // Immediate attempt plus rapid poll until ready
    renderWidgets();
    timer = setInterval(renderWidgets, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="hero hero-sub">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('/bilder/hotelseite_2.jpg')" }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="overline">Reservierung</p>
          <h1>Buchung &amp; Anfrage</h1>
        </div>
      </section>

      {/* DIRS21 BUCHUNGSWIDGET (VERFÜGBARKEITSKALENDER) */}
      <section className="section">
        <div className="container-narrow">
          <div
            className="reveal"
            style={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            <p className="overline">Direkt online buchen</p>
            <h2 style={{ fontSize: 'var(--display-md)', marginTop: '.5rem' }}>
              Buchungsformular
            </h2>
            <p
              style={{
                color: 'var(--on-surface-variant)',
                marginTop: '1rem',
              }}
            >
              Wählen Sie Ihren Wunschtermin und prüfen Sie freie Zimmer bequem online.
            </p>
          </div>
          <div
            className="reveal"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', padding: '1.5rem' }}>
              {/* Dekorative Eck-Ornamente */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 28,
                  height: 28,
                  borderTop: '2px solid var(--primary-container)',
                  borderLeft: '2px solid var(--primary-container)',
                  borderRadius: '2px 0 0 0',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 28,
                  height: 28,
                  borderTop: '2px solid var(--primary-container)',
                  borderRight: '2px solid var(--primary-container)',
                  borderRadius: '0 2px 0 0',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 28,
                  height: 28,
                  borderBottom: '2px solid var(--primary-container)',
                  borderLeft: '2px solid var(--primary-container)',
                  borderRadius: '0 0 0 2px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 28,
                  height: 28,
                  borderBottom: '2px solid var(--primary-container)',
                  borderRight: '2px solid var(--primary-container)',
                  borderRadius: '0 0 2px 0',
                }}
              />
              <div
                className="d21-availabilityCalendar d21-676964fb-347f-4a64-bed0-2de5a838ff2c"
                id="d21-availabilityCalendar"
                d21-widget-uuid="676964fb-347f-4a64-bed0-2de5a838ff2c"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIRS21 ZIMMERLISTE (ROOM LIST) */}
      <section className="section" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div
            className="reveal"
            style={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            <p className="overline">Zimmerkategorien</p>
            <h2 style={{ fontSize: 'var(--display-md)', marginTop: '.5rem' }}>
              3. Zimmerliste (Room List)
            </h2>
            <p
              style={{
                color: 'var(--on-surface-variant)',
                marginTop: '1rem',
                maxWidth: 620,
                marginInline: 'auto',
              }}
            >
              Wählen Sie aus unseren liebevoll eingerichteten Zimmerkategorien und buchen Sie Ihren Aufenthalt zum tagesaktuellen Bestpreis direkt online.
            </p>
          </div>
          <div
            className="reveal"
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <div style={{ width: '100%', maxWidth: 960 }}>
              <div
                className="d21-roomlist d21-roomList d21-5740a636-f6fd-412d-a6ea-753e192f951b"
                id="d21-roomList"
                d21-widget-uuid="5740a636-f6fd-412d-a6ea-753e192f951b"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BUCHUNGSANFRAGE */}
      <section className="section section-alt">
        <div className="container-narrow">
          <div
            className="reveal"
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <p className="overline">Alternativ</p>
            <h2 style={{ fontSize: 'var(--display-md)', marginTop: '.5rem' }}>
              Allgemeine Buchungsanfrage
            </h2>
            <p
              style={{
                color: 'var(--on-surface-variant)',
                marginTop: '1rem',
              }}
            >
              Füllen Sie das Formular aus und wir melden uns umgehend bei Ihnen
              <br />
              mit Verfügbarkeit und Bestätigung.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              background: 'var(--surface-container-lowest)',
              borderRadius: '.5rem',
              padding: 'clamp(2rem,4vw,3rem)',
              boxShadow: 'var(--shadow-ambient)',
            }}
          >
            {formStatus === 'success' ? (
              <div className="form-success-box">
                <div className="form-success-icon">✓</div>
                <h3 className="form-success-title">Vielen Dank für Ihre Buchungsanfrage!</h3>
                <p className="form-success-text">
                  Wir haben Ihre Anfrage erfolgreich erhalten. Unser Team prüft Ihre gewünschten
                  Reisedaten umgehend und meldet sich mit einem unverbindlichen Angebot bei Ihnen.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setFormStatus('idle')}
                >
                  Weitere Anfrage stellen
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit}>
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

                {/* Honeypot Spam-Schutz (für Menschen unsichtbar) */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Ihr vollständiger Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefon">Telefon</label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      className="form-control"
                      placeholder="Für eventuelle Rückfragen"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="ihre.adresse@beispiel.de"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="anreise">Anreise *</label>
                    <input
                      type="date"
                      id="anreise"
                      name="anreise"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="abreise">Abreise *</label>
                    <input
                      type="date"
                      id="abreise"
                      name="abreise"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="erwachsene">Anzahl Erwachsene</label>
                    <input
                      type="number"
                      id="erwachsene"
                      name="erwachsene"
                      className="form-control"
                      min={1}
                      defaultValue={2}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="kinder">Anzahl Kinder</label>
                    <input
                      type="number"
                      id="kinder"
                      name="kinder"
                      className="form-control"
                      min={0}
                      defaultValue={0}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="nachricht">Nachricht / Wünsche</label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    className="form-control"
                    rows={5}
                    placeholder="Besondere Wünsche, bevorzugte Zimmerkategorie, Verpflegung etc."
                  />
                </div>
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Wird gesendet...' : 'Anfrage senden'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ AKKORDEON */}
      <FaqAccordion />

      {/* KONTAKT-INFO */}
      <section className="section section-alt">
        <div className="container-narrow">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <p className="overline">Oder direkt</p>
            <h2
              style={{
                fontSize: 'var(--headline-lg)',
                marginTop: '.5rem',
                marginBottom: '1.5rem',
              }}
            >
              Telefonisch buchen
            </h2>
            <p
              style={{
                color: 'var(--on-surface-variant)',
                marginBottom: '1.5rem',
              }}
            >
              Wir beraten Sie gern persönlich zu verfügbaren Zimmern,
              Arrangements und Preisen.
            </p>
            <a
              href="tel:03584470654"
              className="btn btn-primary"
              style={{ fontSize: 'var(--title-md)' }}
            >
              035844 70654
            </a>
            <p
              style={{
                marginTop: '1rem',
                fontSize: 'var(--body-sm)',
                color: 'var(--on-surface-variant)',
              }}
            >
              E-Mail:{' '}
              <a href="mailto:buchung@romantikhaeuser.de">
                buchung@romantikhaeuser.de
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
