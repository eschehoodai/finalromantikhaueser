import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SEO from '../components/seo/SEO';

interface Arrangement {
  overline: string;
  title: string;
  desc: string;
  extra?: string;
  price: string;
  priceSub: string;
}

const arrangements: Arrangement[] = [
  {
    overline: 'Kurzurlaub',
    title: '3 Übernachtungen',
    desc: 'Im Doppelzimmer inkl. Frühstück und 3-Gang-Abendmenü. Kinderermäßigung bis 60 %. Versch. Suiten, Romantikzimmer und Familienzimmer mit Aufpreis.',
    price: '260,– €',
    priceSub: 'pro Person',
  },
  {
    overline: 'Erholungsurlaub',
    title: '10 Übernachtungen',
    desc: 'Im Doppelzimmer inkl. Frühstück und 3-Gang-Abendmenü. Versch. Suiten, Romantikzimmer und Familienzimmer mit Aufpreis.',
    price: '810,– €',
    priceSub: 'pro Person',
  },
  {
    overline: 'Zu Zweit',
    title: 'Romantik pur zu Zweit',
    desc: 'Sie übernachten in unserer großen Romantiksuite und erhalten einen Begrüßungscocktail. Sie genießen ein 4-Gang-Menü bei Kerzenschein am Kaminfeuer. Das Bad der Suite ist vorbereitet mit Kerzen, Rosen und Champagner.',
    extra: 'Buchbar nach Verfügbarkeit. Verschiedene Suiten mit Aufpreis.',
    price: '150,– €',
    priceSub: 'pro Person / 1 Nacht',
  },
  {
    overline: 'Frühling',
    title: 'Frühlings-Romantik-Angebot',
    desc: 'Wir heißen Sie im März willkommen! 5 Übernachtungen im Doppelzimmer mit Frühstück und 3-Gang-Abendmenü. Kinderermäßigung bis 60 %, Kinder bis 4 Jahren im Bett der Eltern, Kost und Logis frei.',
    price: '420,– €',
    priceSub: 'pro Person',
  },
  {
    overline: 'Feiertage',
    title: 'Himmelfahrt & Pfingsten',
    desc: 'Sie übernachten in komfortablen Zimmern und Suiten. Alle Zimmer mit Dusche/WC oder Badewanne/WC ausgestattet. Wanderung und Lagerfeuer mit Räuberhauptmann „Karasek“. 3 Übernachtungen inkl. Frühstück und 3-Gang-Wahlmenü.',
    price: 'ab 310,– €',
    priceSub: 'pro Person',
  },
  {
    overline: 'Advent',
    title: 'Romantisches Advents-Wochenende',
    desc: '2 Übernachtungen (Freitag bis Sonntag) inklusive reichhaltiges Frühstücksbuffet und weihnachtliches 3-Gang-Abendmenü, am Kaminfeuer sowie hausgemachter Punsch, Feuerzangenbowle und Rumtopf.',
    extra: 'Zeitraum: 07.11. – 19.12.2025',
    price: '179,– €',
    priceSub: 'pro Person / 2 Tage',
  },
  {
    overline: 'Weihnachten',
    title: 'Unsere Weihnachtsromantik',
    desc: 'Erleben Sie die besinnlichste Zeit in unserem Romantik Hotel. Übernachten Sie in komfortablen Zimmern und Suiten inkl. reichhaltigem Frühstücksbuffet und Abendmenü. Drei-Übernachtungspauschale vom 25.12. – 28.12.',
    price: '359,– €',
    priceSub: 'pro Person',
  },
  {
    overline: 'Jahreswechsel',
    title: 'Unser Romantik Silvester',
    desc: 'Romantische Doppelzimmer, Himmelbettsuiten oder Familiensuiten. Frühstücksbuffet, 3-Gang-Wahlmenü, am 31.12. ein 5-Gang-Silvestermenü, Eisbombe und Mitternachtsbuffet. Um Mitternacht funkelndes Feuerwerk. Am Neujahrstag Wanderung mit Räuberhauptmann „Karasek“ und Feuerzangenbowle am Lagerfeuer.',
    price: 'auf Anfrage',
    priceSub: '5 Übernachtungen',
  },
];

export default function Arrangements() {
  useScrollReveal();

  return (
    <main>
      <SEO
        title="Angebote & Arrangements"
        description="Exklusive Urlaubs-Arrangements im Romantik Hotel Zum Lindengarten: Romantisches Wochenende zu Zweit, Kurzurlaub, Feiertagspakete & Wellness im Zittauer Gebirge."
        canonicalPath="/arrangements"
      />
      {/* HERO */}
      <section className="hero hero-sub">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('/bilder/hotelseite_2.jpg')" }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="overline">Unsere Pakete</p>
          <h1>Angebote &amp; Arrangements</h1>
        </div>
      </section>

      {/* ARRANGEMENTS CARDS */}
      <section className="section">
        <div className="container">
          <div
            className="section-header reveal"
            style={{
              textAlign: 'center',
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <p className="overline">Exklusive Angebote</p>
            <h2>Unsere Arrangements</h2>
            <p>
              Wählen Sie Ihr individuelles Paket für einen unvergesslichen
              Aufenthalt. Alle Arrangements sind auf Anfrage buchbar.
            </p>
          </div>

          <div
            className="card-grid reveal"
            style={{
              gridTemplateColumns: '1fr',
              maxWidth: 'var(--content-narrow)',
              marginInline: 'auto',
            }}
          >
            {arrangements.map((pkg, i) => (
              <div key={i} className="card">
                <div className="card-body">
                  <p className="overline">{pkg.overline}</p>
                  <h3>{pkg.title}</h3>
                  <p>{pkg.desc}</p>
                  {pkg.extra && (
                    <p
                      style={{
                        fontSize: 'var(--body-sm)',
                        color: 'var(--on-surface-variant)',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {pkg.extra}
                    </p>
                  )}
                  <div className="card-footer">
                    <p className="card-price">
                      {pkg.price} <small>{pkg.priceSub}</small>
                    </p>
                    <Link
                      to="/buchung"
                      className="btn btn-primary"
                      style={{
                        marginTop: '1.25rem',
                        fontSize: 'var(--body-sm)',
                        padding: '.7rem 1.6rem',
                      }}
                    >
                      Jetzt buchen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/buchung" className="btn btn-primary">
              Arrangement anfragen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
