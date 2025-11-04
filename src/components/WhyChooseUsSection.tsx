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
      icon: "fas fa-award",
      title: t('whyChooseUsFeature2Title'),
      description: t('whyChooseUsFeature2Description'),
      gradientFrom: "from-sidraPurple",
      gradientTo: "to-sidraPink",
      hoverBorder: "hover:border-sidraPurple/20",
      hoverText: "group-hover:text-sidraPurple",
    },
    {
      icon: "fas fa-users",
      title: t('whyChooseUsFeature3Title'),
      description: t('whyChooseUsFeature3Description'),
      gradientFrom: "from-sidraEmerald",
      gradientTo: "to-sidraCyan",
      hoverBorder: "hover:border-sidraEmerald/20",
      hoverText: "group-hover:text-sidraEmerald",
    },
    {
      icon: "fas fa-bullseye", // Changed from fa-target to fa-bullseye for better icon representation
      title: t('whyChooseUsFeature4Title'),
      description: t('whyChooseUsFeature4Description'),
      gradientFrom: "from-sidraOrange",
      gradientTo: "to-red-500",
      hoverBorder: "hover:border-sidraOrange/20",
      hoverText: "group-hover:text-sidraOrange",
    },
    {
      icon: "fas fa-rocket",
      title: t('whyChooseUsFeature5Title'),
      description: t('whyChooseUsFeature5Description'),
      gradientFrom: "from-sidraIndigo",
      gradientTo: "to-sidraPurple",
      hoverBorder: "hover:border-sidraIndigo/20",
      hoverText: "group-hover:text-sidraIndigo",
    },
    {
      icon: "fas fa-shield-alt",
      title: t('whyChooseUsFeature6Title'),
      description: t('whyChooseUsFeature6Description'),
      gradientFrom: "from-sidraPink",
      gradientTo: "to-rose-500",
      hoverBorder: "hover:border-sidraPink/20",
      hoverText: "group-hover:text-sidraPink",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-sidraLight to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-sidraPrimary to-sidraPurple rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-sidraPink to-sidraOrange rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraPurple text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t('whySidraMed')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            <span className="block">{t('whyChooseUsTitlePart1')}</span>
            <span className="block bg-gradient-to-r from-sidraPrimary via-sidraPurple to-sidraPink bg-clip-text text-transparent">{t('whyChooseUsTitlePart2')}</span>
            <span className="block">{t('whyChooseUsTitlePart3')}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent transition-all duration-300 hover:scale-105",
                feature.hoverBorder
              )}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                `bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo}`
              )}>
                <i className={cn(feature.icon, "text-white text-2xl")}></i>
              </div>
              <h3 className={cn(
                "text-xl font-bold text-gray-900 mb-4 transition-colors",
                feature.hoverText
              )}>
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