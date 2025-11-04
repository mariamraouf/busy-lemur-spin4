import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FAQSection from '@/components/FAQSection';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  const { language, t } = useLanguage();

  const aboutUsFaqs = [
    { id: "about-faq-1", question: t('aboutUsFaqQ1'), answer: t('aboutUsFaqA1') },
    { id: "about-faq-2", question: t('aboutUsFaqQ2'), answer: t('aboutUsFaqA2') },
    { id: "about-faq-3", question: t('aboutUsFaqQ3'), answer: t('aboutUsFaqA3') },
    { id: "about-faq-4", question: t('aboutUsFaqQ4'), answer: t('aboutUsFaqA4') },
    { id: "about-faq-5", question: t('aboutUsFaqQ5'), answer: t('aboutUsFaqA5') },
    { id: "about-faq-6", question: t('aboutUsFaqQ6'), answer: t('aboutUsFaqA6') },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('aboutUs')} - Sidra Med</title>
        <meta name="description" content={t('whoWeAreDescription1')} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-32 pb-16 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden"> {/* Changed pt-24 to pt-32 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-sidraAccent to-sidraTeal rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('whoWeAre')}
            </span>
            {/* Removed h1 title: {t('whoWeArePageTitle')} */}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" alt="Healthcare Team" className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" />
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('whoWeAreDescription1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('whoWeAreDescription2')}
              </p>
            </div>
          </div>

          {/* Optional: Add Mission & Vision or Values here if desired, or link to them */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('learnMore')}</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/mission-vision" className="group inline-flex items-center justify-center px-8 py-4 bg-sidraPrimary text-white font-bold rounded-xl hover:bg-sidraSecondary transition-all transform hover:scale-105 shadow-lg">
                <span>{t('missionVision')}</span>
                <i className={cn("fas fa-arrow-right", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i>
              </Link>
              <Link to="/our-values" className="group inline-flex items-center justify-center px-8 py-4 bg-sidraSecondary text-white font-bold rounded-xl hover:bg-sidraAccent transition-all transform hover:scale-105 shadow-lg">
                <span>{t('ourValues')}</span>
                <i className={cn("fas fa-arrow-right", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i>
              </Link>
              <Link to="/our-team" className="group inline-flex items-center justify-center px-8 py-4 bg-sidraTeal text-white font-bold rounded-xl hover:bg-sidraPrimary transition-all transform hover:scale-105 shadow-lg">
                <span>{t('ourTeam')}</span>
                <i className={cn("fas fa-arrow-right", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i>
              </Link>
            </div>
          </div>
        </div>
        <FAQSection faqs={aboutUsFaqs} titleKey="faqTitle" subtitleKey="faqSubtitle" />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AboutUsPage;