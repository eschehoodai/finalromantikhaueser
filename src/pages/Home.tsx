import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <main>
      {/* ========== HERO ========== */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('/bilder/romantik-hotel-lindengarten-zittauer-gebirge-hochzeitszimmer.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="overline">Zittauer Gebirge · Jonsdorf</p>
          <h1>Urlaub im historisch romantischen Ambiente</h1>
          <p>
            Das kleinste Mittelgebirge Deutschlands lädt Sie in seine reizvolle
            Landschaft zwischen Bergen und Felsen im Dreiländereck
            Deutschland–Polen–Tschechien ein.
          </p>
          <div className="hero-actions">
            <Link to="/buchung" className="btn btn-primary">
              Jetzt buchen
            </Link>
            <Link to="/romantik-hotel" className="btn btn-secondary">
              Hotel entdecken
            </Link>
          </div>
        </div>
      </section>

      {/* ========== INTRO ========== */}
      <section className="section">
        <div className="container">
          <div className="split split-offset reveal">
            <div className="split-text">
              <p className="overline">Willkommen</p>
              <h2>Gastlichkeit in romantischer Atmosphäre</h2>
              <p>
                Ein gemütliches historisches Umgebindehaus ist nun Mitglied der
                Hotelkooperation RomantikHotels &amp; Restaurants International.
                In unserem Romantik Hotel „Zum Lindengarten“ und unserem
                Bauernhaus „Am Lindengarten“ in Jonsdorf, finden Sie für Ihre
                Urlaubstage alles, was Sie von einer ländlichen, heimischen und
                gepflegten Gastronomie erwarten.
              </p>
              <p>
                Jedes unserer Häuser hat seinen unverwechselbaren Charakter.
                Erleben Sie Gastlichkeit in romantischer und persönlicher
                Atmosphäre.
              </p>
              <Link to="/romantik-hotel" className="btn btn-tertiary">
                Mehr erfahren →
              </Link>
            </div>
            <div className="split-img">
              <img
                src="/bilder/romantik-hotel-abend.jpg"
                alt="Romantik Hotel Zum Lindengarten am Abend"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== ROMANTISCHES WOCHENENDE TEASER ========== */}
      <section className="section section-alt">
        <div className="container">
          <div className="split split-reverse reveal">
            <div className="split-text">
              <p className="overline">Highlight-Arrangement</p>
              <h2>Romantisches Wochenende</h2>
              <p>
                3 Übernachtungen im Doppelzimmer inkl. Frühstück und
                3-Gang-Abendmenü.
              </p>
              <p className="card-price">
                260,– € <small>pro Person</small>
              </p>
              <div
                style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <Link to="/arrangements" className="btn btn-primary">
                  Alle Arrangements
                </Link>
                <Link to="/buchung" className="btn btn-secondary">
                  Anfragen
                </Link>
              </div>
            </div>
            <div className="split-img">
              <img
                src="/bilder/romantik-hotel-lindengarten-zittauer-gebirge-hochzeitszimmer.jpg"
                alt="Romantisches Zimmer im Romantik Hotel"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== RESTAURANT TEASER ========== */}
      <section className="section">
        <div className="container">
          <div className="split reveal">
            <div className="split-img">
              <img
                src="/bilder/restaurant-kaminzimmer.jpg"
                alt="Kaminzimmer im Restaurant"
                loading="lazy"
              />
            </div>
            <div className="split-text">
              <p className="overline">Kulinarik</p>
              <h2>Aktuelles Restaurant Angebot</h2>
              <p>
                Original Mährische Spatzen – in Knoblauch und Zwiebelchen
                geschmorte Schweinebratenstücke, dazu Weinsauerkraut und
                hausgemachte böhmische Knödel.
              </p>
              <Link to="/restaurant" className="btn btn-tertiary">
                Zum Restaurant →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section
        className="cta-banner"
        style={{
          backgroundImage: "url('/bilder/umgebung_berglandschaft.jpg')",
        }}
      >
        <div className="container">
          <p className="overline" style={{ color: 'var(--primary-container)' }}>
            Dreiländereck entdecken
          </p>
          <h2>Erleben Sie unsere wundervolle Heimat</h2>
          <p>
            Unzählige lauschige Wege führen zu Aussichtspunkten mit
            prachtvollen Fernsichten nach Sachsen, Schlesiens Bergen und ins
            Sudetenland.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link to="/umgebung" className="btn btn-primary">
              Umgebung erkunden
            </Link>
            <a
              href="https://www.yovite.com/Restaurant-Gutschein-R-84114902.html?REF=REST"
              className="btn btn-secondary"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,.35)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Geschenkgutscheine
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
