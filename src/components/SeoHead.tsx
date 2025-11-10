import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import { useLocation } from 'react-router-dom';

interface SeoHeadProps {
  title: string;
  description: string;
  path?: string; // Relative path, e.g., "/" or "/about-us"
  ogImage?: string; // Absolute path to image, e.g., "/images/my-page-og.jpg"
}

const SeoHead: React.FC<SeoHeadProps> = ({ title, description, path, ogImage }) => {
  const { language, t } = useLanguage();
  const location = useLocation();

  const currentPath = path || location.pathname;
  const siteUrl = t('siteUrl');
  const fullUrl = `${siteUrl}${currentPath}`;
  const imageUrl = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}${t('defaultOgImage')}`;

  return (
    <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={language === 'ar' ? 'ar_AR' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SeoHead;