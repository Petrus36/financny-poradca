"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "../../../components/ContactModal";

export default function HypotekyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                <span className="block md:hidden">Hypotéky</span>
                <span className="hidden md:block">Hypotéky</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-xl text-white mb-8 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Získajte najvýhodnejšiu hypotéku a splňte si sen o vlastnom bývaní
              </p>
              <Link href="/formular">
                <button className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base sm:text-lg md:text-lg w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0 block sm:inline-block">
                  Požiadať o hypotéku
                </button>
              </Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mortgageTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl sm:text-4xl mb-4 text-center">{type.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#202325] mb-4 text-center">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center text-sm md:text-base leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            PROCES ZÍSKANIA HYPOTÉKY
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Konzultácia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Zistíme vaše potreby a možnosti</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Porovnanie</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Porovnáme ponuky všetkých bánk</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Žiadosť</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Pomôžeme s vyplnením a podaním žiadosti</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-[#202325] mb-2">Schválenie</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Dostanete najlepšiu možnú hypotéku</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      
    </main>
  );
}