"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactModal from "../../../components/ContactModal";

export default function InvestovaniePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const investmentOptions = [
    {
      title: "Investičné fondy",
      description: "Dlhodobé investovanie do diverzifikovaných portfólií",
      features: ["Nízke riziko", "Stabilný rast", "Profesionálne riadenie"],
      icon: "📈"
    },
    {
      title: "ETF investície",
      description: "Pasívne investovanie do indexových fondov",
      features: ["Nízke poplatky", "Diverzifikácia", "Transparentnosť"],
      icon: "📊"
    },
    {
      title: "Robo advisory",
      description: "Automatizované investovanie na základe vášho profilu",
      features: ["Automatické vyvažovanie", "24/7 monitoring", "Nízke náklady"],
      icon: "🤖"
    }
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
                INVESTOVANIE
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Rozmnožte svoje úspory inteligentným investovaním s profesionálnym poradenstvom
              </p>
              <button 
                onClick={openModal}
                className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto"
              >
                Bezplatná konzultácia
              </button>
            </div>
            
            {/* Right side - Investment Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="w-64 md:w-72 h-80 md:h-96 bg-gray-200 rounded-lg shadow-2xl flex items-end justify-center overflow-hidden">
                <span className="text-gray-500 text-lg mb-4">[Investment Image]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            TYPY INVESTOVANIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {investmentOptions.map((option, index) => (
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

      {/* Why Invest Section */}
      <section className="py-12 md:py-16 bg-[#202325]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            PREČO INVESTOVAŤ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Ochrana pred infláciou</h3>
              <p className="text-gray-300">Vaše peniaze si zachovajú a zvýšia svoju hodnotu v čase</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Pasívny príjem</h3>
              <p className="text-gray-300">Vytvorte si dodatočný zdroj príjmov na dôchodok</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Finančná nezávislosť</h3>
              <p className="text-gray-300">Dosiahnutie vašich finančných cieľov a snov</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Diverzifikácia</h3>
              <p className="text-gray-300">Rozloženie rizika na rôzne typy investícií</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            AKO TO PREBIEHA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Konzultácia</h3>
              <p className="text-gray-600 text-sm">Zanalyzujeme vašu finančnú situáciu a ciele</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Stratégia</h3>
              <p className="text-gray-600 text-sm">Vytvoríme investičnú stratégiu na mieru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Implementácia</h3>
              <p className="text-gray-600 text-sm">Spustíme investovanie podľa plánu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Monitoring</h3>
              <p className="text-gray-600 text-sm">Pravidelne sledujeme a optimalizujeme výkonnosť</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] mb-6">
            ZAČNITE INVESTOVAŤ UŽ DNES
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Získajte bezplatnú analýzu vašej finančnej situácie a osobný investičný plán
          </p>
          <button 
            onClick={openModal}
            className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
          >
            Chcem investovať
          </button>
        </div>
      </section>
    </main>
  );
}