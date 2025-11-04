import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FAQSection from '@/components/FAQSection'; // Import the new FAQ section
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
        { title: t('siteAssessmentsTitle'), description: t('siteAssessmentsDescription') },
        { title: t('coordArchitecturalTitle'), description: t('coordArchitecturalDescription') },
        { title: t('licensingCommissioningTitle'), description: t('licensingCommissioningDescription') },
        { title: t('strategicPlanningTitle'), description: t('strategicPlanningDescription') },
      ],
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
    },
    {
      icon: "fas fa-hospital-alt",
      title: t('operationalSupportTitle'),
      description: t('operationalSupportDescription'),
      items: [
        { title: t('facilityOperationsOversightTitle'), description: t('facilityOperationsOversightDescription') },
        { title: t('healthcareITImplementationTitle'), description: t('healthcareITImplementationDescription') },
        { title: t('workforceRecruitmentTitle'), description: t('workforceRecruitmentDescription') },
        { title: t('maintenanceBiomedicalTitle'), description: t('maintenanceBiomedicalDescription') },
      ],
      gradientFrom: "from-sidraSecondary",
      gradientTo: "to-sidraAccent",
    },
    {
      icon: "fas fa-handshake",
      title: t('consortiumDrivenTitle'),
      description: t('consortiumDrivenDescription'),
      items: [
        { title: t('legalCommercialConsultancyTitle'), description: t('legalCommercialConsultancyDescription') },
        { title: t('financialPlanningAuditingTitle'), description: t('financialPlanningAuditingDescription') },
        { title: t('procurementEquipmentPlanningTitle'), description: t('procurementEquipmentPlanningDescription') },
        { title: t('facilityDesignConstructionTitle'), description: t('facilityDesignConstructionDescription') },
        { title: t('accreditationSustainabilityTitle'), description: t('accreditationSustainabilityDescription') },
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

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('services')} - Sidra Med</title>
        <meta name="description" content={t('servicesSummarySubtitle')} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-br from-gray-900 via-sidraPrimary to-sidraSecondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-sidraPrimary/10 via-sidraSecondary/10 to-sidraAccent/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('whatWeDo')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8">
              {t('ourServicesPageTitle')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('ourServicesPageDescription')}
            </p>
          </div>

          {/* Detailed Service Categories */}
          <div className="space-y-24">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-center p-8 rounded-3xl shadow-2xl",
                  index % 2 === 0 ? "bg-white/10 backdrop-blur-md border border-white/20" : "bg-white/5 backdrop-blur-sm border border-white/10"
                )}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
              >
                <div className={cn(index % 2 !== 0 && "lg:order-2")}>
                  <div className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300",
                    `bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo}`
                  )}>
                    <i className={cn(category.icon, "text-white text-3xl")}></i>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    {category.description}
                  </p>
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-4">
                        <i className="fas fa-check-circle text-sidraTeal text-xl flex-shrink-0 mt-1"></i>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-base">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={cn(index % 2 !== 0 && "lg:order-1")}>
                  <img
                    src={`https://images.unsplash.com/photo-1584820927466-09793f96a818?w=800&h=600&fit=crop&q=80&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1920`}
                    alt={category.title}
                    className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Custom Solutions CTA */}
          <div className="text-center mt-24 py-16 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20" data-aos="zoom-in" data-aos-delay="100">
            <h2 className="text-4xl font-black text-white mb-6">
              {t('customSolutionsTitle')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('customSolutionsDescription')}
            </p>
            <Link to="/contact" className="group inline-flex items-center justify-center px-10 py-5 bg-white text-sidraPrimary font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl text-lg">
              <span>{t('contactUsToday')}</span>
              <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
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
                    `bg-gradient-to-br from-sidraPrimary to-sidraTeal` // Consistent gradient for approach icons
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
        <FAQSection /> {/* Integrate the FAQ section here */}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default OurServicesPage;