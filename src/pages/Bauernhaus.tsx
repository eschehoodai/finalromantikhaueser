import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Lightbox, { type LightboxImage } from '../components/ui/Lightbox';

const allBauernhausImages: LightboxImage[] = [
  // Galerie 1
  { src: '/bilder/lindengarten-bauernhaus-002.jpg', alt: 'Bauernhaus' },
  { src: '/bilder/lindengarten-bauernhaus-006.jpg', alt: 'Zimmer' },
  { src: '/bilder/lindengarten-bauernhaus-010.jpg', alt: 'Zimmerdetail' },
  { src: '/bilder/lindengarten-bauernhaus-011.jpg', alt: 'Himmelbett-Suite' },
  { src: '/bilder/lindengarten-bauernhaus-018.jpg', alt: 'Wohnbereich' },
  { src: '/bilder/bauernhaus-badewanne.jpg', alt: 'Badezimmer' },
  { src: '/bilder/lindengarten-bauernhaus-020.jpg', alt: 'Detail' },
  { src: '/bilder/lindengarten-bauernhaus-024.jpg', alt: 'Ambiente' },
  { src: '/bilder/lindengarten-bauernhaus-003.jpg', alt: 'Außenansicht' },
  // Galerie 2
  { src: '/bilder/lindengarten-bauernhaus-105.jpg', alt: 'Impression' },
  { src: '/bilder/lindengarten-bauernhaus-117.jpg', alt: 'Impression' },
  { src: '/bilder/lindengarten-bauernhaus-118.jpg', alt: 'Impression' },
  { src: '/bilder/lindengarten-bauernhaus-132.jpg', alt: 'Impression' },
  { src: '/bilder/lindengarten-bauernhaus-133.jpg', alt: 'Impression' },
  { src: '/bilder/lindengarten-bauernhaus-141.jpg', alt: 'Impression' },
  { src: '/bilder/lindengarten-bauernhaus-147.jpg', alt: 'Impression' },
  { src: '/bilder/lindengarten-bauernhaus-156.jpg', alt: 'Impression' },
  { src: '/bilder/lindengarten-bauernhaus-157.jpg', alt: 'Impression' },
];

export default function Bauernhaus() {
  useScrollReveal();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const gallery1 = allBauernhausImages.slice(0, 9);
  const gallery2 = allBauernhausImages.slice(9);

  return (
    <main>
      {/* HERO */}
      <section className="hero hero-sub">
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('/bilder/lindengarten-bauernhaus-002.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="overline">Unser Bauernhaus</p>
          <h1>Bauernhaus „Am Lindengarten“</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="split split-offset reveal">
            <div className="split-text">
              <p className="overline">Seit 1886</p>
              <h2>Wohnen im historischen Umgebindehaus</h2>
              <p>
                Machen Sie Urlaub in unserem wunderschönen Umgebindehaus! Wohnen
                Sie in originellen, historischen Doppelzimmern oder einer der
                wunderschönen Himmelbett-Suiten. Ausgestattet sind alle Zimmer mit
                TV, kostenlosem W-lan, Dusche/WC und teilweise Badewanne. Fühlen
                Sie sich wohl in bäuerlichen Zimmern mit höherem Komfort.
              </p>
              <p>
                Dieses Umgebindehaus zählt zu den zuletzt erbauten Häusern des
                Ortes. Es wurde 1886 als Bauernhaus mit Stall und Scheune erbaut.
                Bis 1995 wurde dieses Haus als Wohnhaus bewirtschaftet. 1996 wurde
                es in diesem Sinn und Stil umfangreich saniert und als Gästehaus
                genutzt. Im Sinne des Erbauers unserer Häuser sind wir um stetigste
                Erneuerung bemüht.
              </p>
              <Link
                to="/buchung"
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
              >
                Verfügbarkeit prüfen
              </Link>
            </div>
            <div className="split-img">
              <img
                src="/bilder/lindengarten-bauernhaus-003.jpg"
                alt="Bauernhaus Am Lindengarten"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE 1 */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <p className="overline">Bilder</p>
            <h2>Unsere Zimmer &amp; Räume</h2>
          </div>
          <div className="gallery reveal">
            {gallery1.map((img, i) => (
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

      {/* GALERIE 2 */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <p className="overline">Noch mehr entdecken</p>
            <h2>Weitere Impressionen</h2>
          </div>
          <div className="gallery reveal">
            {gallery2.map((img, i) => (
              <div
                key={i + 9}
                className="gallery-item"
                onClick={() => openLightbox(i + 9)}
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
        images={allBauernhausImages}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
      />
    </main>
  );
}
