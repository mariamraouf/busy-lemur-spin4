import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animateProgressBars = () => {
      const progressBars = sectionRef.current?.querySelectorAll('.progress-bar');
      progressBars?.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) {
          setTimeout(() => {
            (bar as HTMLElement).style.width = width + '%';
          }, 500);
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProgressBars();
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.3 }); // Trigger when 30% of the section is visible

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraPurple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-sidraPink to-sidraOrange rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraPurple text-white rounded-full text-sm font-bold uppercase tracking-wide">
                {t('whoWeAre')}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="block">{t('aboutTitlePart1')}</span>
              <span className="block bg-gradient-to-r from-sidraPrimary via-sidraPurple to-sidraPink bg-clip-text text-transparent">{t('aboutTitlePart2')}</span>
              <span className="block">{t('aboutTitlePart3')}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('aboutDescription1')}
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t('aboutDescription2')}
            </p>

            {/* Progress Bars */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{t('projectSuccessRate')}</span>
                  <span className="font-bold text-sidraPrimary">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-sidraPrimary to-sidraTeal h-3 rounded-full progress-bar" data-width="98"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{t('clientSatisfaction')}</span>
                  <span className="font-bold text-sidraPurple">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-sidraPurple to-sidraPink h-3 rounded-full progress-bar" data-width="95"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{t('onTimeDelivery')}</span>
                  <span className="font-bold text-sidraEmerald">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-sidraEmerald to-sidraCyan h-3 rounded-full progress-bar" data-width="92"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative z-10">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" alt="Healthcare Team" className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-float z-20">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sidraEmerald to-sidraCyan rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white"></i>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t('qualityAssured')}</div>
                  <div className="text-sm text-gray-500">{t('isoCertified')}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl animate-float z-20" style={{ animationDelay: '-2s' }}>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sidraPurple to-sidraPink rounded-full flex items-center justify-center">
                  <i className="fas fa-star text-white"></i>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t('awardWinning')}</div>
                  <div className="text-sm text-gray-500">{t('excellenceInHealthcare')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;