import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';
import FAQSection from '@/components/FAQSection';
import { cn } from '@/lib/utils';
import ScrollToTopButton from '@/components/ScrollToTopButton'; // Keep ScrollToTopButton

const PartnersPage = () => {
  const { language, t } = useLanguage();

  const partners = [
    { name: t('partnerNoorAlAin'), logo: "/partners/noor-al-ain.png" },
    { name: t('partnerWomanHealth'), logo: "/partners/woman-health.png" },
    { name: t('partnerDrTalaQutub'), logo: "/partners/dr-tala-qutub.png" },
    { name: t('partnerPrinceSattamUniversity'), logo: "/partners/prince-sattam-university.png" },
    { name: t('partnerDentaliaClinics'), logo: "/partners/dentalia-clinics.png" },
    { name: t('partnerSSBCompany'), logo: "/partners/ssb-company.png" },
    { name: t('partnerAmazSpecialtyHospital'), logo: "/partners/amaz-specialty-hospital.png" },
    { name: t('partnerDrOsamaAlwashiah'), logo: "/partners/dr-osama-alwashiah.png" },
    { name: t('partnerHeartCareCenter'), logo: "/partners/heart-care-center.png" },
    { name: t('partnerKCMedicalCenter'), logo: "/partners/kc-medical-center.png" },
    { name: t('partnerKingsCollegeHospital'), logo: "/partners/kings-college-hospital.png" },
    { name: t('partnerItqan'), logo: "/partners/itqan.png" },
    { name: t('partnerFizik'), logo: "/partners/fizik.png" },
    { name: t('partnerDrSolimanFakeehHospital'), logo: "/partners/dr-soliman-fakeeh-hospital.png" },
    { name: t('partnerInma'), logo: "/partners/inma.png" },
    { name: t('partnerBClinic'), logo: "/partners/b-clinic.png" },
    { name: t('partnerKPMG'), logo: "/partners/kpmg.png" },
    { name: t('partnerPVR'), logo: "/partners/pvr.png" },
    { name: t('partnerAllSensesMedicalCenter'), logo: "/partners/all-senses-medical-center.png" },
    { name: t('partnerKidneyCareCenter'), logo: "/partners/kidney-care-center.png" },
    { name: t('partnerRadRadiologyPlanning'), logo: "/partners/rad-radiology-planning.png" },
    { name: t('partnerCDLMedicalLaboratories'), logo: "/partners/cdl-medical-laboratories.png" },
    { name: t('partnerAbeer'), logo: "/partners/abeer.png" },
    { name: t('partnerAlMaddahiaHolding'), logo: "/partners/almaddahia-holding.png" },
    { name: t('partnerZmzm'), logo: "/partners/zmzm.png" },
    { name: t('partnerKingdomMedicine'), logo: "/partners/kingdom-medicine.png" },
    { name: t('partnerDoctorsClinic'), logo: "/partners/doctors-clinic.png" },
    { name: t('partnerZaherMedicalComplex'), logo: "/partners/zaher-medical-complex.png" },
    { name: t('partnerAlAmmar'), logo: "/partners/al-ammar.png" },
    { name: t('partnerBunyan'), logo: "/partners/bunyan.png" },
    { name: t('partnerAldarHospital'), logo: "/partners/aldar-hospital.png" }, // NEW
    { name: t('partnerAlmustaqbalMedical'), logo: "/partners/almustaqbal-medical.png" }, // NEW
    { name: t('partnerNMG'), logo: "/partners/nmg.png" }, // NEW
    { name: t('partnerMafaselClinics'), logo: "/partners/mafasel-clinics.png" }, // NEW
    { name: t('partnerFutureHealthTrainingCenter'), logo: "/partners/future-health-training-center.png" }, // NEW
    { name: t('partnerAlZahraaHospitals'), logo: "/partners/al-zahraa-hospitals.png" }, // NEW
    { name: t('partnerMASBTS'), logo: "/partners/mas-bts.png" }, // NEW
    { name: t('partnerTalab'), logo: "/partners/talab.png" }, // NEW
  ];

  const partnersFaqs = [
    { id: "partners-faq-1", question: t('partnersFaqQ1'), answer: t('partnersFaqA1') },
    { id: "partners-faq-2", question: t('partnersFaqQ2'), answer: t('partnersFaqA2') },
    { id: "partners-faq-3", question: t('partnersFaqQ3'), answer: t('partnersFaqA3') },
    { id: "partners-faq-4", question: t('partnersFaqQ4'), answer: t('partnersFaqA4') },
    { id: "partners-faq-5", question: t('partnersFaqQ5'), answer: t('partnersFaqA5') },
    { id: "partners-faq-6", question: t('partnersFaqQ6'), answer: t('partnersFaqA6') },
  ];

  return (
    <>
      <Helmet htmlAttributes={{ lang: language, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
        <title>{t('partners')} - Sidra Med</title>
        <meta name="description" content={t('partnersMetaDescription')} />
      </Helmet>
      <div className="pt-24 pb-16 bg-gradient-to-br from-sidraLight via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-sidraPrimary to-sidraSecondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-sidraAccent to-sidraTeal rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              {t('partners')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
              {t('partnersPageTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('partnersPageDescription')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-center justify-center h-32 w-full max-w-[200px] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={50 * (index + 1)}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <FAQSection faqs={partnersFaqs} titleKey="faqTitle" hideSubtitle={true} />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default PartnersPage;