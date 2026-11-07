import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const BASE_URL = 'https://www.romantikhaeuser.de';
const BRAND_SUFFIX = ' | Romantik Hotel Zum Lindengarten';

const routes = [
  {
    path: '/restaurant',
    title: `Unser Restaurant & Kaminzimmer${BRAND_SUFFIX}`,
    description:
      'Heimische Spezialitäten, gemütliches Kaminzimmer und idyllischer Biergarten im Luftkurort Jonsdorf. Täglich geöffnet für kulinarischen Genuss und Feierlichkeiten.',
  },
  {
    path: '/arrangements',
    title: `Angebote & Arrangements${BRAND_SUFFIX}`,
    description:
      'Exklusive Urlaubs-Arrangements im Romantik Hotel Zum Lindengarten: Romantisches Wochenende zu Zweit, Kurzurlaub, Feiertagspakete & Wellness im Zittauer Gebirge.',
  },
  {
    path: '/romantik-hotel',
    title: `Romantik-Hotel & Zimmer${BRAND_SUFFIX}`,
    description:
      'Urlaub im historischen Umgebindehaus: Komfortable Romantikzimmer, Suiten und herzliche Gastlichkeit im Romantik Hotel Zum Lindengarten in Jonsdorf.',
  },
  {
    path: '/bauernhaus',
    title: `Bauernhaus Am Lindengarten${BRAND_SUFFIX}`,
    description:
      'Historisches Bauernhaus in Kurort Jonsdorf: Romantische Zimmer, Maisonette-Suiten und entspannte Erholung im traditionellen Umgebindestil.',
  },
  {
    path: '/buchung',
    title: `Online Buchen & Verfügbarkeit${BRAND_SUFFIX}`,
    description:
      'Zimmer und Suiten im Romantik Hotel Zum Lindengarten direkt online zum Bestpreis buchen. Verfügbarkeitskalender, Buchungssystem und persönliche Anfrage.',
  },
  {
    path: '/kontakt',
    title: `Kontakt & Anfahrt${BRAND_SUFFIX}`,
    description:
      'Kontakt zum Romantik Hotel Zum Lindengarten in Jonsdorf: Telefon +49 35844 70654, Anfahrt im Zittauer Gebirge und direktes Kontaktformular.',
  },
  {
    path: '/umgebung',
    title: `Zittauer Gebirge & Ausflugsziele${BRAND_SUFFIX}`,
    description:
      'Aktivurlaub und Erholung im Naturpark Zittauer Gebirge: Entdecken Sie Kurort Jonsdorf, Felsenstädte, Wanderwege und das Dreiländereck.',
  },
  {
    path: '/impressum',
    title: `Impressum${BRAND_SUFFIX}`,
    description:
      'Impressum und rechtliche Anbieterkennzeichnung der Lindengarten Kunath GmbH – Romantik Hotel Zum Lindengarten in Kurort Jonsdorf.',
  },
  {
    path: '/datenschutz',
    title: `Datenschutzerklärung${BRAND_SUFFIX}`,
    description:
      'Datenschutzerklärung der Lindengarten Kunath GmbH: Informationen zur Verarbeitung personenbezogener Daten und Ihren Rechten gemäß DSGVO.',
  },
];

function runPrerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Please build the project first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf8');

  for (const route of routes) {
    const fullCanonical = `${BASE_URL}${route.path}`;

    let html = baseHtml;
    // Replace <title>
    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    // Replace description
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/,
      `<meta name="description" content="${route.description}" />`
    );
    // Replace canonical
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/,
      `<link rel="canonical" href="${fullCanonical}" />`
    );

    // Inject OpenGraph tags if not already present
    const ogTags = `
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${fullCanonical}" />
    <meta property="og:type" content="website" />`;

    html = html.replace('</head>', `${ogTags}\n  </head>`);

    // Output target directory: dist/<route>/index.html
    const outDir = path.join(distDir, route.path.replace(/^\//, ''));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

    // Also output flat HTML: dist/<route>.html
    fs.writeFileSync(path.join(distDir, `${route.path.replace(/^\//, '')}.html`), html, 'utf8');

    console.log(`[SSG Prerender] Generated static HTML for: ${route.path}`);
  }

  console.log(`[SSG Prerender] Successfully generated static entrypoints for ${routes.length} routes.`);
}

runPrerender();
