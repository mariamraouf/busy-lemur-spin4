import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import FAQSection from '@/components/FAQSection';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollToTopButton from '@/components/ScrollToTopButton';

const OurServicesPage = () => {
  const { language, t } = useLanguage();

  const serviceCategories = [
    {
      icon: "fas fa-project-diagram",
      title: t('projectTechnicalSupportTitle'),
      description: t('projectTechnicalSupportDescription'),
      items: [
        { icon: "fas fa-hospital", title: "Turnkey delivery for hospitals, clinics, and labs" },
        { icon: "fas fa-chart-bar", title: "Feasibility studies & market assessments" },
        { icon: "fas fa-hard-hat", title: "On-site medical services for construction projects" },
      ],
      iconBg: "bg-moyasar-blue-primary",
      iconColor: "text-moyasar-blue-primary",
    },
    {
      icon: "fas fa-file-contract",
      title: t('licensingCommissioningTitle'),
      description: t('licensingCommissioningDescription'),
      items: [
        { icon: "fas fa-certificate", title: "MOH licensing & facility registration" },
        { icon: "fas fa-clipboard-check", title: "Compliance audits and documentation" },
      ],
      iconBg: "bg-moyasar-blue-secondary",
      iconColor: "text-moyasar-blue-secondary",
    },
    {
      icon: "fas fa-drafting-compass",
      title: t('coordArchitecturalTitle'),
      description: t('coordArchitecturalDescription'),
      items: [
        { icon: "fas fa-pencil-ruler", title: "Conceptual design and facility planning" },
        { icon: "fas fa-microscope", title: "Equipment planning and BOQ development" },
      ],
      iconBg: "bg-moyasar-teal-accent",
      iconColor: "text-moyasar-teal-accent",
    },
    {
      icon: "fas fa-lightbulb",
      title: t('strategicPlanningTitle'),
      description: t('strategicPlanningDescription'),
      items: [
        { icon: "fas fa-users", title: "Recruitment coordination and SOP development" },
        { icon: "fas fa-chart-line", title: "Business modeling and investment strategies" },
      ],
      iconBg: "bg-moyasar-blue-primary", // Reusing primary for consistency
      iconColor: "text-moyasar-blue-primary",
    },
  ];

  const approachSteps = [
    { icon: "fas fa-search", title: t('approachStep1Title'), description: t('approachStep1Description'), iconBg: "bg-moyasar-blue-primary" },
    { icon: "fas fa-lightbulb", title: t('approachStep2Title'), description: t('approach2Description'), iconBg: "bg-moyasar-blue-secondary" },
    { icon: "fas fa-cogs", title: t('approachStep3Title'), description: t('approach3Description'), iconBg: "bg-moyasar-teal-accent" },
    { icon: "fas fa-chart-line", title: t('approachStep4Title'), description: t('approach4Description'), iconBg: "bg-moyasar-blue-primary" },
  ];

  const servicesFaqs = [
    { id: "services-faq-1", question: t('faqQ1'), answer: t('faqA1') },
    { id: "services-faq-2", question: t('faqQ2'), answer: t('faqA2') },
    { id: "services-faq-3", question: t('faqQ3'), answer: t('faqA3') },
    { id: "services-faq-4", question: t('faqQ4'), answer: t('faqA4') },
    { id: "services-faq-5", question: t('faqQ5'), answer: t('faqA5') },
    { id: "services-faq-6", question: t('faqQ6'), answer: t('faqA6') },
  ];

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('services')} - Sidra Med</title>
        <meta name="description" content={t('ourServicesMetaDescription')} />
      </Helmet>
      <div className="pt-24 pb-16 bg-moyasar-light-bg relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('whatWeDo')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-moyasar-dark-text mb-8 break-words">
              {t('ourServicesPageTitle')}
            </h1>
            <p className="text-xl text-moyasar-gray-text max-w-3xl mx-auto leading-relaxed">
              {t('ourServicesPageDescription')}
            </p>
          </div>

          {/* Detailed Service Categories */}
          <div className="space-y-24">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className={cn(
                  "p-10 rounded-3xl shadow-lg border border-moyasar-border bg-moyasar-white",
                )}
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="flex items-center mb-6">
                  <div className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300",
                    category.iconBg,
                    language === 'ar' ? 'ml-6' : 'mr-6'
                  )}>
                    <i className={cn(category.icon, "text-moyasar-white text-3xl")}></i>
                  </div>
                  <h2 className="text-3xl font-bold text-moyasar-dark-text break-words">
                    {category.title}
                  </h2>
                </div>
                <p className="text-moyasar-gray-text leading-relaxed mb-8 text-lg">
                  {category.description}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="group flex flex-col items-start p-6 rounded-xl shadow-sm border border-moyasar-border transition-all duration-300 hover:shadow-md hover:border-moyasar-blue-primary/20 bg-moyasar-light-bg"
                    >
                      <CardHeader className="p-0 mb-4 flex flex-row items-center">
                        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center bg-moyasar-blue-primary/10 group-hover:bg-moyasar-blue-primary group-hover:text-moyasar-white transition-all duration-300", category.iconColor)}>
                          <i className={cn(item.icon, "text-xl")}></i>
                        </div>
                        <CardTitle className={cn("text-xl font-bold text-moyasar-dark-text", language === 'ar' ? 'mr-4' : 'ml-4')}>
                          <h3 className="break-words">{item.title}</h3>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Custom Solutions CTA */}
          <div className="text-center mt-24 py-16 bg-moyasar-blue-primary rounded-3xl shadow-lg" data-aos="zoom-in" data-aos-delay="100">
            <h2 className="text-4xl font-extrabold text-moyasar-white mb-6 break-words">
              {t('customSolutionsTitle')}
            </h2>
            <p className="text-xl text-moyasar-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('customSolutionsDescription')}
            </p>
            <Link to="/contact" className="group inline-flex items-center justify-center px-10 py-5 bg-moyasar-white text-moyasar-blue-primary font-bold rounded-2xl hover:bg-moyasar-light-bg transition-all transform hover:scale-105 shadow-lg text-lg">
              <span>{t('contactUsToday')}</span>
              <i className={cn("fas fa-arrow-right", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i>
            </Link>
          </div>

          {/* Our Approach Section */}
          <div className="mt-24 py-16 bg-moyasar-white rounded-3xl shadow-lg border border-moyasar-border" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                {t('ourApproachTitle')}
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-moyasar-dark-text mb-8 break-words">
                {t('ourApproachTitle')}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
              {approachSteps.map((step, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-moyasar-light-bg border border-moyasar-border" data-aos="zoom-in" data-aos-delay={100 * (index + 1)}>
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                    step.iconBg
                  )}>
                    <i className={cn(step.icon, "text-moyasar-white text-2xl")}></i>
                  </div>
                  <h3 className="text-xl font-bold text-moyasar-dark-text mb-2 break-words">{step.title}</h3>
                  <p className="text-moyasar-gray-text text-base">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FAQSection faqs={servicesFaqs} titleKey="faqTitle" hideSubtitle={true} />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default OurServicesPage;