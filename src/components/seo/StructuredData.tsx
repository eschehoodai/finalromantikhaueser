import { BASE_URL } from './SEO';

export default function StructuredData() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        'url': `${BASE_URL}/`,
        'name': 'Romantik Hotel Zum Lindengarten',
        'description': 'Urlaub im historischen Umgebindehaus im Naturpark Zittauer Gebirge – Romantik Hotel & Bauernhaus in Kurort Jonsdorf.',
        'inLanguage': 'de-DE',
        'publisher': {
          '@id': `${BASE_URL}/#hotel`
        }
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': `${BASE_URL}/#navigation`,
        'name': [
          'Unser Restaurant',
          'Angebote & Arrangements',
          'Romantik-Hotel & Zimmer',
          'Historisches Bauernhaus',
          'Online Buchen',
          'Kontakt & Anfahrt'
        ],
        'url': [
          `${BASE_URL}/restaurant`,
          `${BASE_URL}/arrangements`,
          `${BASE_URL}/romantik-hotel`,
          `${BASE_URL}/bauernhaus`,
          `${BASE_URL}/buchung`,
          `${BASE_URL}/kontakt`
        ]
      },
      {
        '@type': 'Hotel',
        '@id': `${BASE_URL}/#hotel`,
        'name': 'Romantik Hotel Zum Lindengarten',
        'description': 'Familiengeführtes Romantik Hotel mit historischem Umgebindehaus, Kaminrestaurant und idyllischer Lage im Zittauer Gebirge.',
        'url': `${BASE_URL}/`,
        'telephone': '+493584470654',
        'email': 'buchung@romantikhaeuser.de',
        'image': `${BASE_URL}/bilder/romantik-hotel-abend.jpg`,
        'priceRange': '€€',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Großschönauer Straße 21',
          'addressLocality': 'Jonsdorf',
          'postalCode': '02796',
          'addressCountry': 'DE',
          'addressRegion': 'Sachsen'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 50.8542,
          'longitude': 14.7011
        },
        'amenityFeature': [
          {
            '@type': 'LocationFeatureSpecification',
            'name': 'Restaurant mit Kaminzimmer',
            'value': true
          },
          {
            '@type': 'LocationFeatureSpecification',
            'name': 'Kostenfreies WLAN',
            'value': true
          },
          {
            '@type': 'LocationFeatureSpecification',
            'name': 'Biergarten',
            'value': true
          },
          {
            '@type': 'LocationFeatureSpecification',
            'name': 'Parkplatz',
            'value': true
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
