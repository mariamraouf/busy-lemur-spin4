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
      iconBg: "bg-moyasar-blue-primary",
      hoverBorder: "hover:border-moyasar-blue-primary/20",
    },
    {
      icon: "fas fa-handshake",
      title: t('whyChooseUsFeature3Title'),
      description: t('whyChooseUsFeature3Description'),
      iconBg: "bg-moyasar-blue-secondary",
      hoverBorder: "hover:border-moyasar-blue-secondary/20",
    },
    {
      icon: "fas fa-cogs",
      title: t('whyChooseUsFeature2Title'),
      description: t('whyChooseUsFeature2Description'),
      iconBg: "bg-moyasar-teal-accent",
      hoverBorder: "hover:border-moyasar-teal-accent/20",
    },
    {
      icon: "fas fa-bullseye",
      title: t('whyChooseUsFeature4Title'),
      description: t('whyChooseUsFeature4Description'),
      iconBg: "bg-moyasar-blue-primary", // Reusing primary for consistency
      hoverBorder: "hover:border-moyasar-blue-primary/20",
    },
  ];

  return (
    <section className="py-24 bg-moyasar-light-bg relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t('whySidraMed')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-moyasar-dark-text mb-8 break-words">
            <span className="block text-moyasar-blue-primary">{t('whyChooseUsTitlePart1')}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group bg-moyasar-white rounded-3xl p-8 shadow-md border-2 border-moyasar-border transition-all duration-300 hover:scale-105",
                feature.hoverBorder
              )}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                feature.iconBg
              )}>
                <i className={cn(feature.icon, "text-moyasar-white text-2xl")}></i>
              </div>
              <h3 className="text-xl font-bold text-moyasar-dark-text mb-4 transition-colors break-words">
                {feature.title}
              </h3>
              <p className="text-moyasar-gray-text leading-relaxed">
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