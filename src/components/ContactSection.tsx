import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-sidraLight relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraPurple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-sidraPink to-sidraOrange rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div data-aos="fade-right" data-aos-duration="1000">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraPurple text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('getInTouch')}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8">
              {t('discussYourProject')}
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t('contactDescription')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-sidraPrimary to-sidraTeal rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{t('location')}</h3>
                  <p className="text-gray-600 text-lg">{t('jeddahKSA')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-sidraPurple to-sidraPink rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{t('email')}</h3>
                  <a href="mailto:amad@sidramed.com.sa" className="text-sidraPrimary hover:text-sidraPurple transition-colors text-lg font-semibold">amad@sidramed.com.sa</a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-sidraEmerald to-sidraCyan rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-clock text-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{t('businessHours')}</h3>
                  <p className="text-gray-600 text-lg">{t('businessHoursTime')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100" data-aos="fade-left" data-aos-duration="1000">
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">{t('firstName')}</label>
                  <input type="text" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sidraPrimary focus:border-transparent outline-none transition-all hover:border-gray-300" placeholder={t('enterFirstName')} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">{t('lastName')}</label>
                  <input type="text" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sidraPrimary focus:border-transparent outline-none transition-all hover:border-gray-300" placeholder={t('enterLastName')} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">{t('emailAddress')}</label>
                <input type="email" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sidraPrimary focus:border-transparent outline-none transition-all hover:border-gray-300" placeholder={t('enterEmail')} />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">{t('phoneNumber')}</label>
                <input type="tel" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sidraPrimary focus:border-transparent outline-none transition-all hover:border-gray-300" placeholder={t('enterPhone')} />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">{t('projectType')}</label>
                <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sidraPrimary focus:border-transparent outline-none transition-all hover:border-gray-300">
                  <option>{t('selectProjectType')}</option>
                  <option>{t('hospitalDevelopment')}</option>
                  <option>{t('clinicSetup')}</option>
                  <option>{t('medicalCenter')}</option>
                  <option>{t('healthcareConsulting')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">{t('message')}</label>
                <textarea rows={5} className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sidraPrimary focus:border-transparent outline-none transition-all resize-none hover:border-gray-300" placeholder={t('tellUsAboutProject')}></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-sidraPrimary via-sidraPurple to-sidraPink text-white font-bold py-6 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 text-lg">
                <span>{t('sendMessage')}</span>
                <i className="fas fa-paper-plane ml-3"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;