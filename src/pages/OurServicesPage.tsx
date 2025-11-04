import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FAQSection from '@/components/FAQSection';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const OurServicesPage = () => {
  const { language, t } = useLanguage();

  const serviceCategories = [
    {
      icon: "fas fa-project-diagram",
      title: t('projectTechnicalSupportTitle'),
      description: t('projectTechnicalSupportDescription'),
      items: [
        { icon: "fas fa-map-marked-alt", title: t('siteAssessmentsTitle'), description: t('siteAssessmentsDescription') },
        { icon: "fas fa-drafting-compass", title: t('coordArchitecturalTitle'), description: t('coordArchitecturalDescription') },
        { icon: "fas fa-file-contract", title: t('licensingCommissioningTitle'), description: t('licensingCommissioningDescription') },
        { icon: "fas fa-lightbulb", title: t('strategicPlanningTitle'), description: t('strategicPlanningDescription') },
      ],
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
    },
    {
      icon: "fas fa-hospital-alt",
      title: t('operationalSupportTitle'),
      description: t('operationalSupportDescription'),
      items: [
        { icon: "fas fa-eye", title: t('facilityOperationsOversightTitle'), description: t('facilityOperationsOversightDescription') },
        { icon: "fas fa-laptop-medical", title: t('healthcareITImplementationTitle'), description: t('healthcareITImplementationDescription') },
        { icon: "fas fa-user-md", title: t('workforceRecruitmentTitle'), description: t('workforceRecruitmentDescription') },
        { icon: "fas fa-tools", title: t('maintenanceBiomedicalTitle'), description: t('maintenanceBiomedicalDescription') },
      ],
      gradientFrom: "from-sidraSecondary",
      gradientTo: "to-sidraAccent",
    },
    {
      icon: "fas fa-handshake",
      title: t('consortiumDrivenTitle'),
      description: t('consortiumDrivenDescription'),
      items: [
        { icon: "fas fa-gavel", title: t('legalCommercialConsultancyTitle'), description: t('legalCommercialConsultancyDescription') },
        { icon: "fas fa-chart-pie", title: t('financialPlanningAuditingTitle'), description: t('financialPlanningAuditingDescription') },
        { icon: "fas fa-truck-medical", title: t('procurementEquipmentPlanningTitle'), description: t('procurementEquipmentPlanningDescription') },
        { icon: "fas fa-hard-hat", title: t('facilityDesignConstructionTitle'), description: t('facilityDesignConstructionDescription') },
        { icon: "fas fa-certificate", title: t('accreditationSustainabilityTitle'), description: t('accreditationSustainabilityDescription') },
      ],
      gradientFrom: "from-sidraTeal",
      gradientTo: "to-sidraPrimary",
    },
  ];

  const approachSteps = [
    { icon: "fas fa-search", title: t('approachStep1Title'), description: t('approachStep1Description'), color: "text-sidraPrimary" },
    { icon: "fas fa-lightbulb", title: t('approachStep2Title'), description: t('approachStep2Description'), color: "text-sidraSecondary" },
    { icon: "fas fa-cogs", title: t('approachStep3Title'), description: t('approachStep3Description'), color: "text-sidraTeal" },
    { icon: "fas fa-chart-line", title: t('approachStep4Title'), description: t('approachStep4Description'), color: "text-sidraAccent" },
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
    <div className="min-h-screen flex flex-col">
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('services')} - Sidra Med</title>
        <meta name="description" content={t('servicesSummarySubtitle')} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-32 pb-16 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden"> {/* Increased pt-24 to pt-32 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-sidraPrimary/5 via-sidraSecondary/5 to-sidraAccent/5"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('whatWeDo')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              {t('ourServicesPageTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('ourServicesPageDescription')}
            </p>
          </div>

          {/* Detailed Service Categories */}
          <div className="space-y-24">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className={cn(
                  "p-10 rounded-3xl shadow-2xl border border-gray-100 bg-white",
                )}
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="flex items-center mb-6">
                  <div className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300",
                    `bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo}`,
                    language === 'ar' ? 'ml-6' : 'mr-6'
                  )}>
                    <i className={cn(category.icon, "text-white text-3xl")}></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  {category.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <i className={cn(item.icon, "text-sidraTeal text-xl flex-shrink-0 mt-1", language === 'ar' ? 'ml-4' : 'mr-4')}></i>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-base">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Custom Solutions CTA */}
          <div className="text-center mt-24 py-16 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-3xl shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
            <h2 className="text-4xl font-black text-white mb-6">
              {t('customSolutionsTitle')}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('customSolutionsDescription')}
            </p>
            <Link to="/contact" className="group inline-flex items-center justify-center px-10 py-5 bg-white text-sidraPrimary font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl text-lg">
              <span>{t('contactUsToday')}</span>
              <i className={cn("fas fa-arrow-right", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i>
            </Link>
          </div>

          {/* Our Approach Section */}
          <div className="mt-24 py-16 bg-white rounded-3xl shadow-2xl border border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                {t('ourApproachTitle')}
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8">
                {t('ourApproachTitle')}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
              {approachSteps.map((step, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-sidraLight/50 border border-gray-100" data-aos="zoom-in" data-aos-delay={100 * (index + 1)}>
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                    `bg-gradient-to-br from-sidraPrimary to-sidraTeal`
                  )}>
                    <i className={cn(step.icon, "text-white text-2xl")}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-base">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FAQSection faqs={servicesFaqs} titleKey="faqTitle" subtitleKey="faqSubtitle" />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default OurServicesPage;