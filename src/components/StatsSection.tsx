import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animateCounters = () => {
      const counters = sectionRef.current?.querySelectorAll('.counter');
      counters?.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current).toString();
            setTimeout(updateCounter, 20);
          } else {
            counter.textContent = target.toString();
          }
        };
        updateCounter();
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

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
    <section id="stats" ref={sectionRef} className="py-20 bg-gradient-to-r from-gray-900 via-sidraPurple to-sidraIndigo relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="w-20 h-20 bg-gradient-to-br from-sidraEmerald to-sidraCyan rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
              <i className="fas fa-hospital text-white text-2xl"></i>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-white mb-2 counter" data-target="50">0</div>
            <div className="text-gray-300 font-semibold">{t('projectsCompleted')}</div>
          </div>
          <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="w-20 h-20 bg-gradient-to-br from-sidraPurple to-sidraPink rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
              <i className="fas fa-users text-white text-2xl"></i>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-white mb-2 counter" data-target="100">0</div>
            <div className="text-gray-300 font-semibold">{t('happyClients')}</div>
          </div>
          <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
            <div className="w-20 h-20 bg-gradient-to-br from-sidraOrange to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
              <i className="fas fa-award text-white text-2xl"></i>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-white mb-2 counter" data-target="15">0</div>
            <div className="text-gray-300 font-semibold">{t('yearsExperience')}</div>
          </div>
          <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
            <div className="w-20 h-20 bg-gradient-to-br from-sidraTeal to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
              <i className="fas fa-globe text-white text-2xl"></i>
            </div>
            <div className="text-4xl lg:text-5xl font-black text-white mb-2 counter" data-target="25">0</div>
            <div className="text-gray-300 font-semibold">{t('citiesCovered')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;