import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';
import { TranslationKey } from '@/lib/translations';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  titleKey: TranslationKey;
  subtitleKey?: TranslationKey; // Made optional
  hideSubtitle?: boolean; // New prop to hide subtitle
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, titleKey, subtitleKey, hideSubtitle = false }) => {
  const { t } = useLanguage();

  if (!faqs || faqs.length === 0) {
    return null; // Don't render if no FAQs are provided
  }

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
      {/* Animated background elements - REMOVED */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            {t(titleKey)}
          </span>
          {!hideSubtitle && subtitleKey && ( // Conditionally render subtitle
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              <span className="block">{t(subtitleKey)}</span>
            </h2>
          )}
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