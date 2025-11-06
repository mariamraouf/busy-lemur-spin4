import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const TestimonialsSection = () => {
  const { t, language } = useLanguage(); // Destructure language

  const testimonials = [
    {
      quote: t('testimonial1'),
      author: t('testimonial1Author'),
      role: t('testimonial1Role'),
      avatar: "/saudi-man-shemagh-1.png", 
      gradientFrom: "from-moyasar-blue-primary",
      gradientTo: "to-moyasar-blue-secondary",
    },
    {
      quote: t('testimonial2'),
      author: t('testimonial2Author'),
      role: t('testimonial2Role'),
      avatar: "/saudi-woman-hijab.png",
      gradientFrom: "from-moyasar-blue-secondary",
      gradientTo: "to-moyasar-teal-accent",
    },
    {
      quote: t('testimonial3'),
      author: t('testimonial3Author'),
      role: t('testimonial3Role'),
      avatar: "/saudi-man-shemagh-2.png",
      gradientFrom: "from-moyasar-teal-accent",
      gradientTo: "to-moyasar-blue-primary",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-moyasar-light-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-moyasar-blue-primary to-moyasar-blue-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-moyasar-teal-accent to-moyasar-blue-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-moyasar-blue-primary text-moyasar-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t('whatOurClientsSay')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-moyasar-dark-text mb-8 break-words">
            <span className="block">{t('hearFromLeaders')}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-moyasar-white rounded-3xl p-8 shadow-md border-2 border-moyasar-border transition-all duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="flex items-center mb-6">
                <img src={testimonial.avatar} alt={testimonial.author} className={cn("w-16 h-16 rounded-full object-cover border-4 border-moyasar-blue-primary group-hover:border-moyasar-blue-secondary transition-colors duration-300", language === 'ar' ? 'ml-4' : 'mr-4')} />
                <div>
                  <h3 className="text-xl font-bold text-moyasar-dark-text break-words">{testimonial.author}</h3>
                  <p className="text-moyasar-gray-text text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-lg text-moyasar-gray-text leading-relaxed italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center text-moyasar-white text-2xl",
                `bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo}`
              )}>
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;