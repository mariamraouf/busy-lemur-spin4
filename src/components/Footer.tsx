import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils'; // Import cn for conditional classes

const Footer = () => {
  const { language, t } = useLanguage();
  const phoneNumber = "00966543197947"; // Saudi Arabia country code +966
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber.replace('00', '')}`;

  return (
    <footer className="bg-moyasar-dark-text text-moyasar-white py-16 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-x-4 mb-6">
              <img 
                src="/sidra-med-logo.png" 
                alt="Sidra Med Logo" 
                className="w-28 h-28 object-contain" 
              />
            </div>
            <p className="text-moyasar-gray-text mb-8 leading-relaxed text-base">
              {t('empoweringHealthcare')}
            </p>            
            <div className="flex gap-x-4 mb-6">
              <a href={`tel:${phoneNumber}`} className="w-10 h-10 bg-moyasar-blue-primary/20 rounded-full flex items-center justify-center hover:bg-moyasar-blue-primary transition-colors transform hover:scale-110" aria-label="Call us">
                <i className="fas fa-phone text-moyasar-white text-lg"></i>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-moyasar-blue-primary/20 rounded-full flex items-center justify-center hover:bg-moyasar-blue-primary transition-colors transform hover:scale-110" aria-label="WhatsApp us">
                <i className="fab fa-whatsapp text-moyasar-white text-lg"></i>
              </a>
              <a href="https://www.instagram.com/sidramed.ksa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-moyasar-blue-primary/20 rounded-full flex items-center justify-center hover:bg-moyasar-blue-primary transition-colors transform hover:scale-110" aria-label="Instagram">
                <i className="fab fa-instagram text-moyasar-white text-lg"></i>
              </a>
              <a href="https://www.linkedin.com/company/sidra-med/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-moyasar-blue-primary/20 rounded-full flex items-center justify-center hover:bg-moyasar-blue-primary transition-colors transform hover:scale-110" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-moyasar-white text-lg"></i>
              </a>
            </div>
            <p className="text-moyasar-gray-text text-sm">
              <i className="fas fa-map-marker-alt mr-2"></i> {t('fullAddress')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-moyasar-white">{t('quickLinks')}</h4>
            <ul className="space-y-4">
              <li><Link to="/" className={cn("text-moyasar-gray-text hover:text-moyasar-blue-primary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('home')}</Link></li>
              <li><Link to="/about-us" className={cn("text-moyasar-gray-text hover:text-moyasar-blue-primary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('aboutUs')}</Link></li>
              <li><Link to="/services" className={cn("text-moyasar-gray-text hover:text-moyasar-blue-primary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('ourServicesFooter')}</Link></li>
              <li><Link to="/contact" className={cn("text-moyasar-gray-text hover:text-moyasar-blue-primary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-moyasar-white">{t('services')}</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className={cn("text-moyasar-gray-text hover:text-moyasar-blue-primary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('service1Title')}</Link></li>
              <li><Link to="/services" className={cn("text-moyasar-gray-text hover:text-moyasar-blue-primary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('service2Title')}</Link></li>
              <li><Link to="/services" className={cn("text-moyasar-gray-text hover:text-moyasar-blue-primary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('marketIntegration')}</Link></li>
              <li><Link to="/services" className={cn("text-moyasar-gray-text hover:text-moyasar-blue-primary transition-colors transform inline-block", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('service4Title')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-moyasar-gray-text/30 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-moyasar-gray-text text-sm mb-4 sm:mb-0">
            {t('allRightsReserved')}
          </p>
          <div className="flex items-center gap-x-6 text-sm text-moyasar-gray-text">
            <Link to="/privacy-policy" className="hover:text-moyasar-blue-primary transition-colors">{t('privacyPolicy')}</Link>
            <Link to="/terms-of-service" className="hover:text-moyasar-blue-primary transition-colors">{t('termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;