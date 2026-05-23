import type { Metadata } from 'next';

// Canonical site URL (update on deploy)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://apanacampus.com';

// Shared Open Graph image
const OG_IMAGE = `${SITE_URL}/og-image.png`;

// Shared organization schema
export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ApanaCampus',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['Hindi', 'English'],
  },
};

// Software application schema
export const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ApanaCampus - School and College Management ERP',
  operatingSystem: 'All',
  applicationCategory: 'EducationalApplication',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '124',
  },
  offers: {
    '@type': 'Offer',
    price: '4000',
    priceCurrency: 'INR',
    priceValidUntil: '2027-01-01',
  },
};

// ─── Page-specific metadata factories ─────────────────────────
export function buildMetadata({
  title,
  description,
  path = '',
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords: [
      'school and college management erp',
      'school management software India',
      'college ERP software',
      'multi-tenant school ERP',
      'ApanaCampus',
      'school admission management',
      ...keywords,
    ].join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'ApanaCampus',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  };
}
