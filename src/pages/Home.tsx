import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection"; // Updated to be a summary
import ServicesSection from "@/components/ServicesSection"; // Updated to be a summary
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FAQSection from "@/components/FAQSection"; // Import FAQSection

const Home = () => {
  const { language, t } = useLanguage();

  const homeFaqs = [
    { id: "home-faq-1", question: t('homeFaqQ1'), answer: t('homeFaqA1') },
    { id: "home-faq-2", question: t('homeFaqQ2'), answer: t('homeFaqA2') },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('heroTitlePart1')} {t('heroTitlePart2')} {t('heroTitlePart3')} - Sidra Med</title>
        <meta name="description" content={t('heroDescription')} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <AboutSection /> {/* Now a summary section */}
        <ServicesSection /> {/* Now a summary section */}
        <WhyChooseUsSection />
        <SuccessStoriesSection />
        <TestimonialsSection />
        <PartnersSection />
        <CtaSection />
        <ContactSection />
        <FAQSection faqs={homeFaqs} titleKey="faqTitle" subtitleKey="faqSubtitle" />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;