import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const PartnersSection = () => {
  const { t } = useLanguage();

  const partners = [
    { name: "Noor Al Ain Medical Services", logo: "/placeholder.svg" },
    { name: "Woman's Health", logo: "/placeholder.svg" },
    { name: "Dr. Tala Qutub Medical Center", logo: "/placeholder.svg" },
    { name: "Prince Sattam Bin Abdulaziz University", logo: "/placeholder.svg" },
    { name: "Dentalia Clinics", logo: "/placeholder.svg" },
    { name: "SSB Company", logo: "/placeholder.svg" },
    { name: "Amaz Specialty Hospital", logo: "/placeholder.svg" },
    { name: "Dr. Osama Alwashiah Clinics", logo: "/placeholder.svg" },
    { name: "Heart Care Center", logo: "/placeholder.svg" },
    { name: "KC Medical Center", logo: "/placeholder.svg" },
  ];

  // Duplicate partners to create a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-sidraLight relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center" data-aos="fade-up">
        <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraPurple text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
          {t('partners')}
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
          <span className="block">Our Valued</span>
          <span className="block bg-gradient-to-r from-sidraPrimary via-sidraPurple to-sidraPink bg-clip-text text-transparent">Partners</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden py-8">
        <div
          className="flex animate-scroll"
          style={{ '--scroll-duration': `${duplicatedPartners.length * 2}s` } as React.CSSProperties}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-48 mx-8">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;