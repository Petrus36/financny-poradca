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
    { name: "VÚB Banka", logo: "/VÚB.webp", rate: "od 3,2%", isImage: true },
    { name: "Tatra Banka", logo: "/TatraBanka.webp", rate: "od 3,1%", isImage: true },
    { name: "SLSP", logo: "/slovenskáSporitelna.webp", rate: "od 3,3%", isImage: true },
    { name: "Poštová Banka", logo: "/POSTOVA_BANKA_LOGO_RGB.jpg", rate: "od 3,4%", isImage: true },
    { name: "UniCredit Bank", logo: "/UniCredit-Logo.jpg", rate: "od 3,0%", isImage: true },
    { name: "Prima Banka", logo: "/PrimaBanka.jpg", rate: "od 3,2%", isImage: true, customSize: true }
  ];

  return (
    <main className="min-h-screen">
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

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
        </div>
        
        {/* Advisor photo positioned on the right */}
        <div className="absolute right-4 sm:right-20 md:-right-30 lg:right-60 -bottom-12 sm:-bottom-16 md:-bottom-16 lg:-bottom-24 z-20 w-[320px] h-[420px] sm:w-[400px] sm:h-[520px] md:w-[520px] md:h-[650px] lg:w-[600px] lg:h-[750px] xl:w-[650px] xl:h-[850px]">
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
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center min-h-[750px] md:min-h-[700px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-left md:text-left lg:text-left mb-8 md:mb-0 lg:mb-0 lg:pr-8 xl:pr-16 lg:pl-0 lg:-ml-8 px-4 sm:px-0 pt-40 sm:pt-32 md:pt-0 lg:pt-0 md:pl-12 lg:pl-16 md:max-w-[55%] md:mr-auto">
              <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg">
                <span className="block md:hidden">Hypotéky</span>
                <span className="hidden md:block">Hypotéky</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-xl text-white mb-8 max-w-xl md:max-w-3xl lg:max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
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

      {/* Expert Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Question - Magazine Style */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#5ECAD5] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              HYPOTÉKY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202325] mb-8 max-w-3xl mx-auto leading-tight">
              Vedeli ste, že aj dnes sa dá získať financovanie až do 90% hodnoty nehnuteľnosti?
            </h2>
            <div className="w-20 h-1 bg-[#5ECAD5] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ak sa správne nastavia podmienky a zvolí vhodný postup, dá sa vyhnúť chybám, ktoré by inak mohli stáť čas, peniaze či zbytočný stres. Celý proces sa dá zvládnuť prehľadne s riešením, ktoré bude pre vás najvýhodnejší a bude vám dávať dlhodobo zmysel, musíte máť správne informácie a vyhladať hypošpecialistu.
            </p>
          </div>

          {/* Quote Style Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-l-4 border-[#5ECAD5]">
            <div className="flex items-start">
              <div className="text-6xl text-[#5ECAD5] mr-4 leading-none">&ldquo;</div>
              <div>
                <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                  Ak sú správne nastavené podmienky a zvolený vhodný postup, dá sa vyhnúť chybám, ktoré často stoja zbytočne veľa – času, peňazí aj nervov. Celý proces sa dá zvládnuť prehľadne, s riešením, ktoré vám bude dávať dlhodobý zmysel a reálnu výhodu – nie len na papieri, ale aj v praxi.
                </p>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  Nie vždy je najlacnejšia ponuka tou najlepšou. Rozhoduje celkový kontext, detailné porovnanie a správne informácie. A práve tu prichádza na rad hypošpecialista – človek, ktorý vám pomôže zorientovať sa, vybrať múdro a bez zbytočných kompromisov.
                </p>
              </div>
            </div>
          </div>

          {/* Two Column Article Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <article className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-[#202325]">
                  Ako hypotéku splatiť skôr?
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Mnohí ľudia sa pri hypotéke zameriavajú len na to, ako ju vôbec získať. Menej často však riešia to, ako ju splatiť čo najrýchlejšie a s čo najmenším preplatením a pritom práve to môže výrazne ovplyvniť ich budúce financie.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <span className="w-5 h-5 bg-green-500 rounded-full mr-2"></span>
                  Kľúčové fakty:
                </h4>
                <p className="text-green-700 text-sm leading-relaxed">
                  Jednou z možností je už na začiatku hypotéky (alebo aj počas jej splácania) nastaviť vhodnú stratégiu, ktorá zohľadní príjmy, výdavky a ďalšie ciele. Vďaka nej je možné skrátiť splatnosť hypotéky aj o 10 až 15 rokov a ušetriť tisíce eur.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Ak si na takéto nastavenie netrúfate sami, je rozumné poradiť sa s niekým, kto má skúsenosti a vie vám ukázať rôzne cesty. V tomto viem pomôcť aj ja – pripravím vám bezplatne osobný finančný plán a stratégiu splácania, vďaka ktorej môžete hypotéku zvládnuť rýchlejšie a efektívnejšie.
              </p>
            </article>

            {/* Right Column */}
            <article className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-[#202325]">
                  Ako si mám vybaviť hypotéku?
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Hypotéka nie je len o tom, ktorá banka dá najnižší úrok. Každý človek má inú situáciu, iné plány a inú predstavu o budúcnosti – a preto by aj hypotéka mala byť nastavená individuálne na mieru.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
                  <span className="w-5 h-5 bg-amber-500 rounded-full mr-2"></span>
                  Dôležité upozornenie:
                </h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Pri výbere hypotéky sa oplatí pozerať nielen na úrok, ale aj na to, aké sú podmienky, možnosti predčasného splatenia, poplatky a dlhodobý vplyv na rozpočet. Kto si to zistí dopredu a porovná viac možností, vyhne sa nepríjemným prekvapeniam.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Nie vždy to však človek zvládne sám. Niekedy pomôže konzultácia s odborníkom – stretnutie, na ktorom preberiete celú vašu situáciu a pripraví sa finančná analýza a plán, podľa ktorého si hypotéku vybavíte pokojne, bez stresu a s istotou, že ste sa rozhodli správne.
              </p>
            </article>
          </div>

          {/* Simple CTA */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
            >
              Bezplatná konzultácia
            </button>
            <p className="text-gray-500 text-sm mt-3">
              Bez záväzkov • Individuálny prístup
            </p>
          </div>
        </div>
      </section>

      {/* Mortgage Types Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            TYPY HYPOTÉK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-8">
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            NAŠI BANKOVÍ PARTNERI
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-32">
            {banks.map((bank, index) => (
              <div key={index} className="flex items-center justify-center h-16 sm:h-20 md:h-24">
                {bank.isImage ? (
                  <Image
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    width={400}
                    height={200}
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:scale-[1.4] sm:hover:scale-[1.5] md:hover:scale-[1.65] transition-all duration-300 scale-125 sm:scale-140 md:scale-150"
                  />
                ) : (
                  <span className="text-3xl">{bank.logo}</span>
                )}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8">
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