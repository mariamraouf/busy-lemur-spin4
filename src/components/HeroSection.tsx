import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-moyasar-light-bg">
      <div className="absolute inset-0 z-0">
        {/* Subtle background pattern or gradient inspired by Moyasar */}
        <div className="absolute inset-0 bg-gradient-to-br from-moyasar-blue-primary/10 via-moyasar-blue-secondary/5 to-moyasar-light-bg"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
        <div className="max-w-4xl" data-aos="fade-up" data-aos-duration="1000">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-moyasar-blue-primary/10 text-moyasar-blue-primary rounded-full text-sm font-semibold animate-pulse-slow">
              {t('transformingHealthcare')}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-moyasar-dark-text mb-8 leading-tight break-words">
            <span className="block">{t('heroTitlePart1')}</span>
            <span className="block text-moyasar-blue-primary">{t('heroTitlePart2')}</span>
            <span className="block">{t('heroTitlePart3')}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-moyasar-gray-text mb-10 leading-relaxed font-light">
            {t('heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="200">
            <a href="#services" className="group inline-flex items-center justify-center px-10 py-5 bg-moyasar-blue-primary text-moyasar-white font-bold rounded-xl hover:bg-moyasar-blue-secondary transition-all transform hover:scale-105 shadow-lg">
              <span>{t('exploreOurServices')}</span>
              <i className={cn("fas fa-rocket", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i>
            </a>
            <a href="#contact" className={cn(
              "group inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-moyasar-blue-primary text-moyasar-blue-primary font-bold rounded-xl hover:bg-moyasar-blue-primary hover:text-moyasar-white transition-all transform hover:scale-105"
            )}>
              <span>{t('partnerWithUs')}</span>
              <i className={cn("fas fa-handshake", language === 'ar' ? 'mr-3 group-hover:-rotate-12' : 'ml-3 group-hover:rotate-12', "transition-transform")}></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <i className="fas fa-chevron-down text-moyasar-blue-primary text-2xl opacity-70"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;