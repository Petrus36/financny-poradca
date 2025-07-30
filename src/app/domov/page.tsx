"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "../../components/ContactModal";

export default function DomovPage() {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const investmentPartners = [
    { 
      name: "365 Invest", 
      logo: "/partners/365invest.png", 
      alt: "365 Invest logo",
      category: "Investment Platform",
      color: "bg-blue-500"
    },
    { 
      name: "PROXENTA", 
      logo: "/partners/proxenta.png", 
      alt: "PROXENTA logo",
      category: "Investment Management",
      color: "bg-gray-700"
    },
    { 
      name: "UNIQA", 
      logo: "/partners/uniqa.png", 
      alt: "UNIQA logo",
      category: "Insurance & Investment",
      color: "bg-blue-600"
    },
    { 
      name: "CONSEQ", 
      logo: "/partners/conseq.png", 
      alt: "CONSEQ logo",
      category: "Investment Advisory",
      color: "bg-gray-800"
    },
    { 
      name: "eic european investment centre", 
      logo: "/partners/eic.png", 
      alt: "EIC logo",
      category: "European Investment",
      color: "bg-blue-500"
    },
    { 
      name: "finax", 
      logo: "/partners/finax.png", 
      alt: "Finax logo",
      category: "Robo Advisory",
      color: "bg-blue-600"
    },
    { 
      name: "VÚB", 
      logo: "/partners/vub.png", 
      alt: "VÚB logo",
      category: "Banking & Investment",
      color: "bg-red-600"
    },
    { 
      name: "Tatra banka", 
      logo: "/partners/tatrabanka.png", 
      alt: "Tatra banka logo",
      category: "Banking Services",
      color: "bg-green-600"
    }
  ];

  const nextPartner = () => {
    setCurrentPartnerIndex((prev) => (prev + 1) % investmentPartners.length);
  };

  const prevPartner = () => {
    setCurrentPartnerIndex((prev) => (prev - 1 + investmentPartners.length) % investmentPartners.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                VÁŠ FINANČNÝ<br />PORADCA
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Vaše financie pod kontrolou, Vaše úspory v raste.
              </p>
              <Link href="/kontakt">
                <button className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto">
                  Kontaktujte ma
                </button>
              </Link>
            </div>
            
            {/* Right side - Advisor Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="w-64 md:w-72 h-80 md:h-96 bg-gray-200 rounded-lg shadow-2xl flex items-end justify-center overflow-hidden">
                <span className="text-gray-500 text-lg mb-4">[Foto poradcu]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Achievements Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            MOJE ÚSPECHY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-[#202325] text-white p-4 md:p-6 rounded-lg text-center flex flex-col justify-center">
              <div className="text-3xl md:text-5xl font-bold mb-2 text-[#5ECAD5]">3000+</div>
              <div className="text-sm md:text-base">KLIENTOV</div>
            </div>
            <div className="bg-[#202325] text-white p-4 md:p-6 rounded-lg text-center flex flex-col justify-center">
              <div className="text-2xl md:text-4xl font-bold mb-2 text-[#5ECAD5]">400tis.€</div>
              <div className="text-sm md:text-base">OBSTARÁVAME</div>
            </div>
            <div className="bg-[#202325] text-white p-4 md:p-6 rounded-lg text-center flex flex-col justify-center">
              <div className="text-3xl md:text-5xl font-bold mb-2 text-[#5ECAD5]">1mil.€</div>
              <div className="text-sm md:text-base">V HYPOTÉKACH</div>
            </div>
            <div className="bg-[#202325] text-white p-4 md:p-6 rounded-lg text-center flex flex-col justify-center">
              <div className="text-4xl md:text-6xl font-bold mb-2 text-[#5ECAD5]">50</div>
              <div className="text-sm md:text-base">SPOLUPRACOVNÍKOV</div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            REFERENCIE
          </h2>
          <div className="bg-[#EBEBEB] p-6 md:p-8 rounded-lg relative">
            <div className="text-4xl md:text-6xl text-[#5ECAD5] absolute top-2 md:top-4 left-2 md:left-4">"</div>
            <div className="text-4xl md:text-6xl text-[#5ECAD5] absolute bottom-2 md:bottom-4 right-2 md:right-4">"</div>
            <div className="text-center px-4 md:px-8 py-4">
              <p className="text-base md:text-lg text-[#202325] italic mb-6">
                "Výborný prístup a profesionálne poradenstvo. Pomohol mi vytvoriť 
                finančný plán, ktorý mi umožnil dosiahnuť moje ciele."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg mr-3 md:mr-4">
                  M
                </div>
                <div>
                  <div className="font-semibold text-[#202325] text-sm md:text-base">Martin Wolf</div>
                  <div className="text-xs md:text-sm text-gray-600">Manager</div>
                </div>
              </div>
            </div>
            {/* Navigation arrows */}
            <div className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-[#5ECAD5] text-xl md:text-2xl cursor-pointer">
              ‹
            </div>
            <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-[#5ECAD5] text-xl md:text-2xl cursor-pointer">
              ›
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-12 md:py-16 bg-[#202325]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4 md:mb-6">
            MÁTE OTÁZKY O INVESTOVANÍ, POISTENÍ ČI ÚVEROCH?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Vyplňte krátky formulár a získajte bezplatnú analýzu a konkrétne riešenia
          </p>
          
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Ako to prebieha?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mx-auto mb-3 md:mb-4">1</div>
                <p className="text-gray-300 text-sm md:text-base">Vyplníte formulár</p>
              </div>
              <div className="text-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mx-auto mb-3 md:mb-4">2</div>
                <p className="text-gray-300 text-sm md:text-base">Analyzujeme vašu situáciu</p>
              </div>
              <div className="text-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mx-auto mb-3 md:mb-4">3</div>
                <p className="text-gray-300 text-sm md:text-base">Navrhneme riešenia</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={openModal}
            className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto"
          >
            Chcem formulár
          </button>
        </div>
      </section>

      {/* Investment Partners Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#202325]">
              Investovanie...
            </h2>
          </div>
          
          <div className="relative">
            {/* Navigation arrows */}
            <button 
              onClick={prevPartner}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-8 md:w-10 h-8 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#5ECAD5] text-lg md:text-xl hover:bg-gray-50 transition-colors z-10"
            >
              ‹
            </button>
            <button 
              onClick={nextPartner}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-8 md:w-10 h-8 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#5ECAD5] text-lg md:text-xl hover:bg-gray-50 transition-colors z-10"
            >
              ›
            </button>
            
            {/* Partner logos carousel with featured center */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPartnerIndex * 20}%)` }}
              >
                {investmentPartners.map((partner, index) => {
                  // Calculate if this is the center partner (index 2 in visible 5)
                  const isCenter = (index - currentPartnerIndex) === 2;
                  
                  return (
                    <div 
                      key={index} 
                      className="w-1/5 flex-shrink-0 px-1 md:px-2"
                    >
                      <div className={`bg-white border-2 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 p-2 md:p-3 ${
                        isCenter 
                          ? 'h-24 md:h-36 border-[#5ECAD5] shadow-xl scale-110 -mt-2 md:-mt-4 bg-gradient-to-b from-white to-gray-50' 
                          : 'h-16 md:h-24 border-gray-200 opacity-60'
                      }`}>
                        <div className="text-center w-full">
                          {/* 365 Invest special styling */}
                          {partner.name === "365 Invest" ? (
                            <div className="relative">
                              <div className={`${isCenter ? 'w-12 md:w-20 h-12 md:h-20' : 'w-8 md:w-12 h-8 md:h-12'} bg-gray-100 rounded-full flex items-center justify-center mb-1 md:mb-2 mx-auto relative`}>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5ECAD5] to-blue-500 opacity-20"></div>
                                <span className={`text-[#202325] font-bold relative z-10 ${isCenter ? 'text-lg md:text-2xl' : 'text-sm md:text-lg'}`}>365</span>
                              </div>
                              <div className="flex items-center justify-center space-x-1">
                                <span className={`text-[#202325] font-semibold ${isCenter ? 'text-sm md:text-lg' : 'text-xs md:text-sm'}`}>365</span>
                                <span className={`text-[#5ECAD5] font-medium ${isCenter ? 'text-xs md:text-base' : 'text-xs'}`}>Invest</span>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className={`${isCenter ? 'w-12 md:w-20 h-12 md:h-20' : 'w-8 md:w-12 h-8 md:h-12'} ${partner.color} rounded-lg flex items-center justify-center mb-1 md:mb-2 mx-auto`}>
                                <span className={`text-white font-bold ${isCenter ? 'text-lg md:text-2xl' : 'text-sm md:text-lg'}`}>
                                  {partner.name.split(' ')[0].charAt(0)}
                                </span>
                              </div>
                              <span className={`text-gray-700 font-medium leading-tight ${isCenter ? 'text-xs md:text-base' : 'text-xs'}`}>
                                {partner.name}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Investment categories */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 md:w-8 h-6 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#202325] mb-2">Investičné fondy</h3>
              <p className="text-gray-600 text-sm md:text-base">Dlhodobé investovanie</p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 md:w-8 h-6 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#202325] mb-2">Robo advisory</h3>
              <p className="text-gray-600 text-sm md:text-base">Automatizované investovanie</p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 md:w-8 h-6 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#202325] mb-2">Poistenie</h3>
              <p className="text-gray-600 text-sm md:text-base">Životné a úrazové</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 