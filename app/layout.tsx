import type { Metadata } from 'next';
import { Gotu, Archivo } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_URL, orgSchema, softwareSchema } from '@/lib/metadata';

const gotu = Gotu({ weight: '400', subsets: ['latin'], variable: '--font-gotu', display: 'swap' });
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ApnaCampus – Best School & College Management ERP Software in India',
    template: '%s | ApnaCampus ERP',
  },
  description:
    'ApnaCampus is a premium multi-tenant ERP & LMS platform for schools and colleges in India. Manage admissions, timetable, fees, exams, library, transport, and more — all in one platform.',
  keywords:
    'school management software India, college ERP, LMS school app, student admission portal, teacher attendance app, ApnaCampus, school ERP India',
  authors: [{ name: 'ApnaCampus Team' }],
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'ApnaCampus' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gotu.variable} ${archivo.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </head>
      <body className="font-sans antialiased bg-base-cream text-shade-dark">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
