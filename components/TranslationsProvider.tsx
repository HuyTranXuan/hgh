'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance, Resource } from 'i18next';
import React from 'react';
import { Language } from '@/types/language';

interface TranslationsProviderProps {
  children: React.ReactNode;
  locale: Language;
  namespaces: string[];
  resources: Resource;
}

const TranslationsProvider: React.FC<TranslationsProviderProps> = ({
  children,
  locale,
  namespaces,
  resources,
}) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
