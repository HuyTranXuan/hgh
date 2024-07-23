'use client';

import React, { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { i18nConfig } from '@/i18nConfig';

const LanguageChanger: React.FC = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale
      //   &&      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="flex items-center space-x-6">
      {/* Language Dropdown */}
      <select onChange={handleChange} value={currentLocale}>
        <option value="en">{t('language.en')}</option>
        <option value="fi">{t('language.fi')}</option>
        <option value="vi">{t('language.vi')}</option>
      </select>
    </div>
  );
};

export default LanguageChanger;
