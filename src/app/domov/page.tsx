"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "../../components/ContactModal";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  shortText: string;
  initial: string;
}

export default function DomovPage() {
  // const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  /* 
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
  ]; */

  const testimonials = [
    {
      id: 1,
      name: "Pavol F.",
      location: "",
      text: "S pánom Kurkom sa bližšie poznáme asi 6 rokov. Akékoľvek otázky či už technické, finančné, právne alebo len laické, vypočuje, vyhodnotí a ponúkne riešenia ktoré zohladňujú výhody aj nevýhody a upozorní na prípadné riziká. Priateľský prístup a profesionálne poradenstvo, za mňa TOP.",
      shortText: "S pánom Kurkom sa bližšie poznáme asi 6 rokov. Akékoľvek otázky či už technické, finančné, právne alebo len laické, vypočuje, vyhodnotí a ponúkne riešenia ktoré zohladňujú výhody aj nevýhody...",
      initial: "P"
    },
    {
      id: 2,
      name: "Zuzana H.",
      location: "",
      text: "Po bývalej skúsenosti s finančným poradcom, som už nechcela riešiť svoje záležitosti cez poradcu. Po odporúčaní na p.Kurku nebanujem, som rada, že som sa na neho obrátila. Rieši potrebné záležitosti rýchlo, odpovedá hneď ako na zavolanie 🙂 je ochotný vždy pomôcť, poradiť to najlepšie a najvýhodnejšie pre klienta. Vysvetlí veci, aby boli zrozumiteľné a pochopil ich každý. Veľmi si vážim, že netlačí na klienta, nechá mu priestor na rozhodnutie. Je vždy po ruke, aj v rámci svojho voľného času, aj na úkor svojho súkromného života, čo si veľmi vážim. Ponúkol mi možnosti, plány do budúcnosti, predostrel plán, ktorý je zaújímavý. Takže lepšiu spoluprácu si neviem predstaviť a som rada, že mi pomáha.",
      shortText: "Po bývalej skúsenosti s finančným poradcom, som už nechcela riešiť svoje záležitosti cez poradcu. Po odporúčaní na p.Kurku nebanujem, som rada, že som sa na neho obrátila. Rieši potrebné záležitosti rýchlo, odpovedá hneď ako na zavolanie...",
      initial: "Z"
    },
    {
      id: 3,
      name: "Tereza V.",
      location: "",
      text: "Finančné poradenstvo mi veľmi pomohlo získať lepší prehľad a istotu vo finančných rozhodnutiach. Oceňujem odborný prístup, zrozumiteľné vysvetlenia a ochotu pomôcť. Určite odporúčam!",
      shortText: "Finančné poradenstvo mi veľmi pomohlo získať lepší prehľad a istotu vo finančných rozhodnutiach. Oceňujem odborný prístup, zrozumiteľné vysvetlenia a ochotu pomôcť. Určite odporúčam!",
      initial: "T"
    },
    {
      id: 4,
      name: "Sandra S.",
      location: "",
      text: "Zdravím, pána Kurku sme spočiatku kontaktovali ohľadom refinancovania nášho úveru, ktorú sme s jeho pomocou úspešne doriešili aj na diaľku. Keďže si získal našu dôveru, tak sme požiadali o preverenie našich životných aj neživotných poistení a spravil nám nové poistenia podľa našej predstavy, podľa našich možností. Je veľmi nápomocný a ochotný kedykoľvek pomôcť. Môžeme len odporučiť.",
      shortText: "Pána Kurku sme spočiatku kontaktovali ohľadom refinancovania nášho úveru, ktorú sme s jeho pomocou úspešne doriešili aj na diaľku. Keďže si získal našu dôveru, tak sme požiadali o preverenie našich životných aj neživotných poistení...",
      initial: "S"
    },
    {
      id: 5,
      name: "Denis T.",
      location: "",
      text: "S Michalom Kurkom som bol počas celého procesu riešenia hypotéky a ďalších finančných produktov veľmi spokojný. Všetko mi zrozumiteľne vysvetlil a pokojne vyriešil aj nečakané komplikácie, ktorých počas vybavovania hypotéky nebolo málo. Oceňujem jeho profesionálny a ľudský prístup. Odporúčam všetkými desiatimi!",
      shortText: "S Michalom Kurkom som bol počas celého procesu riešenia hypotéky a ďalších finančných produktov veľmi spokojný. Všetko mi zrozumiteľne vysvetlil a pokojne vyriešil aj nečakané komplikácie...",
      initial: "D"
    }
  ];

  // const nextPartner = () => {
  //   setCurrentPartnerIndex((prev) => (prev + 1) % investmentPartners.length);
  // };

  // const prevPartner = () => {
  //   setCurrentPartnerIndex((prev) => (prev - 1 + investmentPartners.length) % investmentPartners.length);
  // };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openTestimonialModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsTestimonialModalOpen(true);
  };

  const closeTestimonialModal = () => {
    setIsTestimonialModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <main className="min-h-screen">
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Banner Section */}
      <section className="relative min-h-[750px] md:min-h-[700px] lg:min-h-[700px] flex items-center">
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
          
          {/* Advisor photo positioned on the right */}
          <div className="absolute right-4 sm:right-20 md:right-24 lg:right-60 -bottom-12 sm:-bottom-16 md:-bottom-18 lg:-bottom-24 z-10 w-[320px] h-[420px] sm:w-[400px] sm:h-[520px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[750px] xl:w-[650px] xl:h-[850px]">
            <Image
              src="/advisor-photo.png"
              alt="Financial Advisor"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-[750px] md:min-h-[700px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-left md:text-left lg:text-left mb-8 lg:mb-0 lg:pr-8 xl:pr-16 lg:pl-0 lg:-ml-8 px-4 sm:px-0 pt-16 sm:pt-12 md:pt-20 lg:pt-0 md:pl-12 lg:pl-16">
              <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-white leading-tight mb-6 sm:mb-6 md:mb-8 lg:mb-6 drop-shadow-lg">
                <span className="block md:hidden">Váš</span>
                <span className="block md:hidden">finančný</span>
                <span className="block md:hidden">poradca</span>
                <span className="hidden md:block">Váš finančný</span>
                <span className="hidden md:block">poradca</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-lg lg:text-lg text-white mb-6 sm:mb-6 md:mb-10 lg:mb-8 max-w-xl md:max-w-lg lg:max-w-2xl mx-auto md:mx-0 lg:mx-0 font-light drop-shadow-md">
                Zhodnoťte svoj majetok medziročne až o 20% vďaka profesionálnemu prístupu k financiám.
              </p>
              <Link href="/kontakt">
                <button className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-4 sm:px-6 md:px-8 lg:px-8 py-3 sm:py-3 md:py-4 lg:py-4 rounded-lg transition-colors shadow-lg text-base sm:text-lg md:text-lg lg:text-lg w-full sm:w-auto max-w-xs sm:max-w-none mx-auto md:mx-0 lg:mx-0 block sm:inline-block">
                  Kontaktujte ma
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* My Achievements Section */}
      <section className="py-12 md:py-16 lg:py-26 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#202325] text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32 -mt-4 sm:-mt-6 md:-mt-10">
            PRÁCA KANCELÁRIE V KOCKE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-32 justify-items-center lg:justify-start lg:-ml-4 xl:-ml-20">
            {/* Certificate Card */}
            <div className="bg-[#2A2C2D] rounded-lg px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 py-6 sm:py-8 text-center flex flex-col justify-center items-center h-64 sm:h-72 md:h-80 hover:scale-105 transition-all duration-300 cursor-pointer w-full max-w-xs">
              {/* Certificate Document Icon */}
              <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white mb-4 sm:mb-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Document background */}
                <rect x="6" y="4" width="10" height="14" rx="1" fill="currentColor"/>
                {/* Horizontal lines on document */}
                <line x1="8" y1="8" x2="13" y2="8" stroke="black" strokeWidth="0.8"/>
                <line x1="8" y1="10" x2="13" y2="10" stroke="black" strokeWidth="0.8"/>
                <line x1="8" y1="12" x2="11" y2="12" stroke="black" strokeWidth="0.8"/>
                {/* Small bookmark tab */}
                <rect x="16" y="6" width="1.5" height="6" fill="currentColor"/>
                <path d="M16 12 L17.75 10.5 L17.5 12 Z" fill="currentColor"/>
              </svg>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7FE3DC] mb-2 sm:mb-4 -mt-1 sm:-mt-2">6/6</div>
              <div className="text-xs sm:text-sm md:text-base font-semibold text-white uppercase tracking-wide">NBS LICENCIÍ</div>
            </div>

            {/* People Card */}
            <div className="bg-[#2A2C2D] rounded-lg px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 py-6 sm:py-8 text-center flex flex-col justify-center items-center h-64 sm:h-72 md:h-80 hover:scale-105 transition-all duration-300 cursor-pointer w-full max-w-xs">
              {/* Two People Icon */}
              <svg className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white mb-4 sm:mb-6 -mt-2 sm:-mt-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="9" cy="7" r="4"/>
                <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                <circle cx="16" cy="7" r="3"/>
                <path d="M16 14a3 3 0 0 1 3 3v2"/>
              </svg>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7FE3DC] mb-2 sm:mb-4">3000+</div>
              <div className="text-xs sm:text-sm md:text-base font-semibold text-white uppercase tracking-wide">KLIENTOV</div>
            </div>

            {/* Euro Card */}
            <div className="bg-[#2A2C2D] rounded-lg px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 py-6 sm:py-8 text-center flex flex-col justify-center items-center h-64 sm:h-72 md:h-80 hover:scale-105 transition-all duration-300 cursor-pointer w-full max-w-xs">
              {/* Euro Circle Icon */}
              <svg className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 text-white mb-4 sm:mb-6 mt-3 sm:mt-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path d="M15 8c-1.5-1-3.5-1-5 0-1.5 1-1.5 3-1.5 4s0 3 1.5 4c1.5 1 3.5 1 5 0M8 11h6M8 13h6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7FE3DC] mb-4 sm:mb-8 mt-3 sm:mt-6">400&nbsp;000</div>
              <div className="text-xs sm:text-sm md:text-base font-semibold text-white uppercase tracking-wide leading-tight">POD<br/>SPRÁVOU<br/>KANCELÁRIE</div>
            </div>

            {/* House Card */}
            <div className="bg-[#2A2C2D] rounded-lg px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 py-6 sm:py-8 text-center flex flex-col justify-center items-center h-64 sm:h-72 md:h-80 hover:scale-105 transition-all duration-300 cursor-pointer w-full max-w-xs">
              {/* House Icon */}
              <svg className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white mb-4 sm:mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7FE3DC] mb-2 sm:mb-4 leading-tight">1M+</div>
              <div className="text-xs sm:text-sm md:text-base font-semibold text-white uppercase tracking-wide leading-tight">V<br/>HYPOTÉKACH</div>
            </div>

            {/* Experience Card */}
            <div className="bg-[#2A2C2D] rounded-lg px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 py-6 sm:py-8 text-center flex flex-col justify-center items-center h-64 sm:h-72 md:h-80 hover:scale-105 transition-all duration-300 cursor-pointer w-full max-w-xs">
              {/* Experience/Time Icon */}
              <svg className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white mb-4 sm:mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <polyline points="12,6 12,12 16,14" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7FE3DC] mb-2 sm:mb-4">20</div>
              <div className="text-xs sm:text-sm md:text-base font-semibold text-white uppercase tracking-wide">ROKOV<br/>PRAXE</div>
            </div>
          </div>
          
          {/* Concluding Statement */}
          <div className="text-center mt-16 sm:mt-24 md:mt-32 lg:mt-40">
            <p className="text-lg sm:text-xl md:text-2xl text-[#202325] font-bold px-4">
              Mojím poslaním je, aby moji klienti boli z roka na rok bohatší.
            </p>
          </div>
        </div>
      </section>


      {/* Questions Section */}
      <section className="py-12 md:py-16 bg-[#202325]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-[#5ECAD5] mb-8 md:mb-12">
            MÁTE OTÁZKY?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12">
            Som tu, aby som vám pomohol nájsť riešenie, ktoré bude vyhovova&apos; práve vám. Vyplň&apos;te krátky formulár, ktorý vám zaberie menej než 2 minúty.
          </p>
          
          {/* Čo tým získate section */}
          <div className="mb-8 md:mb-12 text-left max-w-4xl mx-auto ml-4">
            <h3 className="text-2xl md:text-3xl font-normal text-white mb-6">Čo tým získate?</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-white font-normal mr-3">1.</span>
                <p className="text-gray-300 text-base md:text-lg">Bezplatný vstupnú analýzu vašej aktuálnej finančnej situácie.</p>
              </div>
              <div className="flex items-start">
                <span className="text-white font-normal mr-3">2.</span>
                <p className="text-gray-300 text-base md:text-lg">Konkrétne odporúčania prispôsobené vašim cieľom a možnostiam.</p>
              </div>
              <div className="flex items-start">
                <span className="text-white font-normal mr-3">3.</span>
                <p className="text-gray-300 text-base md:text-lg">Nezáväzný návrh spolupráce - až po vašom súhlase podnikneme ďalšie kroky.</p>
              </div>
            </div>
          </div>

          {/* Ako to prebieha section */}
          <div className="mb-8 md:mb-12 text-left max-w-4xl mx-auto ml-4">
            <h3 className="text-2xl md:text-3xl font-normal text-white mb-6">Ako to prebieha?</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-white font-normal mr-3">1.</span>
                <p className="text-gray-300 text-base md:text-lg">Vyplníte formulár — základné údaje a vaše priority.</p>
              </div>
              <div className="flex items-start">
                <span className="text-white font-normal mr-3">2.</span>
                <p className="text-gray-300 text-base md:text-lg">Do 24 hodín vás kontaktujem s prvou analýzou.</p>
              </div>
              <div className="flex items-start">
                <span className="text-white font-normal mr-3">3.</span>
                <p className="text-gray-300 text-base md:text-lg">Dohodneme si konzultáciu (online alebo osobne), kde prejdeme všetky otázky.</p>
              </div>
              <div className="flex items-start">
                <span className="text-white font-normal mr-3">4.</span>
                <p className="text-gray-300 text-base md:text-lg">Spoločne nastavíme plán, aby vaše financie pracovali pre vás.</p>
              </div>
            </div>
          </div>
          
          <Link href="/formular">
            <button className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg">
              Chcem formulár
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] mb-12 md:mb-16">
            REFERENCIE
          </h2>
          
          <div className="relative max-w-2xl mx-auto">
            {/* Main testimonial display */}
            <div className="py-8">
              {/* Avatar */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {testimonials[currentTestimonialIndex].initial}
                </div>
              </div>
              
              {/* Name */}
              <h4 className="font-semibold text-[#202325] text-lg mb-8">
                {testimonials[currentTestimonialIndex].name}
              </h4>
              
              {/* Quote with quotation marks */}
              <div className="relative mb-8">
                {/* Opening quote */}
                <div className="absolute -left-4 -top-2 text-4xl text-[#5ECAD5] font-bold leading-none">
                  &quot;
                </div>
                {/* Closing quote */}
                <div className="absolute -right-4 -bottom-6 text-4xl text-[#5ECAD5] font-bold leading-none">
                  &quot;
                </div>
                
                <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed px-8">
                  {testimonials[currentTestimonialIndex].shortText}
                </blockquote>
                
                {/* Show "viac" button only if text is truncated */}
                {testimonials[currentTestimonialIndex].text !== testimonials[currentTestimonialIndex].shortText && (
                  <button
                    onClick={() => openTestimonialModal(testimonials[currentTestimonialIndex])}
                    className="mt-4 text-[#5ECAD5] hover:text-[#4BB8C4] underline text-sm font-medium transition-colors"
                  >
                    viac
                  </button>
                )}
              </div>
            </div>
            
            {/* Progress bar navigation */}
            <div className="relative mt-8">
              {/* Navigation arrows */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#5ECAD5] text-2xl hover:text-[#4BB8C4] transition-colors z-10"
              >
                ‹
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#5ECAD5] text-2xl hover:text-[#4BB8C4] transition-colors z-10"
              >
                ›
              </button>
              
              {/* Progress bar */}
              <div className="mx-8 bg-gray-200 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-[#5ECAD5] h-full rounded-full transition-all duration-300 ease-in-out"
                  style={{
                    width: `${((currentTestimonialIndex + 1) / testimonials.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] mb-12 md:mb-16">
            PARTNERI
          </h2>
          
          {/* Partner logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
            <div className="flex items-center justify-center h-16 sm:h-20 md:h-24">
              <Image
                src="/Kooperativa.jpg"
                alt="Kooperativa"
                width={160}
                height={80}
                className="max-h-12 sm:max-h-16 md:max-h-20 w-auto object-contain hover:scale-105 transition-all duration-300"
              />
            </div>
            
            <div className="flex items-center justify-center h-16 sm:h-20 md:h-24">
              <Image
                src="/mBank.jpg"
                alt="mBank"
                width={160}
                height={80}
                className="max-h-12 sm:max-h-16 md:max-h-20 w-auto object-contain hover:scale-105 transition-all duration-300"
              />
            </div>
            
            <div className="flex items-center justify-center h-16 sm:h-20 md:h-24">
              <Image
                src="/Alianz.png"
                alt="Allianz"
                width={400}
                height={200}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:scale-[1.4] sm:hover:scale-[1.5] md:hover:scale-[1.65] transition-all duration-300 scale-125 sm:scale-140 md:scale-150"
              />
            </div>
            
            <div className="flex items-center justify-center h-16 sm:h-20 md:h-24">
              <Image
                src="/Conseq.png"
                alt="CONSEQ"
                width={160}
                height={80}
                className="max-h-12 sm:max-h-16 md:max-h-20 w-auto object-contain hover:scale-105 transition-all duration-300"
              />
            </div>
            
            <div className="flex items-center justify-center h-16 sm:h-20 md:h-24">
              <Image
                src="/Generali.jpg"
                alt="Generali"
                width={400}
                height={200}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:scale-[1.4] sm:hover:scale-[1.5] md:hover:scale-[1.65] transition-all duration-300 scale-125 sm:scale-140 md:scale-150"
              />
            </div>
          </div>
          
          <p className="text-gray-600 mt-6 sm:mt-8 md:mt-12 text-sm sm:text-base md:text-lg px-4">
            Kompletný zoznam partnerov nájdete <Link href="/spoluprace" className="text-[#5ECAD5] hover:text-[#4BB8C4] underline">tu</Link>.
          </p>
        </div>
      </section>

      {/* Testimonial Modal */}
      {isTestimonialModalOpen && selectedTestimonial && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/20 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={closeTestimonialModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              {/* Avatar and name */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {selectedTestimonial.initial}
                </div>
                <h3 className="font-semibold text-[#202325] text-xl">
                  {selectedTestimonial.name}
                </h3>
              </div>
              
              {/* Full testimonial text */}
              <div className="relative">
                {/* Opening quote */}
                <div className="absolute -left-2 -top-2 text-3xl text-[#5ECAD5] font-bold leading-none">
                  &quot;
                </div>
                {/* Closing quote */}
                <div className="absolute -right-2 -bottom-4 text-3xl text-[#5ECAD5] font-bold leading-none">
                  &quot;
                </div>
                
                <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed px-6 py-4">
                  {selectedTestimonial.text}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 