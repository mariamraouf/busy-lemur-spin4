import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const phoneNumber = "00966543197947"; // Saudi Arabia country code +966
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber.replace('00', '')}`;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t('home'), path: '/' },
    { id: 'aboutUs', label: t('aboutUs'), path: '/about-us' },
    { id: 'services', label: t('services'), path: '/services' },
    { id: 'partners', label: t('partners'), path: '/partners' },
    { id: 'contact', label: t('contact'), path: '/contact' },
  ];

  return (
    <nav className={cn(
      "bg-white/90 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 transition-all duration-300",
      isScrolled ? "py-2" : "py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center gap-x-3">
              <img src="/sidra-med-logo.png" alt="Sidra Med Logo" className="w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="relative text-gray-700 hover:text-sidraPrimary transition-all duration-300 font-semibold group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sidraPrimary to-sidraSecondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-x-2 px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <i className="fas fa-globe animate-spin-slow"></i>
              <span className="font-semibold">{language === 'en' ? t('arabic') : t('english')}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-700 focus:outline-none transform hover:scale-110 transition-transform"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={cn(
          "lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200",
          isMobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-sidraPrimary transition-colors font-semibold py-3 border-b border-gray-100"
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile Social Media and Contact */}
          <div className="flex justify-center gap-x-6 py-4 border-b border-gray-100">
            <a href={`tel:${phoneNumber}`} className="text-gray-700 hover:text-sidraPrimary transition-colors" aria-label="Call us">
              <i className="fas fa-phone text-2xl"></i>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sidraPrimary transition-colors" aria-label="WhatsApp us">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/sidramed.ksa/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sidraPrimary transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/company/sidra-med/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sidraPrimary transition-colors" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
          <button
            onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
            className="w-full flex items-center justify-center gap-x-2 px-6 py-4 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <i className="fas fa-globe animate-spin-slow"></i>
            <span className="font-semibold">{language === 'en' ? t('arabic') : t('english')}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;