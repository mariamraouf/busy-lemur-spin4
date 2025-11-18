import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const CareersPage = () => {
  const { language, t } = useLanguage();

  // ClickUp embed URLs for careers form
  const englishCareersFormEmbedUrl = "https://forms.clickup.com/9012970926/f/8cke1de-15412/KOVLVXH06B0JL4OXGQ";
  const arabicCareersFormEmbedUrl = "https://forms.clickup.com/9012970926/f/8cke1de-15412/KOVLVXH06B0JL4OXGQ"; // Assuming the same form for now, or you can provide a different Arabic one

  const currentCareersFormEmbedUrl = language === 'ar' ? arabicCareersFormEmbedUrl : englishCareersFormEmbedUrl;

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('careers')} - Sidra Med</title>
        <meta name="description" content={t('careersMetaDescription')} />
      </Helmet>
      <div className="pt-24 pb-16 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('joinOurTeam')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 break-words">
              {t('careersPageTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('careersPageDescription')}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-2 sm:p-10 shadow-2xl border border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <iframe 
              className="clickup-embed clickup-dynamic-height w-full min-h-[800px]" 
              src={currentCareersFormEmbedUrl} 
              onWheel={() => {}} 
              width="100%" 
              height="100%" 
              style={{ background: 'transparent', border: '1px solid #ccc' }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;