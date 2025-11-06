import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const { t, language } = useLanguage(); // Destructure language

  return (
    <section id="about" className="py-24 bg-moyasar-light-bg relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-full text-sm font-bold uppercase tracking-wide">
                {t('whoWeAre')}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-moyasar-dark-text mb-8 leading-tight break-words">
              {t('aboutSummaryTitle')}
            </h2>
            <p className="text-xl text-moyasar-gray-text mb-10 leading-relaxed">
              {t('aboutSummaryDescription')}
            </p>
            <Link to="/about-us" className="group inline-flex items-center justify-center px-8 py-4 bg-moyasar-blue-primary text-moyasar-white font-bold rounded-xl hover:bg-moyasar-blue-secondary transition-all transform hover:scale-105 text-lg shadow-lg">
              <span>{t('learnMoreAboutUs')}</span>
              <i className={cn("fas fa-arrow-right", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i>
            </Link>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative z-10">
              <img src="https://images.unsplash.com/photo-1587854692137-8cd983d87392?w=800&h=600&fit=crop" alt="Strategic Healthcare Facility Management" className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;