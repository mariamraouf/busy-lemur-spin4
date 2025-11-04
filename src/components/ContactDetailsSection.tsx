import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const ContactDetailsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-sidraLight relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-sidraAccent to-sidraTeal rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t('getInTouch')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            {t('discussYourProject')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 group" data-aos="fade-up" data-aos-delay="100">
            <div className="flex-shrink-0 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sidraPrimary to-sidraTeal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">{t('location')}</h3>
              <p className="text-gray-600 text-lg">{t('jeddahKSA')}</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 group" data-aos="fade-up" data-aos-delay="200">
            <div className="flex-shrink-0 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sidraSecondary to-sidraAccent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">{t('email')}</h3>
              <a href="mailto:amad@sidramed.com.sa" className="text-sidraPrimary hover:text-sidraSecondary transition-colors text-lg font-semibold">amad@sidramed.com.sa</a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 group" data-aos="fade-up" data-aos-delay="300">
            <div className="flex-shrink-0 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sidraTeal to-sidraPrimary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-xl">{t('businessHours')}</h3>
              <p className="text-gray-600 text-lg">{t('businessHoursTime')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;