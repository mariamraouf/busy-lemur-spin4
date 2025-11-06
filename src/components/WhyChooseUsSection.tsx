import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const WhyChooseUsSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: "fas fa-globe",
      title: t('whyChooseUsFeature1Title'),
      description: t('whyChooseUsFeature1Description'),
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
      hoverBorder: "hover:border-sidraPrimary/20",
      hoverText: "group-hover:text-sidraPrimary",
    },
    {
      icon: "fas fa-handshake", // Changed icon to match "Trusted Network"
      title: t('whyChooseUsFeature3Title'), // Changed to "Trusted Network"
      description: t('whyChooseUsFeature3Description'), // Changed to "Trusted Network"
      gradientFrom: "from-sidraSecondary",
      gradientTo: "to-sidraAccent",
      hoverBorder: "hover:border-sidraSecondary/20",
      hoverText: "group-hover:text-sidraSecondary",
    },
    {
      icon: "fas fa-cogs", // Changed icon to match "End-to-End Delivery"
      title: t('whyChooseUsFeature2Title'), // Changed to "End-to-End Delivery"
      description: t('whyChooseUsFeature2Description'), // Changed to "End-to-End Delivery"
      gradientFrom: "from-sidraTeal",
      gradientTo: "to-sidraPrimary",
      hoverBorder: "hover:border-sidraTeal/20",
      hoverText: "group-hover:text-sidraTeal",
    },
    {
      icon: "fas fa-bullseye",
      title: t('whyChooseUsFeature4Title'),
      description: t('whyChooseUsFeature4Description'),
      gradientFrom: "from-sidraAccent",
      gradientTo: "to-sidraSecondary",
      hoverBorder: "hover:border-sidraAccent/20",
      hoverText: "group-hover:text-sidraAccent",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-sidraLight to-gray-100 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-[-100px]"> {/* Grid break: shifted left */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white text-sm font-bold uppercase tracking-wide mb-6">
            {t('whySidraMed')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 break-words">
            <span className="block bg-gradient-to-r from-sidraPrimary via-sidraSecondary to-sidraAccent bg-clip-text text-transparent">{t('whyChooseUsTitlePart1')}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Changed to 4 columns */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group bg-white p-8 shadow-xl border-2 border-transparent transition-all duration-300 hover:scale-104",
                feature.hoverBorder
              )}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className={cn(
                "w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-104 transition-transform duration-300",
                `bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo}`
              )}>
                <i className={cn(feature.icon, "text-white text-2xl")}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors break-words">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;