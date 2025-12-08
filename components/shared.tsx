'use client';

import React from 'react';
import Link from 'next/link';

// ============================================
// Type Definitions
// ============================================
export type Language = 'nl' | 'en';

// ============================================
// Constants
// ============================================
export const EMAIL = 'info@crossfit020.nl';

// ============================================
// Shared Header Component
// ============================================
interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-cfl-gray-medium">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-cfl-dark hover:text-cfl-orange transition-colors">
          CrossFit 020
        </Link>

        {/* Language Toggle */}
        <div className="flex items-center gap-1 text-sm font-medium">
          <button
            onClick={() => setLang('nl')}
            className={`px-3 py-1.5 rounded transition-colors ${
              lang === 'nl'
                ? 'bg-cfl-dark text-white'
                : 'text-gray-600 hover:text-cfl-dark hover:bg-cfl-yellow/30'
            }`}
            aria-pressed={lang === 'nl'}
          >
            NL
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1.5 rounded transition-colors ${
              lang === 'en'
                ? 'bg-cfl-dark text-white'
                : 'text-gray-600 hover:text-cfl-dark hover:bg-cfl-yellow/30'
            }`}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

// ============================================
// Check Icon Component
// ============================================
export function CheckIcon({ className = 'w-5 h-5' }: { className?: string }) {
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
        strokeWidth={2.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

// ============================================
// Calendar Icon Component
// ============================================
export function CalendarIcon({ className = 'w-5 h-5' }: { className?: string }) {
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
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

// ============================================
// CTA Button Component
// ============================================
interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export function CTAButton({
  children,
  href,
  onClick,
  disabled = false,
  variant = 'primary'
}: CTAButtonProps) {
  const baseStyles = "inline-block font-semibold py-3 px-6 rounded-md transition-all duration-200 text-lg";
  const variantStyles = variant === 'primary'
    ? `bg-cfl-orange text-white ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-cfl-orange-hover shadow-md hover:shadow-lg active:scale-[0.98]'}`
    : `bg-white text-cfl-dark border-2 border-cfl-gray-medium ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-cfl-orange hover:text-cfl-orange'}`;

  const className = `${baseStyles} ${variantStyles}`;

  if (disabled) {
    return (
      <button className={className} disabled>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

// ============================================
// Footer Component
// ============================================
interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const copy = {
    contact: {
      nl: 'Heb je vragen? Mail ons op',
      en: 'Questions? Email us at',
    },
  };

  return (
    <>
      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <p className="text-lg text-gray-700">
            {copy.contact[lang]}{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-cfl-orange hover:underline font-medium"
            >
              {EMAIL}
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-cfl-dark text-white">
        <div className="max-w-content mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">CrossFit 020</p>
        </div>
      </footer>
    </>
  );
}

// ============================================
// FAQ Accordion Component
// ============================================
interface FAQItem {
  question: { nl: string; en: string };
  answer: { nl: string; en: string };
  englishSummary: string;
}

interface FAQAccordionProps {
  item: FAQItem;
  lang: Language;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQAccordion({ item, lang, isOpen, onToggle }: FAQAccordionProps) {
  return (
    <div className="border-b border-cfl-gray-medium last:border-b-0">
      <button
        className="w-full py-5 px-5 flex items-center justify-between text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-cfl-dark pr-4 group-hover:text-cfl-orange transition-colors">
          {item.question[lang]}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-cfl-orange transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5 px-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-700 leading-relaxed">{item.answer[lang]}</p>
        {lang === 'nl' && (
          <p className="mt-3 text-sm text-gray-500 italic">EN: {item.englishSummary}</p>
        )}
      </div>
    </div>
  );
}

// ============================================
// FAQ Data (Updated with correct email and logic)
// ============================================
export const faqItems: FAQItem[] = [
  {
    question: {
      nl: 'Waarom sluit CrossFit 020?',
      en: 'Why is CrossFit 020 closing?',
    },
    answer: {
      nl: 'We hebben lang gezocht naar een nieuwe locatie in Amsterdam, maar de huurprijzen zijn zo hoog geworden dat we geen financieel gezonde optie konden vinden. Daarnaast is er nog een restschuld uit het verleden, waardoor verhuizen binnen Amsterdam niet haalbaar is.',
      en: 'We searched extensively for a new location in Amsterdam, but rental prices have become too high for a financially viable option. Combined with existing debt, relocating within Amsterdam is not feasible.',
    },
    englishSummary: 'We could not find an affordable new location in Amsterdam.',
  },
  {
    question: {
      nl: 'Wanneer is de laatste dag dat we kunnen trainen?',
      en: 'When is the last training day?',
    },
    answer: {
      nl: 'De laatste trainingsdag bij CrossFit 020 is vrijdag 20 december. Tot die datum blijven we open en draaien we de lessen zoals normaal.',
      en: 'The last training day at CrossFit 020 is Friday 20 December. Until then, we remain open and classes continue as normal.',
    },
    englishSummary: 'Last training day is Friday 20 December.',
  },
  {
    question: {
      nl: 'Komt er een afscheidsworkout?',
      en: 'Will there be a farewell workout?',
    },
    answer: {
      nl: 'Ja. We organiseren een speciale laatste workout om samen af te sluiten. De datum en tijden maken we snel bekend.',
      en: 'Yes. We are organizing a special final workout to close together. Date and times will be announced soon.',
    },
    englishSummary: 'Yes, details coming soon.',
  },
  {
    question: {
      nl: 'Wat gebeurt er met mijn abonnement bij CrossFit 020?',
      en: 'What happens to my CrossFit 020 subscription?',
    },
    answer: {
      nl: 'Niemand betaalt voor een periode waarin de gym niet open is. We sturen een aparte mail met alle details over incasso, vooruitbetalingen, credits en overige vragen.',
      en: 'No one pays for a period when the gym is closed. A separate email will explain all details about billing, prepayments, credits and other questions.',
    },
    englishSummary: 'You will not pay for any period we are closed. Details via email.',
  },
  {
    question: {
      nl: 'Hoe werkt de overgang naar Mobilis precies?',
      en: 'How exactly does the transition to Mobilis work?',
    },
    answer: {
      nl: 'Je kiest je Mobilis membership en betaalt direct voor 2 maanden. Je krijgt 3 maanden trainen (1 maand gratis). Je kunt starten vanaf januari. Vanaf maand 4 loopt je membership automatisch verder via Mobilis.',
      en: 'You choose your Mobilis membership and pay for 2 months upfront. You receive 3 months of training (1 month free). You can start from January. From month 4, your membership continues automatically at Mobilis.',
    },
    englishSummary: 'Pay 2 months, train 3 months (1 free), start from January, then continues at Mobilis.',
  },
  {
    question: {
      nl: 'Wat gebeurt er na de 3 maanden overgangsperiode?',
      en: 'What happens after the 3-month transition period?',
    },
    answer: {
      nl: 'Na 3 maanden loopt je gekozen membership automatisch verder bij Mobilis met een kalendermaand opzegtermijn. Je kunt dan ook upgraden of downgraden naar een ander membership.',
      en: 'After the first 3 months, your membership continues automatically at Mobilis under their standard cancellation terms. You can also upgrade or downgrade to a different membership.',
    },
    englishSummary: 'After the first 3 months your membership continues automatically at Mobilis under their standard cancellation terms.',
  },
  {
    question: {
      nl: 'Tot wanneer kan ik me aanmelden voor deze actie?',
      en: 'Until when can I sign up for this offer?',
    },
    answer: {
      nl: 'Je moet je vóór vrijdag 19 december aanmelden, zodat we alles tijdig kunnen verwerken bij Mobilis.',
      en: 'You need to sign up before Friday 19 December so we can process everything at Mobilis in time.',
    },
    englishSummary: 'Sign up before Friday 19 December.',
  },
  {
    question: {
      nl: 'Waarom is Fabian geen nieuwe eigenaar geworden?',
      en: 'Why didn\'t Fabian become the new owner?',
    },
    answer: {
      nl: 'Fabian heeft serieus gekeken naar de mogelijkheid om 020 over te nemen. Uiteindelijk heeft hij besloten deze stap niet te zetten. Dat respecteren we volledig, maar het betekent dat er niemand is om de gym in Amsterdam voort te zetten.',
      en: 'Fabian seriously considered taking over 020. Ultimately, he decided not to proceed. We fully respect this, but it means there is no one to continue the gym in Amsterdam.',
    },
    englishSummary: 'Fabian decided not to take over the gym.',
  },
  {
    question: {
      nl: 'Is Mobilis een goede vervanger?',
      en: 'Is Mobilis a good replacement?',
    },
    answer: {
      nl: 'We geloven dat de kwaliteit van coaching, sfeer en community bij Mobilis heel goed past bij wat jullie gewend zijn. Daarom bevelen we deze gym met vertrouwen aan.',
      en: 'We believe Mobilis\'s coaching quality, atmosphere and community closely match what you\'re used to. That\'s why we confidently recommend this gym.',
    },
    englishSummary: 'Yes. Strong coaching and community.',
  },
  {
    question: {
      nl: 'Wat als Mobilis geen optie voor mij is?',
      en: 'What if Mobilis isn\'t an option for me?',
    },
    answer: {
      nl: 'Dat begrijpen we helemaal. Je bent vrij om je eigen nieuwe trainingsplek te kiezen. Het aanbod bij Mobilis is een mogelijkheid, geen verplichting.',
      en: 'We completely understand. You\'re free to choose your own new training location. The Mobilis offer is an option, not an obligation.',
    },
    englishSummary: 'Mobilis is optional; you\'re free to choose elsewhere.',
  },
  {
    question: {
      nl: 'Wat gebeurt er met mijn credits, strippen of PT-sessies?',
      en: 'What happens to my credits, class passes or PT sessions?',
    },
    answer: {
      nl: 'In de aparte betalingsmail leggen we precies uit wat hiermee gebeurt per situatie. We zorgen dat niemand iets kwijt is zonder duidelijkheid.',
      en: 'The separate billing email will explain exactly what happens for each situation. We ensure no one loses anything without clarity.',
    },
    englishSummary: 'Details will follow in the finance email.',
  },
  {
    question: {
      nl: 'Heeft Mobilis ook Hyrox training?',
      en: 'Does Mobilis offer Hyrox training?',
    },
    answer: {
      nl: 'Ja, Hyrox is nieuw bij Mobilis. Dit is een mix van hardlopen en functional fitness, perfect als je van competitie houdt.',
      en: 'Yes, Hyrox is new at Mobilis. It\'s a mix of running and functional fitness, perfect if you love competition.',
    },
    englishSummary: 'Yes, Hyrox training is available.',
  },
  {
    question: {
      nl: 'Kan ik ook personal training doen bij Mobilis?',
      en: 'Can I do personal training at Mobilis?',
    },
    answer: {
      nl: 'Ja, Mobilis biedt personal training aan voor persoonlijke doelen, techniekverbetering of revalidatie.',
      en: 'Yes, Mobilis offers personal training for personal goals, technique improvement or rehabilitation.',
    },
    englishSummary: 'Yes, personal training is available.',
  },
  {
    question: {
      nl: 'Is er fysiotherapie beschikbaar?',
      en: 'Is physiotherapy available?',
    },
    answer: {
      nl: 'Ja, fysiotherapie is direct in de box beschikbaar. Je hoeft geen externe afspraken te maken.',
      en: 'Yes, physiotherapy is available on-site. You don\'t need to make external appointments.',
    },
    englishSummary: 'Yes, physiotherapy is available on-site.',
  },
  {
    question: {
      nl: 'Heeft Mobilis CrossFit Kids of een programma voor ouderen?',
      en: 'Does Mobilis have CrossFit Kids or a program for seniors?',
    },
    answer: {
      nl: 'Ja, er is CrossFit Kids voor kinderen en CrossFit Masters voor 55-plussers. Beide kosten €100/maand.',
      en: 'Yes, there\'s CrossFit Kids for children and CrossFit Masters for 55+. Both cost €100/month.',
    },
    englishSummary: 'Yes, Kids and Masters (55+) programs available for €100/month.',
  },
  {
    question: {
      nl: 'Kan ik op beide Mobilis locaties trainen?',
      en: 'Can I train at both Mobilis locations?',
    },
    answer: {
      nl: 'Ja, met elk membership kun je trainen op zowel locatie Amstel als Buitenveldert.',
      en: 'Yes, with any membership you can train at both the Amstel and Buitenveldert locations.',
    },
    englishSummary: 'Yes, your membership works at both Amsterdam locations.',
  },
  {
    question: {
      nl: 'Wat zijn de tarieven bij Mobilis na de 3 maanden?',
      en: 'What are the rates at Mobilis after the 3 months?',
    },
    answer: {
      nl: '2x per week: €102/maand, 3x per week: €112/maand, Onbeperkt: €129/maand, 10-rittenkaart: €169 (eenmalig).',
      en: '2x per week: €102/month, 3x per week: €112/month, Unlimited: €129/month, 10-class pass: €169 (one-time).',
    },
    englishSummary: '2x/week €102, 3x/week €112, Unlimited €129/month.',
  },
  {
    question: {
      nl: 'Hoe is de sfeer bij Mobilis?',
      en: 'What\'s the atmosphere like at Mobilis?',
    },
    answer: {
      nl: 'Mobilis heeft een 4.9 rating op Google met 114+ reviews. Leden noemen de coaching, persoonlijke aandacht en fijne community als belangrijkste pluspunten. De box is geschikt voor zowel beginners als gevorderden.',
      en: 'Mobilis has a 4.9 rating on Google with 114+ reviews. Members highlight the coaching, personal attention and great community. The box is suitable for both beginners and advanced athletes.',
    },
    englishSummary: '4.9 stars on Google. Members praise coaching quality and welcoming community.',
  },
  {
    question: {
      nl: 'Hoe kan ik vragen stellen?',
      en: 'How can I ask questions?',
    },
    answer: {
      nl: `Mail ons op ${EMAIL}. We proberen iedereen zo snel mogelijk te helpen.`,
      en: `Email us at ${EMAIL}. We'll try to help everyone as quickly as possible.`,
    },
    englishSummary: `Email us at ${EMAIL}.`,
  },
];
