import React from 'react';
import { buildMetadata } from '@/lib/metadata';
import ContactContentPage from '@/components/contact/ContactContent';

export const metadata = buildMetadata({
  title: 'Contact Support & Request Live Demo | ApanaCampus',
  description: 'Get in touch with ApanaCampus ERP experts. Request a live school database demo, log an administrative priority support ticket, or access your isolated subdomain admin vault.',
  path: '/contact',
  keywords: ['contact school erp', 'request school management software demo', 'apana campus customer support', 'subdomain school portal login', 'priority support desk'],
});

export default function ContactPage() {
  return <ContactContentPage />;
}
