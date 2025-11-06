import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Updated image to reflect healthcare infrastructure/management */}
        <img src="https://images.unsplash.com/photo-1542330952-acd47c62707a?w=1920&h=1080&fit=crop" alt="Modern Building Architecture" className="w-full h-full object-cover" />
        {/* Adjusted gradient overlay with new colors and slightly reduced opacity for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-sidraPrimary/80 via-sidraSecondary/70 to-sidraAccent/80"></div>
      </div>

      {/* Floating Elements - REMOVED */}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-4xl" data-aos="fade-up" data-aos-duration="1000">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold animate-pulse-slow">
              {t('transformingHealthcare')}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight break-words">
            <span className="block">{t('heroTitlePart1')}</span>
            {/* Adjusted gradient for better visibility */}
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">{t('heroTitlePart2')}</span>
            <span className="block">{t('heroTitlePart3')}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed font-light">
            {t('heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6" data-aos="fade-up" data-aos-delay="200">
            <a href="#services" className="group inline-flex items-center justify-center px-10 py-5 bg-white text-sidraPrimary font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl">
              <span>{t('exploreOurServices')}</span>
              <i className={cn("fas fa-rocket", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i> {/* Adjusted for RTL */}
            </a>
            <a href="#contact" className={cn(
              "group inline-flex items-center justify-center px-10 py-5 bg-transparent border-3 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-sidraPrimary transition-all transform hover:scale-105",
              "bg-white/10 backdrop-blur-sm border border-white/20" // glass-effect
            )}>
              <span>{t('partnerWithUs')}</span>
              <i className={cn("fas fa-handshake", language === 'ar' ? 'mr-3 group-hover:-rotate-12' : 'ml-3 group-hover:rotate-12', "transition-transform")}></i> {/* Adjusted for RTL */}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl opacity-70"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;