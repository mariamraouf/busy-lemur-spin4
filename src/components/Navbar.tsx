import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            <div className="flex items-center space-x-3">
              <img src="/sidra-med-logo.png" alt="Sidra Med Logo" className="w-10 h-10 object-contain transform group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-sidraPrimary via-sidraPurple to-sidraPink bg-clip-text text-transparent">Sidra Med</h1>
                <p className="text-xs text-gray-500 font-medium">{t('healthcareExcellence')}</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="relative text-gray-700 hover:text-sidraPrimary transition-all duration-300 font-semibold group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sidraPrimary to-sidraPurple transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraPurple text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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
          <button
            onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
            className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-sidraPrimary to-sidraPurple text-white rounded-xl hover:shadow-lg transition-all duration-300"
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