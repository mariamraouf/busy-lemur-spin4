import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FullContactSection from '@/components/FullContactSection'; // Import the new FullContactSection

const ContactPage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('contact')} - Sidra Med</title>
        <meta name="description" content={t('contactDescription')} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-32 pb-16"> {/* Removed background gradient and relative overflow as it's handled by FullContactSection */}
        <FullContactSection /> {/* Use the new component here */}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ContactPage;