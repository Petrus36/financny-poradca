"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactFormModal from "../../../components/ContactFormModal";

export default function PoistieniaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInsuranceModalOpen, setIsInsuranceModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeInsuranceModal = () => {
    setIsInsuranceModalOpen(false);
  };

  const insuranceTypes = [
    {
      title: "Životné poistenie",
      description: "Zabezpečte svoju rodinu pre prípad nečakaných situácií. Komplexné riešenie pre ochranu vašich blízkych.",
      features: ["Ochrana rodiny", "Daňové úľavy", "Investičná zložka", "Flexibilné podmienky"],
      icon: "",
      link: "/sluzby/poistenia/zivotne",
      color: "bg-gray-50 border-gray-200 hover:bg-gray-100"
    },
    {
      title: "Neživotné poistenie",
      description: "Ochrana vašej nehnuteľnosti, majetku a zodpovednosti. Zabezpečte si pokoj pre prípad nečakaných udalostí.",
      features: ["Majetkové poistenie", "Úrazové poistenie", "Kritické choroby", "24/7 asistenčná služba"],
      icon: "",
      link: "/sluzby/poistenia/nezivotne",
      color: "bg-gray-50 border-gray-200 hover:bg-gray-100"
    }
  ];

  const insuranceCompanies = [
    { name: "UNIQA", logo: "/Uniqa.webp", isImage: true, isLarger: true },
    { name: "Allianz", logo: "/Alianz.png", isImage: true },
    { name: "Generali", logo: "/Generali.jpg", isImage: true },
    { name: "Kooperativa", logo: "/Kooperativa.jpg", isImage: true, customSize: true }
  ];

  const additionalInsuranceCompanies: any[] = [
    { name: "Wüstenrot", logo: "/wustenrot_logo.jpg", isImage: true, isLarger: true },
    { name: "Simplea", logo: "/simplea_logo.jpg", isImage: true },
    { name: "MetLife", logo: "/metlife_logo.png", isImage: true, isLarger: true },
    { name: "AXA", logo: "/AXA_logo.png", isImage: true },
    { name: "Colonade", logo: "/Colonade_logo.png", isImage: true, extraLarge: true },
    { name: "ČSOB", logo: "/ČSOB_logo.webp", isImage: true, isLarger: true },
    { name: "Pillow", logo: "/Pillow_logo.png", isImage: true },
    { name: "Komunalna", logo: "/Komunalna_logo.webp", isImage: true, extraLarge: true },
    { name: "Union", logo: "/union_logo.png", isImage: true },
    { name: "Europe", logo: "/Europe_logo.png", isImage: true, isLarger: true },
    { name: "YouPlus", logo: "/youplus_logo.jpg", isImage: true, isLarger: true },
    { name: "NN", logo: "/NN.webp", isImage: true },
    { name: "Premium", logo: "/Premium_logo.svg", isImage: true }
  ];

  const allInsuranceCompanies = [...insuranceCompanies, ...additionalInsuranceCompanies];

  return (
    <main className="min-h-screen">
      {/* Contact Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Insurance Companies Modal */}
      {isInsuranceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred background overlay */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          {/* Popup content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex-1 text-center">
                  <h2 className="text-2xl font-bold text-[#202325]">Naše poistovne</h2>
                </div>
                <button
                  onClick={closeInsuranceModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
                {allInsuranceCompanies.map((company, index) => (
                  <div key={index} className="flex items-center justify-center h-32 w-full">
                    {company.isImage ? (
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={300}
                        height={150}
                        className={`w-auto object-contain hover:scale-110 transition-transform duration-300 ${company.extraLarge ? 'h-48' : (company as any).customSize ? 'h-16' : (company as any).isLarger ? 'h-32' : 'h-24'}`}
                      />
                    ) : (
                      <span className="text-3xl">{company.logo}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Banner Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Banner background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Poistenia.svg"
            alt="Banner background"
            fill
            className="object-cover object-right md:object-right"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-left md:text-left lg:text-left mb-8 md:mb-0 lg:mb-0 lg:pr-8 xl:pr-16 lg:pl-0 lg:ml-8 -ml-16 sm:-ml-20 pt-40 sm:pt-32 md:pt-0 lg:pt-0 md:pl-32 lg:pl-16 md:max-w-[65%] md:mr-auto max-w-[75%] sm:max-w-[70%]">
              <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg" style={{fontFamily: 'Monda, sans-serif'}}>
                <span className="block md:hidden">Poistenia</span>
                <span className="hidden md:block">Poistenia</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-xl text-white mb-8 max-w-xl md:max-w-3xl lg:max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Komplexné poistné riešenia pre ochranu vás a vašej rodiny. Vyberte si z našej širokej ponuky životných a neživotných poistení.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base sm:text-lg md:text-lg w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0 block sm:inline-block"
              >
                Bezplatná konzultácia
              </button>
            </div>
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
              <div className="text-6xl text-[#5ECAD5] mr-4 leading-none">&ldquo;</div>
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
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-28 xl:gap-32">
            {insuranceCompanies.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-16 sm:h-20 md:h-24">
                {company.isImage ? (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={400}
                    height={200}
                    className={`w-auto object-contain hover:scale-[1.4] sm:hover:scale-[1.5] md:hover:scale-[1.65] transition-all duration-300 scale-125 sm:scale-140 md:scale-150 ${(company as any).customSize ? 'h-12 sm:h-14 md:h-16 hover:scale-[1.2] sm:hover:scale-[1.3] md:hover:scale-[1.4] scale-100 sm:scale-110 md:scale-120' : 'h-16 sm:h-20 md:h-24'}`}
                  />
                ) : (
                  <span className="text-3xl">{company.logo}</span>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              Všetkých poistovní najdete{" "}
              <button
                onClick={() => setIsInsuranceModalOpen(true)}
                className="text-[#5ECAD5] hover:text-[#4BB8C4] underline cursor-pointer font-semibold transition-colors"
              >
                tu
              </button>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}