"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "../../components/ContactModal";

export default function DomovPage() {
  // const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      name: "Mária Kováčová",
      location: "Bratislava",
      text: "Výborný prístup a profesionálne poradenstvo. Pomohol mi vytvoriť finančný plán, ktorý mi umožnil dosiahnuť moje ciele.",
      initial: "M"
    },
    {
      id: 2,
      name: "Peter Novák",
      location: "Košice",
      text: "Vďaka jeho poradenstvu som si zabezpečil výborné investičné príležitosti. Môžem len odporučiť jeho služby.",
      initial: "P"
    },
    {
      id: 3,
      name: "Jana Svobodová",
      location: "Trenčín",
      text: "Profesionálny prístup, jasné vysvetlenie všetkých možností. Cítim sa teraz oveľa istejšie vo svojich finančných rozhodnutiach.",
      initial: "J"
    },
    {
      id: 4,
      name: "Tomáš Dvorák",
      location: "Nitra",
      text: "Skvelé poradenstvo v oblasti investovania. Vďaka jeho návrhom sa mi podarilo výrazne zlepšiť moju finančnú situáciu.",
      initial: "T"
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
            src="/banner.svg"
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
          
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
        </div>
        
        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-16 lg:pl-0 lg:-ml-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg">
                Váš finančný poradca
              </h1>
              <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Zhodnoťte svoj majetok medziročne až o 20% vďaka profesionálnemu prístupu k financiám.
              </p>
              <Link href="/kontakt">
                <button className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto">
                  Kontaktujte ma
                </button>
              </Link>
            </div>
            

          </div>
        </div>
      </section>

      {/* My Achievements Section */}
      <section className="py-12 md:py-26 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-medium text-[#202325] text-center mb-24 md:mb-32 -mt-10">
            PRÁCA KANCELÁRIE V KOCKE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-32 md:gap-40 justify-start -ml-20">
            {/* Certificate Card */}
            <div className="bg-[#2A2C2D] rounded-lg px-28 py-8 text-center flex flex-col justify-center items-center h-80 hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Certificate Document Icon */}
              <svg className="w-24 h-24 text-white mb-6" fill="currentColor" viewBox="0 0 24 24">
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
              <div className="text-4xl font-bold text-[#7FE3DC] mb-4 -mt-2">6/6</div>
              <div className="text-base font-semibold text-white uppercase tracking-wide">NBS LICENCIÍ</div>
            </div>

            {/* People Card */}
            <div className="bg-[#2A2C2D] rounded-lg px-28 py-8 text-center flex flex-col justify-center items-center h-80 hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Two People Icon */}
              <svg className="w-20 h-20 text-white mb-6 -mt-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="9" cy="7" r="4"/>
                <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                <circle cx="16" cy="7" r="3"/>
                <path d="M16 14a3 3 0 0 1 3 3v2"/>
              </svg>
              <div className="text-4xl font-bold text-[#7FE3DC] mb-4">3000+</div>
              <div className="text-base font-semibold text-white uppercase tracking-wide">KLIENTOV</div>
            </div>

            {/* Euro Card */}
            <div className="bg-[#2A2C2D] rounded-lg px-28 py-8 text-center flex flex-col justify-center items-center h-80 hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Euro Circle Icon */}
              <svg className="w-56 h-56 text-white mb-6 mt-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path d="M15 8c-1.5-1-3.5-1-5 0-1.5 1-1.5 3-1.5 4s0 3 1.5 4c1.5 1 3.5 1 5 0M8 11h6M8 13h6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="text-4xl font-bold text-[#7FE3DC] mb-8 mt-6">400&nbsp;000</div>
              <div className="text-base font-semibold text-white uppercase tracking-wide leading-tight">POD<br/>SPRÁVOU<br/>KANCELÁRIE</div>
            </div>

            {/* House Card */}
            <div className="bg-[#2A2C2D] rounded-lg px-28 py-8 text-center flex flex-col justify-center items-center h-80 hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* House Icon */}
              <svg className="w-20 h-20 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              <div className="text-4xl font-bold text-[#7FE3DC] mb-4 leading-tight">1M+</div>
              <div className="text-base font-semibold text-white uppercase tracking-wide leading-tight">V<br/>HYPOTÉKACH</div>
            </div>

            {/* Experience Card */}
            <div className="bg-[#2A2C2D] rounded-lg px-28 py-8 text-center flex flex-col justify-center items-center h-80 hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Experience/Time Icon */}
              <svg className="w-20 h-20 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <polyline points="12,6 12,12 16,14" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="text-4xl font-bold text-[#7FE3DC] mb-4">20</div>
              <div className="text-base font-semibold text-white uppercase tracking-wide">ROKOV<br/>PRAXE</div>
            </div>
          </div>
          
          {/* Concluding Statement */}
          <div className="text-center mt-40">
                          <p className="text-xl text-[#202325] font-bold">
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
          
          <button 
            onClick={openModal}
            className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg"
          >
            Chcem formulár
          </button>
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
                  {testimonials[currentTestimonialIndex].text}
                </blockquote>
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
          <div className="flex items-center justify-center gap-16 md:gap-20 lg:gap-24">
            <div className="flex items-center justify-center h-20 md:h-24">
              <Image
                src="/Kooperativa.jpg"
                alt="Kooperativa"
                width={160}
                height={80}
                className="max-h-16 md:max-h-20 w-auto object-contain hover:scale-105 transition-all duration-300"
              />
            </div>
            
            <div className="flex items-center justify-center h-20 md:h-24">
              <Image
                src="/mBank.jpg"
                alt="mBank"
                width={160}
                height={80}
                className="max-h-16 md:max-h-20 w-auto object-contain hover:scale-105 transition-all duration-300"
              />
            </div>
            
            <div className="flex items-center justify-center h-20 md:h-24">
              <Image
                src="/Alianz.png"
                alt="Allianz"
                width={400}
                height={200}
                className="h-20 md:h-24 w-auto object-contain hover:scale-[1.65] transition-all duration-300 scale-150"
              />
            </div>
            
            <div className="flex items-center justify-center h-20 md:h-24">
              <Image
                src="/Conseq.png"
                alt="CONSEQ"
                width={160}
                height={80}
                className="max-h-16 md:max-h-20 w-auto object-contain hover:scale-105 transition-all duration-300"
              />
            </div>
            
            <div className="flex items-center justify-center h-20 md:h-24">
              <Image
                src="/Generali.jpg"
                alt="Generali"
                width={400}
                height={200}
                className="h-20 md:h-24 w-auto object-contain hover:scale-[1.65] transition-all duration-300 scale-150"
              />
            </div>
          </div>
          
          <p className="text-gray-600 mt-8 md:mt-12 text-base md:text-lg">
            Kompletný zoznam partnerov nájdete <Link href="/spoluprace" className="text-[#5ECAD5] hover:text-[#4BB8C4] underline">tu</Link>.
          </p>
        </div>
      </section>
    </main>
  );
} 