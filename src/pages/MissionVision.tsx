import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FAQSection from '@/components/FAQSection'; // Import FAQSection
import { cn } from '@/lib/utils';

const MissionVision = () => {
  const { language, t } = useLanguage();

  const missionVisionFaqs = [
    { id: "mv-faq-1", question: t('missionVisionFaqQ1'), answer: t('missionVisionFaqA1') },
    { id: "mv-faq-2", question: t('missionVisionFaqQ2'), answer: t('missionVisionFaqA2') },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('missionVision')} - Sidra Med</title>
        <meta name="description" content={t('missionContent')} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-sidraAccent to-sidraTeal rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('missionVision')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              {t('missionPageTitle')}
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100" data-aos="fade-right" data-aos-duration="1000">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sidraPrimary to-sidraTeal rounded-2xl flex items-center justify-center">
                  <i className="fas fa-bullseye text-white text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{t('mission')}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('missionContent')}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100" data-aos="fade-left" data-aos-duration="1000">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sidraSecondary to-sidraAccent rounded-2xl flex items-center justify-center">
                  <i className="fas fa-eye text-white text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{t('vision')}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('visionContent')}
              </p>
            </div>
          </div>
        </div>
        <FAQSection faqs={missionVisionFaqs} titleKey="faqTitle" subtitleKey="faqSubtitle" />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MissionVision;