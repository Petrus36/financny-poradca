"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";

export default function OMnePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Counter animation states
  const [clientsCount, setClientsCount] = useState(0);
  const [aumCount, setAumCount] = useState(0);
  const [mortgageCount, setMortgageCount] = useState(0);

  // Animation function for counting
  const animateCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>, 
    target: number, 
    duration: number = 2000,
    delay: number = 0
  ) => {
    setTimeout(() => {
      const startTime = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
        
        setter(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setter(target);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);
  };

  // Start animations when component mounts
  useEffect(() => {
    // Animate each counter with different delays for staggered effect
    animateCounter(setClientsCount, 50, 1500, 500);
    animateCounter(setAumCount, 300, 2000, 700);
    animateCounter(setMortgageCount, 2.5, 1800, 900);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen">
      {/* Contact Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Banner Section */}
      <section className="relative min-h-[750px] md:min-h-[700px] lg:min-h-[700px] flex items-center overflow-hidden">
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
          <div className="absolute right-4 sm:right-20 md:-right-30 lg:right-20 -bottom-12 sm:-bottom-16 md:-bottom-16 lg:-bottom-24 z-20 w-[320px] h-[420px] sm:w-[400px] sm:h-[520px] md:w-[520px] md:h-[650px] lg:w-[600px] lg:h-[750px] xl:w-[650px] xl:h-[850px]">
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
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center min-h-[750px] md:min-h-[700px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-left md:text-left lg:text-left mb-8 md:mb-0 lg:mb-0 lg:pr-8 xl:pr-16 lg:pl-0 lg:ml-8 px-4 sm:px-0 pt-32 sm:pt-32 md:pt-0 lg:pt-0 md:pl-12 lg:pl-16 md:max-w-[55%] md:mr-auto">
              <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg" style={{fontFamily: 'Monda, sans-serif'}}>
                <span className="block md:hidden">O mne</span>
                <span className="hidden md:block">O mne</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-xl text-white mb-8 max-w-xl md:max-w-3xl lg:max-w-lg mx-auto lg:mx-0 font-light drop-shadow-md">
                Nie ste len ďalší klient. Ste človek, ktorému pomôžem vybudovať zdravý finančný život.
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

      {/* Moja cesta Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            MOJA CESTA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="w-full max-w-md mx-auto md:mx-0 lg:mx-0">
              <Image
                src="/O-mne-moja-cesta.jpeg"
                alt="Moja cesta - Financial team"
                width={400}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full aspect-[4/3]"
              />
            </div>
            
            {/* Text Content */}
            <div className="text-justify text-base md:text-lg text-[#202325] leading-relaxed space-y-4">
              <p>
                Študoval som na gymnáziu v Bratislave. &ldquo;Celý život&rdquo; som bol profesionálny a aktívny športovec. 
                Moja mama zase robí už viac ako 20 rokov vo financiách a je pre mňa obrovským vzorom. 
                Posledné roky (asi 8) som popri hádzanej aj pracoval. Vždy som bol zamestnaný v nejakej firme, 
                kde som patril medzi tých, ktorí boli oceňovaní, ale mne to nestačilo a chcel som začať robiť na seba a niečo za sebou zanechať.
              </p>
              <p>
                Aj keď veľmi rád spomínam na svoje 2,5 ročné pôsobenie v spoločnosti Dell, kde som bol v roku 2021 vyhlásený medzi top predajcov na celom svete. 
                Keď som prestal aktívne hrávať, hneď som sa začal naplno venovať financiám.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Začiatok Section */}
      <section className="bg-[#202325] py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6 text-left order-2 md:order-1 lg:order-1">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Začiatok</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Moje začiatky boli veľmi dynamické a troška iné ako štandardne pri nových ľuďoch. 
                  Ja som bol už dlhšie rozhodnutý, že to robiť chcem a preto som len čakal, kým už  
                  budem môcť na full-time. Absolvoval som veľké množstvo školení a, aj keď sa mi to  
                  najskôr nepáčilo, dnes neľutujem ani jedno jediné. Posunul som sa osobnostne, 
                  vzdelaním, ale aj odborne.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Kariéra finančného poradcu</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Chcel som to robiť, robím to a dúfam, že dlho budem.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full max-w-md mx-auto md:mx-0 lg:mx-0 order-1 md:order-2 lg:order-2">
              <Image
                src="/O-mne.jpeg"
                alt="Financial advisor career"
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Moje výsledky Section */}
      <section className="pt-6 pb-2 md:pt-8 md:pb-2 lg:pt-12 lg:pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#202325] text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            MOJE VÝSLEDKY
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            {/* Clients per year */}
            <div className="text-center flex flex-col items-center w-1/2 sm:w-auto">
              <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#5ECAD5] mb-0 whitespace-nowrap">
                {clientsCount}+
              </div>
              <div className="text-sm sm:text-sm md:text-base font-semibold text-[#202325] uppercase tracking-wide mt-6">
                KLIENTOV ZA ROK
              </div>
            </div>

            {/* AUM */}
            <div className="text-center flex flex-col items-center w-1/2 sm:w-auto">
              <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#5ECAD5] mb-0 whitespace-nowrap">
                {aumCount}k €
              </div>
              <div className="text-sm sm:text-sm md:text-base font-semibold text-[#202325] uppercase tracking-wide mt-6">
                AUM
              </div>
            </div>

            {/* Processed mortgages */}
            <div className="text-center flex flex-col items-center w-full sm:w-auto">
              <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#5ECAD5] mb-0 whitespace-nowrap mt-2 sm:mt-2 md:mt-3 lg:mt-4">
                {mortgageCount} M
              </div>
              <div className="text-sm sm:text-sm md:text-base font-semibold text-[#202325] uppercase tracking-wide leading-tight mt-8">
                SPRACOVANÝCH<br/>HYPOTÉK
              </div>
            </div>
          </div>
          
          {/* Concluding Statement */}
          <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#202325] font-bold px-4">
              Mojím poslaním je, aby moji klienti boli z roka na rok bohatší.
            </p>
          </div>
        </div>
      </section>

      {/* Robím to inak Section */}
      <section className="bg-[#202325] py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#5ECAD5] text-center mb-8 md:mb-12 lg:mb-16 uppercase">
              ROBÍM TO INAK
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 w-full">
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Individuálny prístup pre klienta
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Nemám nikdy 2 rovnakých klientov. Každý klient má iné potreby, ciele, očakávania a finančné možnosti. 
                  Preto je potrebné sa spoznať, aby som pochopil ako funguje. Na základe informácii pripravím finančný plán na mieru.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Šetrím čas aj peniaze
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Okrem nosenia zložky do banky vám ušetrím čas pri splatení hypotéky o 10 až 15 rokov skôr.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Odbornosť, na ktorú sa môžete spoľahnúť
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Vo svete plnom ponúk a sľubov dávam dôraz na to podstatné - reálne výsledky a férový prístup. 
                  Prinášam prehľad a zodpovednosť, ktoré vám pomôžu robiť správne rozhodnutia dnes aj zajtra. 
                  Pracujem tak, aby ste presne vedeli, čo robím, prečo to robím a aký to má pre vás zmysel. 
                  Nehrám sa na dokonalosť, ale pracujem na tom, aby ste sa na mňa mohli s istotou spoľahnúť. 
                  Som tu preto, aby som vám pomohol zorientovať sa, rozhodovať sa s rozumom a cítiť sa pri tom dobre.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Komplexná ponuka a doživotný servis
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Moja práca nekončí podpisom zmluvy. Budujem s vami dlhodobý vzťah. Budem vás informovať o aktuálnych 
                  možnostiach a produktových novinkách. Vždy sa môžete spoľahnúť, že vo financiách budete mať pri sebe 
                  človeka, ktorý myslí niekoľko krokov dopredu a vie sa postarať aj o to, čo zatiaľ nepotrebujete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifikáty Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            CERTIFIKÁTY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg shadow-lg overflow-hidden mb-4">
                <Image
                  src="/certifikat-Poistenie.png"
                  alt="Certifikát Poistenie"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm font-semibold text-[#202325]">POISTENIE</div>
            </div>
            <div className="text-center">
              <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg shadow-lg overflow-hidden mb-4">
                <Image
                  src="/certifikat-Vklady.png"
                  alt="Certifikát Vklady"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm font-semibold text-[#202325]">VKLADY</div>
            </div>
            <div className="text-center">
              <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg shadow-lg overflow-hidden mb-4">
                <Image
                  src="/Uvery.png"
                  alt="Certifikát Úvery"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm font-semibold text-[#202325]">ÚVERY</div>
            </div>
            <div className="text-center">
              <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg shadow-lg overflow-hidden mb-4">
                <Image
                  src="/Kapitálový_trh.png"
                  alt="Certifikát Kapitálový trh"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm font-semibold text-[#202325]">KAPITÁLOVÝ TRH</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}