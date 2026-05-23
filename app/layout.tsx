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
  openGraph: { type: 'website', locale: 'en_IN', siteName: 'ApanaCampus' },
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
