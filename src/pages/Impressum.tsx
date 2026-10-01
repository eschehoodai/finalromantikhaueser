import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Impressum() {
  useScrollReveal();

  return (
    <main>
      {/* HERO */}
      <section className="hero hero-sub" style={{ minHeight: '40vh' }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('/bilder/romantik-hotel-abend.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Impressum</h1>
        </div>
      </section>

      {/* LEGAL CONTENT */}
      <section className="section">
        <div className="container-narrow legal-content">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>Lindengarten Kunath GmbH</strong>
            <br />
            Großschönauer Straße 21
            <br />
            02796 Jonsdorf
          </p>
          <p>
            <strong>Handelsregister:</strong> HRB 39661
            <br />
            <strong>Registergericht:</strong> Amtsgericht Dresden
          </p>
          <p>
            <strong>Vertreten durch:</strong> Jens Kunath
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 35844 70654
            <br />
            Telefax: +49 (0) 35844 70611
            <br />
            E-Mail:{' '}
            <a href="mailto:buchung@romantikhaeuser.de">
              buchung@romantikhaeuser.de
            </a>
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a
            Umsatzsteuergesetz:
            <br />
            <strong>DE 20811303187</strong>
          </p>

          <h2>Redaktionell verantwortlich</h2>
          <p>
            Jens Kunath
            <br />
            Großschönauer Straße 21
            <br />
            02796 Jonsdorf
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            <br />
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>

          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </section>
    </main>
  );
}
