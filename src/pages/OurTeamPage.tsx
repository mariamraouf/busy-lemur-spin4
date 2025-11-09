import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import FAQSection from '@/components/FAQSection';
import { cn } from '@/lib/utils';
import ScrollToTopButton from '@/components/ScrollToTopButton'; // Keep ScrollToTopButton

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
      description: t('team2Description'),
      gradientFrom: "from-sidraSecondary",
      gradientTo: "to-sidraAccent",
    },
    {
      icon: "fas fa-hard-hat",
      title: t('teamRole3'),
      description: t('team3Description'),
      gradientFrom: "from-sidraTeal",
      gradientTo: "to-sidraPrimary",
    },
    {
      icon: "fas fa-chart-line",
      title: t('teamRole4Title'), // This key is correctly defined in translations.ts
      description: t('team4Description'),
      gradientFrom: "from-sidraAccent",
      gradientTo: "to-sidraSecondary",
    },
  ];

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('ourTeam')} - Sidra Med</title>
        <meta name="description" content={t('ourTeamMetaDescription')} />
      </Helmet>
      <div className="pt-24 pb-16 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mr-[-50px]"> {/* Grid break: shifted right */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white text-sm font-bold uppercase tracking-wide mb-6">
              {t('ourTeam')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 break-words">
              {t('ourTeamPageTitle')}
            </h1>
          </div>

          <div className="grid lg:grid-cols-1 gap-16 items-center mb-20"> {/* Changed to single column */}
            <div className="relative p-8 bg-white shadow-xl border border-gray-100" data-aos="fade-up" data-aos-duration="1000"> {/* Adjusted animation */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 break-words">{t('ourTeamPageTitle')}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('whoWeAreDescription1')} {/* Reusing a general description for context */}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {teamRoles.map((role, index) => (
                  <div key={index} className="flex items-start gap-x-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-sidraPrimary to-sidraTeal">
                      <i className={cn(role.icon, "text-white text-xl")}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg break-words">
                        {role.title}
                      </h3>
                      <p className="text-sm text-gray-600">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <FAQSection faqs={ourTeamFaqs} titleKey="faqTitle" hideSubtitle={true} />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default OurTeamPage;