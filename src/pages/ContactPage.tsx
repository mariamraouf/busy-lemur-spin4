import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import ScrollToTopButton from '@/components/ScrollToTopButton'; // Keep ScrollToTopButton
import FullContactSection from '@/components/FullContactSection';

const ContactPage = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('contact')} - Sidra Med</title>
        <meta name="description" content={t('contactDescription')} />
      </Helmet>
      <div className="pt-24 pb-16">
        <FullContactSection />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default ContactPage;