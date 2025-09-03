"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "../../../components/ContactModal";

export default function PoistieniaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const insuranceTypes = [
    {
      title: "Životné poistenie",
      description: "Zabezpečte svoju rodinu pre prípad nečakaných situácií. Komplexné riešenie pre ochranu vašich blízkych.",
      features: ["Ochrana rodiny", "Daňové úľavy", "Investičná zložka", "Flexibilné podmienky"],
      icon: "👨‍👩‍👧‍👦",
      link: "/sluzby/poistenia/zivotne",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      title: "Neživotné poistenie",
      description: "Ochrana vašej nehnuteľnosti, majetku a zodpovednosti. Zabezpečte si pokoj pre prípad nečakaných udalostí.",
      features: ["Majetkové poistenie", "Úrazové poistenie", "Kritické choroby", "24/7 asistenčná služba"],
      icon: "🏠",
      link: "/sluzby/poistenia/nezivotne",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    }
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
              Poistenia
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto font-light drop-shadow-md">
              Komplexné poistné riešenia pre ochranu vás a vašej rodiny. Vyberte si z našej širokej ponuky životných a neživotných poistení.
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

      {/* Insurance Types Selection Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Question - Magazine Style */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#5ECAD5] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              VÝBER POISTENIA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202325] mb-8 max-w-3xl mx-auto leading-tight">
              Aký typ poistenia potrebujete?
            </h2>
            <div className="w-20 h-1 bg-[#5ECAD5] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Každý typ poistenia má svoje špecifické účely a výhody. Pomôžeme vám vybrať to správne riešenie, ktoré najlepšie vyhovuje vašim potrebám a životnej situácii.
            </p>
          </div>

          {/* Two Column Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {insuranceTypes.map((type, index) => (
              <Link key={index} href={type.link}>
                <div className={`${type.color} border-2 rounded-xl p-7 text-center hover:shadow-lg transition-all duration-300 cursor-pointer h-full`}>
                  <div className="text-5xl mb-5">{type.icon}</div>
                  <h3 className="text-xl font-bold text-[#202325] mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2 mb-5">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex items-center text-[#5ECAD5] font-semibold">
                    Zistiť viac
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quote Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-16 border-l-4 border-[#5ECAD5]">
            <div className="flex items-start">
              <div className="text-6xl text-[#5ECAD5] mr-4 leading-none">"</div>
              <div>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  Správne poistenie je základ finančnej bezpečnosti. Nečakajte na problém - pripravte sa na neho včas a s rozvahou.
                </p>
              </div>
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
          </div>
        </div>
      </section>

      {/* Original Insurance Types Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            TYPY POISTENIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="font-semibold text-[#202325] text-lg mb-3">Životné poistenie</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">Zabezpečte svoju rodinu pre prípad nečakaných situácií</p>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Ochrana rodiny</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Daňové úľavy</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Investičná zložka</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🩹</div>
              <h3 className="font-semibold text-[#202325] text-lg mb-3">Úrazové poistenie</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">Finančná pomoc v prípade úrazu alebo invalidity</p>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Vysoké plnenia</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Rýchla výplata</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Široké krytie</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-semibold text-[#202325] text-lg mb-3">Kritické choroby</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">Finančná podpora pri diagnostikovaní závažných ochorení</p>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Včasná diagnostika</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Jednorazová výplata</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Krytie liečby</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-semibold text-[#202325] text-lg mb-3">Poistenie majetku</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">Ochrana vašej nehnuteľnosti a domácnosti</p>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Komplexné krytie</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Náhrada škôd</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">24/7 asistenčná služba</span>
                </div>
              </div>
            </div>
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
            <div className="flex items-center justify-center h-16 sm:h-20 md:h-24">
              <Image
                src="/Uniqa.webp"
                alt="UNIQA logo"
                width={400}
                height={200}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:scale-[1.4] sm:hover:scale-[1.5] md:hover:scale-[1.65] transition-all duration-300 scale-125 sm:scale-140 md:scale-150"
              />
            </div>
            <div className="flex items-center justify-center h-16 sm:h-20 md:h-24">
              <Image
                src="/Alianz.png"
                alt="Allianz logo"
                width={400}
                height={200}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:scale-[1.4] sm:hover:scale-[1.5] md:hover:scale-[1.65] transition-all duration-300 scale-125 sm:scale-140 md:scale-150"
              />
            </div>
            <div className="flex items-center justify-center h-16 sm:h-20 md:h-24">
              <Image
                src="/Generali.jpg"
                alt="Generali logo"
                width={400}
                height={200}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:scale-[1.4] sm:hover:scale-[1.5] md:hover:scale-[1.65] transition-all duration-300 scale-125 sm:scale-140 md:scale-150"
              />
            </div>
            <div className="flex items-center justify-center h-16 sm:h-20 md:h-24">
              <Image
                src="/Kooperativa.jpg"
                alt="Kooperativa logo"
                width={400}
                height={200}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:scale-[1.4] sm:hover:scale-[1.5] md:hover:scale-[1.65] transition-all duration-300 scale-125 sm:scale-140 md:scale-150"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}