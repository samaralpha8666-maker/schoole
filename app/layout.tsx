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
    default: 'ApanaCampus – Best School and College Management ERP Software',
    template: '%s | ApanaCampus ERP',
  },
  description:
    'ApanaCampus is the best School and College Management ERP Software. Manage school & college admissions, fees, timetables, academic exams, attendance, transport, and payroll in one secure cloud portal.',
  keywords:
    'school and college management erp, school management erp, college erp software, best school and college erp, educational portal erp, ApanaCampus, school erp india, college erp system',
  authors: [{ name: 'ApanaCampus Team' }],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'ApanaCampus',
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'ApanaCampus - School and College Management ERP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gotu.variable} ${archivo.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18501277335"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18501277335');
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
