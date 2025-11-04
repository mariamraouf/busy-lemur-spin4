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
        { label: t('diagnosticCenterLaunchStat1'), value: "12" },
        { label: t('diagnosticCenterLaunchStat2'), value: "Imaging" },
        { label: t('diagnosticCenterLaunchStat3'), value: "Compliance" },
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
        { label: t('clinicNetworkOptimizationStat1'), value: "30%" },
        { label: t('clinicNetworkOptimizationStat2'), value: "EMR" },
        { label: t('clinicNetworkOptimizationStat3'), value: "High" },
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

        <div data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {stories.map((story, index) => (
              <AccordionItem
                key={story.id}
                value={story.id}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
              >
                <AccordionTrigger className={cn(
                  "flex items-center justify-between p-8 text-left text-gray-900 font-bold text-2xl",
                  `bg-gradient-to-r ${story.gradientFrom}/10 ${story.gradientTo}/10 hover:bg-gradient-to-r hover:${story.gradientFrom}/20 hover:${story.gradientTo}/20 transition-all duration-300 rounded-t-3xl`
                )}>
                  <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-black leading-tight font-sans">
                      {story.title}
                    </h3>
                    <p className="text-lg font-medium flex items-center text-gray-600 mt-2 font-sans">
                      <i className="fas fa-map-marker-alt text-sidraTeal mr-2"></i> {story.location}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-8 pt-0 bg-white rounded-b-3xl">
                  <p className="text-gray-700 mb-6 leading-relaxed text-base font-sans">
                    {story.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center border-t border-gray-100 pt-6 mt-6">
                    {story.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="p-4 bg-gray-50 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900 font-sans">{stat.value}</div>
                        <div className="text-sm text-gray-500 font-sans">{stat.label}</div>
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