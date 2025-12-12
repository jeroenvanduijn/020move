'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import {
  Header,
  Footer,
  CheckIcon,
  CalendarIcon,
  type Language,
} from '../../components/shared';

// ============================================
// Membership Options (Informational Only)
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
      nl: 'Kies uit 2x of 3x per week. Dit aanbod geldt alleen voor locatie Amstel. De Onbeperkt-variant valt buiten deze actie.',
      en: 'Choose from 2x or 3x per week. This offer only applies to the Amstel location. The Unlimited option is not part of this deal.',
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
    selectInForm: {
      nl: 'Je kiest je membership in het aanmeldformulier hieronder.',
      en: 'You select your membership inside the sign-up form below.',
    },
  },
  startDate: {
    title: {
      nl: 'Overgangsperiode Q1 2026',
      en: 'Transition period Q1 2026',
    },
    text: {
      nl: 'Je traint van 1 januari t/m 31 maart 2026 bij Mobilis Amstel. Meld je aan vóór 31 december 2025.',
      en: 'Train from January 1 to March 31, 2026 at Mobilis Amstel. Sign up before December 31, 2025.',
    },
  },
  proRata: {
    title: {
      nl: 'Automatische incasso vanaf 1 april 2026',
      en: 'Automatic billing from April 1, 2026',
    },
    text: {
      nl: 'Vanaf 1 april 2026 gaan alle leden over op een automatische incasso bij Mobilis, ongeacht wanneer je tijdens Q1 bent gestart.',
      en: 'From April 1, 2026, all members transition to automatic direct debit at Mobilis, regardless of when you started during Q1.',
    },
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
        'Je traint heel Q1 2026 (1 jan - 31 mrt).',
        'Alleen voor locatie Amstel.',
        'Vanaf 1 april 2026 start automatische incasso.',
      ],
      en: [
        'You pay for 2 months now.',
        'Train all of Q1 2026 (Jan 1 - Mar 31).',
        'Only for the Amstel location.',
        'From April 1, 2026, automatic billing starts.',
      ],
    },
  },
};

// ============================================
// Membership Card Component (Non-clickable)
// ============================================
interface MembershipCardProps {
  option: MembershipOption;
  lang: Language;
}

function MembershipCard({ option, lang }: MembershipCardProps) {
  return (
    <div
      className={`relative w-full p-6 rounded-xl border-2 border-cfl-gray-medium bg-white ${
        option.highlight ? 'ring-2 ring-cfl-yellow ring-offset-2' : ''
      }`}
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
        <div className="mb-4">
          <h3 className="font-bold text-xl text-cfl-dark">
            {option.name[lang]}
          </h3>
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
    </div>
  );
}

// ============================================
// Info Icon Component
// ============================================
function InfoIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

// ============================================
// Membership Page Component
// ============================================
export default function MembershipPage() {
  const [lang, setLang] = useState<Language>('nl');

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
          MEMBERSHIP OVERVIEW SECTION
          ============================================ */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-content mx-auto px-6">
          {/* Membership Cards (Not clickable) */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {membershipOptions.map((option) => (
              <MembershipCard
                key={option.id}
                option={option}
                lang={lang}
              />
            ))}
          </div>

          {/* Select in form notice */}
          <div className="text-center bg-cfl-yellow/20 border border-cfl-yellow rounded-lg px-6 py-4 mb-10">
            <p className="text-cfl-dark font-medium">
              {copy.membership.selectInForm[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          START DATE & PRO-RATA INFO SECTION
          ============================================ */}
      <section className="py-12 md:py-16 bg-cfl-gray-light">
        <div className="max-w-content mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Start Date Info */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-cfl-orange/10 flex items-center justify-center">
                  <CalendarIcon className="w-5 h-5 text-cfl-orange" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-cfl-dark mb-2">{copy.startDate.title[lang]}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{copy.startDate.text[lang]}</p>
              </div>
            </div>

            {/* Pro-rata Info */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-cfl-orange/10 flex items-center justify-center">
                  <InfoIcon className="w-5 h-5 text-cfl-orange" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-cfl-dark mb-2">{copy.proRata.title[lang]}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{copy.proRata.text[lang]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          GHL FORM SECTION
          ============================================ */}
      <section className="py-16 md:py-20" id="aanmeldformulier">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-cfl-dark mb-3 text-center">
            {copy.formSection.title[lang]}
          </h2>
          <p className="text-gray-600 mb-10 text-center">
            {copy.formSection.subtitle[lang]}
          </p>

          {/* GHL Form Embed */}
          <div
            id="ghl-form-container"
            className="bg-white rounded-xl overflow-hidden"
            style={{ minHeight: '1800px' }}
          >
            <iframe
              src="https://kilo.gymleadmachine.com/widget/form/UwByW99AgEZew0dVsYNy"
              style={{
                width: '100%',
                height: '1800px',
                border: 'none',
                borderRadius: '3px',
              }}
              id="inline-UwByW99AgEZew0dVsYNy"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Mobilis Form"
              data-height="1797"
              data-layout-iframe-id="inline-UwByW99AgEZew0dVsYNy"
              data-form-id="UwByW99AgEZew0dVsYNy"
              title="Mobilis Form"
            />
          </div>
          <Script
            src="https://kilo.gymleadmachine.com/js/form_embed.js"
            strategy="lazyOnload"
          />
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
