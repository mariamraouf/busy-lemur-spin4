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
      {/* Animated background elements - REMOVED */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-x-4 mb-6">
              <img 
                src="/sidra-med-logo.png" 
                alt="Sidra Med Logo" 
                className="w-24 h-24 object-contain sm:w-32 sm:h-32" // Smaller on mobile, larger on sm and up
                style={{ filter: 'brightness(0) invert(1)' }} // Apply filter to make it white
              />
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-base sm:text-lg"> {/* Adjusted text size for mobile */}
              {t('empoweringHealthcare')}
            </p>            
            <div className="flex gap-x-4 mb-6">
              <a href={`tel:${phoneNumber}`} className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sidraPrimary transition-all transform hover:scale-110" aria-label="Call us"> {/* Smaller on mobile, larger on sm and up */}
                <i className="fas fa-phone text-lg sm:text-xl"></i> {/* Adjusted icon size for mobile */}
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sidraPrimary transition-all transform hover:scale-110" aria-label="WhatsApp us"> {/* Smaller on mobile, larger on sm and up */}
                <i className="fab fa-whatsapp text-lg sm:text-xl"></i> {/* Adjusted icon size for mobile */}
              </a>
              <a href="https://www.instagram.com/sidramed.ksa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sidraPrimary transition-all transform hover:scale-110" aria-label="Instagram"> {/* Smaller on mobile, larger on sm and up */}
                <i className="fab fa-instagram text-lg sm:text-xl"></i> {/* Adjusted icon size for mobile */}
              </a>
              <a href="https://www.linkedin.com/company/sidra-med/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sidraPrimary transition-all transform hover:scale-110" aria-label="LinkedIn"> {/* Smaller on mobile, larger on sm and up */}
                <i className="fab fa-linkedin-in text-lg sm:text-xl"></i> {/* Adjusted icon size for mobile */}
              </a>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm"> {/* Adjusted text size for mobile */}
              <i className="fas fa-map-marker-alt mr-2"></i> {t('fullAddress')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-xl font-bold mb-6 text-white">{t('quickLinks')}</h4> {/* Adjusted text size for mobile */}
            <ul className="space-y-4">
              <li><Link to="/" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('home')}</Link></li> {/* Adjusted text size for mobile */}
              <li><Link to="/about-us" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('aboutUs')}</Link></li> {/* Adjusted text size for mobile */}
              <li><Link to="/services" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('ourServicesFooter')}</Link></li> {/* Adjusted text size for mobile */}
              <li><Link to="/partners" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('partners')}</Link></li> {/* Adjusted text size for mobile */}
              <li><Link to="/careers" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('careers')}</Link></li> {/* New Careers link */}
              <li><Link to="/contact" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('contact')}</Link></li> {/* Adjusted text size for mobile */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-xl font-bold mb-6 text-white">{t('services')}</h4> {/* Adjusted text size for mobile */}
            <ul className="space-y-4">
              <li><Link to="/services#project-management" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('projectTechnicalSupportTitle')}</Link></li> {/* Adjusted text size for mobile */}
              <li><Link to="/services#operational-support" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('operationalSupportTitle')}</Link></li> {/* Adjusted text size for mobile */}
              <li><Link to="/services#licensing-regulatory" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('licensingCommissioningTitle')}</Link></li> {/* Adjusted text size for mobile */}
              <li><Link to="/services#medical-planning" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('coordArchitecturalTitle')}</Link></li> {/* Adjusted text size for mobile */}
              <li><Link to="/services#strategic-advisory" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('strategicPlanningTitle')}</Link></li> {/* Adjusted text size for mobile */}
              <li><Link to="/services#consortium-delivery" className={cn("text-gray-300 hover:text-sidraPrimary transition-colors transform inline-block text-sm sm:text-base", language === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2')}>{t('consortiumDrivenTitle')}</Link></li> {/* Adjusted text size for mobile */}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-0"> {/* Adjusted text size for mobile */}
            {t('allRightsReserved')}
          </p>
          <div className="flex items-center gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-gray-400"> {/* Adjusted gap and text size for mobile */}
            <Link to="/privacy-policy" className="hover:text-sidraPrimary transition-colors">{t('privacyPolicy')}</Link>
            <Link to="/terms-of-service" className="hover:text-sidraPrimary transition-colors">{t('termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;