'use client';

import React, { useState } from 'react';

// ============================================
// Type Definitions
// ============================================
type Language = 'nl' | 'en';

interface MembershipOption {
  id: string;
  name: { nl: string; en: string };
  price: string;
}

interface FAQItem {
  question: { nl: string; en: string };
  answer: { nl: string; en: string };
  englishSummary: string;
}

// ============================================
// Membership Options Data
// ============================================
const membershipOptions: MembershipOption[] = [
  { id: 'unlimited', name: { nl: 'Unlimited', en: 'Unlimited' }, price: '€[xx]' },
  { id: '3x-week', name: { nl: '3x per week', en: '3x per week' }, price: '€[xx]' },
  { id: '2x-week', name: { nl: '2x per week', en: '2x per week' }, price: '€[xx]' },
  { id: 'open-gym', name: { nl: 'Open Gym', en: 'Open Gym' }, price: '€[xx]' },
];

// ============================================
// FAQ Data (Corrected Logic)
// ============================================
const faqItems: FAQItem[] = [
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
      nl: 'De definitieve einddatum is [datum invullen]. Tot die datum blijven we open en draaien we de lessen zoals normaal.',
      en: 'The final closing date is [insert date]. Until then, we remain open and classes continue as normal.',
    },
    englishSummary: 'Last training day is [insert date].',
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
      nl: 'Je kiest nu je Mobilis membership. Maand 1 en 2 worden betaald via je huidige CrossFit 020 incasso. Maand 3 is gratis. Vanaf maand 4 loopt je gekozen membership automatisch verder via Mobilis, met een kalendermaand opzegtermijn.',
      en: 'You choose your Mobilis membership now. Months 1 and 2 are paid through your current 020 billing. Month 3 is free. From month 4, your chosen membership continues automatically at Mobilis with a one-calendar-month cancellation period.',
    },
    englishSummary: 'Months 1-2 via 020, month 3 free, month 4+ continues at Mobilis.',
  },
  {
    question: {
      nl: 'Wat gebeurt er na de 3 maanden overgangsperiode?',
      en: 'What happens after the 3-month transition period?',
    },
    answer: {
      nl: 'Na 3 maanden loopt je gekozen membership automatisch verder bij Mobilis met een kalendermaand opzegtermijn. Je kunt dan ook upgraden of downgraden naar een ander membership.',
      en: 'After 3 months, your chosen membership continues automatically at Mobilis with a one-calendar-month cancellation period. You can also upgrade or downgrade to a different membership.',
    },
    englishSummary: 'Membership continues automatically with standard cancellation terms.',
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
      nl: 'Gaat CrossFit 020 definitief dicht of verhuizen jullie?',
      en: 'Is CrossFit 020 closing permanently or relocating?',
    },
    answer: {
      nl: 'De BV verhuist naar Leiden. Dat betekent dat CrossFit 020 in Amsterdam stopt, maar dat de onderneming op een nieuwe plek verder gaat.',
      en: 'The company is relocating to Leiden. This means CrossFit 020 in Amsterdam will close, but the business continues at a new location.',
    },
    englishSummary: 'The company moves to Leiden; the Amsterdam location closes.',
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
      nl: 'Kan ik mee naar Leiden?',
      en: 'Can I join in Leiden?',
    },
    answer: {
      nl: 'De afstand is voor de meeste leden niet realistisch, maar je bent altijd welkom wanneer de nieuwe locatie opent. We weten nog niet wanneer dat zal zijn.',
      en: 'The distance isn\'t realistic for most members, but you\'re always welcome when the new location opens. We don\'t know the timeline yet.',
    },
    englishSummary: 'You\'re welcome in Leiden; timeline unknown.',
  },
  {
    question: {
      nl: 'Hoe kan ik vragen stellen?',
      en: 'How can I ask questions?',
    },
    answer: {
      nl: 'Mail ons op [mailadres]. We proberen iedereen zo snel mogelijk te helpen.',
      en: 'Email us at [email]. We\'ll try to help everyone as quickly as possible.',
    },
    englishSummary: 'Email us at [email].',
  },
];

