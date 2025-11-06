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
      setIsScrolled(window.scrollY > 50); // Slightly less scroll to trigger
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t('home'), path: '/' },
    { id: 'aboutUs', label: t('aboutUs'), path: '/about-us' },
    { id: 'services', label: t('services'), path: '/services' },
    { id: 'ourValued', label: t('ourValued'), path: '/partners' },
    { id: 'contact', label: t('contact'), path: '/contact' },
  ];

  return (
    <nav className={cn(
      "bg-moyasar-white/90 backdrop-blur-md fixed w-full top-0 z-50 transition-all duration-300 border-b border-moyasar-border",
      isScrolled ? "py-2 shadow-md" : "py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center gap-x-3">
              <img src="/sidra-med-logo.png" alt="Sidra Med Logo" className="w-24 h-24 object-contain" /> {/* Adjusted size */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="relative text-moyasar-gray-text hover:text-moyasar-blue-primary transition-colors duration-300 font-medium group text-lg"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-moyasar-blue-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-x-2 px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-lg hover:bg-moyasar-blue-secondary transition-colors duration-300 font-semibold text-base"
            >
              <i className="fas fa-globe"></i>
              <span className="font-semibold">{language === 'en' ? t('arabic') : t('english')}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-moyasar-dark-text focus:outline-none transform hover:scale-110 transition-transform"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={cn(
          "lg:hidden bg-moyasar-white/95 backdrop-blur-md border-t border-moyasar-border",
          isMobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-moyasar-dark-text hover:text-moyasar-blue-primary transition-colors font-semibold py-3 border-b border-moyasar-border text-lg"
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile Social Media and Contact */}
          <div className="flex justify-center gap-x-6 py-4 border-b border-moyasar-border">
            <a href={`tel:${phoneNumber}`} className="text-moyasar-dark-text hover:text-moyasar-blue-primary transition-colors" aria-label="Call us">
              <i className="fas fa-phone text-2xl"></i>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-moyasar-dark-text hover:text-moyasar-blue-primary transition-colors" aria-label="WhatsApp us">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/sidramed.ksa/" target="_blank" rel="noopener noreferrer" className="text-moyasar-dark-text hover:text-moyasar-blue-primary transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/company/sidra-med/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-moyasar-dark-text hover:text-moyasar-blue-primary transition-colors" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
          <button
            onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
            className="w-full flex items-center justify-center gap-x-2 px-6 py-4 bg-moyasar-blue-primary text-moyasar-white rounded-xl hover:bg-moyasar-blue-secondary transition-colors duration-300 font-semibold text-lg"
          >
            <i className="fas fa-globe"></i>
            <span className="font-semibold">{language === 'en' ? t('arabic') : t('english')}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;