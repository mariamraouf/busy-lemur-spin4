import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/LanguageContext";
import HeroSection from "@/components/HeroSection";
// import StatsSection from "@/components/StatsSection"; // Removed
// import AboutSection from "@/components/AboutSection"; // Removed
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
// import SuccessStoriesSection from "@/components/SuccessStoriesSection"; // Removed
// import TestimonialsSection from "@/components/TestimonialsSection"; // Removed
import AnimatedPartnersSection from "@/components/AnimatedPartnersSection"; // Import the new animated section
import CtaSection from "@/components/CtaSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FAQSection from "@/components/FAQSection";
import FullContactSection from "@/components/FullContactSection";

const Home = () => {
  const { language, t } = useLanguage();

  const homeFaqs = [
    { id: "home-faq-1", question: t('homeFaqQ1'), answer: t('homeFaqA1') },
    { id: "home-faq-2", question: t('homeFaqQ2'), answer: t('homeFaqA2') },
    { id: "home-faq-3", question: t('homeFaqQ3'), answer: t('homeFaqA3') },
    { id: "home-faq-4", question: t('homeFaqQ4'), answer: t('homeFaqA4') },
    { id: "home-faq-5", question: t('homeFaqQ5'), answer: t('homeFaqA5') },
    { id: "home-faq-6", question: t('homeFaqQ6'), answer: t('homeFaqA6') },
  ];

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('heroTitlePart1')} {t('heroTitlePart2')} {t('heroTitlePart3')} - Sidra Med</title>
        <meta name="description" content={t('heroDescription')} />
      </Helmet>
      <HeroSection />
      {/* <StatsSection /> */}
      {/* <AboutSection /> */}
      <ServicesSection />
      <WhyChooseUsSection />
      {/* <SuccessStoriesSection /> */}
      {/* <TestimonialsSection /> */}
      <AnimatedPartnersSection /> {/* Render the new animated partners section */}
      <CtaSection />
      <FullContactSection />
      <FAQSection faqs={homeFaqs} titleKey="faqTitle" hideSubtitle={true} />
      <ScrollToTopButton />
    </>
  );
};

export default Home;