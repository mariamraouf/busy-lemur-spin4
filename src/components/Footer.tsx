import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils'; // Import cn for conditional classes

const Footer = () => {
  const { language, t } = useLanguage();
  const phoneNumber = "00966543197947"; // Saudi Arabia country code +966
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber.replace('00', '')}`;

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-sidraPrimary to-sidraSecondary text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-sidraAccent to-sidraTeal rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-x-4 mb-6">
              <img src="/sidra-med-logo.png" alt="Sidra Med Logo" className="w-24 h-24 object-contain filter invert" /> {/* Added filter invert here */}
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              {t('empoweringHealthcare')}
            </p>            
            <div className="flex gap-x-4 mb-6"> {/* Added margin-bottom for spacing */}
              <a href={`tel:${phoneNumber}`} className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sidraPrimary transition-all transform hover:scale-110" aria-label="Call us">
                <i className="fas fa-phone text-xl"></i>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sidraPrimary transition-all transform hover:scale-110" aria-label="WhatsApp us">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a href="https://www.instagram.com/sidramed.ksa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sidraPrimary transition-all transform hover:scale-110" aria-label="Instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/sidra-med/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sidraPrimary transition-all transform hover:scale-110" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              <i className="fas fa-map-marker-alt mr-2"></i> {t('fullAddress')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t('quickLinks')}</h4>
            <ul className="space-y-4">
              <li><Link to="/" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('home')}</Link></li>
              <li><Link to="/about-us" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('aboutUs')}</Link></li>
              <li><Link to="/services" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('ourServicesFooter')}</Link></li>
              <li><Link to="/contact" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t('services')}</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('service1Title')}</Link></li>
              <li><Link to="/services" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('service2Title')}</Link></li>
              <li><Link to="/services" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('marketIntegration')}</Link></li>
              <li><Link to="/services" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('service4Title')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            {t('allRightsReserved')}
          </p>
          <div className="flex items-center gap-x-6 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-sidraPrimary transition-colors">{t('privacyPolicy')}</Link>
            <Link to="/terms-of-service" className="hover:text-sidraPrimary transition-colors">{t('termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;