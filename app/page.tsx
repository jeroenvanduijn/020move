'use client';

import React, { useState } from 'react';
import {
  Header,
  Footer,
  CheckIcon,
  CalendarIcon,
  CTAButton,
  FAQAccordion,
  faqItems,
  type Language,
} from '../components/shared';

// ============================================
// Copy Object (Landing Page Text)
// ============================================
const copy = {
  hero: {
    title: {
      nl: 'Jouw trainingsplek na CrossFit 020',
      en: 'Your training home after CrossFit 020',
    },
    intro: {
      nl: 'We weten dat het sluiten van CrossFit 020 moeilijk nieuws is. Daarom hebben we een veilige, warme en zorgeloze overgang geregeld bij Mobilis CrossFit. Je kunt daar direct doortrainen, met een duidelijke overgangsperiode en zonder verwarring over kosten.',
      en: 'We know the closing of CrossFit 020 is difficult news. To help you continue without interruption, we arranged a smooth and clear transition at Mobilis CrossFit. You can start training right away, with no confusion about payments.',
    },
    cta: {
      nl: 'Kies je membership',
      en: 'Choose your membership',
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
        'Calm and friendly community',
        'Small-scale and personal',
        'Easy to reach in Amsterdam',
        'WODs, open gym and specialty classes',
      ],
    },
  },
  howItWorks: {
    title: {
      nl: 'Hoe werkt de overstap',
      en: 'How the transition works',
    },
    steps: {
      nl: [
        'Je kiest nu je Mobilis membership.',
        'Je betaalt direct voor 2 maanden en je krijgt 3 maanden trainen.',
        'Je kiest zelf je startdatum (21 december of een datum in januari).',
        'Deze actie is geldig t/m vrijdag 19 december.',
        'Vanaf maand 4 start de automatische betaling via Mobilis.',
        'Vanaf maand 4 geldt een kalendermaand opzegtermijn.',
        'Vanaf maand 4 kun je upgraden of downgraden.',
      ],
      en: [
        'Choose your Mobilis membership now.',
        'You pay for 2 months and receive 3 months of training.',
        'You can choose your own start date (21 December or a date in January).',
        'This offer is valid until Friday 19 December.',
        'From month 4, automatic billing starts at Mobilis.',
        'From month 4, a one-calendar-month cancellation period applies.',
        'From month 4, you may upgrade or downgrade.',
      ],
    },
  },
  startDate: {
    title: {
      nl: 'Kies je startdatum',
      en: 'Choose your start date',
    },
    text: {
      nl: 'Je kunt zelf je eerste dag kiezen. Wil je al starten op 21 december, of liever in januari? Beide kan. Zorg er wel voor dat je vóór vrijdag 19 december bent aangemeld, zodat we alles tijdig kunnen verwerken.',
      en: 'You can choose your own start date. Want to begin on 21 December, or rather in January? Both are possible. Just complete your sign-up before Friday 19 December so we can process everything in time.',
    },
    options: {
      nl: ['Start 21 december', 'Start in januari'],
      en: ['Start 21 December', 'Start in January'],
    },
  },
  ctaSection: {
    title: {
      nl: 'Klaar om te starten?',
      en: 'Ready to start?',
    },
    cta: {
      nl: 'Kies je membership',
      en: 'Choose your membership',
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
};

// ============================================
// Landing Page Component
// ============================================
export default function LandingPage() {
  const [lang, setLang] = useState<Language>('nl');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} setLang={setLang} />

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

          <CTAButton href="/aanmelden">{copy.hero.cta[lang]}</CTAButton>
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
          START DATE SECTION
          ============================================ */}
      <section className="py-16 md:py-20 bg-cfl-gray-light">
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <CalendarIcon className="w-8 h-8 text-cfl-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark">
              {copy.startDate.title[lang]}
            </h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {copy.startDate.text[lang]}
          </p>

          <div className="flex flex-wrap gap-4">
            {copy.startDate.options[lang].map((option, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 bg-white border border-cfl-gray-medium rounded-lg px-5 py-3"
              >
                <CheckIcon className="w-5 h-5 text-cfl-orange" />
                <span className="font-medium text-cfl-dark">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-8">
            {copy.ctaSection.title[lang]}
          </h2>

          <CTAButton href="/aanmelden">{copy.ctaSection.cta[lang]}</CTAButton>
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

      <Footer lang={lang} />
    </div>
  );
}
