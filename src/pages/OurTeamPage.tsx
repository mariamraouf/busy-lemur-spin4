import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import FAQSection from '@/components/FAQSection';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Import shadcn Card components

const OurTeamPage = () => {
  const { language, t } = useLanguage();

  const ourTeamFaqs = [
    { id: "team-faq-1", question: t('ourTeamFaqQ1'), answer: t('ourTeamFaqA1') },
    { id: "team-faq-2", question: t('ourTeamFaqQ2'), answer: t('ourTeamFaqA2') },
    { id: "team-faq-3", question: t('ourTeamFaqQ3'), answer: t('ourTeamFaqA3') },
    { id: "team-faq-4", question: t('ourTeamFaqQ4'), answer: t('ourTeamFaqA4') },
    { id: "team-faq-5", question: t('ourTeamFaqQ5'), answer: t('ourTeamFaqA5') },
    { id: "team-faq-6", question: t('ourTeamFaqQ6'), answer: t('ourTeamFaqA6') },
  ];

  const teamRoles = [
    {
      icon: "fas fa-user-tie",
      title: t('teamRole1'),
      description: t('teamRole1Description'),
      gradientFrom: "from-sidraPrimary",
      gradientTo: "to-sidraTeal",
    },
    {
      icon: "fas fa-stethoscope",
      title: t('teamRole2'),
      description: t('team2Description'),
      gradientFrom: "from-sidraSecondary",
      gradientTo: "to-sidraAccent",
    },
    {
      icon: "fas fa-hard-hat",
      title: t('teamRole3'),
      description: t('team3Description'),
      gradientFrom: "from-sidraTeal",
      gradientTo: "to-sidraPrimary",
    },
    {
      icon: "fas fa-chart-line",
      title: t('teamRole4Title'),
      description: t('team4Description'),
      gradientFrom: "from-sidraAccent",
      gradientTo: "to-sidraSecondary",
    },
  ];

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('ourTeam')} - Sidra Med</title>
        <meta name="description" content={t('ourTeamMetaDescription')} />
      </Helmet>
      <div className="pt-24 pb-16 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> {/* Removed mr-[-50px] */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white text-sm font-bold uppercase tracking-wide mb-6">
              {t('ourTeam')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 break-words">
              {t('ourTeamPageTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('ourTeamMetaDescription')} {/* Using meta description for intro */}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative p-8 bg-white rounded-3xl shadow-2xl border border-gray-100" data-aos="fade-up" data-aos-duration="1000">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 break-words">{t('whoWeAre')}</h2> {/* Reusing whoWeAre for a general intro */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('whoWeAreDescription1')} {/* Reusing a general description for context */}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('whoWeAreDescription2')} {/* Reusing a general description for context */}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8"> {/* Adjusted grid for 2 cards per row */}
              {teamRoles.map((role, index) => (
                <Card
                  key={index}
                  className="group flex flex-col items-start p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-sidraPrimary/20"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <CardHeader className="p-0 mb-4 flex flex-row items-center">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center bg-sidraTeal/10 text-sidraTeal group-hover:bg-sidraTeal group-hover:text-white transition-all duration-300",
                      `bg-gradient-to-br ${role.gradientFrom} ${role.gradientTo}` // Apply gradient to icon background
                    )}>
                      <i className={cn(role.icon, "text-white text-xl")}></i> {/* Icon color is white */}
                    </div>
                    <CardTitle className={cn("text-lg sm:text-xl font-bold text-gray-900", language === 'ar' ? 'mr-4' : 'ml-4')}>
                      <h3 className="break-words">{role.title}</h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-gray-700 text-base">
                    <CardDescription>{role.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <FAQSection faqs={ourTeamFaqs} titleKey="faqTitle" hideSubtitle={true} />
      </div>
    </>
  );
};

export default OurTeamPage;