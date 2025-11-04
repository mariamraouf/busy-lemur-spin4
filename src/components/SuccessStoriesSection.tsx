import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const SuccessStoriesSection = () => {
  const { t } = useLanguage();

  const stories = [
    {
      title: t('hospitalLaunchTitle'),
      location: t('hospitalLaunchLocation'),
      description: t('hospitalLaunchDescription'),
      stats: [
        { label: t('hospitalLaunchStat1'), value: "18" },
        { label: t('hospitalLaunchStat2'), value: "300" },
        { label: t('hospitalLaunchStat3'), value: "15" },
      ],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
    },
    {
      title: t('laboratoryExpansionTitle'),
      location: t('laboratoryExpansionLocation'),
      description: t('laboratoryExpansionDescription'),
      stats: [
        { label: t('laboratoryExpansionStat1'), value: "12" },
        { label: t('laboratoryExpansionStat2'), value: "EMR" },
        { label: t('laboratoryExpansionStat3'), value: "40%" },
      ],
      image: "https://images.unsplash.com/photo-1532187863566-d0156217165a?w=800&h=600&fit=crop",
      gradientFrom: "from-sidraPurple",
      gradientTo: "to-sidraPink",
    },
    {
      title: t('investmentAdvisoryTitle'),
      location: t('investmentAdvisoryLocation'),
      description: t('investmentAdvisoryDescription'),
      stats: [
        { label: t('investmentAdvisoryStat1'), value: "200M" },
        { label: t('investmentAdvisoryStat2'), value: "Full" },
        { label: t('investmentAdvisoryStat3'), value: "Partners" },
      ],
      image: "https://images.unsplash.com/photo-1588702547919-26089e690806?w=800&h=600&fit=crop",
      gradientFrom: "from-sidraEmerald",
      gradientTo: "to-sidraCyan",
    },
  ];

  return (
    <section id="success-stories" className="py-24 bg-gradient-to-br from-gray-900 via-sidraIndigo to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-sidraPrimary/10 via-sidraPurple/10 to-sidraPink/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraPurple text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t('ourSuccessStories')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8">
            <span className="block">{t('projectsThatMadeImpact')}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="relative h-60 overflow-hidden">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent",
                  `via-black/30`
                )}></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{story.title}</h3>
                  <p className="text-lg font-medium flex items-center">
                    <i className="fas fa-map-marker-alt text-sidraTeal mr-2"></i> {story.location}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{story.description}</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {story.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="p-4 bg-gray-100 rounded-xl">
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;