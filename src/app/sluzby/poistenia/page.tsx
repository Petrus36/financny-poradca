"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import ContactFormModal from "../../../components/ContactFormModal";

interface InsuranceCompany {
  name: string;
  logo: string;
  isImage: boolean;
  isLarger?: boolean;
  customSize?: boolean;
  extraLarge?: boolean;
}

interface InsuranceType {
  title: string;
  description: string;
  link: string;
  color: string;
  features?: string[];
}

export default function PoistieniaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInsuranceModalOpen, setIsInsuranceModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeInsuranceModal = () => {
    setIsInsuranceModalOpen(false);
  };

  const insuranceTypes: InsuranceType[] = [
    {
      title: "Životné poistenie",
      description: "Život prináša aj nečakané situácie. Správne nastavená ochrana vám dá istotu, že zvládnete aj tie najťažšie dni.",
      link: "/sluzby/poistenia/zivotne",
      color: "bg-gray-50 border-gray-200 hover:bg-gray-100"
    },
    {
      title: "Neživotné poistenie",
      description: "Ochrana toho, čo ste si vybudovali. Či už ide o váš domov, auto alebo cestovanie, pomôžem vám nastaviť istotu, že aj v nečakaných situáciách zostanete v bezpečí.",
      link: "/sluzby/poistenia/nezivotne",
      color: "bg-gray-50 border-gray-200 hover:bg-gray-100"
    }
  ];

  const insuranceCompanies: InsuranceCompany[] = [
    { name: "UNIQA", logo: "/Uniqa.webp", isImage: true, isLarger: true, extraLarge: false },
    { name: "Allianz", logo: "/Alianz.png", isImage: true, extraLarge: false },
    { name: "Generali", logo: "/Generali.jpg", isImage: true, extraLarge: false },
    { name: "Simplea Poistovňa", logo: "/simplea_logo.jpg", isImage: true, customSize: true, extraLarge: false }
  ];

  const additionalInsuranceCompanies: InsuranceCompany[] = [
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
    <>
      <Head>
        <link rel="preload" href="/Poistenia.svg" as="image" type="image/svg+xml" />
      </Head>
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
                  <div key={index} className="flex items-center justify-center w-full">
                    {company.isImage ? (
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={300}
                        height={150}
                        className="w-auto object-contain hover:scale-110 transition-transform duration-300 h-12 md:h-16"
                        style={{ maxHeight: '5.5rem', height: 'auto' }}
                      />
                    ) : (
                      <span className="text-xl">{company.logo}</span>
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
              Ochrana, ktorá dáva zmysel.<br></br>
              Pre vás, vašu rodinu aj všetko, čo ste vybudovali.
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
            {insuranceTypes.map((type, index) => {
              const isPrimaryType = type.title === "Životné poistenie" || type.title === "Neživotné poistenie";
              return (
                <Link key={index} href={type.link}>
                  <div className={`${type.color} border-2 rounded-xl p-7 text-center hover:shadow-lg transition-all duration-300 cursor-pointer h-full`}>
                    <h3 className={`font-bold text-[#202325] mb-4 ${isPrimaryType ? "text-3xl" : "text-xl"}`}>
                      {type.title}
                    </h3>
                  <p className={`text-gray-600 leading-relaxed text-center ${index === 0 ? "text-lg mt-4 mb-6" : "text-base mb-5"}`}>
                    {type.description}
                  </p>
                  {type.features && (
                    <div className="space-y-2 mb-5">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center">
                          <span className="w-2 h-2 bg-[#5ECAD5] rounded-full mr-2"></span>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div
                    className={`inline-flex items-center text-[#5ECAD5] font-semibold ${
                      type.title === "Neživotné poistenie" ? "mt-4" : ""
                    }`}
                  >
                    Zistiť viac
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
              );
            })}
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
          {/* First row - 3 boxes (tablet and desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Rizikové životné poistenie */}
            <div className="relative bg-gray-50 border border-gray-100/80 p-5 md:p-6 lg:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5ECAD5] via-[#4BB8C4] to-[#5ECAD5]" />
              <div className="flex flex-col h-full">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5ECAD5]/10 text-[#5ECAD5] group-hover:bg-[#5ECAD5] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#202325] text-lg mb-3 text-center group-hover:text-[#111827] transition-colors">
                  Rizikové životné poistenie
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Nečakané situácie prichádzajú bez varovania – dôležité je byť pripravený. Správne nastavené poistenie chráni vás aj vašu rodinu podľa vašej životnej situácie.
                </p>
              </div>
            </div>

            {/* Cestovné poistenie */}
            <div className="relative bg-gray-50 border border-gray-100/80 p-5 md:p-6 lg:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5ECAD5] via-[#4BB8C4] to-[#5ECAD5]" />
              <div className="flex flex-col h-full">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5ECAD5]/10 text-[#5ECAD5] group-hover:bg-[#5ECAD5] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 20l3-8 6-2 4-7 2 1-2 7 4 2-1.5 3-4.5-1-3 4-4-3-2.5 4H3Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#202325] text-lg mb-3 text-center group-hover:text-[#111827] transition-colors">
                  Cestovné poistenie
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Stačí malá nepríjemnosť a dovolenka sa môže poriadne predražiť.
                  Preto je lepšie mať krytie, ktoré zohľadní vaše plány, cieľ aj dĺžku pobytu.
                </p>
              </div>
            </div>

            {/* Poistenie vozidiel */}
            <div className="relative bg-gray-50 border border-gray-100/80 p-5 md:p-6 lg:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5ECAD5] via-[#4BB8C4] to-[#5ECAD5]" />
              <div className="flex flex-col h-full">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5ECAD5]/10 text-[#5ECAD5] group-hover:bg-[#5ECAD5] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 17V11l2-4h12l2 4v6M5 17h14M7 17v2M17 17v2M7 9h10"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#202325] text-lg mb-3 text-center group-hover:text-[#111827] transition-colors">
                  Poistenie vozidiel
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Aj skúsenému vodičovi sa môže prihodiť situácia, ktorú neovplyvní. Poistenie vozidla má význam len vtedy, keď zodpovedá vašim skutočným potrebám.
                </p>
              </div>
            </div>
          </div>

          {/* Second row - 2 boxes centered */}
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-6 md:gap-8 px-0 sm:px-4 md:px-20 lg:px-40">
            {/* Poistenie majetku */}
            <div className="relative bg-gray-50 border border-gray-100/80 p-5 md:p-6 lg:p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5ECAD5] via-[#4BB8C4] to-[#5ECAD5]" />
              <div className="flex flex-col h-full">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5ECAD5]/10 text-[#5ECAD5] group-hover:bg-[#5ECAD5] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 20V10L12 4l8 6v10H4Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#202325] text-lg mb-3 text-center group-hover:text-[#111827] transition-colors">
                  Poistenie majetku
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Škody na majetku často prídu vtedy, keď ich najmenej čakáme. Každý domov je iný – preto aj ochrana by mala byť nastavená presne podľa vás.
                </p>
              </div>
            </div>

            {/* Poistenie všeobecnej zodpovednosti */}
            <div className="relative bg-gray-50 border border-gray-100/80 p-5 md:p-6 lg:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5ECAD5] via-[#4BB8C4] to-[#5ECAD5]" />
              <div className="flex flex-col h-full">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5ECAD5]/10 text-[#5ECAD5] group-hover:bg-[#5ECAD5] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7 3.582 7 8 7Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12v3M12 9.5v.01"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#202325] text-lg mb-3 text-center group-hover:text-[#111827] transition-colors">
                  Poistenie všeobecnej zodpovednosti
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Stačí malá nepozornosť a vznikne škoda, ktorá môže stáť tisíce eur. Zodpovednosť máme všetci, no jej krytie by malo vychádzať z vášho spôsobu života.
                </p>
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
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {insuranceCompanies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                {company.isImage ? (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={400}
                    height={200}
                    className="w-auto object-contain hover:scale-110 transition-all duration-300 h-14 md:h-20"
                    style={{ maxHeight: '6rem', height: 'auto' }}
                  />
                ) : (
                  <span className="text-xl">{company.logo}</span>
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
    </>
  );
}