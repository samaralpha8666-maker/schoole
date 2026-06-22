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
  logo: `${SITE_URL}/logo.svg`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['Hindi', 'English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/apana-campus',
    'https://www.linkedin.com/company/apana-time',
    'https://www.apanatime.in/',
  ],
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

// Shared contact schema
export const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact ApanaCampus Support and Sales',
  description: 'Request a live campus ERP demo or log an administrative support ticket.',
  url: `${SITE_URL}/contact`,
  mainEntity: {
    '@type': 'ContactPoint',
    telephone: '+91-89285-67312',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['Hindi', 'English'],
  },
};

// FAQ Schema matching the home page FAQ exactly
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How secure is PostgreSQL Schema Isolation? Can one school see another school\'s records?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, physically impossible. Unlike generic ERP databases that place all schools inside one massive table with a simple \'school_id\' filter, Apana Campus leverages native PostgreSQL schemas. Each school gets an entirely separate logical database partition with restricted access permissions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we import our existing student and teacher lists via Excel or CSV?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, easily! Our system contains a powerful, automated Bulk Directory Uploader. You simply download our standard Excel template, paste your student rosters, teacher rosters, or active credit balances, and upload.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the system support custom PDF report cards and academic transcript exports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. You can generate professional, high-resolution PDF report cards, financial ledger spreadsheets, monthly fee receipts, and official student transfer transcripts directly from the administrative portal with custom school logo stamps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any setup fees or hidden hosting charges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No setup fees, no hidden charges. Our monthly and yearly licensing fees are fully inclusive of isolated secure cloud hosting, daily automated database backups, WhatsApp/SMS gateway infrastructure integrations, and all new feature updates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you perform automated backups? Can we download our entire database backup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We execute automated, hourly snapshots of all tenant schemas with 30-day retention policies on secure Amazon S3 vaults. Additionally, you always own your data. Administrators can download complete JSON or CSV database dumps of their entire campus roster at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can parents pay school fees online? What gateways are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! The unified Parent Portal features single-click online fee payments. We support major national payment gateways out-of-the-box, allowing payments via UPI, NetBanking, Credit/Debit Cards, and popular wallets.',
      },
    },
  ],
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
