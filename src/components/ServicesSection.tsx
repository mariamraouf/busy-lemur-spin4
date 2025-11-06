import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const { t, language } = useLanguage(); // Destructure language

  const services = [
    {
      icon: "fas fa-project-diagram",
      title: t('service1Title'),
      description: t('service1Description'),
      iconBg: "bg-moyasar-blue-primary",
      iconHover: "text-moyasar-blue-primary",
    },
    {
      icon: "fas fa-hospital",
      title: t('service2Title'),
      description: t('service2Description'),
      iconBg: "bg-moyasar-blue-secondary",
      iconHover: "text-moyasar-blue-secondary",
    },
    {
      icon: "fas fa-globe-asia",
      title: t('service3Title'),
      description: t('service3Description'),
      iconBg: "bg-moyasar-teal-accent",
      iconHover: "text-moyasar-teal-accent",
    },
    {
      icon: "fas fa-handshake",
      title: t('service4Title'),
      description: t('service4Description'),
      iconBg: "bg-moyasar-blue-primary", // Reusing primary for consistency
      iconHover: "text-moyasar-blue-primary",
    },
  ];

  return (
    <section id="services" className="py-24 bg-moyasar-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t('whatWeDo')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-moyasar-dark-text mb-8 break-words">
            <span className="block">{t('servicesSummaryTitle')}</span>
          </h2>
          <p className="text-xl text-moyasar-gray-text max-w-3xl mx-auto">
            {t('servicesSummarySubtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-moyasar-light-bg rounded-3xl p-8 border border-moyasar-border shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className={cn(
                "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300",
                service.iconBg
              )}>
                <i className={cn(service.icon, "text-moyasar-white text-3xl")}></i>
              </div>
              <h3 className="text-2xl font-bold text-moyasar-dark-text mb-4 transition-colors break-words">
                {service.title}
              </h3>
              <p className="text-moyasar-gray-text leading-relaxed mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center" data-aos="fade-up" data-aos-delay="500">
          <Link to="/services" className="group inline-flex items-center justify-center px-10 py-5 bg-moyasar-blue-primary text-moyasar-white font-bold rounded-xl hover:bg-moyasar-blue-secondary transition-all transform hover:scale-105 shadow-lg">
            <span>{t('exploreAllServices')}</span>
            <i className={cn("fas fa-arrow-right", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;