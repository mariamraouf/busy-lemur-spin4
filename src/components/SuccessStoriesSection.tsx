import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const SuccessStoriesSection = () => {
  const { t } = useLanguage();

  const stories = [
    {
      title: t('diagnosticCenterLaunchTitle'),
      location: t('diagnosticCenterLaunchLocation'),
      description: t('diagnosticCenterLaunchDescription'),
      stats: [
        { label: t('diagnosticCenterLaunchStat1'), value: "12" },
        { label: t('diagnosticCenterLaunchStat2'), value: "Imaging" },
        { label: t('diagnosticCenterLaunchStat3'), value: "Compliance" },
      ],
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
    },
    {
      title: t('clinicNetworkOptimizationTitle'),
      location: t('clinicNetworkOptimizationLocation'),
      description: t('clinicNetworkOptimizationDescription'),
      stats: [
        { label: t('clinicNetworkOptimizationStat1'), value: "30%" },
        { label: t('clinicNetworkOptimizationStat2'), value: "EMR" },
        { label: t('clinicNetworkOptimizationStat3'), value: "High" },
      ],
      gradientFrom: "from-sidraSecondary",
      gradientTo: "to-sidraAccent",
    },
    {
      title: t('internationalMarketEntryTitle'),
      location: t('internationalMarketEntryLocation'),
      description: t('internationalMarketEntryDescription'),
      stats: [
        { label: t('internationalMarketEntryStat1'), value: "Success" },
        { label: t('internationalMarketEntryStat2'), value: "5+" },
        { label: t('internationalMarketEntryStat3'), value: "Full" },
      ],
      gradientFrom: "from-sidraTeal",
      gradientTo: "to-sidraPrimary",
    },
  ];

  return (
    <section id="success-stories" className="py-24 bg-gradient-to-br from-gray-900 via-sidraPrimary to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-sidraPrimary/10 via-sidraSecondary/10 to-sidraAccent/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6 font-sans">
            {t('ourSuccessStories')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 font-sans">
            <span className="block">{t('projectsThatMadeImpact')}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="flex-grow">
                <h3 className={cn(
                  "text-3xl font-black mb-2 leading-tight",
                  `bg-gradient-to-r ${story.gradientFrom} ${story.gradientTo} bg-clip-text text-transparent`
                )}>
                  {story.title}
                </h3>
                <p className="text-lg font-medium flex items-center text-gray-600 mb-4">
                  <i className="fas fa-map-marker-alt text-sidraTeal mr-2"></i> {story.location}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  {story.description}
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center border-t border-gray-100 pt-6 mt-6">
                {story.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="p-3 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;