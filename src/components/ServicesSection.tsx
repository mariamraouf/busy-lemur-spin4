import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: "fas fa-project-diagram",
      title: t('service1Title'),
      description: t('service1Description'),
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
      hoverColor: "text-sidraCyan",
    },
    {
      icon: "fas fa-hospital",
      title: t('service2Title'),
      description: t('service2Description'),
      gradientFrom: "from-sidraSecondary",
      gradientTo: "to-sidraAccent",
      hoverColor: "text-sidraEmerald",
    },
    {
      icon: "fas fa-globe-asia",
      title: t('service3Title'),
      description: t('service3Description'),
      gradientFrom: "from-sidraTeal",
      gradientTo: "to-sidraPrimary",
      hoverColor: "text-sidraPurple",
    },
    {
      icon: "fas fa-handshake",
      title: t('service4Title'),
      description: t('service4Description'),
      gradientFrom: "from-sidraAccent",
      gradientTo: "to-sidraSecondary",
      hoverColor: "text-sidraPink",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-900 via-sidraPurple to-sidraIndigo relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-sidraPrimary/10 via-sidraPurple/10 to-sidraPink/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraPurple text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t('whatWeDo')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8">
            <span className="block">{t('servicesTitlePart1')}</span>
            <span className="block bg-gradient-to-r from-sidraCyan to-sidraEmerald bg-clip-text text-transparent">{t('servicesTitlePart2')}</span>
            <span className="block">{t('servicesTitlePart3')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className={cn(
                "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300",
                `bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo}`
              )}>
                <i className={cn(service.icon, "text-white text-3xl")}></i>
              </div>
              <h3 className={cn(
                "text-2xl font-bold text-white mb-4 transition-colors",
                service.hoverColor.replace('text-', 'group-hover:text-')
              )}>
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className={cn(
                "flex items-center font-semibold group-hover:translate-x-2 transition-transform",
                service.hoverColor
              )}>
                <span>{t('learnMore')}</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;