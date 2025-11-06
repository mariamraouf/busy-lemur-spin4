import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { cn } from '@/lib/utils';
import { TranslationKey } from '@/lib/translations';

const TermsOfServicePage = () => {
  const { language, t } = useLanguage();

  const termsSections: { titleKey: TranslationKey; contentKey: TranslationKey }[] = [
    { titleKey: 'termsOfServiceSection1Title', contentKey: 'termsOfServiceSection1Content' },
    { titleKey: 'termsOfServiceSection2Title', contentKey: 'termsOfServiceSection2Content' },
    { titleKey: 'termsOfServiceSection3Title', contentKey: 'termsOfServiceSection3Content' },
    { titleKey: 'termsOfServiceSection4Title', contentKey: 'termsOfServiceSection4Content' },
    { titleKey: 'termsOfServiceSection5Title', contentKey: 'termsOfServiceSection5Content' },
    { titleKey: 'termsOfServiceSection6Title', contentKey: 'termsOfServiceSection6Content' },
    { titleKey: 'termsOfServiceSection7Title', contentKey: 'termsOfServiceSection7Content' },
    { titleKey: 'termsOfServiceSection8Title', contentKey: 'termsOfServiceSection8Content' },
  ];

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('termsOfServicePageTitle')} - Sidra Med</title>
        <meta name="description" content={t('termsOfServiceIntro')} />
      </Helmet>
      <div className="pt-24 pb-16 bg-moyasar-light-bg relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('termsOfServicePageTitle')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-moyasar-dark-text mb-8 break-words">
              {t('termsOfServicePageTitle')}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-moyasar-gray-text" data-aos="fade-up" data-aos-delay="200">
            <p className="lead text-xl mb-8">{t('termsOfServiceIntro')}</p>

            {termsSections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-3xl font-bold text-moyasar-dark-text mt-12 mb-4 break-words">{t(section.titleKey)}</h2>
                <p>{t(section.contentKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default TermsOfServicePage;