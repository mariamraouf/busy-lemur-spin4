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
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80", // X-ray machine, diagnostic
      alt: "Advanced X-ray machine in a diagnostic center",
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
      image: "https://images.unsplash.com/photo-1551076805-e18690433258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80", // Doctor consulting patient in a modern clinic
      alt: "Doctor consulting patient in a modern clinic setting",
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
      image: "https://images.unsplash.com/photo-1521737711867-ee1ab9279f17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80", // Business professionals collaborating
      alt: "Business professionals collaborating in a modern office setting",
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
              className="group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="relative h-60 overflow-hidden">
                <img src={story.image} alt={story.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent",
                  `via-black/30`
                )}></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1 font-sans">{story.title}</h3>
                  <p className="text-lg font-medium flex items-center font-sans">
                    <i className="fas fa-map-marker-alt text-sidraTeal mr-2"></i> {story.location}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed text-base font-sans">{story.description}</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {story.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="p-4 bg-gray-100 rounded-xl">
                      <div className="text-2xl font-bold text-gray-900 font-sans">{stat.value}</div>
                      <div className="text-sm text-gray-500 font-sans break-words">{stat.label}</div>
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