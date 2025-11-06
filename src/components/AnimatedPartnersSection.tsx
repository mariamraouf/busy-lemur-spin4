import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

interface Partner {
  name: string;
  logo: string;
}

const AnimatedPartnersSection = () => {
  const { t, language } = useLanguage();

  const partners: Partner[] = [
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
    { name: t('partnerAldarHospital'), logo: "/partners/aldar-hospital.png" },
    { name: t('partnerAlmustaqbalMedical'), logo: "/partners/almustaqbal-medical.png" },
    { name: t('partnerNMG'), logo: "/partners/nmg.png" },
    { name: t('partnerMafaselClinics'), logo: "/partners/mafasel-clinics.png" },
    { name: t('partnerFutureHealthTrainingCenter'), logo: "/partners/future-health-training-center.png" },
    { name: t('partnerAlZahraaHospitals'), logo: "/partners/al-zahraa-hospitals.png" },
    { name: t('partnerMASBTS'), logo: "/partners/mas-bts.png" },
    { name: t('partnerTalab'), logo: "/partners/talab.png" },
  ];

  // Create a base sequence by duplicating partners multiple times to ensure a long, seamless loop
  const baseSequence = [...partners, ...partners, ...partners];

  // Calculate scroll duration based on the length of the base sequence
  const scrollDuration = baseSequence.length * 1.5; 

  // Create offset versions of the base sequence for each line
  const offset1 = 0; 
  const offset2 = Math.floor(partners.length / 3); 
  const offset3 = Math.floor(partners.length * 2 / 3); 

  const line1Partners = [...baseSequence.slice(offset1), ...baseSequence.slice(0, offset1)];
  const line2Partners = [...baseSequence.slice(offset2), ...baseSequence.slice(0, offset2)];
  const line3Partners = [...baseSequence.slice(offset3), ...baseSequence.slice(0, offset3)];

  // Determine animation classes based on language
  const animationClassLeft = language === 'ar' ? 'animate-scroll-left-rtl' : 'animate-scroll-left';
  const animationClassRight = language === 'ar' ? 'animate-scroll-right-rtl' : 'animate-scroll-right';

  return (
    <section id="animated-partners" className="py-16 bg-sidraLight relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center" data-aos="fade-up">
        <span className="inline-block px-4 py-2 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
          {t('partners')}
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 break-words">
          <span className="block">{t('ourValued')}</span>
        </h2>
      </div>

      <div className="space-y-8">
        {/* Line 1: Right to Left in LTR, Left to Right in RTL */}
        <div className="flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
          <div
            className={cn("flex flex-nowrap", animationClassLeft)}
            style={{ '--scroll-duration': `${scrollDuration}s` } as React.CSSProperties}
          >
            {line1Partners.map((partner, index) => (
              <div key={`line1-${index}`} className="flex-shrink-0 flex items-center justify-center w-40 h-20 px-4">
                <img src={partner.logo} alt={partner.name} className="max-h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Line 2: Left to Right in LTR, Right to Left in RTL */}
        <div className="flex overflow-hidden [mask-image:_linear-gradient(to_left,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
          <div
            className={cn("flex flex-nowrap", animationClassRight)}
            style={{ '--scroll-duration': `${scrollDuration}s` } as React.CSSProperties}
          >
            {line2Partners.map((partner, index) => (
              <div key={`line2-${index}`} className="flex-shrink-0 flex items-center justify-center w-40 h-20 px-4">
                <img src={partner.logo} alt={partner.name} className="max-h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Line 3: Right to Left in LTR, Left to Right in RTL */}
        <div className="flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
          <div
            className={cn("flex flex-nowrap", animationClassLeft)}
            style={{ '--scroll-duration': `${scrollDuration}s` } as React.CSSProperties}
          >
            {line3Partners.map((partner, index) => (
              <div key={`line3-${index}`} className="flex-shrink-0 flex items-center justify-center w-40 h-20 px-4">
                <img src={partner.logo} alt={partner.name} className="max-h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedPartnersSection;