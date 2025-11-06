import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import FAQSection from '@/components/FAQSection';
import { cn } from '@/lib/utils';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const MissionVision = () => {
  const { language, t } = useLanguage();

  const missionVisionFaqs = [
    { id: "mv-faq-1", question: t('missionVisionFaqQ1'), answer: t('missionVisionFaqA1') },
    { id: "mv-faq-2", question: t('missionVisionFaqQ2'), answer: t('missionVisionFaqA2') },
    { id: "mv-faq-3", question: t('missionVisionFaqQ3'), answer: t('missionVisionFaqA3') },
    { id: "mv-faq-4", question: t('missionVisionFaqQ4'), answer: t('missionVisionFaqA4') },
    { id: "mv-faq-5", question: t('missionVisionFaqQ5'), answer: t('missionVisionFaqA5') },
    { id: "mv-faq-6", question: t('missionVisionFaqQ6'), answer: t('missionVisionFaqA6') },
  ];

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('missionVision')} - Sidra Med</title>
        <meta name="description" content={t('missionContent')} />
      </Helmet>
      <div className="pt-24 pb-16 bg-moyasar-light-bg relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('missionVision')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-moyasar-dark-text mb-8 break-words">
              {t('missionPageTitle')}
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-moyasar-white rounded-3xl p-10 shadow-lg border border-moyasar-border" data-aos="fade-right" data-aos-duration="1000">
              <div className="flex items-center gap-x-4 mb-6">
                <div className="w-16 h-16 bg-moyasar-blue-primary rounded-2xl flex items-center justify-center">
                  <i className="fas fa-bullseye text-moyasar-white text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-moyasar-dark-text break-words">{t('mission')}</h2>
              </div>
              <p className="text-lg text-moyasar-gray-text leading-relaxed">
                {t('missionContent')}
              </p>
            </div>

            <div className="bg-moyasar-white rounded-3xl p-10 shadow-lg border border-moyasar-border" data-aos="fade-left" data-aos-duration="1000">
              <div className="flex items-center gap-x-4 mb-6">
                <div className="w-16 h-16 bg-moyasar-blue-secondary rounded-2xl flex items-center justify-center">
                  <i className="fas fa-eye text-moyasar-white text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-moyasar-dark-text break-words">{t('vision')}</h2>
              </div>
              <p className="text-lg text-moyasar-gray-text leading-relaxed">
                {t('visionContent')}
              </p>
            </div>
          </div>
        </div>
        <FAQSection faqs={missionVisionFaqs} titleKey="faqTitle" hideSubtitle={true} />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default MissionVision;