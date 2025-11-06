import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import FAQSection from '@/components/FAQSection';
import { cn } from '@/lib/utils';
import ScrollToTopButton from '@/components/ScrollToTopButton';

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
      iconBg: "bg-moyasar-blue-primary",
    },
    {
      icon: "fas fa-handshake",
      title: t('value2Title'),
      description: t('value2Description'),
      iconBg: "bg-moyasar-blue-secondary",
    },
    {
      icon: "fas fa-lightbulb",
      title: t('value3Title'),
      description: t('value3Description'),
      iconBg: "bg-moyasar-teal-accent",
    },
    {
      icon: "fas fa-star",
      title: t('value4Title'),
      description: t('value4Description'),
      iconBg: "bg-moyasar-blue-primary", // Reusing primary for consistency
    },
  ];

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('ourValues')} - Sidra Med</title>
        <meta name="description" content={t('ourValuesMetaDescription')} />
      </Helmet>
      <div className="pt-24 pb-16 bg-moyasar-light-bg relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('ourValues')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-moyasar-dark-text mb-8 break-words">
              {t('ourValuesPageTitle')}
            </h1>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-moyasar-white rounded-3xl p-8 shadow-md border-2 border-moyasar-border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                  value.iconBg
                )}>
                  <i className={cn(value.icon, "text-moyasar-white text-2xl")}></i>
                </div>
                <h2 className="text-xl font-bold text-moyasar-dark-text mb-4 break-words">
                  {value.title}
                </h2>
                <p className="text-moyasar-gray-text leading-relaxed">
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