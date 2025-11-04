import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { cn } from '@/lib/utils';

const ContactPage = () => {
  const { language, t } = useLanguage();

  // Google Maps embed URL for Jeddah, KSA. You can customize the coordinates and zoom.
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.00000000002!2d39.0872629!3d21.5433331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b1185!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus";

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('contact')} - Sidra Med</title>
        <meta name="description" content={t('contactDescription')} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-sidraLight relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-sidraAccent to-sidraTeal rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> {/* Added py-16 here */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('getInTouch')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              {t('discussYourProject')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('contactDescription')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100" data-aos="fade-right" data-aos-duration="1000">
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

                <button type="submit" className="w-full bg-gradient-to-r from-sidraPrimary via-sidraSecondary to-sidraAccent text-white font-bold py-6 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 text-lg">
                  <span>{t('sendMessage')}</span>
                  <i className={cn("fas fa-paper-plane", language === 'ar' ? 'mr-3' : 'ml-3')}></i> {/* Adjusted for RTL */}
                </button>
              </form>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000">
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-x-6 group">
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

                <div className="flex items-start gap-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-sidraSecondary to-sidraAccent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-envelope text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{t('email')}</h3>
                    <a href="mailto:amad@sidramed.com.sa" className="text-sidraPrimary hover:text-sidraSecondary transition-colors text-lg font-semibold">amad@sidramed.com.sa</a>
                  </div>
                </div>

                <div className="flex items-start gap-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-sidraTeal to-sidraPrimary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-clock text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{t('businessHours')}</h3>
                    <p className="text-gray-600 text-lg">{t('businessHoursTime')}</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mt-12">
                <h3 className="text-xl font-bold text-gray-900 p-6 pb-0">{t('ourLocation')}</h3> {/* Added title for map */}
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jeddah, Saudi Arabia Location"
                ></iframe>
              </div>
              <p className="text-center text-gray-600 mt-6 text-lg">
                {t('jeddahKSA')}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ContactPage;