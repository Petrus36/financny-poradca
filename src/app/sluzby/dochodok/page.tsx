"use client";

import React, { useState } from "react";
import Image from "next/image";
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
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Banner background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.png"
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
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg">
                DÔCHODOK
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Zabezpečte si dôstojný dôchodok a finančnú nezávislosť v seniorskom veku
              </p>
              <button 
                onClick={openModal}
                className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto"
              >
                Naplánovať dôchodok
              </button>
            </div>
            
            {/* Right side - Retirement Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="w-64 md:w-72 h-80 md:h-96 bg-gray-200 rounded-lg shadow-2xl flex items-end justify-center overflow-hidden">
                <span className="text-gray-500 text-lg mb-4">[Retirement Image]</span>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {retirementOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{option.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#202325] mb-4 text-center">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-3"></div>
                      <span className="text-[#202325]">{feature}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Zložené úročenie</h3>
              <p className="text-gray-300">Čím skôr začnete, tým viac zarobíte na úrokoch z úrokov</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Nižšie príspevky</h3>
              <p className="text-gray-300">Mladší začiatok znamená nižšie mesačné príspevky</p>
            </div>
          </div>
          
          {/* Age comparison table */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Porovnanie podľa veku</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {ageGroups.map((group, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg">
                  <div className="text-[#5ECAD5] font-bold text-lg mb-2">{group.age} rokov</div>
                  <div className="text-sm text-gray-300 mb-1">Mesačne: {group.monthlyContribution}</div>
                  <div className="text-sm text-gray-300">Celkom: {group.totalSavings}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#202325] mb-4">💰 Daňové úľavy</h3>
              <p className="text-gray-600">Až 180€ ročne na daniach + úľavy za príspevky</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#202325] mb-4">🎁 Štátny príspevok</h3>
              <p className="text-gray-600">Štát prispieva k vašim úsporám dodatočnými peniazmi</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#202325] mb-4">🔒 Garancia</h3>
              <p className="text-gray-600">Garantované výnosy a ochrana vložených prostriedkov</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#202325] mb-4">🔄 Flexibilita</h3>
              <p className="text-gray-600">Možnosť zmeny príspevkov a prevodov medzi spoločnosťami</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            AKO TO PREBIEHA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Analýza cieľov</h3>
              <p className="text-gray-600 text-sm">Zistíme vaše dôchodkové ciele a možnosti</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Výber stratégie</h3>
              <p className="text-gray-600 text-sm">Navrhneme optimálnu dôchodkovú stratégiu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Spustenie</h3>
              <p className="text-gray-600 text-sm">Spustíme dôchodkové sporenie podľa plánu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Sledovanie</h3>
              <p className="text-gray-600 text-sm">Pravidelne sledujeme a optimalizujeme výkonnosť</p>
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Calculator Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8">
            DÔCHODKOVÁ KALKULAČKA
          </h2>
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-[#202325] font-medium mb-2">Váš vek</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent"
                  placeholder="30"
                />
              </div>
              <div>
                <label className="block text-[#202325] font-medium mb-2">Mesačný príspevok (€)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent"
                  placeholder="100"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[#202325] font-medium mb-2">Očakávaný ročný výnos (%)</label>
                <input 
                  type="number" 
                  step="0.1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent"
                  placeholder="4.5"
                />
              </div>
            </div>
            <div className="text-center">
              <button 
                onClick={openModal}
                className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg w-full md:w-auto"
              >
                Vypočítať dôchodok
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}