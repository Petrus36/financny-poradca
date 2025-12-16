"use client";

import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import ContactFormModal from "../../../components/ContactFormModal";
import OptimizedImage from "../../../components/OptimizedImage";

export default function DochodokPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const retirementOptions = [
    {
      title: "III. pilier - DDS",
      description: "Doplnkové dôchodkové sporenie s daňovými výhodami",
      features: ["Daňové úľavy", "Štátny príspevok", "Garantovaný výnos"],
      icon: "🏛️"
    },
    {
      title: "Dôchodkové poistenie",
      description: "Životné poistenie s dôchodkovou rentou",
      features: ["Garantovaná renta", "Ochrana rodiny", "Flexibilné výplaty"],
      icon: "🛡️"
    },
    {
      title: "Investičné sporenie",
      description: "Dlhodobé investovanie na dôchodok",
      features: ["Vyššie výnosy", "Rôzne stratégie", "Flexibilita"],
      icon: "📈"
    }
  ];

  const retirementCompanies = [
    { name: "TatraBanka", logo: "/TatraBanka.webp", product: "DDS Klasik", isImage: true, extraLarge: false },
    { name: "Generali", logo: "/VUBGenerali_logo.png", product: "Perspektíva", isImage: true, extraLarge: false },
    { name: "NN", logo: "/NN.webp", product: "Invest DDS", isImage: true, extraLarge: false },
    { name: "UNIQA", logo: "/Uniqa.webp", product: "Profit DDS", isImage: true, extraLarge: true },
    { name: "Rentea", logo: "/Rentea_logo.jpeg", product: "Profit DDS", isImage: true, extraLarge: false }
  ];

  const ageGroups = [
    { age: "20-30", monthlyContribution: "30-50€", totalSavings: "40-70k€" },
    { age: "30-40", monthlyContribution: "50-100€", totalSavings: "60-120k€" },
    { age: "40-50", monthlyContribution: "100-200€", totalSavings: "80-160k€" },
    { age: "50-60", monthlyContribution: "150-300€", totalSavings: "100-200k€" }
  ];

  return (
    <>
      <Head>
        <link rel="preload" href="/dôchodok.svg" as="image" type="image/svg+xml" />
      </Head>
      <main className="min-h-screen">
        {/* Contact Modal */}
        <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Banner Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Banner background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/dôchodok.svg"
            alt="Banner background"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        
        
        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-left md:text-left lg:text-left mb-8 md:mb-0 lg:mb-0 lg:pr-8 xl:pr-16 lg:pl-0 lg:ml-8 px-4 sm:px-0 pt-40 sm:pt-32 md:pt-0 lg:pt-0 md:pl-12 lg:pl-16 md:max-w-[55%] md:mr-auto">
              <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg" style={{fontFamily: 'Monda, sans-serif'}}>
                <span className="block md:hidden">Renta a dôchodok</span>
                <span className="hidden md:block">Renta a dôchodok</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-xl text-white mb-8 max-w-xl md:max-w-3xl lg:max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Zabezpečte si dôstojný dôchodok a finančnú nezávislosť.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base sm:text-lg md:text-lg w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0 block sm:inline-block"
              >
                Chcem sa zabezpečiť
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Question - Magazine Style */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#5ECAD5] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              DÔCHODOK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202325] mb-8 max-w-3xl mx-auto leading-tight">
              Prečo je dôležité myslieť na dôchodok už dnes?
            </h2>
            <div className="w-20 h-1 bg-[#5ECAD5] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Až 90 % ľudí na Slovensku sa dožije dôchodkového veku – životnej etapy, ktorá môže trvať aj niekoľko desaťročí. Napriek tomu na ňu väčšina z nás myslí až príliš neskoro. Stabilné finančné zázemie a dlhodobé plánovanie sú kľúčom k zachovaniu nezávislosti a životného štandardu. Pravidelné sporenie a investovanie vám pomôžu pripraviť sa na dôchodok bez starostí.
            </p>
          </div>

          {/* Quote Style Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-l-4 border-[#5ECAD5]">
            <div className="flex items-start">
              <div className="text-6xl text-[#5ECAD5] mr-4 leading-none">&ldquo;</div>
              <div>
                <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                Čas je kľúčový faktor úspešného dôchodkového sporenia. Čím skôr začneš, tým viac za teba pracuje zložené úročenie – peniaze majú priestor rásť a vytvárať zisk aj z už dosiahnutých výnosov.
                </p>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                Skorý štart zároveň znamená, že tvoj cieľ dosiahneš s menším mesačným vkladom. Ak začneš dnes, stačí odkladať menej. Ak to odložíš o pár rokov, budeš musieť prispievať podstatne viac, aby si dosiahol rovnaký výsledok.
                </p>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                Investovanie na dôchodok nie je o dokonalom načasovaní, ale o rozhodnutí začať. Každý mesiac, ktorý nevyužiješ, je mesiac, kedy tvoje peniaze mohli pracovať pre teba.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-12">
            <div className="max-w-3xl mx-auto">
              <OptimizedImage
                src="/image copy.png"
                alt="Dôchodok - Finančné poradenstvo"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-cover shadow-lg"
                priority={false}
                lazy={true}
              />
            </div>
          </div>

          {/* Three Column Article Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-24 max-w-7xl mx-auto lg:justify-start">
            
            {/* Left Column */}
            <article className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#202325]">
                  Koľko majetku potrebujete na dôchodok?
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-base">
                Tento graf ukazuje, aký majetok je potrebný na dlhodobé vyplácanie renty vo výške 1000 € mesačne pri priemernom zhodnotení investície približne 4 % nad infláciu. Pri počiatočnom kapitáli 260 000 € dokáže takáto renta pokryť vaše výdavky prakticky neobmedzene.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-[#202325] mb-2 flex items-center text-base">
                  <span className="w-4 h-4 bg-[#5ECAD5] rounded-full mr-2"></span>
                  Kľúčové fakty:
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tento model ilustruje, ako správne nastavené čerpanie renty zabezpečí finančnú stabilitu na celé desaťročia.
                </p>
              </div>
            </article>

            {/* Middle Column */}
            <article className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#202325]">
                  Ako si vytvoriť finančnú rezervu na dôchodok?
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-base">
                Pre 30-ročného človeka, ktorý chce mať pri odchode do dôchodku k dispozícii približne 300 000 €, je potrebné mesačne investovať okolo 181 € pri očakávanom ročnom zhodnotení 7 %. Budovanie majetku tak prebieha dlhodobo a systematicky.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-[#202325] mb-2 flex items-center text-base">
                  <span className="w-4 h-4 bg-[#5ECAD5] rounded-full mr-2"></span>
                  Dôležité upozornenie:
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Po dosiahnutí cieľa je však dôležité správne majetok spravovať, aby ste si zachovali jeho hodnotu a zabezpečili si pravidelný príjem na dôchodku. Pomôžeme vám vybrať spoľahlivého partnera, ktorý vám s tým poradí.
                </p>
              </div>
            </article>

            {/* Right Column */}
            <article className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#202325]">
                  Prečo začať investovať čím skôr?
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-base">
                Tento graf ukazuje, ako začiatok investovania zásadne ovplyvňuje výšku mesačnej sumy potrebnej na dosiahnutie finančného cieľa. Čím skôr začnete, tým viac využijete efekt zloženého úročenia – vaše peniaze totiž postupne rastú rýchlejšie a vy môžete investovať menšie sumy.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-[#202325] mb-2 flex items-center text-base">
                  <span className="w-4 h-4 bg-[#5ECAD5] rounded-full mr-2"></span>
                  Praktický príklad:
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Naopak, odkladanie začiatku investovania vedie k výraznému zvýšeniu potrebných mesačných platieb. Preto je rozumné začať budovať rezervu hneď, aj s malými sumami.
                </p>
              </div>
            </article>
          </div>

          {/* Two Images Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OptimizedImage
                  src="/image copy 4.png"
                  alt="Dôchodok - Finančné poradenstvo 1"
                  width={1200}
                  height={950}
                  className="w-full h-auto rounded-xl object-cover"
                  priority={false}
                  lazy={true}
                />
                <OptimizedImage
                  src="/image copy 5.png"
                  alt="Dôchodok - Finančné poradenstvo 2"
                  width={1000}
                  height={750}
                  className="w-full h-auto rounded-xl object-cover"
                  priority={false}
                  lazy={true}
                />
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="bg-gradient-to-r from-[#5ECAD5]/5 to-blue-50/50 rounded-xl p-6 border-l-4 border-[#5ECAD5] mt-12">
            <p className="text-gray-800 leading-relaxed text-center">
              Súčasný dôchodkový systém čelí výzvam spôsobeným starnutím populácie a znižovaním počtu pracujúcich na jedného dôchodcu. Tento trend spôsobuje, že v budúcnosti štátne dávky nebudú stačiť na zabezpečenie dôstojného života. Ľudia, ktorí pôjdu do dôchodku o 30–50 rokov, by sa mali pripraviť na nižší alebo dokonca žiadny štátny dôchodok. Vytvorte si preto vlastný finančný plán a budujte si nezávislosť včas.
            </p>
          </div>

          {/* Warning Section */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8">
            <h4 className="font-bold text-red-800 mb-3 flex items-center text-lg">
              <span className="w-5 h-5 bg-red-500 rounded-full mr-3"></span>
              Prečo sa nespoliehať len na štátny dôchodok?
            </h4>
            <div className="space-y-3 text-red-700 text-sm leading-relaxed">
              <p>• Slovensko má čoraz menej pracujúcich a čoraz viac dôchodcov – systém je postavený na priebežnom financovaní, čo znamená, že dnešní pracujúci platia dnešné dôchodky.</p>
              <p>• Lenže populácia starne a pôrodnosť klesá. Demografický vývoj je neúprosný – o pár rokov bude na jedného dôchodcu pripadať menej než jeden pracujúci.</p>
              <p>• Sociálna poisťovňa už dnes čelí výpadkom a deficitom, ktoré štát dotuje z rozpočtu.</p>
              <p>• Výsledok? Štátny dôchodok v budúcnosti pravdepodobne nepokryje ani základné životné náklady, nieto dôstojnú starobu.</p>
              <p>• Práve preto je dôležité mať vlastné rezervy, investície alebo doplnkové zabezpečenie. Spoliehať sa výlučne na štát dnes nie je istota – ale riziko.</p>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
            >
              Bezplatná konzultácia
            </button>
            <p className="text-gray-500 text-sm mt-3">
              Bez záväzkov • Individuálny prístup
            </p>
          </div>
        </div>
      </section>



      

      {/* Why Start Early Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] mb-8">
            PREČO ZAČAŤ SKORO?
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#5ECAD5]">
            <div className="flex items-start">
              <div className="text-6xl text-[#5ECAD5] mr-4 leading-none">&ldquo;</div>
              <div className="text-left">
                <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                  Zložené úročenie je ôsmy div sveta. Ten, kto mu rozumie, zarába na ňom, ten, kto mu nerozumie, platí ho.
                </p>
                <p className="text-gray-800 font-semibold text-right">
                  ALBERT EINSTEIN
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Companies Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            DÔCHODKOVÉ SPOLOČNOSTI
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            {retirementCompanies.map((company, index) => (
              <div key={index} className="flex items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
                {company.isImage ? (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={400}
                    height={200}
                    className={`w-auto object-contain hover:scale-110 sm:hover:scale-125 md:hover:scale-[1.35] transition-all duration-300 ${
                      company.name === 'Rentea' || company.name === 'TatraBanka'
                        ? 'h-12 sm:h-14 md:h-16 lg:h-18' 
                        : 'h-14 sm:h-16 md:h-20 lg:h-24'
                    }`}
                  />
                ) : (
                  <span className="text-3xl">{company.logo}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            VÝHODY DÔCHODKOVÉHO SPORENIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-[#202325] mb-4">💰 Daňové úľavy</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Až 180€ ročne na daniach + úľavy za príspevky</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-[#202325] mb-4">🎁 Štátny príspevok</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Štát prispieva k vašim úsporám dodatočnými peniazmi</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-[#202325] mb-4">🔒 Garancia</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Garantované výnosy a ochrana vložených prostriedkov</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-[#202325] mb-4">🔄 Flexibilita</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Možnosť zmeny príspevkov a prevodov medzi spoločnosťami</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            AKO TO PREBIEHA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Analýza cieľov a potrieb</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Návrh vhodnej stratégie</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Realizácia</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Pravidelný servis</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}