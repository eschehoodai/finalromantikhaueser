import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Lightbox, { type LightboxImage } from '../components/ui/Lightbox';
import SEO from '../components/seo/SEO';

const restaurantImages: LightboxImage[] = [
  { src: '/bilder/restaurant-biergarten.jpg', alt: 'Biergarten' },
  { src: '/bilder/restaurant-feier.jpg', alt: 'Feiern' },
  { src: '/bilder/restaurant-kaminzimmer.jpg', alt: 'Kaminzimmer' },
];

export default function Restaurant() {
  useScrollReveal();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main>
      <SEO
        title="Unser Restaurant & Kaminzimmer"
        description="Heimische Spezialitäten, gemütliches Kaminzimmer und idyllischer Biergarten im Luftkurort Jonsdorf. Täglich geöffnet für kulinarischen Genuss und Feierlichkeiten."
        canonicalPath="/restaurant"
      />
      {/* HERO */}
      <section className="hero hero-sub">
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('/bilder/restaurant-kaminzimmer.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="overline">Kulinarik</p>
          <h1>Unser Restaurant mit Kaminzimmer</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="split split-offset reveal">
            <div className="split-text">
              <p className="overline">Gastlichkeit genießen</p>
              <h2>Heimische Spezialitäten &amp; mehr</h2>
              <p>
                Genießen Sie unser umfangreiches Angebot an heimischen
                Spezialitäten in unserem Restaurant mit Kaminzimmer und
                historischer Blockstube. Die Auswahl reicht von gutbürgerlicher
                Hausmannskost wie Schweinelendenbraten und Rinderrouladen bis hin
                zu Spezialitäten wie marinierte Ochsenbäckchen und Zanderfilet.
              </p>
              <p>
                Wir haben für Sie täglich geöffnet, um Sie kulinarisch zu
                verwöhnen. Natürlich stehen Ihnen unsere Gasträume auch gern für
                Feiern zur Verfügung. Für Sie und Ihre Gäste bereiten wir gern
                ein 3-Gänge-Menü oder ein schmackhaftes Buffet zu für 40
                Personen.
              </p>
              <p>
                Erleben Sie Gastlichkeit in romantischer und persönlicher
                Atmosphäre in unseren original denkmalgeschützten Umgebindehaus.
              </p>
            </div>
            <div className="split-img">
              <img
                src="/bilder/restaurant-feier.jpg"
                alt="Restaurant Feier"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ÖFFNUNGSZEITEN */}
      <section className="section section-alt">
        <div className="container-narrow">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <p className="overline">Besuchen Sie uns</p>
            <h2
              style={{
                fontSize: 'var(--display-md)',
                marginTop: '.5rem',
                marginBottom: '2rem',
              }}
            >
              Öffnungszeiten
            </h2>
          </div>
          <div
            className="reveal"
            style={{ maxWidth: 480, margin: '0 auto' }}
          >
            <table className="hours-table">
              <tbody>
                <tr>
                  <td>Montag – Freitag</td>
                  <td>ab 15:00 Uhr</td>
                </tr>
                <tr>
                  <td>Samstag, Sonntag &amp; Feiertag</td>
                  <td>ab 12:00 Uhr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <p className="overline">Impressionen</p>
            <h2>Einblicke in unser Restaurant</h2>
          </div>
          <div className="gallery reveal">
            {restaurantImages.map((img, i) => (
              <div
                key={i}
                className="gallery-item"
                onClick={() => openLightbox(i)}
                style={{ cursor: 'pointer' }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cta-banner"
        style={{
          backgroundImage: "url('/bilder/romantik_hotel_kamin-teller.jpg')",
        }}
      >
        <div className="container">
          <p className="overline" style={{ color: 'var(--primary-container)' }}>
            Reservierung
          </p>
          <h2>Tisch reservieren</h2>
          <p>
            Rufen Sie uns an oder nutzen Sie unser Kontaktformular für Ihre
            Tischreservierung.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link to="/kontakt" className="btn btn-primary">
              Kontakt aufnehmen
            </Link>
            <a
              href="tel:03584470654"
              className="btn btn-secondary"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,.35)' }}
            >
              035844 70654
            </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <Lightbox
        isOpen={lightboxOpen}
        images={restaurantImages}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
      />
    </main>
  );
}
