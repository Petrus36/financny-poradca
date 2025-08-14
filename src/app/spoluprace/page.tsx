"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "../../components/ContactModal";

export default function SpolupracePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                Spolupráca
              </h1>
              <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Ľudia sú ochotní celý život plniť sen niekomu inému, ale nie sú ochotní pár rokov budovať seba, aby si splnili ten svoj.
              </p>
              <button 
                onClick={openModal}
                className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto"
              >
                Kontaktujte ma
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interest/Cooperation Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#202325] text-center mb-6">
            MÁŠ ZÁUJEM?
          </h2>
          
          {/* Subtitle */}
          <h3 className="text-xl md:text-2xl font-medium text-[#202325] text-center mb-4">
            Žiadne vstupné poplatky, vzdelanie či prax
          </h3>
          
                     {/* Description */}
           <p className="text-base md:text-lg text-gray-600 text-center max-w-4xl mx-auto mb-20 leading-relaxed">
             Nepotrebuješ diplom z ekonómie, drahé kurzy a ani roky skúseností. Čo naozaj 
             potrebuješ, je čas, chuť sa učiť nové veci a záujem pomáhať druhým.
           </p>
           
                       {/* Two column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 max-w-6xl mx-auto">
             {/* Left column */}
             <div className="text-left">
               <h4 className="text-2xl md:text-3xl font-medium text-[#202325] mb-6">
                 Výkon je tvoja odmena
               </h4>
               <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                 Tvoj príjem neurčuje šéf, tabuľka a ani firemná politika. Určuješ ho ty sám. V 
                 tomto podnikaní rozhoduje len tvoj prístup, tvoje nasadenie a tvoja chuť 
                 rásť. Žiadne stropy. Žiadne výhovorky. Len ty, tvoj výkon a tvoje výsledky.
               </p>
             </div>
             
             {/* Right column */}
             <div className="text-left">
               <h4 className="text-2xl md:text-3xl font-medium text-[#202325] mb-6">
                 O Všetko sa postaráme
               </h4>
               <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                 Nie si v tom sám. Od prvého dňa máš za sebou silný tím, ktorý ťa podrží od 
                 školení, cez zmluvy a systémy, až po moderné nástroje a know-how, ktoré 
                 by inak stáli tisíce. Nemusíš byť expert na financie, ani tráviť hodiny nad 
                 papiermi. Našou úlohou je vytvoriť ti zázemie, v ktorom sa môžeš naplno 
                 venovať tomu najdôležitejšiemu - svojej vízii.
               </p>
             </div>
                       </div>
         </div>
       </section>

       {/* Your Time Section */}
       <section className="py-24 md:py-32 lg:py-40 bg-[#2A2C2D]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             {/* Left side - Text content */}
             <div className="text-left lg:-ml-40">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#5ECAD5] mb-8 leading-tight">
                 Tvoj čas je v tvojich rukách
               </h2>
               <p className="text-base md:text-lg text-white mb-6 leading-relaxed">
                 Najväčšia mena je čas a v tomto biznise si sám sebe pánom. Rozhoduješ, kedy 
                 pracuješ, ako rastieš a s kým spolupracuješ. Ja ti dám nástroje, know-how a podporu. 
                 Ty si nastavíš tempo.
               </p>
               <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                 Chceš viac zo života? Začni tým, že ho vezmeš do vlastných rúk.
               </p>
             </div>
             
             {/* Right side - Image */}
             <div className="flex justify-center lg:justify-end">
               <div className="relative w-full max-w-sm lg:max-w-md">
                 <Image
                   src="/Spolupraca.jpeg"
                   alt="Professional advisor"
                   width={450}
                   height={400}
                   className="w-full h-auto object-cover rounded-lg shadow-2xl aspect-[5/4]"
                 />
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* What If It Doesn't Work Section */}
       <section className="py-16 md:py-20 bg-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           {/* Main title */}
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#202325] mb-8">
             ČO AK SA TO NEPODARÍ?
           </h2>
           
           {/* Description */}
           <p className="text-base md:text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
             Tak si predstav, že do toho pôjdeš, dáš tomu šancu a po čase zistíš, že to nie je pre teba. 
             Že ťa to nenapadá, alebo že chceš ísť iným smerom.
           </p>
           
           {/* Secondary title */}
           <h3 className="text-2xl md:text-3xl font-medium text-[#202325] mb-8 text-left max-w-3xl mx-auto">
             Vieš, čo sa stane?
           </h3>
           
           {/* Content paragraphs */}
           <div className="text-left max-w-3xl mx-auto space-y-6">
             <p className="text-base md:text-lg text-gray-700 leading-relaxed">
               Získaš sebavedomie, ktoré si predtým nemal. Naučíš sa komunikovať s ľuďmi, riešiť 
               reálne situácie, orientovať sa vo financiách. Budeš ovládať soft skills, ktoré sú dnes 
               cennejšie než niektoré tituly. Zvládneš vedenie ľudí, time management, nastavovanie 
               cieľov a rozhodovanie - veci, ktoré si ini tréníujú až na manažérskych pozíciách.
             </p>
             
             <p className="text-base md:text-lg text-gray-700 leading-relaxed">
               Tvoje kontakty porastú, tvoje schopnosti porastú, ty porastieš. A aj keby si sa rozhodol 
               zmeniť smer, nebudeš začínať od nuly, ale z úplne inej štartovacej čiary.
             </p>
             
             <p className="text-base md:text-lg text-gray-700 leading-relaxed">
               Možno zistíš, že si práve získal skúsenosť, kvôli ktorej ťa bude chcieť každý rozumný 
               zamestnávateľ. Alebo už žiadneho nebudeš potrebovať.
             </p>
           </div>
         </div>
       </section>
      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#202325] mb-8">
            Chcete vedieť viac?
          </h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Kontaktujte ma a spoločne nájdeme najvhodnejšieho partnera pre vaše finančné potreby. 
            Konzultácia je bezplatná a nezáväzná.
          </p>
          <button 
            onClick={openModal}
            className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg text-lg"
          >
            Bezplatná konzultácia
          </button>
        </div>
      </section>
    </main>
  );
} 