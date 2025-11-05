import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import FAQSection from '@/components/FAQSection';
import { cn } from '@/lib/utils';
import ScrollToTopButton from '@/components/ScrollToTopButton'; // Keep ScrollToTopButton

const OurValuesPage = () => {
  const { language, t } = useLanguage();

  const ourValuesFaqs = [
    { id: "values-faq-1", question: t('ourValuesFaqQ1'), answer: t('ourValuesFaqA1') },
    { id: "values-faq-2", question: t('ourValuesFaqQ2'), answer: t('ourValuesFaqA2') },
    { id: "values-faq-3", question: t('ourValuesFaqQ3'), answer: t('ourValuesFaqA3') },
    { id: "values-faq-4", question: t('ourValuesFaqQ4'), answer: t('ourValuesFaqA4') },
    { id: "values-faq-5", question: t('ourValuesFaqQ5'), answer: t('ourValuesFaqA5') },
    { id: "values-faq-6", question: t('ourValuesFaqQ6'), answer: t('ourValuesFaqA6') },
  ];

  const values = [
    {
      icon: "fas fa-shield-alt",
      title: t('value1Title'),
      description: t('value1Description'),
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
    },
    {
      icon: "fas fa-handshake",
      title: t('value2Title'),
      description: t('value2Description'),
      gradientFrom: "from-sidraSecondary",
      gradientTo: "to-sidraAccent",
    },
    {
      icon: "fas fa-lightbulb",
      title: t('value3Title'),
      description: t('value3Description'),
      gradientFrom: "from-sidraTeal",
      gradientTo: "to-sidraPrimary",
    },
    {
      icon: "fas fa-star",
      title: t('value4Title'),
      description: t('value4Description'),
      gradientFrom: "from-sidraAccent",
      gradientTo: "to-sidraSecondary",
    },
  ];

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('ourValues')} - Sidra Med</title>
        <meta name="description" content={t('ourValuesMetaDescription')} />
      </Helmet>
      <div className="pt-24 pb-16 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-sidraAccent to-sidraTeal rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('ourValues')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              {t('ourValuesPageTitle')}
            </h1>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                  `bg-gradient-to-br ${value.gradientFrom} ${value.gradientTo}`
                )}>
                  <i className={cn(value.icon, "text-white text-2xl")}></i>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4"> {/* Changed to H2 */}
                  {value.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <FAQSection faqs={ourValuesFaqs} titleKey="faqTitle" hideSubtitle={true} />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default OurValuesPage;