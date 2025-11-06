import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const FullContactSection = () => {
  const { language, t } = useLanguage();
  const phoneNumber = "00966543197947"; // Saudi Arabia country code +966
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber.replace('00', '')}`;

  // Google Maps embed URL for the new specific address
  const googleMapsEmbedUrl = "https://maps.google.com/maps?q=The%20Office,%20Prince%20Sultan%20Rd,%20Al%20Khalidiyyah,%20Jeddah%2023421&output=embed";

  return (
    <section className="py-24 bg-moyasar-light-bg relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t('getInTouch')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-moyasar-dark-text mb-8 break-words">
            {t('discussYourProject')}
          </h2>
          <p className="text-xl text-moyasar-gray-text max-w-3xl mx-auto leading-relaxed">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-moyasar-white rounded-3xl p-10 shadow-lg border border-moyasar-border" data-aos="fade-right" data-aos-duration="1000">
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-moyasar-dark-text mb-3">{t('firstName')}</label>
                  <input type="text" id="firstName" className="w-full px-6 py-4 border-2 border-moyasar-border rounded-xl focus:ring-2 focus:ring-moyasar-blue-primary focus:border-transparent outline-none transition-all hover:border-moyasar-blue-primary/50" placeholder={t('enterFirstName')} />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-moyasar-dark-text mb-3">{t('lastName')}</label>
                  <input type="text" id="lastName" className="w-full px-6 py-4 border-2 border-moyasar-border rounded-xl focus:ring-2 focus:ring-moyasar-blue-primary focus:border-transparent outline-none transition-all hover:border-moyasar-blue-primary/50" placeholder={t('enterLastName')} />
                </div>
              </div>

              <div>
                <label htmlFor="emailAddress" className="block text-sm font-bold text-moyasar-dark-text mb-3">{t('emailAddress')}</label>
                <input type="email" id="emailAddress" className="w-full px-6 py-4 border-2 border-moyasar-border rounded-xl focus:ring-2 focus:ring-moyasar-blue-primary focus:border-transparent outline-none transition-all hover:border-moyasar-blue-primary/50" placeholder={t('enterEmail')} />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-bold text-moyasar-dark-text mb-3">{t('phoneNumber')}</label>
                <input type="tel" id="phoneNumber" className="w-full px-6 py-4 border-2 border-moyasar-border rounded-xl focus:ring-2 focus:ring-moyasar-blue-primary focus:border-transparent outline-none transition-all hover:border-moyasar-blue-primary/50" placeholder={t('enterPhone')} defaultValue={phoneNumber} />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-bold text-moyasar-dark-text mb-3">{t('projectType')}</label>
                <select id="projectType" className="w-full px-6 py-4 border-2 border-moyasar-border rounded-xl focus:ring-2 focus:ring-moyasar-blue-primary focus:border-transparent outline-none transition-all hover:border-moyasar-blue-primary/50 bg-moyasar-white">
                  <option>{t('selectProjectType')}</option>
                  <option>{t('hospitalDevelopment')}</option>
                  <option>{t('clinicSetup')}</option>
                  <option>{t('medicalCenter')}</option>
                  <option>{t('healthcareConsulting')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-moyasar-dark-text mb-3">{t('message')}</label>
                <textarea id="message" rows={5} className="w-full px-6 py-4 border-2 border-moyasar-border rounded-xl focus:ring-2 focus:ring-moyasar-blue-primary focus:border-transparent outline-none transition-all resize-none hover:border-moyasar-blue-primary/50" placeholder={t('tellUsAboutProject')}></textarea>
              </div>

              <button type="submit" className="w-full bg-moyasar-blue-primary text-moyasar-white font-bold py-6 rounded-xl hover:bg-moyasar-blue-secondary transition-all transform hover:scale-105 text-lg shadow-lg">
                <span>{t('sendMessage')}</span>
                <i className={cn("fas fa-paper-plane", language === 'ar' ? 'mr-3' : 'ml-3')}></i>
              </button>
            </form>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000">
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-moyasar-blue-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-map-marker-alt text-moyasar-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-moyasar-dark-text mb-2 text-lg break-words">{t('location')}</h3>
                  <p className="text-moyasar-gray-text text-lg">{t('fullAddress')}</p>
                </div>
              </div>

              <div className="flex items-start gap-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-moyasar-blue-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-envelope text-moyasar-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-moyasar-dark-text mb-2 text-lg break-words">{t('email')}</h3>
                  <a href="mailto:amad@sidramed.com.sa" className="text-moyasar-blue-primary hover:text-moyasar-blue-secondary transition-colors text-lg font-semibold">amad@sidramed.com.sa</a>
                </div>
              </div>

              <div className="flex items-start gap-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-moyasar-teal-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-phone text-moyasar-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-moyasar-dark-text mb-2 text-lg break-words">{t('phoneNumber')}</h3>
                  <a href={`tel:${phoneNumber}`} className="text-moyasar-blue-primary hover:text-moyasar-blue-secondary transition-colors text-lg font-semibold">{phoneNumber}</a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-moyasar-blue-primary hover:text-moyasar-blue-secondary transition-colors text-lg font-semibold mt-1">
                    <i className="fab fa-whatsapp mr-2"></i> {t('whatsapp')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-moyasar-blue-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-clock text-moyasar-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-moyasar-dark-text mb-2 text-lg break-words">{t('businessHours')}</h3>
                  <p className="text-moyasar-gray-text text-lg">{t('businessHoursTime')}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-moyasar-white rounded-3xl shadow-lg border border-moyasar-border overflow-hidden mt-12">
              <h3 className="text-xl font-bold text-moyasar-dark-text p-6 pb-0 break-words">{t('ourLocation')}</h3>
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
            <p className="text-center text-moyasar-gray-text mt-6 text-lg">
              {t('fullAddress')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullContactSection;