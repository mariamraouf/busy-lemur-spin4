import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { cn } from '@/lib/utils';

const OurServicesPage = () => {
  const { language, t } = useLanguage();

  const serviceCategories = [
    {
      icon: "fas fa-project-diagram",
      title: t('serviceCategory1Title'),
      items: [
        t('serviceCategory1Item1'),
        t('serviceCategory1Item2'),
        t('serviceCategory1Item3'),
      ],
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
    },
    {
      icon: "fas fa-file-contract",
      title: t('serviceCategory2Title'),
      items: [
        t('serviceCategory2Item1'),
        t('serviceCategory2Item2'),
      ],
      gradientFrom: "from-sidraPurple",
      gradientTo: "to-sidraPink",
    },
    {
      icon: "fas fa-hospital-alt",
      title: t('serviceCategory3Title'),
      items: [
        t('serviceCategory3Item1'),
        t('serviceCategory3Item2'),
      ],
      gradientFrom: "from-sidraEmerald",
      gradientTo: "to-sidraCyan",
    },
    {
      icon: "fas fa-chart-pie",
      title: t('serviceCategory4Title'),
      items: [
        t('serviceCategory4Item1'),
        t('serviceCategory4Item2'),
      ],
      gradientFrom: "from-sidraOrange",
      gradientTo: "to-red-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('services')} - Sidra Med</title>
        <meta name="description" content={t('servicesSummarySubtitle')} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-br from-gray-900 via-sidraPurple to-sidraIndigo relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-sidraPrimary/10 via-sidraPurple/10 to-sidraPink/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraPurple text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('whatWeDo')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8">
              {t('ourServicesPageTitle')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('servicesSummarySubtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className={cn(
                  "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300",
                  `bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo}`
                )}>
                  <i className={cn(category.icon, "text-white text-3xl")}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default OurServicesPage;