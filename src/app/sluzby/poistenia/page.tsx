"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactModal from "../../../components/ContactModal";

export default function PoistieniaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const insuranceTypes = [
    {
      title: "Životné poistenie",
      description: "Zabezpečte svoju rodinu pre prípad nečakaných situácií",
      features: ["Ochrana rodiny", "Daňové úľavy", "Investičná zložka"],
      icon: "👨‍👩‍👧‍👦"
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
      title: "Poistenie majetku",
      description: "Ochrana vašej nehnuteľnosti a domácnosti",
      features: ["Komplexné krytie", "Náhrada škôd", "24/7 asistenčná služba"],
      icon: "🏠"
    }
  ];

  const insuranceCompanies = [
    { name: "UNIQA", logo: "🛡️", specialty: "Životné poistenie" },
    { name: "Allianz", logo: "🔷", specialty: "Úrazové poistenie" },
    { name: "Generali", logo: "🦁", specialty: "Majetkové poistenie" },
    { name: "Kooperativa", logo: "🤝", specialty: "Komplexné poistenie" },
    { name: "AXA", logo: "⚡", specialty: "Investičné poistenie" },
    { name: "Aegon", logo: "🌟", specialty: "Dôchodkové poistenie" }
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
        <div className="absolute right-60 -bottom-24 z-10 w-[450px] h-[600px] md:w-[550px] md:h-[700px] lg:w-[600px] lg:h-[800px]">
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
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-4 lg:-ml-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg">
                Poistenia
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Zabezpečte sa a svoju rodinu proti nepredvídateľným životným situáciám
              </p>
              <button 
                onClick={openModal}
                className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto"
              >
                Chcem sa poistiť
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            TYPY POISTENIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {insuranceTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{type.icon}</div>
                <h3 className="text-xl md:text-xl font-semibold text-[#202325] mb-4 text-center">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center text-sm">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-3"></div>
                      <span className="text-[#202325] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Insurance Section */}
      <section className="py-12 md:py-16 bg-[#202325]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            PREČO SA POISTIŤ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Finančná istota</h3>
              <p className="text-gray-300">Ochrana pred finančnými problémami v ťažkých časoch</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Ochrana rodiny</h3>
              <p className="text-gray-300">Zabezpečenie blízkych aj keď sa niečo stane</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Daňové úľavy</h3>
              <p className="text-gray-300">Zľavy na daniach až do výšky 400€ ročne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Companies Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            NAŠI POISŤOVACÍ PARTNERI
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {insuranceCompanies.map((company, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{company.logo}</div>
                <h3 className="font-semibold text-[#202325] text-sm mb-1">{company.name}</h3>
                <p className="text-[#5ECAD5] text-xs">{company.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            AKO TO PREBIEHA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Analýza potrieb</h3>
              <p className="text-gray-600 text-sm">Zistíme vaše potreby a rizikový profil</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Porovnanie</h3>
              <p className="text-gray-600 text-sm">Porovnáme produkty od všetkých poisťovní</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Návrh riešenia</h3>
              <p className="text-gray-600 text-sm">Navrhneme optimálne poistenie na mieru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Uzatvorenie</h3>
              <p className="text-gray-600 text-sm">Pomôžeme s uzatvorením a správou poistenia</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}