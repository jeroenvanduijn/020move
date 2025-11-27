'use client';

import React, { useState } from 'react';
import {
  Header,
  Footer,
  CheckIcon,
  CTAButton,
  type Language,
} from '../../components/shared';

// ============================================
// Membership Options with Real Pricing
// ============================================
interface MembershipOption {
  id: string;
  name: { nl: string; en: string };
  price: string;
  perTraining: { nl: string; en: string };
  credits: { nl: string; en: string };
  highlight?: boolean;
}

const membershipOptions: MembershipOption[] = [
  {
    id: '2x-week',
    name: { nl: '2x per week', en: '2x per week' },
    price: '€102,-',
    perTraining: { nl: '€11,79 per training', en: '€11.79 per session' },
    credits: { nl: '9 credits p.m.', en: '9 credits/month' },
  },
  {
    id: '3x-week',
    name: { nl: '3x per week', en: '3x per week' },
    price: '€112,-',
    perTraining: { nl: '€8,62 per training', en: '€8.62 per session' },
    credits: { nl: '13 credits p.m.', en: '13 credits/month' },
  },
  {
    id: 'unlimited',
    name: { nl: 'Onbeperkt', en: 'Unlimited' },
    price: '€129,-',
    perTraining: { nl: '€4,96 per training (6x/wk)', en: '€4.96 per session (6x/wk)' },
    credits: { nl: 'Onbeperkt', en: 'Unlimited' },
    highlight: true,
  },
];

// ============================================
// Copy Object (Membership Page Text)
// ============================================
const copy = {
  hero: {
    title: {
      nl: 'Kies je Mobilis membership',
      en: 'Choose your Mobilis membership',
    },
    intro: {
      nl: 'Kies hieronder het membership dat het beste bij je past. Na het kiezen ga je direct verder naar het aanmeldformulier.',
      en: 'Select the membership that fits you best. After selecting, you will proceed to the sign-up form.',
    },
  },
  membership: {
    perMonth: {
      nl: 'per maand',
      en: 'per month',
    },
    mostPopular: {
      nl: 'Populairste keuze',
      en: 'Most popular',
    },
  },
  cta: {
    nl: 'Ga verder met aanmelden',
    en: 'Continue to sign up',
  },
  selectFirst: {
    nl: 'Selecteer eerst een membership hierboven',
    en: 'Select a membership above first',
  },
  formSection: {
    title: {
      nl: 'Vul je gegevens in',
      en: 'Enter your details',
    },
    subtitle: {
      nl: 'Vul hieronder je gegevens in om je aanmelding af te ronden.',
      en: 'Fill in your details below to complete your registration.',
    },
  },
  transitionInfo: {
    title: {
      nl: 'Wat je krijgt',
      en: 'What you get',
    },
    items: {
      nl: [
        'Je betaalt nu voor 2 maanden.',
        'Je krijgt 3 maanden trainen (1 maand gratis).',
        'Vanaf maand 4 loopt je membership automatisch door.',
      ],
      en: [
        'You pay for 2 months now.',
        'You receive 3 months of training (1 month free).',
        'From month 4, your membership continues automatically.',
      ],
    },
  },
};

// ============================================
// Membership Card Component
// ============================================
interface MembershipCardProps {
  option: MembershipOption;
  lang: Language;
  isSelected: boolean;
  onSelect: () => void;
}

function MembershipCard({ option, lang, isSelected, onSelect }: MembershipCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`relative w-full p-6 rounded-xl border-2 text-left transition-all duration-200 ${
        isSelected
          ? 'border-cfl-orange bg-cfl-orange/5 shadow-lg scale-[1.02]'
          : 'border-cfl-gray-medium bg-white hover:border-cfl-orange/50 hover:shadow-md'
      } ${option.highlight ? 'ring-2 ring-cfl-yellow ring-offset-2' : ''}`}
      role="radio"
      aria-checked={isSelected}
    >
      {/* Popular badge */}
      {option.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-cfl-yellow text-cfl-dark text-xs font-bold px-3 py-1 rounded-full">
            {copy.membership.mostPopular[lang]}
          </span>
        </div>
      )}

      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className={`font-bold text-xl ${isSelected ? 'text-cfl-orange' : 'text-cfl-dark'}`}>
              {option.name[lang]}
            </h3>
          </div>
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
              isSelected ? 'border-cfl-orange bg-cfl-orange' : 'border-gray-300'
            }`}
          >
            {isSelected && <CheckIcon className="w-4 h-4 text-white" />}
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-3xl font-bold text-cfl-dark">{option.price}</span>
          <span className="text-gray-500 text-sm ml-1">{copy.membership.perMonth[lang]}</span>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm text-gray-600 mt-auto">
          <p>{option.perTraining[lang]}</p>
          <p className="text-cfl-orange font-medium">{option.credits[lang]}</p>
        </div>
      </div>
    </button>
  );
}

// ============================================
// Membership Page Component
// ============================================
export default function MembershipPage() {
  const [lang, setLang] = useState<Language>('nl');
  const [selectedMembership, setSelectedMembership] = useState<string | null>(null);

  const scrollToForm = () => {
    const formElement = document.getElementById('ghl-form-placeholder');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} setLang={setLang} />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-cfl-dark leading-tight mb-6">
            {copy.hero.title[lang]}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {copy.hero.intro[lang]}
          </p>

          {/* Transition Info Box */}
          <div className="bg-cfl-gray-light rounded-xl p-6 mb-10">
            <h3 className="font-semibold text-cfl-dark mb-4">{copy.transitionInfo.title[lang]}</h3>
            <ul className="space-y-2">
              {copy.transitionInfo.items[lang].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-cfl-orange flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================
          MEMBERSHIP SELECTION SECTION
          ============================================ */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-content mx-auto px-6">
          {/* Membership Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-10" role="radiogroup">
            {membershipOptions.map((option) => (
              <MembershipCard
                key={option.id}
                option={option}
                lang={lang}
                isSelected={selectedMembership === option.id}
                onSelect={() => setSelectedMembership(option.id)}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center space-y-3">
            {selectedMembership ? (
              <CTAButton onClick={scrollToForm}>{copy.cta[lang]}</CTAButton>
            ) : (
              <>
                <CTAButton disabled>{copy.cta[lang]}</CTAButton>
                <p className="text-sm text-gray-500">{copy.selectFirst[lang]}</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ============================================
          GHL FORM SECTION
          ============================================ */}
      <section className="py-16 md:py-20 bg-cfl-gray-light">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-cfl-dark mb-3 text-center">
            {copy.formSection.title[lang]}
          </h2>
          <p className="text-gray-600 mb-10 text-center">
            {copy.formSection.subtitle[lang]}
          </p>

          {/* GHL Form Placeholder */}
          <div
            id="ghl-form-placeholder"
            className="bg-white rounded-xl border-2 border-dashed border-cfl-gray-medium p-12 text-center scroll-mt-20"
          >
            <div className="text-gray-400">
              <svg
                className="w-16 h-16 mx-auto mb-4 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-lg font-medium mb-2">GHL Form Placeholder</p>
              <p className="text-sm">
                GHL embed code will be inserted here manually.
              </p>
              <p className="text-xs mt-4 font-mono bg-gray-100 rounded px-3 py-2 inline-block">
                {selectedMembership
                  ? `Selected: ${selectedMembership}`
                  : 'No membership selected'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
