"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "../../../components/ContactModal";

export default function DochodokPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

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
    { name: "Allianz", logo: "🔷", product: "DDS Klasik" },
    { name: "AEGON", logo: "🌟", product: "Smart DDS" },
    { name: "Generali", logo: "🦁", product: "Perspektíva" },
    { name: "NN", logo: "🔶", product: "Invest DDS" },
    { name: "Prima", logo: "💎", product: "Comfort DDS" },
    { name: "UNIQA", logo: "🛡️", product: "Profit DDS" }
  ];

  const ageGroups = [
    { age: "20-30", monthlyContribution: "30-50€", totalSavings: "40-70k€" },
    { age: "30-40", monthlyContribution: "50-100€", totalSavings: "60-120k€" },
    { age: "40-50", monthlyContribution: "100-200€", totalSavings: "80-160k€" },
    { age: "50-60", monthlyContribution: "150-300€", totalSavings: "100-200k€" }
  ];

  return (
    <main className="min-h-screen">
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Banner Section */}
      <section className="relative min-h-[750px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
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
        
        {/* Advisor photo positioned on the right */}
        <div className="absolute right-4 sm:right-20 md:right-40 lg:right-60 -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 z-10 w-[320px] h-[420px] sm:w-[400px] sm:h-[520px] md:w-[500px] md:h-[650px] lg:w-[600px] lg:h-[750px] xl:w-[650px] xl:h-[850px]">
          <Image
            src="/advisor-photo.png"
            alt="Financial Advisor"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-[750px] md:min-h-[600px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-left md:text-center lg:text-left mb-8 lg:mb-0 lg:pr-8 xl:pr-16 lg:pl-0 lg:-ml-8 px-4 sm:px-0 pt-40 sm:pt-32 md:pt-20 lg:pt-0">
              <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg">
                <span className="block md:hidden">Dôchodok</span>
                <span className="hidden md:block">Dôchodok</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-xl text-white mb-8 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Zabezpečte si dôstojný dôchodok a finančnú nezávislosť v seniorskom veku
              </p>
              <Link href="/formular">
                <button className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base sm:text-lg md:text-lg w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0 block sm:inline-block">
                  Chcem sa zabezpečiť
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Options Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            MOŽNOSTI DÔCHODKOVÉHO SPORENIA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {retirementOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl sm:text-4xl mb-4 text-center">{option.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#202325] mb-4 text-center">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center text-sm md:text-base leading-relaxed">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-[#202325] text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Start Early Section */}
      <section className="py-12 md:py-16 bg-[#202325]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            PREČO ZAČAŤ SKORO?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-[#5ECAD5] mb-4">Zložené úročenie</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Čím skôr začnete, tým viac zarobíte na úrokoch z úrokov</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-[#5ECAD5] mb-4">Nižšie príspevky</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Mladší začiatok znamená nižšie mesačné príspevky</p>
            </div>
          </div>
          
          {/* Age comparison table */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Porovnanie podľa veku</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ageGroups.map((group, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg">
                  <div className="text-[#5ECAD5] font-bold text-base sm:text-lg mb-2">{group.age} rokov</div>
                  <div className="text-xs sm:text-sm text-gray-300 mb-1">Mesačne: {group.monthlyContribution}</div>
                  <div className="text-xs sm:text-sm text-gray-300">Celkom: {group.totalSavings}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Companies Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            DÔCHODKOVÉ SPOLOČNOSTI
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {retirementCompanies.map((company, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{company.logo}</div>
                <h3 className="font-semibold text-[#202325] text-sm mb-1">{company.name}</h3>
                <p className="text-[#5ECAD5] text-xs">{company.product}</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Analýza cieľov</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Zistíme vaše dôchodkové ciele a možnosti</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Výber stratégie</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Navrhneme optimálnu dôchodkovú stratégiu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Spustenie</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Spustíme dôchodkové sporenie podľa plánu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Sledovanie</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Pravidelne sledujeme a optimalizujeme výkonnosť</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}