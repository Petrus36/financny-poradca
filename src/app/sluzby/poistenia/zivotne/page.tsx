"use client";

import React, { useState } from "react";
import Image from "next/image";

import ContactFormModal from "../../../../components/ContactFormModal";

export default function ZivotnePoisteniePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _insuranceTypes = [
    {
      title: "Životné poistenie",
      description: "Zabezpečte svoju rodinu pre prípad nečakaných situácií",
      features: ["Ochrana rodiny", "Daňové úľavy", "Investičná zložka"],
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Úrazové poistenie",
      description: "Finančná pomoc v prípade úrazu alebo invalidity",
      features: ["Vysoké plnenia", "Rýchla výplata", "Široké krytie"],
      icon: "🩹"
    },
    {
      title: "Kritické choroby",
      description: "Finančná podpora pri diagnostikovaní závažných ochorení",
      features: ["Včasná diagnostika", "Jednorazová výplata", "Krytie liečby"],
      icon: "🏥"
    }
  ];


  return (
    <main className="min-h-screen">
      {/* Contact Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Banner Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Banner background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Poistenia.svg"
            alt="Banner background"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        
        
        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-left md:text-left lg:text-left mb-8 md:mb-0 lg:mb-0 lg:pr-8 xl:pr-16 lg:pl-0 lg:ml-8 px-4 sm:px-0 pt-40 sm:pt-32 md:pt-0 lg:pt-0 md:pl-12 lg:pl-16 md:max-w-[55%] md:mr-auto">
              <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg" style={{fontFamily: 'Monda, sans-serif'}}>
                <span className="block md:hidden">Životné poistenie</span>
                <span className="hidden md:block">Životné poistenie</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-xl text-white mb-8 max-w-xl md:max-w-3xl lg:max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Zabezpečte svoju rodinu pre prípad nečakaných situácií
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

      {/* Expert Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Question - Magazine Style */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#5ECAD5] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ŽIVOTNÉ POISTENIE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202325] mb-8 max-w-3xl mx-auto leading-tight">
              Nečakajte, kým bude neskoro
            </h2>
            <div className="w-20 h-1 bg-[#5ECAD5] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dôležitosť životného poistenia často pochopíme až vtedy, keď nastane nečakaná situácia. So správne nastaveným životným poistením získate istotu, že ani v ťažkých chvíľach nezostanete bez finančnej opory. Pomôžem vám nastaviť poistenie tak, aby chránilo vás, vašu rodinu aj váš životný štandard rozumne, zrozumiteľne a bez zbytočných nákladov.
            </p>
          </div>

          {/* Quote Style Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-l-4 border-[#5ECAD5]">
            <div className="flex items-start">
              <div className="text-6xl text-[#5ECAD5] mr-4 leading-none">&ldquo;</div>
              <div>
                <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                Každý z nás má svoje plány – budovať majetok, splniť si sny, dopriať rodine istotu a pohodlie.
                No stačí jedna nečakaná udalosť a všetky tieto ciele sa môžu zrazu zastaviť.
                A pritom to tak vôbec nemusí byť.
                Ako často hovorím – „lacno nakúpené peniaze v čase krízy“.
                Životné poistenie je práve ten spôsob, ako ochrániť svoje sny, aby neskončili kvôli
                okolnostiam, ktoré nevieme ovplyvniť.
                Pretože ak sa o svoje ciele staráme dnes, zostanú v bezpečí aj zajtra.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-16">
            <div className="max-w-3xl mx-auto">
              <Image
                src="/image copy 3.png"
                alt="Životné poistenie - Finančné poradenstvo"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Two Column Article Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left Column */}
            <article className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-[#202325]">
                  Oplatí sa mi vôbec životné poistenie?
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Životné poistenie nie je len papier alebo číslo. Je to nástroj, ktorý dáva istotu a pokoj, keď ich človek potrebuje najviac. Ak nevieš, či ho potrebuješ alebo aké krytie by pre teba malo zmysel, rád ti pripravím bezplatnú analýzu a pozrieme sa na to spoločne.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-[#202325] mb-3 flex items-center">
                  <span className="w-5 h-5 bg-[#5ECAD5] rounded-full mr-2"></span>
                  Kľúčové fakty:
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Správne nastavené poistenie vám dá istotu, že v prípade nečakaných udalostí budete mať kryté to, čo je pre vás naozaj dôležité. Zároveň nezaplatíte zbytočne za niečo, čo pre vás nemá zmysel.
                </p>
              </div>
            </article>

            {/* Right Column */}
            <article className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#5ECAD5] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-[#202325]">
                  Koľko stojí dobré životné poistenie?
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Cena životného poistenia závisí od viacerých faktorov, najmä od veku, zdravotného stavu, zamestnania a najmä toho, čo má byť poistením kryté. Neexistuje teda univerzálna suma, ktorá by platila pre každého.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-[#202325] mb-3 flex items-center">
                  <span className="w-5 h-5 bg-[#5ECAD5] rounded-full mr-2"></span>
                  Praktický príklad:
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Veľa ľudí si myslí, že kvalitné poistenie musí byť automaticky drahé. V skutočnosti sa však dá nastaviť tak, aby bolo finančne dostupné a zároveň poskytovalo reálnu ochranu. Dôležité je vedieť, čo má poistenie riešiť, a nespoliehať sa len na &ldquo;najlacnejšiu ponuku&rdquo;.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Keďže pri tomto type zabezpečenia je mimoriadne dôležité posúdiť celkovú situáciu človeka. Každý človek má individuálne potreby, finančné záväzky a predstavy o rozsahu krytia, ktoré je vhodné detailne analyzovať. Odporúčam sa poradiť s odborníkom, umožňuje mu to získať komplexný prehľad o vašich prioritách a rizikách, aby bolo poistenie nastavené presne na mieru.
              </p>
            </article>
          </div>

          {/* Bottom Quote */}
          <div className="bg-gradient-to-r from-[#5ECAD5]/5 to-blue-50/50 rounded-xl p-6 border-l-4 border-[#5ECAD5] mt-12">
            <p className="text-gray-800 leading-relaxed text-center">
              Cieľom je, aby poistná ochrana zodpovedala skutočným životným okolnostiam a poskytla efektívnu pomoc v prípade potreby. Nečakajte na správny čas - začnite chrániť svojich blízkych už dnes.
            </p>
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
      {/* Process Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            AKO TO FUNGUJE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-[#202325] font-semibold mb-2">Konzultácia</h3>
              <p className="text-gray-600 text-sm">Analýza vašich potrieb a životnej situácie</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-[#202325] font-semibold mb-2">Návrh riešenia</h3>
              <p className="text-gray-600 text-sm">Pripravenie optimalného poistného plánu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-[#202325] font-semibold mb-2">Podpis zmluvy</h3>
              <p className="text-gray-600 text-sm">Formálne uzatvorenie poistnej zmluvy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5ECAD5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-[#202325] font-semibold mb-2">Ochrana</h3>
              <p className="text-gray-600 text-sm">Okamžitá ochrana a pokračujúca podpora</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#5ECAD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Pripravení začať?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Kontaktujte nás ešte dnes a získajte bezplatnú konzultáciu o životnom poistení.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white hover:bg-gray-100 text-[#5ECAD5] font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
          >
            Kontaktovať nás
          </button>
        </div>
      </section>
    </main>
  );
}
