import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language, t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('pageNotFoundTitle')} - Sidra Med</title>
        <meta name="description" content={t('pageNotFoundDescription')} />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404: {t('pageNotFoundTitle')}</h1> {/* Combined H1 */}
          <p className="text-xl text-gray-600 mb-4">{t('pageNotFoundDescription')}</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            {t('returnToHome')}
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;