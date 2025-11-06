import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={cn(
            "flex items-center justify-center w-14 h-14 rounded-full",
            "bg-moyasar-blue-primary text-moyasar-white shadow-lg",
            "hover:scale-110 hover:bg-moyasar-blue-secondary transition-all duration-300 transform",
            "focus:outline-none focus:ring-2 focus:ring-moyasar-blue-primary focus:ring-offset-2"
          )}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-xl"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;