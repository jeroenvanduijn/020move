'use client';

import React, { useState } from 'react';

// ============================================
// FAQ Data
// ============================================
const faqItems = [
  {
    question: 'Waarom sluit CrossFit 020?',
    answer: 'We hebben lang gezocht naar een nieuwe locatie in Amsterdam, maar de huurprijzen zijn zo hoog geworden dat we geen financieel gezonde optie konden vinden. Daarnaast is er nog een restschuld uit het verleden, waardoor verhuizen binnen Amsterdam niet haalbaar is.',
    englishSummary: 'We could not find an affordable new location in Amsterdam and the business cannot continue here.',
  },
  {
    question: 'Wanneer is de laatste dag dat we kunnen trainen?',
    answer: 'De definitieve einddatum is [datum invullen]. Tot die datum blijven we open en draaien we de lessen zoals normaal.',
    englishSummary: 'Last training day is [insert date].',
  },
  {
    question: 'Komt er een afscheidsworkout?',
    answer: 'Ja. We organiseren een speciale laatste workout om samen af te sluiten. De datum en tijden maken we snel bekend.',
    englishSummary: 'Yes, we will host a farewell workout. Details coming soon.',
  },
  {
    question: 'Wat gebeurt er met mijn abonnement?',
    answer: 'Niemand betaalt voor een periode waarin de gym niet open is. We sturen een aparte mail met alle details over incasso, vooruitbetalingen, credits en overige vragen.',
    englishSummary: 'You will not pay for a period we are not open. A separate email will explain all details.',
  },
  {
    question: 'Waarom is Fabian geen nieuwe eigenaar geworden?',
    answer: 'Fabian heeft serieus gekeken naar de mogelijkheid om 020 over te nemen. Uiteindelijk heeft hij besloten deze stap niet te zetten. Dat respecteren we volledig, maar het betekent dat er niemand is om de gym in Amsterdam voort te zetten.',
    englishSummary: 'Fabian decided not to take over the gym.',
  },
  {
    question: 'Gaat CrossFit 020 definitief dicht of verhuizen jullie?',
    answer: 'De BV verhuist naar Leiden. Dat betekent dat CrossFit 020 in Amsterdam stopt, maar dat de onderneming op een nieuwe plek verder gaat.',
    englishSummary: 'The company will move to Leiden, which means the Amsterdam location will close.',
  },
  {
    question: 'Wat is het aanbod bij Mobilis CrossFit?',
    answer: (
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Jullie betalen nog 2 maanden aan CrossFit 020</li>
        <li>Jullie mogen 3 maanden trainen bij Mobilis CrossFit</li>
        <li>Daarna kun je kiezen of je lid wilt blijven bij Mobilis</li>
        <li>Aanmelden gaat via onze speciale pagina</li>
      </ul>
    ),
    englishSummary: 'Pay 2 months at 020, train 3 months at Mobilis.',
  },
  {
    question: 'Is Mobilis een goede vervanger?',
    answer: 'We geloven dat de kwaliteit van coaching, sfeer en community bij Mobilis heel goed past bij wat jullie gewend zijn. Daarom bevelen we deze gym met vertrouwen aan.',
    englishSummary: 'Yes. Strong coaching and community.',
  },
  {
    question: 'Wat als Mobilis geen optie voor mij is?',
    answer: 'Dat begrijpen we helemaal. Jullie zijn vrij om je eigen nieuwe trainingsplek te kiezen. Het aanbod bij Mobilis is een mogelijkheid, geen verplichting.',
    englishSummary: 'Mobilis is optional.',
  },
  {
    question: 'Wat gebeurt er met mijn credits, strippen of PT-sessies?',
    answer: 'In de aparte betalingsmail leggen we precies uit wat hiermee gebeurt per situatie. We zorgen dat niemand iets kwijt is zonder duidelijkheid.',
    englishSummary: 'Details will follow in the finance email.',
  },
  {
    question: 'Kan ik meeschrijven naar Leiden?',
    answer: 'De afstand is voor de meeste leden niet realistisch, maar je bent altijd welkom wanneer de nieuwe locatie opent. We weten nog niet wanneer dat zal zijn.',
    englishSummary: 'You are welcome in Leiden in the future, but timeline is unknown.',
  },
  {
    question: 'Hoe kan ik vragen stellen?',
    answer: 'Mail ons op [mailadres]. We proberen iedereen zo snel mogelijk te helpen.',
    englishSummary: 'Email us at [email].',
  },
];

// ============================================
// FAQ Accordion Component
// ============================================
interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  englishSummary: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, englishSummary, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left hover:text-cfl-orange transition-colors"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg pr-4">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 border-current transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-700 leading-relaxed">
          {answer}
        </div>
        <p className="mt-3 text-sm text-gray-500 italic">
          EN: {englishSummary}
        </p>
      </div>
    </div>
  );
}

