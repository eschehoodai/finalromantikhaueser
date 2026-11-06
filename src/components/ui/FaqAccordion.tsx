import { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'anreise-lage',
    question: 'Wie erreichen wir das Romantik Hotel Zum Lindengarten in Jonsdorf (z. B. aus Richtung Cottbus oder Dresden)?',
    answer:
      'Der Kurort Jonsdorf im Naturpark Zittauer Gebirge ist aus Norden (über Cottbus / B99 / B178) und Westen (aus Richtung Dresden über die A4 / B178) bequem mit dem Auto erreichbar. Direkt am Hotel stehen Parkplätze zur Verfügung. Für eine besonders idyllische und entschleunigte Anreise bietet sich auch die traditionsreiche Zittauer Schmalspurbahn an, die direkt bis nach Jonsdorf fährt.',
  },
  {
    id: 'dreilaendereck-ausfluege',
    question: 'Welche Ausflugsziele im Dreiländereck und im Naturpark Zittauer Gebirge liegen in direkter Nähe?',
    answer:
      'Unser Haus liegt im Herzen des Dreiländerecks: Die Grenzen zu Tschechien (z. B. Jeschken, Liberec, Isergebirge) und Polen (Bogatynia, Riesengebirge) erreichen Sie in wenigen Autominuten. Direkt vor der Haustür in Jonsdorf laden die Nonnenfelsen, die Jonsdorfer Felsenstadt, das Schmetterlingshaus sowie die berühmte Burg- und Klosterruine Oybin zu unvergesslichen Wanderungen und Ausflügen ein.',
  },
  {
    id: 'umgebindehaus-tradition',
    question: 'Was macht das denkmalgeschützte Oberlausitzer Umgebindehaus so besonders?',
    answer:
      'Unser denkmalgeschütztes Gasthaus blickt auf eine lange Tradition zurück und feierte vor zwei Jahren sein stolzes 200-jähriges Jubiläum! Die seltene Oberlausitzer Volksbauweise verbindet urige Blockstuben-Gemütlichkeit und historische Handwerkskunst mit zeitgemäßem Sterne-Komfort, absoluter Ruhe und einem unverwechselbar romantischen Ambiente.',
  },
  {
    id: 'kulinarik-restaurant',
    question: 'Welche kulinarischen Angebote erwarten Gäste im Romantik Hotel?',
    answer:
      'In unserem gemütlichen Restaurant verwöhnen wir Sie mit regionalen Oberlausitzer Spezialitäten, böhmisch inspirierten Klassikern und feinen saisonalen Menüs. Starten Sie mit einem reichhaltigen Frühstücksbuffet in den Tag und genießen Sie abends ein stimmungsvolles Candle-Light-Dinner in unseren historischen Stuben oder entspannte Momente im idyllischen Lindengarten.',
  },
  {
    id: 'buchung-checkin',
    question: 'Wie gestalten sich Check-in, Check-out und die Buchungsmöglichkeiten?',
    answer:
      'Sie können rund um die Uhr direkt über unseren Online-Verfügbarkeitskalender buchen, unser Anfrageformular nutzen oder uns telefonisch unter 035844 70654 kontaktieren. Der Check-in ist ab 14:00 Uhr möglich (Spätanreise nach vorheriger Vereinbarung), der Check-out bis 11:00 Uhr. Bei einer Direktbuchung garantieren wir Ihnen den besten Preis sowie persönliche Beratung für Ihre Urlaubstage.',
  },
];

export default function FaqAccordion() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set([FAQ_ITEMS[0].id]));

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="section faq-section" aria-labelledby="faq-headline" style={{ paddingBottom: '4rem' }}>
      {/* Schema.org FAQPage Structured Data fuer Suchmaschinen & KI-Assistenten */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-narrow">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p className="overline">Wissenswertes für Ihren Aufenthalt</p>
          <h2 id="faq-headline" style={{ fontSize: 'var(--headline-lg)', marginTop: '.5rem' }}>
            Häufig gestellte Fragen (FAQ)
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', maxWidth: '640px', margin: '.75rem auto 0' }}>
            Hier finden Sie Antworten zu Anreise, Ausflugszielen im Dreiländereck, unserem historischen Umgebindehaus und Ihrer Reservierung.
          </p>
        </div>

        <div className="faq-list reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.has(item.id);
            return (
              <div
                key={item.id}
                className="faq-card"
                style={{
                  background: 'var(--surface, #fff)',
                  border: isOpen
                    ? '1.5px solid var(--primary-container, #c5a059)'
                    : '1px solid var(--outline-variant, #e0d8cc)',
                  borderRadius: '12px',
                  boxShadow: isOpen
                    ? '0 6px 24px rgba(119, 90, 25, 0.09)'
                    : '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s ease-in-out',
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--on-surface, #211b11)',
                    fontFamily: 'inherit',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: isOpen ? 'var(--primary, #775a19)' : 'inherit',
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen
                        ? 'var(--primary-container, #c5a059)'
                        : 'rgba(119, 90, 25, 0.08)',
                      color: isOpen ? '#fff' : 'var(--primary, #775a19)',
                      flexShrink: 0,
                      transition: 'transform 0.25s ease, background 0.25s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    style={{
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      color: 'var(--on-surface-variant, #4d4538)',
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(197, 160, 89, 0.15)',
                      paddingTop: '1rem',
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
