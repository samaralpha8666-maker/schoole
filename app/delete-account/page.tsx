import React from 'react';
import { buildMetadata } from '@/lib/metadata';
import DeleteAccountForm from '@/components/account/DeleteAccountForm';

export const metadata = buildMetadata({
  title: 'Request Account & Data Deletion | ApanaCampus',
  description: 'Request the permanent deletion of your school or college account records under Google Play Store developer guidelines and India DPDP policies.',
  path: '/delete-account',
  keywords: ['delete school erp account', 'erase academic data request', 'apana campus compliance deletion', 'user account removal'],
});

export default function DeleteAccountPage() {
  return <DeleteAccountForm />;
}