// ============================================
// Check Icon Component
// ============================================
function CheckIcon() {
  return (
    <svg
      className="w-6 h-6 text-cfl-orange flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
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
// CTA Button Component
// ============================================
interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function CTAButton({ children, href = '#aanmelden', onClick }: CTAButtonProps) {
  const className = "inline-block bg-cfl-orange hover:bg-cfl-orange-dark text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg shadow-md hover:shadow-lg";

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

// ============================================
// Main Landing Page Component
// ============================================
export default function MobilisLandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          HERO / INTRO SECTIE
          ============================================ */}
      <section className="bg-gradient-to-b from-cfl-gray-light to-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-cfl-dark leading-tight mb-6">
            Jouw trainingsplek na CrossFit 020: welkom bij Mobilis CrossFit
          </h1>

          <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
            <p>
              We weten dat het sluiten van onze locatie in Amsterdam geen makkelijk bericht is.
              Daarom willen we jullie een goede, veilige en warme plek bieden om jullie training voort te zetten.
            </p>
            <p>
              Mobilis CrossFit is een gym waar de coaching, sfeer en community dicht in de buurt komt
              van wat jullie gewend zijn bij 020.
            </p>
            <p className="font-medium text-cfl-dark">
              Daarom hebben we speciaal voor jullie een tijdelijk overstap-aanbod geregeld.
            </p>
          </div>

          <div className="space-y-3">
            <CTAButton>Start overstap naar Mobilis</CTAButton>
            <p className="text-sm text-gray-500">
              Je zit nergens aan vast na 3 maanden.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          HET AANBOD SECTIE
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-6">
            Het aanbod voor CrossFit 020 leden
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Dit is wat we voor jullie hebben geregeld:
          </p>

          <div className="bg-cfl-gray-light rounded-xl p-6 md:p-8 mb-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-lg text-cfl-dark">
                  Jullie betalen nog <strong>2 maanden</strong> aan CrossFit 020
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-lg text-cfl-dark">
                  Jullie mogen <strong>3 maanden full access</strong> trainen bij Mobilis CrossFit
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-lg text-cfl-dark">
                  Na deze 3 maanden kun je kiezen of je verder wilt als lid bij Mobilis
                </span>
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-600 bg-cfl-yellow/20 border-l-4 border-cfl-yellow px-4 py-3 rounded-r">
            Dit aanbod is exclusief voor onze leden en alleen geldig via deze pagina.
          </p>
        </div>
      </section>

      {/* ============================================
          WAAROM MOBILIS SECTIE
          ============================================ */}
      <section className="py-16 md:py-20 bg-cfl-gray-light">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-8">
            Waarom we Mobilis aanbevelen
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              'Coaching op hoog niveau',
              'Rustige, vriendelijke community',
              'Kleinschalig en persoonlijk',
              'Goede bereikbaarheid binnen Amsterdam',
              'WODs, open gym en specialty classes',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <CheckIcon />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            We willen dat jullie op een plek terechtkomen waar kwaliteit en aandacht centraal staan.
            Mobilis voelt voor ons als een gym waar jullie echt goed terecht kunnen.
          </p>
        </div>
      </section>

      {/* ============================================
          HOE WERKT AANMELDEN SECTIE
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-8">
            Hoe werkt aanmelden?
          </h2>

          <div className="space-y-0 mb-10">
            {[
              'Klik op de knop hieronder',
              'Vul je gegevens in',
              'Geef toestemming om je over te zetten naar Mobilis',
              'Je krijgt een bevestiging en toegang tot hun systeem',
              'Je kunt direct beginnen met trainen vanaf de datum dat 020 sluit',
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-b-0">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cfl-orange text-white font-bold flex items-center justify-center text-lg">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-800 pt-2">{step}</p>
              </div>
            ))}
          </div>

          <CTAButton>Start overstap naar Mobilis</CTAButton>
        </div>
      </section>

      {/* ============================================
          BELANGRIJK OM TE WETEN SECTIE
          ============================================ */}
      <section className="py-16 md:py-20 bg-cfl-dark text-white">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Belangrijk om te weten
          </h2>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cfl-orange/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-cfl-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-lg">
                  <strong>Dit aanbod is vrijblijvend.</strong>
                </p>
                <p className="text-gray-300">Je zit nergens aan vast na de 3 maanden.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cfl-orange/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-cfl-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-lg">
                  <strong>Je betaalt niet dubbel.</strong>
                </p>
                <p className="text-gray-300">De betaling voor deze maanden loopt gewoon via CrossFit 020.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cfl-orange/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-cfl-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-lg">
                  <strong>Mobilis neemt daarna het lidmaatschap over</strong>
                </p>
                <p className="text-gray-300">...als je wilt blijven.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================
          KLAAR OM OVER TE STAPPEN SECTIE
          ============================================ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-cfl-gray-light">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-6">
            Klaar om over te stappen?
          </h2>

          <div className="space-y-4">
            <CTAButton>Start overstap naar Mobilis</CTAButton>
            <p className="text-gray-600">
              Na het invullen ontvang je automatisch een bevestiging.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTIE
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-2">
            FAQ
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Sluiting CrossFit 020
          </p>

          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                englishSummary={item.englishSummary}
                isOpen={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER / CONTACT SECTIE
          ============================================ */}
      <footer className="py-12 bg-cfl-dark text-white">
        <div className="max-w-content mx-auto px-6 text-center">
          <p className="text-lg mb-2">
            Heb je vragen?
          </p>
          <p className="text-xl">
            Mail ons op{' '}
            <a
              href="mailto:[mailadres]"
              className="text-cfl-orange hover:text-cfl-yellow transition-colors underline"
            >
              [mailadres]
            </a>
          </p>

          <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
            <p>CrossFit 020 &mdash; Een onderdeel van CrossFit Leiden</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
