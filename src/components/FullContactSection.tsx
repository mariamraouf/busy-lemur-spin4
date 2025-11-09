import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

interface FullContactSectionProps {
  headingLevel?: 'h1' | 'h2'; // New prop for dynamic heading level
}

const FullContactSection: React.FC<FullContactSectionProps> = ({ headingLevel: Heading = 'h2' }) => {
  const { language, t } = useLanguage();
  const phoneNumber = "00966543197947"; // Saudi Arabia country code +966
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber.replace('00', '')}`;

  // Google Maps embed URL for the new specific address
  const googleMapsEmbedUrl = "https://maps.google.com/maps?q=The%20Office,%20Prince%20Sultan%20Rd,%20Al%20Khalidiyyah,%20Jeddah%2023421&output=embed";

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-sidraLight relative overflow-hidden">
      {/* Animated background elements - REMOVED */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t('getInTouch')}
          </span>
          <Heading className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-8 break-words">
            {t('discussYourProject')}
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100" data-aos="fade-right" data-aos-duration="1000">
            {/* ClickUp Embed Form */}
            <iframe className="clickup-embed clickup-dynamic-height" src="https://forms.clickup.com/9012970926/f/8cke1de-24512/0FCNT5K2FLD76629CJ" onWheel={() => {}} width="100%" height="100%" style={{ background: 'transparent', border: '1px solid #ccc' }}></iframe>
            <script async src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"></script>
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
                  <h3 className="font-bold text-gray-900 mb-2 text-lg sm:text-xl break-words">{t('location')}</h3>
                  <p className="text-gray-600 text-lg">{t('fullAddress')}</p>
                </div>
              </div>

              <div className="flex items-start gap-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-sidraSecondary to-sidraAccent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg sm:text-xl break-words">{t('email')}</h3>
                  <a href="mailto:amad@sidramed.com.sa" className="text-sidraPrimary hover:text-sidraSecondary transition-colors text-lg font-semibold">amad@sidramed.com.sa</a>
                </div>
              </div>

              <div className="flex items-start gap-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-sidraTeal to-sidraPrimary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-phone text-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg sm:text-xl break-words">{t('phoneNumber')}</h3>
                  <a href={`tel:${phoneNumber}`} className="text-sidraPrimary hover:text-sidraSecondary transition-colors text-lg font-semibold">{phoneNumber}</a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sidraPrimary hover:text-sidraSecondary transition-colors text-lg font-semibold mt-1">
                    <i className="fab fa-whatsapp mr-2"></i> {t('whatsapp')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-sidraAccent to-sidraSecondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-clock text-white text-xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg sm:text-xl break-words">{t('businessHours')}</h3>
                  <p className="text-gray-600 text-lg">{t('businessHoursTime')}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mt-12">
              <h3 className="text-xl font-bold text-gray-900 p-6 pb-0 break-words">{t('ourLocation')}</h3>
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
              {t('fullAddress')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullContactSection;