import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Lightbox, { type LightboxImage } from '../components/ui/Lightbox';

const umgebungImages: LightboxImage[] = [
  { src: '/bilder/umgebung_berglandschaft.jpg', alt: 'Bergpanorama' },
  { src: '/bilder/umgebung_kelchstein.jpg', alt: 'Kelchstein' },
  { src: '/bilder/umgebung-landschaft.jpg', alt: 'Landschaft' },
];

export default function Umgebung() {
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
            backgroundImage: "url('/bilder/umgebung_berglandschaft.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="overline">Dreiländereck</p>
          <h1>Erleben Sie unsere wundervolle Heimat</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="split split-offset reveal">
            <div className="split-text">
              <p className="overline">Zittauer Gebirge</p>
              <h2>Inmitten eines Kranzes der Berge</h2>
              <p>
                Sie wohnen inmitten eines zusammenhängenden Kranzes der Berge. Im
                Osten der Jonsberg (652&nbsp;m), im Süden der Felsklotz der
                Mühlsteinbrüche mit der „Orgel“, im Westen der wild zerklüftete
                Nonnenfelsen und genau vor unserer Haustür der wuchtige Buchberg
                (651&nbsp;m) mit der dahinterliegenden, alles überragenden
                Lausche (792&nbsp;m).
              </p>
              <p>
                Unzählige lauschige Wege führen zu Aussichtspunkten mit
                prachtvollen Fernsichten nach Sachsen, Schlesiens Bergen und ins
                Sudetenland.
              </p>
            </div>
            <div className="split-img">
              <img
                src="/bilder/umgebung_kelchstein.jpg"
                alt="Kelchstein im Zittauer Gebirge"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOMMER / WINTER */}
      <section className="section section-alt">
        <div className="container">
          <div className="split split-reverse reveal">
            <div className="split-text">
              <p className="overline">Sommer &amp; Winter</p>
              <h2>Für jede Jahreszeit</h2>
              <p>
                An heißen Tagen lockt das Gebirgsbad oder der mit dem Auto 5
                Minuten entfernte Trixi-Park Großschönau zu einem erfrischenden
                Bad. Oder Sie genießen etwas Kultur auf der Waldbühne Jonsdorf,
                welche jeden Sommer neue humorvolle Stücke präsentiert.
              </p>
              <p>
                Zünftige reiche Beschäftigungsmöglichkeiten bietet Jonsdorf auch
                im Winter mit gut gespurten Loipen, Lausche-Abfahrt und dem 5
                Minuten entfernten Eissportzentrum. Seit 2004 bietet das
                Schmetterlingshaus eine neue Attraktion in Jonsdorf.
              </p>
            </div>
            <div className="split-img">
              <img
                src="/bilder/umgebung-landschaft.jpg"
                alt="Landschaft im Zittauer Gebirge"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header reveal" style={{ textAlign: 'center' }}>
            <p className="overline">Entdecken</p>
            <h2>Highlights der Region</h2>
          </div>
          <div
            className="features-grid reveal"
            style={{ maxWidth: 700, margin: '0 auto' }}
          >
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 20h18L14 4l-3 6-4-3-4 13z" />
              </svg>
              <span>Jonsberg (652&nbsp;m)</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 20h18L14 4l-3 6-4-3-4 13z" />
              </svg>
              <span>Buchberg (651&nbsp;m)</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 20h18L14 4l-3 6-4-3-4 13z" />
              </svg>
              <span>Lausche (792&nbsp;m)</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2C8 2 4 6 4 10c0 5.25 7 11.5 7.7 12.1a.5.5 0 00.6 0C13 21.5 20 15.25 20 10c0-4-4-8-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Mühlsteinbrüche „Orgel“</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2C8 2 4 6 4 10c0 5.25 7 11.5 7.7 12.1a.5.5 0 00.6 0C13 21.5 20 15.25 20 10c0-4-4-8-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Nonnenfelsen</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M9 9h.01M15 9h.01" />
              </svg>
              <span>Schmetterlingshaus</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 12h4l2-8 4 16 4-12 2 4h4" />
              </svg>
              <span>Trixi-Park Großschönau</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z" />
              </svg>
              <span>Waldbühne Jonsdorf</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 15c6.667-6 13.333 0 20-6" />
                <path d="M9 22c0-6 3-10 3-16" />
              </svg>
              <span>Gebirgsbad</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l3 3 5-5" />
              </svg>
              <span>Eissportzentrum</span>
            </div>
            <div className="feature-item">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span>Loipen &amp; Lausche-Abfahrt</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <p className="overline">Bilder</p>
            <h2>Landschaft erleben</h2>
          </div>
          <div className="gallery reveal">
            {umgebungImages.map((img, i) => (
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

      {/* LIGHTBOX */}
      <Lightbox
        isOpen={lightboxOpen}
        images={umgebungImages}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
      />
    </main>
  );
}
