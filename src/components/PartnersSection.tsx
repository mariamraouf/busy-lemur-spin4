import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const PartnersSection = () => {
  const { t } = useLanguage();

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
    { name: t('partnerDrSolimanFakeehHospital'), logo: "/partners/dr-soliman-fakeeh-hospital.png" }, // NEW
    { name: t('partnerInma'), logo: "/partners/inma.png" }, // NEW
    { name: t('partnerBClinic'), logo: "/partners/b-clinic.png" }, // NEW
    { name: t('partnerKPMG'), logo: "/partners/kpmg.png" }, // NEW
    { name: t('partnerPVR'), logo: "/partners/pvr.png" }, // NEW
    { name: t('partnerAllSensesMedicalCenter'), logo: "/partners/all-senses-medical-center.png" }, // NEW
    { name: t('partnerKidneyCareCenter'), logo: "/partners/kidney-care-center.png" }, // NEW
    { name: t('partnerRadRadiologyPlanning'), logo: "/partners/rad-radiology-planning.png" }, // NEW
    { name: t('partnerCDLMedicalLaboratories'), logo: "/partners/cdl-medical-laboratories.png" }, // NEW
    { name: t('partnerAbeer'), logo: "/partners/abeer.png" }, // NEW
    { name: t('partnerAlMaddahiaHolding'), logo: "/partners/almaddahia-holding.png" }, // NEW
    { name: t('partnerZmzm'), logo: "/partners/zmzm.png" }, // NEW
    { name: t('partnerKingdomMedicine'), logo: "/partners/kingdom-medicine.png" }, // NEW
    { name: t('partnerDoctorsClinic'), logo: "/partners/doctors-clinic.png" }, // NEW
    { name: t('partnerZaherMedicalComplex'), logo: "/partners/zaher-medical-complex.png" }, // NEW
    { name: t('partnerAlAmmar'), logo: "/partners/al-ammar.png" }, // NEW
    { name: t('partnerBunyan'), logo: "/partners/bunyan.png" }, // NEW
  ];

  // Duplicate partners to create a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-sidraLight relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center" data-aos="fade-up">
        <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
          {t('partners')}
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
          <span className="block">{t('ourValued')}</span>
          <span className="block bg-gradient-to-r from-sidraPrimary via-sidraSecondary to-sidraAccent bg-clip-text text-transparent">{t('partnersTitle')}</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden py-8">
        <div
          className="flex animate-scroll"
          style={{ '--scroll-duration': `${duplicatedPartners.length * 2}s` } as React.CSSProperties}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-48 mx-8">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;