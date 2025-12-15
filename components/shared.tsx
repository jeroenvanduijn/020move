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
      nl: 'We hebben de afgelopen anderhalf jaar alles onderzocht om CrossFit 020 in Amsterdam voort te zetten. Helaas liepen we tegen drie grote problemen aan:\n\n1. We kregen geen nieuw langlopend huurcontract. De verhuurder zag ons niet als "ideale huurder" en wilde liever een traditioneler fitnessconcept op deze plek.\n2. Alternatieve locaties in Amsterdam bleken óf extreem duur, óf alleen tijdelijk beschikbaar door herontwikkeling.\n3. Zowel interne coaches als externe partijen hebben serieus naar een overname gekeken, maar uiteindelijk vond niemand het financiële risico verantwoord.\n\nWe respecteren die keuzes volledig. Het betekent wel dat er geen realistische manier is om CrossFit 020 in Amsterdam door te laten gaan.',
      en: 'We spent the past year and a half exploring every option to continue CrossFit 020 in Amsterdam. Unfortunately, we faced three major problems: no long-term lease renewal, extremely expensive or temporary alternative locations, and no internal or external party willing to take on the financial risk.',
    },
    englishSummary: 'We could not secure a long-term lease, alternative locations were too expensive or temporary, and no internal or external party felt comfortable taking on the financial risk. Because of this, continuing CrossFit 020 in Amsterdam is not realistic.',
  },
  {
    question: {
      nl: 'Wanneer is de laatste dag dat we kunnen trainen?',
      en: 'When is the last training day?',
    },
    answer: {
      nl: 'De laatste dag dat we lesgeven is dinsdag 30 december. Tot en met die dag blijven we open en draaien we de lessen zoals normaal. In de dagen daarvoor beginnen we rustig met het leeghalen van de ruimte, maar er kan gewoon getraind worden tot de laatste dag.',
      en: 'The last day we teach classes is Tuesday 30 December. Until that day, we remain open and classes continue as normal. We will start clearing the space in the days before, but you can train until the last day.',
    },
    englishSummary: 'The last training day is Tuesday 30 December. Classes run as normal until that day.',
  },
  {
    question: {
      nl: 'Komt er een afscheidsworkout?',
      en: 'Will there be a farewell workout?',
    },
    answer: {
      nl: 'Ja. We organiseren een speciale afscheidsworkout om dit hoofdstuk samen af te sluiten. De exacte datum en tijd communiceren we binnenkort via e-mail en onze kanalen.',
      en: 'Yes. We will host a special farewell workout to close this chapter together. Date and time will be shared soon via email and our channels.',
    },
    englishSummary: 'Yes. We will host a special farewell workout. Date and time will be shared soon.',
  },
  {
    question: {
      nl: 'Wat gebeurt er met mijn abonnement bij CrossFit 020?',
      en: 'What happens to my CrossFit 020 subscription?',
    },
    answer: {
      nl: 'Niemand betaalt voor een periode waarin de gym niet open is. In een aparte e-mail ontvang je een duidelijk overzicht van:\n\n• wat er gebeurt met incasso en vooruitbetalingen\n• welke bedragen worden teruggestort voor periodes na december\n• wat er gebeurt met eventuele credits, strippen of andere producten',
      en: 'You will not pay for any period we are closed. A separate email will provide a clear overview of what happens with billing and advance payments, which amounts will be refunded for periods after December, and what happens with any credits, class passes or other products.',
    },
    englishSummary: 'You will not pay for any period we are closed. A separate email will explain refunds, advance payments and remaining credits.',
  },
  {
    question: {
      nl: 'Hoe werkt de overgang naar Mobilis precies?',
      en: 'How exactly does the transition to Mobilis work?',
    },
    answer: {
      nl: 'Je kiest een membership (2x of 3x per week) en betaalt direct voor 2 maanden. Daarmee train je heel Q1 2026: van 1 januari t/m 31 maart. Vanaf 1 april 2026 start je automatische incasso bij Mobilis. Let op: dit aanbod geldt alleen voor locatie Amstel en de Onbeperkt-variant valt buiten deze actie.',
      en: 'Choose a membership (2x or 3x per week) and pay for 2 months upfront. This covers all of Q1 2026: January 1 through March 31. From April 1, 2026, your automatic direct debit starts at Mobilis. Note: this offer only applies to the Amstel location and the Unlimited option is not part of this deal.',
    },
    englishSummary: 'Pay 2 months, train all of Q1 2026 (Jan-Mar). From April 1, automatic billing starts. Only for Amstel location, 2x or 3x per week memberships.',
  },
  {
    question: {
      nl: 'Wat gebeurt er na Q1 2026?',
      en: 'What happens after Q1 2026?',
    },
    answer: {
      nl: 'Vanaf 1 april 2026 gaan alle leden over op een automatische incasso bij Mobilis, ongeacht wanneer je tijdens Q1 bent gestart. Net als bij 020 worden incasso\'s gedaan in de laatste week van de maand ervoor. Vanaf dat moment geldt een kalendermaand opzegtermijn en kun je upgraden of downgraden naar een ander membership.',
      en: 'From April 1, 2026, all members transition to automatic direct debit at Mobilis, regardless of when you started during Q1. Just like at 020, payments are collected in the last week of the preceding month. From that point, a one-calendar-month cancellation period applies and you can upgrade or downgrade to a different membership.',
    },
    englishSummary: 'From April 1, 2026, all members go to automatic direct debit (collected in the last week of the preceding month). One-month cancellation period applies.',
  },
  {
    question: {
      nl: 'Tot wanneer kan ik me aanmelden voor Mobilis?',
      en: 'Until when can I sign up for Mobilis?',
    },
    answer: {
      nl: 'Je kunt je aanmelden voor het Mobilis-aanbod tot en met 31 december 2025. De overgangsperiode loopt van 1 januari t/m 31 maart 2026 (Q1). Vanaf 1 april 2026 start voor iedereen de automatische incasso, ongeacht wanneer je bent begonnen.',
      en: 'You can sign up for the Mobilis offer until December 31, 2025. The transition period runs from January 1 through March 31, 2026 (Q1). From April 1, 2026, automatic direct debit starts for everyone, regardless of when you started.',
    },
    englishSummary: 'Sign up by December 31, 2025. The Q1 2026 transition period applies to everyone. From April 1, automatic billing starts.',
  },
  {
    question: {
      nl: 'Waarom heeft niemand CrossFit 020 overgenomen?',
      en: 'Why hasn\'t anyone taken over CrossFit 020?',
    },
    answer: {
      nl: 'De afgelopen maanden hebben we met verschillende partijen gesproken over een mogelijke overname van CrossFit 020. We hebben dit zowel intern met coaches als met externe geïnteresseerden onderzocht. Eén partij is hier zelfs heel ver in gegaan.\n\nUiteindelijk kwam elke partij tot dezelfde conclusie: het financiële risico was te groot. Door de hoge huren in Amsterdam en de onzekerheid van de markt voelde niemand zich comfortabel om deze stap te zetten. Dat respecteren we volledig, maar het betekent wel dat er niemand is die CrossFit 020 in Amsterdam kan voortzetten.',
      en: 'Over the past months, we spoke with several parties about a possible takeover of CrossFit 020. We explored this with internal coaches and external interested parties. One party even went very far in this process.\n\nIn the end, every party came to the same conclusion: the financial risk was too high. Due to high rents in Amsterdam and market uncertainty, no one felt comfortable taking this step. We fully respect that, but it means there is no party who can continue CrossFit 020 in Amsterdam.',
    },
    englishSummary: 'Several internal and external parties explored taking over CrossFit 020. In the end, everyone decided that the financial risk was too high, mainly because of high rents in Amsterdam and market uncertainty. We respect that, and it means there is no party who can continue CrossFit 020 in Amsterdam.',
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
      nl: 'Ja, fysiotherapie is beschikbaar op locatie Buitenveldert. Je hoeft geen externe afspraken te maken.',
      en: 'Yes, physiotherapy is available at the Buitenveldert location. No need for external appointments.',
    },
    englishSummary: 'Yes, physiotherapy is available at the Buitenveldert location.',
  },
  {
    question: {
      nl: 'Heeft Mobilis CrossFit Kids of een programma voor ouderen?',
      en: 'Does Mobilis have CrossFit Kids or a program for seniors?',
    },
    answer: {
      nl: 'Ja, er is CrossFit Kids voor kinderen en CrossFit Masters voor 55-plussers. Beide worden aangeboden als rittenkaart: 10 trainingen voor €100.',
      en: 'Yes, there\'s CrossFit Kids for children and CrossFit Masters for 55+. Both are offered as class passes: 10 classes for €100.',
    },
    englishSummary: 'Yes, Kids and Masters (55+) programs available. 10 classes for €100.',
  },
  {
    question: {
      nl: 'Kan ik op beide Mobilis locaties trainen?',
      en: 'Can I train at both Mobilis locations?',
    },
    answer: {
      nl: 'Dit aanbod geldt alleen voor locatie Amstel. Heb je interesse in locatie Buitenveldert? Neem dan contact op voor een individueel voorstel.',
      en: 'This offer only applies to the Amstel location. Interested in the Buitenveldert location? Contact us for an individual proposal.',
    },
    englishSummary: 'This offer is for Amstel only. Contact us for Buitenveldert options.',
  },
  {
    question: {
      nl: 'Wat zijn de tarieven bij Mobilis vanaf 1 april 2026?',
      en: 'What are the rates at Mobilis from April 1, 2026?',
    },
    answer: {
      nl: '2x per week: €102/maand, 3x per week: €112/maand, Onbeperkt: €129/maand, 10-rittenkaart: €169 (eenmalig). CrossFit Kids en Masters: 10 trainingen voor €100 (rittenkaart).',
      en: '2x per week: €102/month, 3x per week: €112/month, Unlimited: €129/month, 10-class pass: €169 (one-time). CrossFit Kids and Masters: 10 classes for €100 (class pass).',
    },
    englishSummary: '2x/week €102, 3x/week €112, Unlimited €129/month. Kids/Masters: 10 classes for €100.',
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
