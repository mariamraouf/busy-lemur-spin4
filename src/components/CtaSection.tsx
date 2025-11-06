import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const CtaSection = () => {
  const { t, language } = useLanguage();
  const phoneNumber = "00966543197947"; // Saudi Arabia country code +966

  return (
    <section className="py-24 bg-moyasar-blue-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-moyasar-blue-primary/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-moyasar-white mb-8 break-words">
            <span className="block">{t('readyToBuildFuture')}</span>
            <span className="block text-moyasar-teal-accent">{t('heroTitlePart2')}</span>
          </h2>
          <p className="text-2xl text-moyasar-white/90 mb-12 max-w-3xl mx-auto font-light">
            {t('letsWorkTogether')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="200">
            <a href={`tel:${phoneNumber}`} className="group inline-flex items-center justify-center px-12 py-6 bg-moyasar-white text-moyasar-blue-primary font-bold rounded-2xl hover:bg-moyasar-light-bg transition-all transform hover:scale-105 shadow-2xl text-lg">
              <span>{t('callUs')}</span>
              <i className={cn("fas fa-phone", language === 'ar' ? 'mr-3 group-hover:-translate-x-1 group-hover:-translate-y-1' : 'ml-3 group-hover:translate-x-1 group-hover:-translate-y-1', "transition-transform")}></i>
            </a>
            <a href="#contact" className={cn(
              "group inline-flex items-center justify-center px-12 py-6 bg-transparent border-2 border-moyasar-white text-moyasar-white font-bold rounded-2xl hover:bg-moyasar-white hover:text-moyasar-blue-primary transition-all transform hover:scale-105 text-lg"
            )}>
              <span>{t('getAConsultation')}</span>
              <i className={cn("fas fa-calendar-alt", language === 'ar' ? 'mr-3' : 'ml-3', "group-hover:rotate-12 transition-transform")}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;