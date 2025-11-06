import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const { t, language } = useLanguage(); // Destructure language

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-[-100px]"> {/* Grid break: shifted left */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white text-sm font-bold uppercase tracking-wide">
                {t('whoWeAre')}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight break-words">
              {t('aboutSummaryTitle')}
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t('aboutSummaryDescription')}
            </p>
            <Link to="/about-us" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white font-bold hover:shadow-lg transition-all transform hover:scale-104 text-lg">
              <span>{t('learnMoreAboutUs')}</span>
              <i className={cn("fas fa-arrow-right", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i> {/* Adjusted for RTL */}
            </Link>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative z-10">
              <img src="https://images.unsplash.com/photo-1587854692137-8cd983d87392?w=800&h=600&fit=crop" alt="Strategic Healthcare Facility Management" className="shadow-2xl transform hover:scale-104 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;