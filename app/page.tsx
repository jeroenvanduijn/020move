'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
// Icon Components
// ============================================
function StarIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function LocationIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function DumbbellIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h2v12H4zM18 6h2v12h-2zM6 10h12v4H6z" />
    </svg>
  );
}

function QuoteIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

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
        'No-nonsense aanpak: techniek eerst, dan intensiteit',
        'Trainers kennen je naam na de eerste les',
        'Geschikt voor beginners én gevorderden',
        'Rekening houden met blessures en beperkingen',
        'Twee locaties: train waar het jou uitkomt',
        'Extra aanbod: Hyrox, Personal Training, Nutrition, Fysiotherapie',
      ],
      en: [
        'High-level coaching',
        'Calm and friendly community',
        'Small-scale and personal',
        'Easy to reach in Amsterdam',
        'WODs, open gym and specialty classes',
        'No-nonsense approach: technique first, then intensity',
        'Coaches know your name after the first class',
        'Suitable for beginners and advanced athletes',
        'Consideration for injuries and limitations',
        'Two locations: train wherever suits you',
        'Extra services: Hyrox, Personal Training, Nutrition, Physiotherapy',
      ],
    },
  },
  aboutMobilis: {
    title: {
      nl: 'Over Mobilis',
      en: 'About Mobilis',
    },
    mission: {
      nl: 'Op een no-nonsense, plezierige wijze jou fitter en gezonder krijgen. Iedereen is anders en daarom hechten wij veel waarde aan kwalitatief goed bewegen op ieders niveau. Resultaat komt met tijd en commitment. Er zijn geen magische pillen of korte routes.',
      en: 'Getting you fitter and healthier in a no-nonsense, enjoyable way. Everyone is different, which is why we value quality movement at every level. Results come with time and commitment. There are no magic pills or shortcuts.',
    },
    stats: {
      rating: '4.9',
      reviews: '114+',
      locations: '2',
    },
    statsLabels: {
      nl: {
        rating: 'sterren op Google',
        reviews: 'reviews',
        locations: 'locaties in Amsterdam',
      },
      en: {
        rating: 'stars on Google',
        reviews: 'reviews',
        locations: 'locations in Amsterdam',
      },
    },
    accessibility: {
      nl: 'Beide locaties toegankelijk met je membership',
      en: 'Both locations accessible with your membership',
    },
  },
  location: {
    title: {
      nl: 'Locatie',
      en: 'Location',
    },
    subtitle: {
      nl: 'Mobilis CrossFit Amstel (hoofdlocatie voor 020-leden)',
      en: 'Mobilis CrossFit Amstel (main location for 020 members)',
    },
    address: 'Daniël Goedkoopstraat 29, 1096 BD Amsterdam',
    email: 'info@mobiliscrossfit.nl',
    mapsUrl: 'https://g.co/kgs/PeLNvde',
    description: {
      nl: 'Gelegen in Amsterdam Amstel, goed bereikbaar met OV en auto.',
      en: 'Located in Amsterdam Amstel, easily accessible by public transport and car.',
    },
    viewOnMaps: {
      nl: 'Bekijk op Google Maps',
      en: 'View on Google Maps',
    },
  },
  moreThanWods: {
    title: {
      nl: 'Meer dan alleen WODs',
      en: 'More than just WODs',
    },
    services: [
      {
        title: { nl: 'Hyrox Training', en: 'Hyrox Training' },
        description: {
          nl: 'Nieuw bij Mobilis! Combinatie van running en functional fitness. Perfect als je van competitie houdt.',
          en: 'New at Mobilis! Combination of running and functional fitness. Perfect if you love competition.',
        },
        icon: 'hyrox',
      },
      {
        title: { nl: 'Personal Training', en: 'Personal Training' },
        description: {
          nl: '1-op-1 begeleiding voor persoonlijke doelen, techniekverbetering of revalidatie.',
          en: 'One-on-one coaching for personal goals, technique improvement or rehabilitation.',
        },
        icon: 'pt',
      },
      {
        title: { nl: 'Nutrition Coaching', en: 'Nutrition Coaching' },
        description: {
          nl: 'Voedingsbegeleiding om je resultaten te versnellen.',
          en: 'Nutrition guidance to accelerate your results.',
        },
        icon: 'nutrition',
      },
      {
        title: { nl: 'Fysiotherapie', en: 'Physiotherapy' },
        description: {
          nl: 'Direct in de box beschikbaar. Geen gedoe met externe afspraken.',
          en: 'Available on-site. No hassle with external appointments.',
        },
        icon: 'physio',
      },
      {
        title: { nl: 'CrossFit Kids', en: 'CrossFit Kids' },
        description: {
          nl: 'Voor kinderen. Spelenderwijs leren bewegen met CrossFit-principes. €100/maand.',
          en: 'For children. Learning to move through play with CrossFit principles. €100/month.',
        },
        icon: 'kids',
      },
      {
        title: { nl: 'CrossFit Masters (55+)', en: 'CrossFit Masters (55+)' },
        description: {
          nl: 'Speciaal programma voor 55-plussers. Veilig en op eigen niveau. €100/maand.',
          en: 'Special program for 55+. Safe and at your own level. €100/month.',
        },
        icon: 'masters',
      },
    ],
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
  pricing: {
    title: {
      nl: 'Tarieven na de overstap',
      en: 'Pricing after transition',
    },
    subtitle: {
      nl: 'Wat kost een membership bij Mobilis na de overgangsperiode?',
      en: 'What does a Mobilis membership cost after the transition period?',
    },
    note: {
      nl: 'Met je membership kun je trainen op beide locaties: Amstel én Buitenveldert.',
      en: 'With your membership you can train at both locations: Amstel and Buitenveldert.',
    },
    plans: [
      { name: { nl: '2x per week', en: '2x per week' }, price: '€102', perSession: '€11,79' },
      { name: { nl: '3x per week', en: '3x per week' }, price: '€112', perSession: '€8,62' },
      { name: { nl: 'Onbeperkt', en: 'Unlimited' }, price: '€129', perSession: '€4,96 (6x/wk)' },
      { name: { nl: '10-rittenkaart', en: '10-class pass' }, price: '€169', perSession: '€16,90', oneTime: true },
      { name: { nl: 'CrossFit Kids', en: 'CrossFit Kids' }, price: '€100', perSession: '€10' },
      { name: { nl: 'CrossFit Masters 55+', en: 'CrossFit Masters 55+' }, price: '€100', perSession: '€10' },
    ],
    headers: {
      nl: { membership: 'Membership', price: 'Prijs', perSession: 'Per training' },
      en: { membership: 'Membership', price: 'Price', perSession: 'Per session' },
    },
    perMonth: {
      nl: '/maand',
      en: '/month',
    },
    oneTime: {
      nl: '(eenmalig)',
      en: '(one-time)',
    },
  },
  reviews: {
    title: {
      nl: 'Wat leden zeggen',
      en: 'What members say',
    },
    viewAll: {
      nl: 'Bekijk alle reviews op Google',
      en: 'View all reviews on Google',
    },
    items: [
      {
        name: 'Abdel',
        subtitle: { nl: 'lid sinds 2015', en: 'member since 2015' },
        text: {
          nl: 'Ik heb bij veel boxen getraind in Amsterdam en train nu inmiddels ruim 9 jaar bij Mobilis. Er zijn weinig boxen die kunnen tippen aan het niveau van de lessen en de sfeer. De coaches zijn top, veel aandacht voor beginners én gevorderde sporters. Ze zorgen ervoor dat je eerst de techniek goed onder de knie hebt, maar weten je ook te pushen om het maximale uit jezelf te halen.',
          en: 'I\'ve trained at many boxes in Amsterdam and have been at Mobilis for over 9 years now. Few boxes can match the level of classes and atmosphere. The coaches are great, with attention for both beginners and advanced athletes.',
        },
      },
      {
        name: 'Mats',
        text: {
          nl: '100% geweldige plek. Echt een tweede thuis voor mij. Coaching is gewoon geweldig goed. Voor beginners sowieso, maar ook voor gevorderden zijn ze heel scherp en maken je een betere atleet.',
          en: '100% amazing place. Really a second home for me. Coaching is simply excellent. Great for beginners, but also sharp for advanced athletes.',
        },
      },
      {
        name: 'Stéphanie',
        text: {
          nl: 'Gezellige box, zowel voor ervaren als beginners welcoming. De trainers houden rekening met blessures en kennen je naam al na de eerste les. Ze schenken veel aandacht aan techniek en bouwen bewegingen secuur op.',
          en: 'Friendly box, welcoming for both experienced and beginners. Trainers consider injuries and know your name after the first class.',
        },
      },
      {
        name: 'Vishal',
        text: {
          nl: 'Beste CrossFit Box van Amsterdam! Goede sfeer, grote ruimte en de allerbeste trainers. Naast de normale WOD heeft Mobilis een breed scala aan specialty classes overdag en \'s avonds.',
          en: 'Best CrossFit Box in Amsterdam! Great atmosphere, spacious and the best trainers. Besides regular WODs, Mobilis offers a wide range of specialty classes.',
        },
      },
    ],
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
  links: {
    title: {
      nl: 'Meer over Mobilis',
      en: 'More about Mobilis',
    },
    items: [
      { label: { nl: 'Website Mobilis', en: 'Mobilis Website' }, url: 'https://mobiliscrossfit.nl/mcf-amstel-home-2025/' },
      { label: { nl: 'Lesrooster', en: 'Class Schedule' }, url: 'https://mobiliscrossfit.nl/lesrooster-amstel/' },
      { label: { nl: 'Team & Coaches', en: 'Team & Coaches' }, url: 'https://mobiliscrossfit.nl/team-amstel/' },
      { label: { nl: 'Proefles boeken', en: 'Book Trial Class' }, url: 'https://mobilis.sportbitapp.nl/cbm/proeflesplanner' },
    ],
  },
  faq: {
    title: {
      nl: 'Veelgestelde vragen',
      en: 'Frequently asked questions',
    },
    subtitle: {
      nl: 'Sluiting CrossFit 020 & overstap naar Mobilis',
      en: 'CrossFit 020 closure & transition to Mobilis',
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
          WHY MOBILIS SECTION (EXPANDED)
          ============================================ */}
      <section className="py-16 md:py-20 bg-cfl-gray-light">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-10">
            {copy.whyMobilis.title[lang]}
          </h2>

          <ul className="grid md:grid-cols-2 gap-4">
            {copy.whyMobilis.items[lang].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cfl-orange/10 flex items-center justify-center mt-0.5">
                  <CheckIcon className="w-4 h-4 text-cfl-orange" />
                </span>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================
          ABOUT MOBILIS SECTION (NEW)
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-6">
            {copy.aboutMobilis.title[lang]}
          </h2>

          <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 pl-4 border-l-4 border-cfl-orange italic">
            "{copy.aboutMobilis.mission[lang]}"
          </blockquote>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-cfl-gray-light rounded-xl p-5 text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <StarIcon className="w-6 h-6 text-cfl-yellow" />
                <span className="text-3xl font-bold text-cfl-dark">{copy.aboutMobilis.stats.rating}</span>
              </div>
              <p className="text-sm text-gray-600">{copy.aboutMobilis.statsLabels[lang].rating}</p>
            </div>
            <div className="bg-cfl-gray-light rounded-xl p-5 text-center">
              <span className="text-3xl font-bold text-cfl-dark block mb-2">{copy.aboutMobilis.stats.reviews}</span>
              <p className="text-sm text-gray-600">{copy.aboutMobilis.statsLabels[lang].reviews}</p>
            </div>
            <div className="bg-cfl-gray-light rounded-xl p-5 text-center">
              <span className="text-3xl font-bold text-cfl-dark block mb-2">{copy.aboutMobilis.stats.locations}</span>
              <p className="text-sm text-gray-600">{copy.aboutMobilis.statsLabels[lang].locations}</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 flex items-center gap-2">
            <DumbbellIcon className="w-5 h-5 text-cfl-orange" />
            {copy.aboutMobilis.accessibility[lang]}
          </p>
        </div>
      </section>

      {/* ============================================
          LOCATION SECTION (NEW)
          ============================================ */}
      <section className="py-16 md:py-20 bg-cfl-gray-light">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-2">
            {copy.location.title[lang]}
          </h2>
          <p className="text-lg text-cfl-orange font-medium mb-6">
            {copy.location.subtitle[lang]}
          </p>

          <div className="bg-white rounded-xl p-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <LocationIcon className="w-5 h-5 text-cfl-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-cfl-dark">{copy.location.address}</p>
                  <p className="text-sm text-gray-600 mt-1">{copy.location.description[lang]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-cfl-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${copy.location.email}`} className="text-cfl-orange hover:underline">
                  {copy.location.email}
                </a>
              </div>
            </div>
          </div>

          <a
            href={copy.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cfl-orange text-white font-semibold py-3 px-6 rounded-md hover:bg-cfl-orange-hover transition-colors"
          >
            <LocationIcon className="w-5 h-5" />
            {copy.location.viewOnMaps[lang]}
          </a>
        </div>
      </section>

      {/* ============================================
          MORE THAN WODS SECTION (NEW)
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-10">
            {copy.moreThanWods.title[lang]}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {copy.moreThanWods.services.map((service, index) => (
              <div key={index} className="bg-cfl-gray-light rounded-xl p-6">
                <h3 className="font-bold text-lg text-cfl-dark mb-2">{service.title[lang]}</h3>
                <p className="text-gray-700">{service.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS SECTION
          ============================================ */}
      <section className="py-16 md:py-20 bg-cfl-gray-light">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-10">
            {copy.howItWorks.title[lang]}
          </h2>

          <div className="space-y-0 bg-white rounded-xl overflow-hidden">
            {copy.howItWorks.steps[lang].map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-5 border-b border-cfl-gray-medium last:border-b-0"
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
          PRICING SECTION (NEW)
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark mb-2">
            {copy.pricing.title[lang]}
          </h2>
          <p className="text-gray-600 mb-8">{copy.pricing.subtitle[lang]}</p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-cfl-dark text-white">
                  <th className="text-left py-4 px-5 font-semibold">{copy.pricing.headers[lang].membership}</th>
                  <th className="text-left py-4 px-5 font-semibold">{copy.pricing.headers[lang].price}</th>
                  <th className="text-left py-4 px-5 font-semibold">{copy.pricing.headers[lang].perSession}</th>
                </tr>
              </thead>
              <tbody>
                {copy.pricing.plans.map((plan, index) => (
                  <tr key={index} className="border-b border-cfl-gray-medium last:border-b-0">
                    <td className="py-4 px-5 font-medium text-cfl-dark">{plan.name[lang]}</td>
                    <td className="py-4 px-5 text-gray-700">
                      {plan.price}
                      {plan.oneTime ? (
                        <span className="text-sm text-gray-500 ml-1">{copy.pricing.oneTime[lang]}</span>
                      ) : (
                        <span className="text-sm text-gray-500">{copy.pricing.perMonth[lang]}</span>
                      )}
                    </td>
                    <td className="py-4 px-5 text-gray-700">{plan.perSession}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 flex items-center gap-2 bg-cfl-yellow/20 border border-cfl-yellow rounded-lg px-4 py-3">
            <DumbbellIcon className="w-5 h-5 text-cfl-orange flex-shrink-0" />
            {copy.pricing.note[lang]}
          </p>
        </div>
      </section>

      {/* ============================================
          REVIEWS SECTION (NEW)
          ============================================ */}
      <section className="py-16 md:py-20 bg-cfl-gray-light">
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-cfl-yellow" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-cfl-dark">
              {copy.reviews.title[lang]}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {copy.reviews.items.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <QuoteIcon className="w-8 h-8 text-cfl-orange/20 mb-3" />
                <p className="text-gray-700 mb-4 leading-relaxed">{review.text[lang]}</p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-cfl-dark">{review.name}</span>
                  {review.subtitle && (
                    <span className="text-sm text-gray-500">— {review.subtitle[lang]}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href={copy.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cfl-orange hover:underline font-medium"
          >
            {copy.reviews.viewAll[lang]}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* ============================================
          START DATE SECTION
          ============================================ */}
      <section className="py-16 md:py-20">
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
                className="inline-flex items-center gap-2 bg-cfl-gray-light border border-cfl-gray-medium rounded-lg px-5 py-3"
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
      <section className="py-16 md:py-20 bg-cfl-dark text-white">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {copy.ctaSection.title[lang]}
          </h2>

          <CTAButton href="/aanmelden">{copy.ctaSection.cta[lang]}</CTAButton>
        </div>
      </section>

      {/* ============================================
          LINKS SECTION
          ============================================ */}
      <section className="py-12 md:py-16">
        <div className="max-w-content mx-auto px-6">
          <h3 className="font-semibold text-cfl-dark mb-4">{copy.links.title[lang]}</h3>
          <div className="flex flex-wrap gap-4">
            {copy.links.items.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cfl-orange hover:underline"
              >
                {link.label[lang]}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
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