// ============================================
// Copy Object (All UI Text)
// ============================================
const copy = {
  header: {
    logo: 'CrossFit 020',
  },
  hero: {
    title: {
      nl: 'Jouw trainingsplek na CrossFit 020',
      en: 'Your training home after CrossFit 020',
    },
    intro: {
      nl: 'We weten dat het sluiten van CrossFit 020 een moeilijk bericht is. Daarom hebben we een veilige, warme en zorgeloze overgang geregeld bij Mobilis CrossFit. Je kunt daar direct doortrainen, met een duidelijke overgangsperiode en zonder dubbele kosten.',
      en: 'We know that the closing of CrossFit 020 is difficult news. To help you continue without stress or interruption, we arranged a safe and smooth transition at Mobilis CrossFit. You can start training there right away, with a clear transition period and no double payments.',
    },
    cta: {
      nl: 'Start overstap naar Mobilis',
      en: 'Start your transition to Mobilis',
    },
    reassurance: {
      nl: 'Kies je membership en ga direct verder.',
      en: 'Choose your membership and continue right away.',
    },
  },
  whyMobilis: {
    title: {
      nl: 'Waarom Mobilis',
      en: 'Why Mobilis',
    },
    items: {
      nl: [
        'Coaching op hoog niveau',
        'Rustige, vriendelijke community',
        'Kleinschalig en persoonlijk',
        'Goede bereikbaarheid binnen Amsterdam',
        'WODs, open gym en specialty classes',
      ],
      en: [
        'High-level coaching',
        'Calm, friendly community',
        'Small-scale and personal',
        'Easy to reach in Amsterdam',
        'WODs, open gym and specialty classes',
      ],
    },
  },
  howItWorks: {
    title: {
      nl: 'Hoe de overstap werkt',
      en: 'How the transition works',
    },
    steps: {
      nl: [
        'Kies nu je Mobilis membership.',
        'Maand 1 en 2 betaal je via CrossFit 020 zoals je gewend bent.',
        'Maand 3 is gratis.',
        'Vanaf maand 4 loopt je gekozen membership automatisch verder via Mobilis.',
        'Vanaf maand 4 geldt een normale kalendermaand opzegtermijn.',
        'Vanaf maand 4 kun je upgraden of downgraden.',
      ],
      en: [
        'Choose your Mobilis membership now.',
        'Month 1 and 2 are paid through your current 020 billing.',
        'Month 3 is free.',
        'From month 4, your chosen membership continues automatically at Mobilis.',
        'From month 4, a normal one-calendar-month cancellation period applies.',
        'From month 4, you can upgrade or downgrade.',
      ],
    },
  },
  membership: {
    title: {
      nl: 'Kies je membership',
      en: 'Choose your membership',
    },
    subtitle: {
      nl: 'Je echte abonnement start vanaf dag 1, maar met overgangsvoordelen.',
      en: 'Your actual membership starts from day 1, but with transition benefits.',
    },
    cta: {
      nl: 'Ga verder met aanmelden',
      en: 'Continue to sign up',
    },
    selectFirst: {
      nl: 'Selecteer eerst een membership hierboven',
      en: 'Select a membership above first',
    },
  },
  whatNext: {
    title: {
      nl: 'Wat gebeurt er daarna?',
      en: 'What happens next?',
    },
    steps: {
      nl: [
        'Je kiest je membership.',
        'Je vult je gegevens in.',
        'Je gaat akkoord met automatische incasso via Mobilis vanaf maand 4.',
        'Je geeft toestemming dat je gegevens worden overgedragen.',
        'Je ontvangt een bevestiging in je e-mail.',
      ],
      en: [
        'You choose your membership.',
        'You fill in your details.',
        'You agree to automatic billing at Mobilis from month 4.',
        'You consent to transferring your data.',
        'You receive an email confirmation.',
      ],
    },
  },
  faq: {
    title: {
      nl: 'Veelgestelde vragen',
      en: 'Frequently asked questions',
    },
    subtitle: {
      nl: 'Sluiting CrossFit 020',
      en: 'CrossFit 020 closure',
    },
  },
  contact: {
    title: {
      nl: 'Heb je vragen?',
      en: 'Questions?',
    },
    text: {
      nl: 'Mail ons op',
      en: 'Email us at',
    },
    email: '[mailadres]',
  },
  footer: {
    text: 'CrossFit 020 — Een onderdeel van CrossFit Leiden',
  },
};

