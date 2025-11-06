import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SuccessStoriesSection = () => {
  const { t } = useLanguage();

  const stories = [
    {
      id: "story-1",
      title: t('diagnosticCenterLaunchTitle'),
      location: t('diagnosticCenterLaunchLocation'),
      description: t('diagnosticCenterLaunchDescription'),
      stats: [
        { label: t('diagnosticCenterLaunchStat1'), value: "12", unit: t('months'), icon: "fas fa-calendar-alt" },
        { label: t('diagnosticCenterLaunchStat2'), value: "Imaging", unit: t('tech'), icon: "fas fa-microscope" },
        { label: t('diagnosticCenterLaunchStat3'), value: "Full", unit: t('compliance'), icon: "fas fa-clipboard-check" },
      ],
      gradientFrom: "from-moyasar-blue-primary",
      gradientTo: "to-moyasar-blue-secondary",
      image: "/success-story-1.png"
    },
    {
      id: "story-2",
      title: t('clinicNetworkOptimizationTitle'),
      location: t('clinicNetworkOptimizationLocation'),
      description: t('clinicNetworkOptimizationDescription'),
      stats: [
        { label: t('clinicNetworkOptimizationStat1'), value: "30%", unit: t('efficiency'), icon: "fas fa-chart-line" },
        { label: t('clinicNetworkOptimizationStat2'), value: "EMR", unit: t('system'), icon: "fas fa-laptop-medical" },
        { label: t('clinicNetworkOptimizationStat3'), value: "High", unit: t('satisfaction'), icon: "fas fa-smile" },
      ],
      gradientFrom: "from-moyasar-blue-secondary",
      gradientTo: "to-moyasar-teal-accent",
      image: "/success-story-2.png"
    },
    {
      id: "story-3",
      title: t('internationalMarketEntryTitle'),
      location: t('internationalMarketEntryLocation'),
      description: t('internationalMarketEntryDescription'),
      stats: [
        { label: t('internationalMarketEntryStat1'), value: "Success", unit: t('entry'), icon: "fas fa-globe" },
        { label: t('internationalMarketEntryStat2'), value: "5+", unit: t('partnerships'), icon: "fas fa-handshake" },
        { label: t('internationalMarketEntryStat3'), value: "Full", unit: t('adherence'), icon: "fas fa-balance-scale" },
      ],
      gradientFrom: "from-moyasar-teal-accent",
      gradientTo: "to-moyasar-blue-primary",
      image: "/success-story-3.png"
    },
  ];

  return (
    <section id="success-stories" className="py-24 bg-moyasar-dark-text relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-moyasar-blue-primary/10 via-moyasar-blue-secondary/10 to-moyasar-teal-accent/10"></div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-moyasar-white/5 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-moyasar-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-moyasar-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-full text-sm font-bold uppercase tracking-wide mb-6 font-sans">
            {t('ourSuccessStories')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-moyasar-white mb-8 font-sans break-words">
            <span className="block">{t('projectsThatMadeImpact')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story, index) => (
            <Card
              key={story.id}
              className="group bg-moyasar-white rounded-3xl shadow-xl border border-moyasar-border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-300",
                  story.gradientFrom, story.gradientTo
                )}></div>
                <div className="absolute bottom-4 left-4 right-4 text-moyasar-white z-10">
                  <CardTitle className="text-xl font-extrabold leading-tight mb-1 text-moyasar-white break-words">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium flex items-center text-moyasar-white/90">
                    <i className="fas fa-map-marker-alt text-moyasar-white/70 mr-2"></i> {story.location}
                  </CardDescription>
                </div>
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="text-moyasar-gray-text mb-6 leading-relaxed text-base flex-grow">
                  {story.description}
                </p>
                <div className="grid grid-cols-3 gap-4 text-center border-t border-moyasar-border pt-6 mt-6">
                  {story.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="p-2 bg-moyasar-light-bg rounded-lg flex flex-col items-center justify-center">
                      <i className={cn(stat.icon, "text-moyasar-blue-primary text-xl mb-1")}></i>
                      <div className="text-md font-bold text-moyasar-dark-text">{stat.value}</div>
                      <div className="text-xs text-moyasar-gray-text">{stat.unit}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;