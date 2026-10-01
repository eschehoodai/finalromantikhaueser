import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Lightbox, { type LightboxImage } from '../components/ui/Lightbox';

const galleryImages: LightboxImage[] = [
  { src: '/bilder/romantik-hotel-abend.jpg', alt: 'Hotel am Abend' },
  { src: '/bilder/romantik_hotel_kamin-teller.jpg', alt: 'Kaminzimmer' },
  { src: '/bilder/romantik-hotel-kutscher.jpg', alt: 'Kutschfahrt' },
  { src: '/bilder/romantik-hotel-oldtimer-treffen.jpg', alt: 'Oldtimer-Treffen' },
  { src: '/bilder/romantik-hotel-restaurant.jpg', alt: 'Restaurant' },
  {
    src: '/bilder/romantik-hotel-lindengarten-zittauer-gebirge-hochzeitszimmer.jpg',
    alt: 'Hochzeitszimmer',
  },
  { src: '/bilder/hotelseite_2.jpg', alt: 'Zimmer' },
  { src: '/bilder/hotelseite_3.jpg', alt: 'Suite' },
  { src: '/bilder/hotelseite_5.jpg', alt: 'Detail' },
];

export default function RomantikHotel() {
  useScrollReveal();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero hero-sub">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('/bilder/romantik-hotel-lindengarten-zittauer-gebirge-hochzeitszimmer.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="overline">Unser Hotel</p>
          <h1>Romantik Hotel „Zum Lindengarten“</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="split split-offset reveal">
            <div className="split-text">
              <p className="overline">Historisches Ambiente</p>
              <h2>Willkommen im Umgebindehaus</h2>
              <p>
                Erholen Sie sich in unserem gemütlichen Romantik Hotel „Zum
                Lindengarten“. Liebevoll und denkmalsgerecht restauriert, bietet es
                ein stilvolles und gemütliches Ambiente. Wohnen Sie in einem der 5
                Doppelzimmer oder einer der 3 RomantikSuiten. Ausgestattet sind
                alle Zimmer mit TV, kostenlosem W-lan, Dusche/WC und teils
                Badewanne.
              </p>
              <p>
                Beginnen Sie Ihren Tag an unserem reichhaltigen Frühstücksbuffet,
                welches Sie gern auf unserer Terrasse genießen dürfen. Am Abend
                erwartet Sie die historische Blockstube oder das gemütliche,
                heimelige Kaminzimmer. Erleben Sie Gastlichkeit in romantischer
                und persönlicher Atmosphäre in unseren original denkmalgeschützten
                Umgebindehaus.
              </p>
            </div>
            <div className="split-img">
              <img
                src="/bilder/romantik-hotel-abend.jpg"
                alt="Romantik Hotel am Abend"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <p className="overline">Impressionen</p>
            <h2>Einblicke in unser Hotel</h2>
          </div>
          <div className="gallery reveal">
            {galleryImages.map((img, i) => (
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

      {/* AUSSTATTUNG */}
      <section className="section">
        <div className="container">
          <div
            className="section-header reveal"
            style={{ textAlign: 'center', maxWidth: 680, marginInline: 'auto' }}
          >
            <p className="overline">Ausstattung</p>
            <h2>Zimmer &amp; Preise</h2>
            <p>
              Alle Zimmer und Suiten sind im gemütlich romantischen Ambiente
              gestaltet und bieten modernen Komfort, der keine Wünsche offen
              lässt.
            </p>
          </div>
          <div
            className="features-grid reveal"
            style={{ maxWidth: 800, margin: '0 auto' }}
          >
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>Ruhige Lage</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              <span>Romantische Zimmer</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
              </svg>
              <span>Kostenloses WLAN</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="12" y1="18" x2="12" y2="18.01" />
              </svg>
              <span>Tablet im Zimmer</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              <span>Freundliches Personal</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
              </svg>
              <span>Frische Küche</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="M16 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2" />
              </svg>
              <span>Liebevolle Gasträume</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Parkplatz am Haus</span>
            </div>
          </div>
        </div>
      </section>

      {/* PREISTABELLE */}
      <section className="section section-alt">
        <div className="container-narrow">
          <div
            className="reveal"
            style={{
              background: 'var(--surface-container-lowest)',
              borderRadius: '.5rem',
              padding: 'clamp(2rem,4vw,3.5rem)',
              boxShadow: 'var(--shadow-ambient)',
            }}
          >
            <table className="price-table">
              <tbody>
                <tr>
                  <td>Doppelzimmer</td>
                  <td>ab 65,00 € *</td>
                </tr>
                <tr>
                  <td>Einbettzimmer</td>
                  <td>ab 95,00 € *</td>
                </tr>
                <tr>
                  <td>Romantikzimmer</td>
                  <td>ab 85,00 € *</td>
                </tr>
                <tr>
                  <td>Romantiksuite</td>
                  <td>ab 95,00 € *</td>
                </tr>
                <tr>
                  <td>3-Gänge-Abendmenü</td>
                  <td>ab 28,00 €</td>
                </tr>
                <tr>
                  <td>Kinder 1–4 Jahre</td>
                  <td>kostenfrei</td>
                </tr>
                <tr>
                  <td>Kinder 5–10 Jahre</td>
                  <td>50 % ermäßigt</td>
                </tr>
                <tr>
                  <td>Kinder 11–16 Jahre</td>
                  <td>30 % ermäßigt</td>
                </tr>
                <tr>
                  <td>Babybett / Nacht</td>
                  <td>19,00 €</td>
                </tr>
                <tr>
                  <td>Haustiere / Tag</td>
                  <td>ab 15,00 €</td>
                </tr>
                <tr>
                  <td>Parkplatz / Tag</td>
                  <td>5,00 € **</td>
                </tr>
              </tbody>
            </table>
            <p
              style={{
                marginTop: '1.25rem',
                fontSize: 'var(--body-sm)',
                color: 'var(--on-surface-variant)',
              }}
            >
              * Übernachtung und Frühstück, pro Person
              <br />
              ** Pro Tag und Auto (gesetzliche Bestimmung)
              <br />
              <br />
              Alle Preise inkl. MwSt. Über die Feiertage gilt ein Mindestaufenthalt
              von 4&nbsp;Übernachtungen.
            </p>
          </div>

          <div className="info-box reveal" style={{ marginTop: '2rem' }}>
            <h4>Neue Gästekarte Oberlausitz</h4>
            <p>
              Ab 01.05.2025 erhalten Gäste die „Gästekarte Oberlausitz“ –
              kostenloser ÖPNV und Rabatte inklusive. Gästetaxe: 2,90 € pro
              Person/Nacht (ermäßigt 1,45 €). Mehr unter{' '}
              <a
                href="http://www.gaestekarte-oberlausitz.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                gaestekarte-oberlausitz.de
              </a>
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/buchung" className="btn btn-primary">
              Jetzt buchen
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <Lightbox
        isOpen={lightboxOpen}
        images={galleryImages}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
      />
    </main>
  );
}
