import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Import shadcn/ui Accordion components

const SuccessStoriesSection = () => {
  const { t } = useLanguage();

  const stories = [
    {
      id: "story-1",
      title: t('diagnosticCenterLaunchTitle'),
      location: t('diagnosticCenterLaunchLocation'),
      description: t('diagnosticCenterLaunchDescription'),
      stats: [
        { label: t('diagnosticCenterLaunchStat1'), value: "12", icon: "fas fa-calendar-alt" },
        { label: t('diagnosticCenterLaunchStat2'), value: "Imaging", icon: "fas fa-microscope" },
        { label: t('diagnosticCenterLaunchStat3'), value: "Compliance", icon: "fas fa-clipboard-check" },
      ],
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
    },
    {
      id: "story-2",
      title: t('clinicNetworkOptimizationTitle'),
      location: t('clinicNetworkOptimizationLocation'),
      description: t('clinicNetworkOptimizationDescription'),
      stats: [
        { label: t('clinicNetworkOptimizationStat1'), value: "30%", icon: "fas fa-chart-line" },
        { label: t('clinicNetworkOptimizationStat2'), value: "EMR", icon: "fas fa-notes-medical" },
        { label: t('clinicNetworkOptimizationStat3'), value: "High", icon: "fas fa-smile" },
      ],
      gradientFrom: "from-sidraSecondary",
      gradientTo: "to-sidraAccent",
    },
    {
      id: "story-3",
      title: t('internationalMarketEntryTitle'),
      location: t('internationalMarketEntryLocation'),
      description: t('internationalMarketEntryDescription'),
      stats: [
        { label: t('internationalMarketEntryStat1'), value: "Success", icon: "fas fa-globe" },
        { label: t('internationalMarketEntryStat2'), value: "5+", icon: "fas fa-handshake" },
        { label: t('internationalMarketEntryStat3'), value: "Full", icon: "fas fa-balance-scale" },
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

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
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

        <div data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {stories.map((story, index) => (
              <AccordionItem
                key={story.id}
                value={story.id}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
              >
                <AccordionTrigger className={cn(
                  "flex items-center justify-between p-8 text-left text-white font-bold text-2xl",
                  `bg-gradient-to-r ${story.gradientFrom} ${story.gradientTo} transition-all duration-300 rounded-t-3xl`,
                  "data-[state=open]:rounded-b-none" // Remove bottom border radius when open
                )}>
                  <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-black leading-tight font-sans">
                      {story.title}
                    </h3>
                    <p className="text-lg font-medium flex items-center text-white/90 mt-2 font-sans">
                      <i className="fas fa-map-marker-alt text-white/70 mr-2"></i> {story.location}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-8 pt-0 bg-white rounded-b-3xl">
                  <p className="text-gray-800 mb-6 leading-relaxed text-base font-sans">
                    {story.description}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 text-center border-t border-gray-100 pt-6 mt-6">
                    {story.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="p-4 bg-sidraLight rounded-xl flex flex-col items-center justify-center">
                        <i className={cn(stat.icon, "text-sidraPrimary text-2xl mb-2")}></i>
                        <div className="text-xl font-bold text-gray-900 font-sans">{stat.value}</div>
                        <div className="text-sm text-gray-600 font-sans">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;