import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const CtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-sidraPrimary via-sidraPurple to-sidraPink relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8">
            <span className="block">{t('readyToBuildFuture')}</span>
            <span className="block bg-gradient-to-r from-sidraCyan via-sidraEmerald to-sidraTeal bg-clip-text text-transparent">{t('heroTitlePart2')}</span>
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
            {t('letsWorkTogether')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="200">
            <a href="#contact" className="group inline-flex items-center justify-center px-12 py-6 bg-white text-sidraPrimary font-bold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl text-lg">
              <span>{t('contact')}</span>
              <i className="fas fa-paper-plane ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </a>
            <a href="#contact" className={cn(
              "group inline-flex items-center justify-center px-12 py-6 bg-transparent border-3 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-sidraPrimary transition-all transform hover:scale-105 text-lg",
              "bg-white/10 backdrop-blur-sm border border-white/20" // glass-effect
            )}>
              <span>{t('getAConsultation')}</span>
              <i className="fas fa-calendar-alt ml-3 group-hover:rotate-12 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;