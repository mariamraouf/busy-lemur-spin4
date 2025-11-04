import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TranslationKey } from '@/lib/translations';

interface ContactMapSectionProps {
  titleKey?: TranslationKey;
  descriptionKey?: TranslationKey;
  hideTitle?: boolean;
  hideDescription?: boolean;
}

const ContactMapSection: React.FC<ContactMapSectionProps> = ({
  titleKey = 'getInTouch',
  descriptionKey = 'contactDescription',
  hideTitle = false,
  hideDescription = false,
}) => {
  const { language, t } = useLanguage();

  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.00000000002!2d39.0872629!3d21.5433331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b1185!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus";

  return (
    <section className="py-24 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-sidraAccent to-sidraTeal rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideTitle && (
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t(titleKey)}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              {t('discussYourProject')}
            </h2>
            {!hideDescription && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t(descriptionKey)}
              </p>
            )}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8" data-aos="fade-right" data-aos-duration="1000">
            <Card className="p-8 rounded-3xl shadow-xl border border-gray-100">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">{t('location')}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex items-start gap-x-6 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-sidraPrimary to-sidraTeal rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg">{t('jeddahKSA')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-x-6 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-sidraSecondary to-sidraAccent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-envelope text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg">{t('email')}</p>
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
                    <p className="text-gray-600 text-lg">{t('businessHours')}</p>
                    <p className="text-gray-600 text-lg">{t('businessHoursTime')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000">
            <Card className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <CardHeader className="p-6 pb-0">
                <CardTitle className="text-xl font-bold text-gray-900">{t('ourLocation')}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jeddah, Saudi Arabia Location"
                  className="rounded-b-3xl"
                ></iframe>
              </CardContent>
            </Card>
            <p className="text-center text-gray-600 mt-6 text-lg">
              {t('jeddahKSA')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;