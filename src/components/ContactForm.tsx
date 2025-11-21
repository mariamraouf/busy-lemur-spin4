import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function ContactForm() {
  const { t, language } = useLanguage();
  // IMPORTANT: Replace "YOUR_FORMSPREE_ID_HERE" with your actual Formspree endpoint ID
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID_HERE"); 
  const [projectType, setProjectType] = useState("");

  if (state.succeeded) {
    return (
      <div className="text-center py-20 text-sidraPrimary text-2xl font-bold">
        {t('formSuccessMessage')}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8 bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 break-words">
        {t('getInTouch')}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-gray-700">
            {t('fullName')} *
          </label>
          <input 
            type="text" 
            id="fullName"
            name="fullName" 
            required 
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sidraPrimary focus:border-transparent transition-all duration-200" 
            placeholder={t('enterFullName')} 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
            {t('emailAddress')} *
          </label>
          <input 
            type="email" 
            id="email"
            name="email" 
            required 
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sidraPrimary focus:border-transparent transition-all duration-200" 
            placeholder={t('enterEmail')} 
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
          {t('phoneNumber')} *
        </label>
        <input 
          type="tel" 
          id="phone"
          name="phone" 
          required 
          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sidraPrimary focus:border-transparent transition-all duration-200" 
          placeholder={t('enterPhone')} 
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-gray-700">
          {t('projectType')} *
        </label>
        <select 
          id="projectType"
          name="projectType" 
          required 
          value={projectType} 
          onChange={(e) => setProjectType(e.target.value)} 
          className="w-full px-5 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-sidraPrimary focus:border-transparent transition-all duration-200"
        >
          <option value="">{t('selectProjectType')}</option>
          <option value={t('hospitalDevelopment')}>{t('hospitalDevelopment')}</option>
          <option value={t('clinicSetup')}>{t('clinicSetup')}</option>
          <option value={t('medicalCenter')}>{t('medicalCenter')}</option>
          <option value={t('healthcareConsulting')}>{t('healthcareConsulting')}</option>
          <option value={t('other')}>{t('other')}</option>
        </select>
      </div>

      {projectType === t('other') && (
        <div>
          <label htmlFor="projectTypeOther" className="block text-sm font-medium mb-2 text-gray-700">
            {t('pleaseSpecify')} *
          </label>
          <input 
            type="text" 
            id="projectTypeOther"
            name="projectTypeOther" 
            required 
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sidraPrimary focus:border-transparent transition-all duration-200" 
            placeholder={t('describeYourProject')} 
          />
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
          {t('yourMessage')} *
        </label>
        <textarea 
          id="message"
          name="message" 
          rows={6} 
          required 
          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sidraPrimary focus:border-transparent transition-all duration-200" 
          placeholder={t('tellUsAboutProject')}
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>

      <div className="text-center pt-6">
        <button 
          type="submit" 
          disabled={state.submitting} 
          className={cn(
            "group inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-sidraPrimary to-sidraSecondary text-white font-bold rounded-2xl hover:shadow-lg transition-all transform hover:scale-105 text-lg",
            state.submitting && "opacity-60 cursor-not-allowed"
          )}
        >
          <span>{state.submitting ? t('sending') : t('sendMessage')}</span>
          <i className={cn("fas fa-paper-plane", language === 'ar' ? 'mr-3 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1', "transition-transform")}></i>
        </button>
      </div>
    </form>
  );
}