import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

const FAQSection = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      id: "faq-1",
      question: t('faqQ1'),
      answer: t('faqA1'),
    },
    {
      id: "faq-2",
      question: t('faqQ2'),
      answer: t('faqA2'),
    },
    {
      id: "faq-3",
      question: t('faqQ3'),
      answer: t('faqA3'),
    },
    {
      id: "faq-4",
      question: t('faqQ4'),
      answer: t('faqA4'),
    },
    {
      id: "faq-5",
      question: t('faqQ5'),
      answer: t('faqA5'),
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-sidraAccent to-sidraTeal rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t('faqTitle')}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            <span className="block">{t('faqSubtitle')}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <AccordionTrigger className="flex items-center justify-between p-6 text-left text-gray-900 font-bold text-lg hover:no-underline data-[state=open]:text-sidraPrimary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-gray-700 leading-relaxed text-base border-t border-gray-100">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;