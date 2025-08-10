"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactModal from "../../../components/ContactModal";

export default function HypotekyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const mortgageTypes = [
    {
      title: "Hypotéka na bývanie",
      description: "Najvýhodnejšie úvery na kúpu nehnuteľnosti",
      features: ["Nízky úrok", "Dlhá splatnosť", "Bez poplatkov za vedenie"],
      icon: "🏠"
    },
    {
      title: "Refinancovanie",
      description: "Znížte splátky refinancovaním existujúcej hypotéky",
      features: ["Nižší úrok", "Lepšie podmienky", "Úspora tisícov eur"],
      icon: "🔄"
    },
    {
      title: "Americká hypotéka",
      description: "Flexibilný úver bez nutnosti dokladovania príjmov",
      features: ["Rýchle schválenie", "Minimálna byrokracia", "Flexibilné podmienky"],
      icon: "⚡"
    }
  ];

  const banks = [
    { name: "VÚB Banka", logo: "🏦", rate: "od 3,2%" },
    { name: "Tatra Banka", logo: "🏛️", rate: "od 3,1%" },
    { name: "SLSP", logo: "🏪", rate: "od 3,3%" },
    { name: "Poštová Banka", logo: "📮", rate: "od 3,4%" },
    { name: "UniCredit Bank", logo: "🏢", rate: "od 3,0%" },
    { name: "Prima Banka", logo: "💼", rate: "od 3,2%" }
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
                HYPOTÉKY
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Získajte najvýhodnejšiu hypotéku a splňte si sen o vlastnom bývaní
              </p>
              <button 
                onClick={openModal}
                className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto"
              >
                Požiadať o hypotéku
              </button>
            </div>
            
            {/* Right side - House Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="w-64 md:w-72 h-80 md:h-96 bg-gray-200 rounded-lg shadow-2xl flex items-end justify-center overflow-hidden">
                <span className="text-gray-500 text-lg mb-4">[House Image]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Types Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            TYPY HYPOTÉK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {mortgageTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{type.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#202325] mb-4 text-center">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
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

      {/* Bank Partners Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            NAŠI BANKOVÍ PARTNERI
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {banks.map((bank, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{bank.logo}</div>
                <h3 className="font-semibold text-[#202325] text-sm mb-1">{bank.name}</h3>
                <p className="text-[#5ECAD5] font-bold text-sm">{bank.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-[#202325]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            VÝHODY NAŠICH SLUŽIEB
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Porovnanie ponúk</h3>
              <p className="text-gray-300">Nájdeme pre vás najlepšie podmienky zo všetkých bánk</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Bezplatné poradenstvo</h3>
              <p className="text-gray-300">Kompletné poradenstvo a vybavenie bez poplatkov</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Rýchle vybavenie</h3>
              <p className="text-gray-300">Vybavíme hypotéku v najkratšom možnom čase</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#5ECAD5] mb-4">Osobný prístup</h3>
              <p className="text-gray-300">Individuálne riešenia pre každého klienta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            PROCES ZÍSKANIA HYPOTÉKY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Konzultácia</h3>
              <p className="text-gray-600 text-sm">Zistíme vaše potreby a možnosti</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Porovnanie</h3>
              <p className="text-gray-600 text-sm">Porovnáme ponuky všetkých bánk</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Žiadosť</h3>
              <p className="text-gray-600 text-sm">Pomôžeme s vyplnením a podaním žiadosti</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Schválenie</h3>
              <p className="text-gray-600 text-sm">Dostanete najlepšiu možnú hypotéku</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8">
            HYPOTEKÁRNA KALKULAČKA
          </h2>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-[#202325] font-medium mb-2">Výška úveru (€)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent"
                  placeholder="150000"
                />
              </div>
              <div>
                <label className="block text-[#202325] font-medium mb-2">Splatnosť (roky)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ECAD5] focus:border-transparent"
                  placeholder="25"
                />
              </div>
            </div>
            <div className="text-center">
              <button 
                onClick={openModal}
                className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg w-full md:w-auto"
              >
                Vypočítať splátku
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}