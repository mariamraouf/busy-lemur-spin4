import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FAQSection from '@/components/FAQSection';
import { cn } from '@/lib/utils';

const OurTeamPage = () => {
  const { language, t } = useLanguage();

  const ourTeamFaqs = [
    { id: "team-faq-1", question: t('ourTeamFaqQ1'), answer: t('ourTeamFaqA1') },
    { id: "team-faq-2", question: t('ourTeamFaqQ2'), answer: t('ourTeamFaqA2') },
    { id: "team-faq-3", question: t('ourTeamFaqQ3'), answer: t('ourTeamFaqA3') },
    { id: "team-faq-4", question: t('ourTeamFaqQ4'), answer: t('ourTeamFaqA4') },
    { id: "team-faq-5", question: t('ourTeamFaqQ5'), answer: t('ourTeamFaqA5') },
    { id: "team-faq-6", question: t('ourTeamFaqQ6'), answer: t('ourTeamFaqA6') },
  ];

  const teamRoles = [
    {
      icon: "fas fa-user-tie",
      title: t('teamRole1'),
      description: t('teamRole1Description'),
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
    },
    {
      icon: "fas fa-stethoscope",
      title: t('teamRole2'),
      description: t('teamRole2Description'),
      gradientFrom: "from-sidraSecondary",
      gradientTo: "to-sidraAccent",
    },
    {
      icon: "fas fa-hard-hat",
      title: t('teamRole3'),
      description: t('teamRole3Description'),
      gradientFrom: "from-sidraTeal",
      gradientTo: "to-sidraPrimary",
    },
    {
      icon: "fas fa-chart-line",
      title: t('teamRole4'),
      description: t('teamRole4Description'),
      gradientFrom: "from-sidraAccent",
      gradientTo: "to-sidraSecondary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('ourTeam')} - Sidra Med</title>
        <meta name="description" content={t('teamRole1Description')} />
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
              {t('ourTeam')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              {t('ourTeamPageTitle')}
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative" data-aos="fade-right" data-aos-duration="1000">
              <img src="https://images.unsplash.com/photo-1579154204601-f159c8f8ad6e?w=800&h=600&fit=crop" alt="Our Team" className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative p-8 bg-white rounded-3xl shadow-xl border border-gray-100" data-aos="fade-left" data-aos-duration="1000">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('ourTeamPageTitle')}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('whoWeAreDescription1')} {/* Reusing a general description for context */}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {teamRoles.map((role, index) => (
                  <div key={index} className="flex items-start gap-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-sidraPrimary to-sidraTeal">
                      <i className={cn(role.icon, "text-white text-xl")}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{role.title}</h4>
                      <p className="text-sm text-gray-600">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <FAQSection faqs={ourTeamFaqs} titleKey="faqTitle" subtitleKey="faqSubtitle" />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default OurTeamPage;