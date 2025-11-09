import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import ScrollToTopButton from '@/components/ScrollToTopButton'; // Keep ScrollToTopButton
import { cn } from '@/lib/utils';

const PrivacyPolicyPage = () => {
  const { language, t } = useLanguage();

  // TypeScript can now infer the types correctly due to the overloaded `t` function
  const personalInfoTypes = t('privacyPolicyPersonalInfoTypes', { returnObjects: true });
  const sharingExamples = t('privacyPolicySharingExamples', { returnObjects: true });

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('privacyPolicyPageTitle')} - Sidra Med</title>
        <meta name="description" content={t('privacyPolicyIntro')} />
      </Helmet>
      <div className="pt-24 pb-16 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
        {/* Animated background elements - REMOVED */}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('privacyPolicyPageTitle')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 break-words">
              {t('privacyPolicyPageTitle')}
            </h1>
          </div>

          <div className={cn("prose prose-lg max-w-none text-gray-700", language === 'ar' && 'leading-arabic-loose')} data-aos="fade-up" data-aos-delay="200">
            <p className="lead text-xl mb-8">{t('privacyPolicyIntro')}</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 break-words">{t('privacyPolicyInfoCollectionTitle')}</h2>
            <p className="mb-6">{t('privacyPolicyInfoCollectionContent')}</p>
            <ul className="list-disc pl-6 space-y-4">
              {/* Ensure personalInfoTypes is treated as an array of objects */}
              {(personalInfoTypes as { title: string; details: string; }[]).map((item, index) => (
                <li key={index}>
                  <h3 className="inline font-bold text-gray-900 break-words">{item.title}:</h3> {item.details} {/* Changed to H3 */}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 break-words">{t('privacyPolicySharingTitle')}</h2>
            <p className="mb-6">{t('privacyPolicySharingContent')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {/* Ensure sharingExamples is treated as an array of strings */}
              {(sharingExamples as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 break-words">{t('privacyPolicyYourRightsTitle')}</h2>
            <p className="mb-6">{t('privacyPolicyYourRightsContent')}</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 break-words">{t('privacyPolicyChangesTitle')}</h2>
            <p className="mb-6">{t('privacyPolicyChangesContent')}</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 break-words">{t('privacyPolicyContactTitle')}</h2>
            <p className="mb-6">{t('privacyPolicyContactContent')}</p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default PrivacyPolicyPage;