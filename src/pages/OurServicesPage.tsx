import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import FAQSection from '@/components/FAQSection';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Import shadcn Card components
import ScrollToTopButton from '@/components/ScrollToTopButton'; // Keep ScrollToTopButton

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
    { icon: "fas fa-lightbulb", title: t('approachStep2Title'), description: t('approach2Description'), color: "text-sidraSecondary" }, // Corrected key
    { icon: "fas fa-cogs", title: t('approachStep3Title'), description: t('approach3Description'), color: "text-sidraTeal" }, // Corrected key
    { icon: "fas fa-chart-line", title: t('approachStep4Title'), description: t('approach4Description'), color: "text-sidraAccent" }, // Corrected key
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
      <div className="pt-24 pb-16 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-sidraPrimary/5 via-sidraSecondary/5 to-sidraAccent/5"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('whatWeDo')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 break-words">
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
                  <h2 className="text-3xl font-bold text-gray-900 break-words">
                    {category.title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  {category.description}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Adjusted grid for more cards per row */}
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="group flex flex-col items-start p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-sidraPrimary/20"
                    >
                      <CardHeader className="p-0 mb-4 flex flex-row items-center">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-sidraTeal/10 text-sidraTeal group-hover:bg-sidraTeal group-hover:text-white transition-all duration-300">
                          <i className={cn(item.icon, "text-xl")}></i>
                        </div>
                        <CardTitle className={cn("text-xl font-bold text-gray-900", language === 'ar' ? 'mr-4' : 'ml-4')}>
                          <h3 className="break-words">{item.title}</h3> {/* Changed to H3 */}
                        </CardTitle>
                      </CardHeader>
                      <CardDescription className="text-gray-600 leading-relaxed text-base flex-grow">
                        {item.description}
                      </CardDescription>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Custom Solutions CTA */}
          <div className="text-center mt-24 py-16 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-3xl shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
            <h2 className="text-4xl font-black text-white mb-6 break-words">
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
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 break-words">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 break-words">{step.title}</h3> {/* Changed to H3 */}
                  <p className="text-gray-700 text-base">{step.description}</p>
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