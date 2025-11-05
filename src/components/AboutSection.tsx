import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const { t, language } = useLanguage(); // Destructure language

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-sidraAccent to-sidraTeal rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide">
                {t('whoWeAre')}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight break-words">
              {t('aboutSummaryTitle')}
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t('aboutSummaryDescription')}
            </p>
            <Link to="/about-us" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white font-bold rounded-xl hover:shadow-lg transition-all transform hover:scale-105 text-lg">
              <span>{t('learnMoreAboutUs')}</span>
              <i className={cn("fas fa-arrow-right", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i> {/* Adjusted for RTL */}
            </Link>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative z-10">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" alt="Healthcare Team" className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-float z-20">
              <div className="flex items-center gap-x-3"> {/* Changed space-x-3 to gap-x-3 */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sidraTeal to-sidraPrimary rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 break-words">{t('qualityAssured')}</h3>
                  <p className="text-sm text-gray-500">{t('isoCertified')}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl animate-float z-20" style={{ animationDelay: '-2s' }}>
              <div className="flex items-center gap-x-3"> {/* Changed space-x-3 to gap-x-3 */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sidraSecondary to-sidraAccent rounded-full flex items-center justify-center">
                  <i className="fas fa-star text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 break-words">{t('awardWinning')}</h3>
                  <p className="text-sm text-gray-500">{t('excellenceInHealthcare')}</p>
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