// ============================================
// Check Icon Component
// ============================================
function CheckIcon({ className = 'w-5 h-5' }: { className?: string }) {
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
// FAQ Accordion Item Component
// ============================================
interface FAQAccordionProps {
  item: FAQItem;
  lang: Language;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAccordion({ item, lang, isOpen, onToggle }: FAQAccordionProps) {
  return (
    <div className="border-b border-cfl-gray-medium last:border-b-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left group"
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
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
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
// Membership Tile Component
// ============================================
interface MembershipTileProps {
  option: MembershipOption;
  lang: Language;
  isSelected: boolean;
  onSelect: () => void;
}

function MembershipTile({ option, lang, isSelected, onSelect }: MembershipTileProps) {
  return (
    <button
      onClick={onSelect}
      className={`relative w-full p-5 rounded-lg border-2 text-left transition-all duration-200 ${
        isSelected
          ? 'border-cfl-orange bg-cfl-orange/5 shadow-md'
          : 'border-cfl-gray-medium bg-white hover:border-cfl-orange/50 hover:shadow-sm'
      }`}
      role="radio"
      aria-checked={isSelected}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className={`font-semibold text-lg ${isSelected ? 'text-cfl-orange' : 'text-cfl-dark'}`}>
            {option.name[lang]}
          </p>
          <p className="text-gray-600 mt-1">{option.price}/maand</p>
        </div>
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            isSelected ? 'border-cfl-orange bg-cfl-orange' : 'border-gray-300'
          }`}
        >
          {isSelected && <CheckIcon className="w-4 h-4 text-white" />}
        </div>
      </div>
    </button>
  );
}

// ============================================
// Primary CTA Button Component
// ============================================
interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function CTAButton({ children, href = '#', onClick, disabled = false }: CTAButtonProps) {
  const className = `inline-block bg-cfl-orange text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg shadow-md ${
    disabled
      ? 'opacity-50 cursor-not-allowed'
      : 'hover:bg-cfl-orange-hover hover:shadow-lg active:scale-[0.98]'
  }`;

  if (disabled) {
    return (
      <button className={className} disabled>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

// ============================================
// Main Landing Page Component
// ============================================
export default function MobilisLandingPage() {
  const [lang, setLang] = useState<Language>('nl');
  const [selectedMembership, setSelectedMembership] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // GHL form URL placeholder - replace with actual URL
  const ghlFormUrl = '#aanmelden';

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          STICKY HEADER
          ============================================ */}
      <header className="sticky top-0 z-50 bg-white border-b border-cfl-gray-medium">
        <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-xl text-cfl-dark">{copy.header.logo}</span>

          {/* Language Toggle */}
          <div className="flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => setLang('nl')}
              className={`px-3 py-1.5 rounded transition-colors ${
                lang === 'nl'
                  ? 'bg-cfl-dark text-white'
                  : 'text-gray-600 hover:text-cfl-dark hover:bg-cfl-gray-light'
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
                  : 'text-gray-600 hover:text-cfl-dark hover:bg-cfl-gray-light'
              }`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-cfl-dark leading-tight mb-8">
            {copy.hero.title[lang]}
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
            {copy.hero.intro[lang]}
          </p>

          <div className="space-y-3">
            <CTAButton href="#membership">{copy.hero.cta[lang]}</CTAButton>
            <p className="text-sm text-gray-500">{copy.hero.reassurance[lang]}</p>
          </div>
        </div>
      </section>

      {/* ============================================
          WHY MOBILIS SECTION
          ============================================ */}
      <section className="py-16 md:py-20 bg-cfl-gray-light">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-10">
            {copy.whyMobilis.title[lang]}
          </h2>

          <ul className="space-y-4">
            {copy.whyMobilis.items[lang].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cfl-orange/10 flex items-center justify-center mt-0.5">
                  <CheckIcon className="w-4 h-4 text-cfl-orange" />
                </span>
                <span className="text-lg text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS SECTION
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-10">
            {copy.howItWorks.title[lang]}
          </h2>

          <div className="space-y-0">
            {copy.howItWorks.steps[lang].map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-5 py-5 border-b border-cfl-gray-medium last:border-b-0"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cfl-orange text-white font-bold flex items-center justify-center text-lg">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-800 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          MEMBERSHIP SELECTION SECTION
          ============================================ */}
      <section id="membership" className="py-16 md:py-20 bg-cfl-gray-light scroll-mt-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-3">
            {copy.membership.title[lang]}
          </h2>
          <p className="text-gray-600 mb-10">{copy.membership.subtitle[lang]}</p>

          {/* Membership Tiles */}
          <div className="grid gap-4 sm:grid-cols-2 mb-10" role="radiogroup">
            {membershipOptions.map((option) => (
              <MembershipTile
                key={option.id}
                option={option}
                lang={lang}
                isSelected={selectedMembership === option.id}
                onSelect={() => setSelectedMembership(option.id)}
              />
            ))}
          </div>

          {/* CTA after selection */}
          <div className="text-center space-y-3">
            {selectedMembership ? (
              <CTAButton href={ghlFormUrl}>{copy.membership.cta[lang]}</CTAButton>
            ) : (
              <>
                <CTAButton disabled>{copy.membership.cta[lang]}</CTAButton>
                <p className="text-sm text-gray-500">{copy.membership.selectFirst[lang]}</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT HAPPENS NEXT SECTION
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-10">
            {copy.whatNext.title[lang]}
          </h2>

          <ul className="space-y-4">
            {copy.whatNext.steps[lang].map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cfl-yellow flex items-center justify-center mt-0.5">
                  <CheckIcon className="w-4 h-4 text-cfl-dark" />
                </span>
                <span className="text-lg text-gray-800">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <section className="py-16 md:py-20 bg-cfl-gray-light">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-2">
            {copy.faq.title[lang]}
          </h2>
          <p className="text-gray-600 mb-10">{copy.faq.subtitle[lang]}</p>

          <div className="bg-white rounded-xl border border-cfl-gray-medium overflow-hidden">
            {faqItems.map((item, index) => (
              <FAQAccordion
                key={index}
                item={item}
                lang={lang}
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT SECTION
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-cfl-dark mb-4">
            {copy.contact.title[lang]}
          </h2>
          <p className="text-lg text-gray-700">
            {copy.contact.text[lang]}{' '}
            <a
              href={`mailto:${copy.contact.email}`}
              className="text-cfl-orange hover:underline font-medium"
            >
              {copy.contact.email}
            </a>
          </p>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="py-8 bg-cfl-dark text-white">
        <div className="max-w-content mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">{copy.footer.text}</p>
        </div>
      </footer>
    </div>
  );
}
