import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t('testimonial1'),
      author: t('testimonial1Author'),
      role: t('testimonial1Role'),
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
    },
    {
      quote: t('testimonial2'),
      author: t('testimonial2Author'),
      role: t('testimonial2Role'),
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      gradientFrom: "from-sidraPurple",
      gradientTo: "to-sidraPink",
    },
    {
      quote: t('testimonial3'),
      author: t('testimonial3Author'),
      role: t('testimonial3Role'),
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
      gradientFrom: "from-sidraEmerald",
      gradientTo: "to-sidraCyan",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraPurple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-sidraPink to-sidraOrange rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraPurple text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t('whatOurClientsSay')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            <span className="block">{t('hearFromLeaders')}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="flex items-center mb-6">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-sidraPrimary group-hover:border-sidraPurple transition-colors duration-300" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl",
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