import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article' | 'hotel';
}

export const BASE_URL = 'https://www.romantikhaeuser.de';
const DEFAULT_BRAND_SUFFIX = ' | Romantik Hotel Zum Lindengarten';

export default function SEO({
  title,
  description,
  canonicalPath = '',
  type = 'website',
}: SEOProps) {
  const fullUrl = `${BASE_URL}${canonicalPath}`;
  const fullTitle = title.includes('Lindengarten') ? title : `${title}${DEFAULT_BRAND_SUFFIX}`;

  // Synchronize document.title & meta tags directly to guarantee updates across all browsers & crawlers
  useEffect(() => {
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Update OpenGraph
    const setOgMeta = (property: string, content: string) => {
      let og = document.querySelector(`meta[property="${property}"]`);
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', property);
        document.head.appendChild(og);
      }
      og.setAttribute('content', content);
    };

    setOgMeta('og:title', fullTitle);
    setOgMeta('og:description', description);
    setOgMeta('og:url', fullUrl);
    setOgMeta('og:type', type);
  }, [fullTitle, description, fullUrl, type]);

  // React 19 Document Metadata (natively hoisted to <head>)
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
    </>
  );
}
