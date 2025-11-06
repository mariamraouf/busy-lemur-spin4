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

  // Duplicate partners to create a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-sidraLight relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center ml-[-100px]" data-aos="fade-up"> {/* Grid break: shifted left */}
        <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white text-sm font-bold uppercase tracking-wide mb-6">
          {t('partners')}
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 break-words">
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
                className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-104"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;