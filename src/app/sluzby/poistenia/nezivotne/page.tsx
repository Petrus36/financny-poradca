"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "../../../../components/ContactModal";

export default function NezivotnePoisteniePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const insuranceTypes = [
    {
      title: "Majetkové poistenie",
      description: "Ochrana vašej nehnuteľnosti a domácnosti",
      features: ["Komplexné krytie", "Náhrada škôd", "24/7 asistenčná služba"],
      icon: "🏠"
    },
    {
      title: "Úrazové poistenie",
      description: "Finančná pomoc v prípade úrazu alebo invalidity",
      features: ["Vysoké plnenia", "Rýchla výplata", "Široké krytie"],
      icon: "🩹"
    },
    {
      title: "Kritické choroby",
      description: "Finančná podpora pri diagnostikovaní závažných ochorení",
      features: ["Včasná diagnostika", "Jednorazová výplata", "Krytie liečby"],
      icon: "🏥"
    },
    {
      title: "Odpovednosť",
      description: "Ochrana pred nárokmi tretích osôb",
      features: ["Právna ochrana", "Náhrada škôd", "Pokrytie súdnych výdavkov"],
      icon: "⚖️"
    }
  ];

  const insuranceCompanies = [
    { name: "UNIQA", logo: "/Uniqa.webp", specialty: "Majetkové poistenie", isImage: true },
    { name: "Allianz", logo: "/Alianz.png", specialty: "Úrazové poistenie", isImage: true },
    { name: "Generali", logo: "/Generali.jpg", specialty: "Kritické choroby", isImage: true },
    { name: "Kooperativa", logo: "/Kooperativa.jpg", specialty: "Odpovednosť", isImage: true }
  ];

  return (
    <main className="min-h-screen">
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Banner Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Banner background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.svg"
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg">
              Neživotné poistenie
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto font-light drop-shadow-md">
              Ochrana vašej nehnuteľnosti, majetku a zodpovednosti. Zabezpečte si pokoj pre prípad nečakaných udalostí.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
            >
              Bezplatná konzultácia
            </button>
          </div>
        </div>
      </section>

      {/* Expert Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Question - Magazine Style */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#5ECAD5] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              NEŽIVOTNÉ POISTENIE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202325] mb-8 max-w-3xl mx-auto leading-tight">
              Nepreplácajte zbytočne za rôzne poistenia ktoré vás v kríze aj tak neochránia
            </h2>
            <div className="w-20 h-1 bg-[#5ECAD5] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mnohí ľudia roky platia poistky automaticky, no až keď sa stane škoda, zistia, že to dôležité poistené vôbec nemajú a preplácaju za zbytočné. Poistné podmienky sa menia, váš život a situácia tiež. Pomôžem vám zistiť, čo vám dnes skutočne kryje poistenie a za čo zbytočne platíte.
            </p>
          </div>

          {/* Quote Style Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-l-4 border-[#5ECAD5]">
            <div className="flex items-start">
              <div className="text-6xl text-[#5ECAD5] mr-4 leading-none">"</div>
              <div>
                <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                  Veľa nehnuteľností na Slovensku je podpoistených, pretože ich hodnota za posledné roky vzrástla, no poistné sumy ostali nezmenené. Pri škode tak poisťovňa vyplatí len časť nákladov a zvyšok hradí majiteľ.
                </p>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  Až 30 % domácností navyše nemá poistenie vôbec, čo predstavuje vysoké riziko najmä pri požiaroch, záplavách či iných živelných udalostiach.
                </p>
              </div>
            </div>
          </div>

          {/* Two Column Article Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left Column */}
            <article className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-[#202325]">
                  Poistenie nehnuteľnosti
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Pravidelná kontrola a aktualizácia poistenia zabezpečí, že váš majetok bude skutočne chránený a vy sa vyhnete nepríjemným prekvapeniam v kritických momentoch.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <span className="w-5 h-5 bg-green-500 rounded-full mr-2"></span>
                  Kľúčové fakty:
                </h4>
                <p className="text-green-700 text-sm leading-relaxed">
                  Poistenie domácnosti je dôležitou súčasťou finančnej ochrany, pretože kryje škody na zariadení, elektronike a osobnom majetku. Často sa podceňuje, no práve v neočakávaných situáciách dokáže zabrániť vysokým stratám a nepríjemným následkom.
                </p>
              </div>
            </article>

            {/* Right Column */}
            <article className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-[#202325]">
                  Poistenie vozidiel
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Poistenie vozidiel chráni pred finančnými následkami nehôd, poškodenia alebo krádeže. Zásadné sú podmienky zmluvy, tie určujú, kedy a v akom rozsahu poisťovňa škodu preplatí. Navyše ide o zákonnú povinnosť, pri jej zanedbaní hrozia pokuty a ďalšie riziká.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
                  <span className="w-5 h-5 bg-amber-500 rounded-full mr-2"></span>
                  Praktický príklad:
                </h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Poistenie občianskej zodpovednosti kryje škody, ktoré neúmyselne spôsobíte iným – či už na zdraví alebo majetku. V mnohých prípadoch vás môže ochrániť pred vysokými výdavkami, ktoré by ste inak museli znášať sami.
                </p>
              </div>
            </article>
          </div>

          {/* Cestovné poistenie Section */}
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#5ECAD5]">
              <h3 className="text-2xl font-bold text-[#202325] mb-6 text-center">
                Cestovné poistenie
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Cestovné poistenie zabezpečuje úhradu liečebných nákladov, asistenčných služieb a ďalších výdavkov, ktoré vzniknú pri úraze alebo ochorení v zahraničí. Je dôležité preto, že zdravotná starostlivosť mimo Slovenska môže byť výrazne drahšia a bežná európska karta poistenia tieto náklady nekryje v plnom rozsahu.
              </p>
              
              {/* Cost Table */}
              <div className="bg-gradient-to-r from-[#5ECAD5]/10 to-blue-50/50 rounded-lg p-6 border-l-4 border-[#5ECAD5]">
                <h4 className="font-semibold text-[#202325] mb-4 text-center">Liečebné náklady v zahraničí</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chorvátsko:</span>
                      <span className="font-semibold text-[#202325]">2 000 - 5 000 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nemecko, Španielsko:</span>
                      <span className="font-semibold text-[#202325]">5 000 - 10 000 €</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">USA:</span>
                      <span className="font-semibold text-[#202325]">30 000+ €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Thajsko:</span>
                      <span className="font-semibold text-[#202325]">8 000 - 15 000 €</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mt-4 text-center">
                  Cestovné poistenie preto predstavuje rozumnú ochranu pred finančnými rizikami, ktoré by mohli výrazne zaťažiť váš rozpočet.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="bg-gradient-to-r from-[#5ECAD5]/5 to-blue-50/50 rounded-xl p-6 border-l-4 border-[#5ECAD5] mt-12">
            <p className="text-gray-800 leading-relaxed text-center">
              Nečakajte na správny čas - skontrolujte svoje poistenie už dnes. Každý deň bez správneho poistenia je rizikom pre vaše financie a majetok.
            </p>
          </div>

          {/* Simple CTA */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
            >
              Bezplatná konzultácia
            </button>
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            TYPY NEŽIVOTNÉHO POISTENIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {insuranceTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="font-semibold text-[#202325] text-lg mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Companies Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            POISTOVNE
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
            {insuranceCompanies.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-16 sm:h-20 md:h-24">
                {company.isImage ? (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={400}
                    height={200}
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:scale-[1.4] sm:hover:scale-[1.5] md:hover:scale-[1.65] transition-all duration-300 scale-125 sm:scale-140 md:scale-150"
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
      <section className="py-12 md:py-16 bg-[#202325]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-8 md:mb-12">
            VÝHODY NEŽIVOTNÉHO POISTENIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Ochrana majetku</h3>
              <p className="text-gray-300 text-sm">Komplexné krytie nehnuteľnosti a domácnosti</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Rýchla výplata</h3>
              <p className="text-gray-300 text-sm">Finančná pomoc dostupná okamžite po udalosti</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Právna ochrana</h3>
              <p className="text-gray-300 text-sm">Pokrytie súdnych výdavkov a právnych služieb</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-white font-semibold mb-2">24/7 asistenčná služba</h3>
              <p className="text-gray-300 text-sm">Nepretržité poradenstvo a pomoc</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            JAKO TO FUNGUJE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-[#202325] font-semibold mb-2">Analýza rizík</h3>
              <p className="text-gray-600 text-sm">Posúdenie vašich potrieb a rizík</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-[#202325] font-semibold mb-2">Návrh riešenia</h3>
              <p className="text-gray-600 text-sm">Pripravenie optimalného poistného plánu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-[#202325] font-semibold mb-2">Podpis zmluvy</h3>
              <p className="text-gray-600 text-sm">Formálne uzatvorenie poistnej zmluvy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-[#202325] font-semibold mb-2">Ochrana</h3>
              <p className="text-gray-600 text-sm">Okamžitá ochrana a pokračujúca podpora</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#5ECAD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Pripravení začať?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Kontaktujte nás ešte dnes a získajte bezplatnú konzultáciu o neživotnom poistení.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white hover:bg-gray-100 text-[#5ECAD5] font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
          >
            Kontaktovať nás
          </button>
        </div>
      </section>
    </main>
  );
}
