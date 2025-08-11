"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactModal from "../../components/ContactModal";

export default function OMnePage() {
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
            <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg">
                O mne
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Nie ste len ďalší klient. Ste človek, ktorému pomôžem vybudovať zdravý finančný život.
              </p>
              <button 
                onClick={openModal}
                className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto"
              >
                Bezplatná konzultácia
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Moja cesta Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            MOJA CESTA
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Image */}
            <div className="w-[448px] h-[448px] lg:-ml-55 lg:mt-5">
              <Image
                src="/O-mne-moja-cesta.jpeg"
                alt="Moja cesta - Financial team"
                width={448}
                height={448}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            
            {/* Text Content */}
            <div className="text-justify text-sm md:text-base text-[#202325] leading-tight space-y-3 lg:-ml-55 w-[736px] h-[456px] lg:mt-8">
              <p>
                Volám sa Miňo, pochádzam z Malaciek a celý život sa pohybujem v prostredí, kde 
                rozhodujú výkony, disciplína a zodpovednosť. Vyše 20 rokov som aktívne aj 
                profesionálne športoval – hádzaná bola mojou srštou a zároveň školou života.
              </p>
              <p>
                Objateľou kapitolou bolo aj 7 a pol roka v Nemecku, kde som intenzívne hrával hádzanú, 
                ale zároveň pracoval v rámci finančných a poisťovacích spoločnostiach. Bola to skúka 
                skúsenosť – pracovná aj ľudská. Získal som tam nádych jazyk, skúsenosti i nášky a 
                schopnosti stávať, ktoré mi dnes umožňujú podávať kvalitné výkony.
              </p>
              <p>
                Po návrate som sa zamestnai v DELL, kde som pôsobil 2,5 roka a v roku 2021 som sa 
                začal menej YOCi o svojej finančnej život. Bola to intenzívna škola biznesu, komunikácie 
                a IT.
              </p>
              <p>
                V Finančníctve som vstúpil v januári 2020 napriek veku vystupu, no českému mi bolo 
                jasné, že práve tu môžem skutočne pomáhať ľuďom s ich životom každ ako človek a 
                profesionálne. Od marca 2024 sa tomu dívam venomm úkazne.
              </p>
              <p>
                Mám aj najabe prvé výsledky – v roku 2025 dostanern 100 000 € AUM v osobnom 
                výsledku (cca 350 000 € v kancelári).
              </p>
              <p>
                Mám 35 rokov, vo finančnom svete som druhý rok, ale musíme sa k všetkým a 
                pracujem na sebe. Stále vidím prestory na zlepšanie – a práve v tom je moja výhoda. 
                Neuvažujem sa na výsledkoch, pracujem ďalej, učím sa každý den. Nezaspamujem a s 
                výslepsom k všm ai k výsledkom, ktoré spoločne dosiahneme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Začiatok Section */}
      <section className="bg-[#202325]">
        <div className="w-[1440px] h-[628px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start h-full">
            {/* Text Content */}
            <div className="text-white space-y-6 text-left flex flex-col justify-center h-full w-[684px] h-[276px]">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-monda">Začiatok</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Moje začiatky boli veľmi dynamické a troška iné ako štandardne pri nových ľuďoch. 
                  Ja som bol už dlhšie rozhodnutý, že to robiť chcem a preto som len čakal, kým už 
                  budem môcť na full-time. Absolvoval som veľké množstvo školení a, aj keď sa mi to 
                  najskôr nepáčilo, dnes neľutujem ani jedno jediné. Posunul som sa osobnostne, 
                  vzdelaním, ale aj odborne.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-monda">Kariéra finančného poradcu</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Chcel som to robiť, robím to a dúfam, že dlho budem.
                </p>
              </div>
            </div>
            
                                                                                                                                                                                                               {/* Image */}
               <div className="w-[500px] h-[500px] flex items-center justify-center mt-16 ml-20">
               <Image
                 src="/O-mne.jpeg"
                 alt="Financial advisor career"
                 width={500}
                 height={500}
                 className="rounded-lg shadow-lg object-cover"
               />
             </div>
          </div>
        </div>
      </section>



      {/* Moje výsledky Section */}
      <section className="bg-white py-20">
        <div className="w-[1440px] mx-auto">
          <div className="flex flex-col items-center">
                         <h2 className="text-5xl font-bold text-[#202325] text-center mb-8 uppercase tracking-normal font-monda">
               MOJE VÝSLEDKY
             </h2>
                                                   <div className="grid grid-cols-3 gap-32 mt-26">
              <div className="text-center">
                <div className="bg-[#202325] text-white p-16 rounded-lg shadow-2xl mb-10 w-[320px] h-[305px] flex items-center justify-center">
                  <div className="text-6xl font-bold text-[#5ECAD5]">50+</div>
                </div>
                <div className="text-xl text-[#202325] font-semibold uppercase tracking-wide">KLIENTOV ZA ROK</div>
              </div>
              <div className="text-center">
                <div className="bg-[#202325] text-white p-16 rounded-lg shadow-2xl mb-10 w-[320px] h-[305px] flex items-center justify-center">
                  <div className="text-6xl font-bold text-[#5ECAD5]">300k €</div>
                </div>
                <div className="text-xl text-[#202325] font-semibold uppercase tracking-wide">AUM</div>
              </div>
              <div className="text-center">
                <div className="bg-[#202325] text-white p-16 rounded-lg shadow-2xl mb-10 w-[320px] h-[305px] flex items-center justify-center">
                  <div className="text-6xl font-bold text-[#5ECAD5]">2,5 milióna</div>
                </div>
                <div className="text-xl text-[#202325] font-semibold uppercase tracking-wide">SPRACOVANÝCH HYPOTÉK</div>
              </div>
            </div>
          </div>
        </div>
             </section>

       {/* Robím to inak Section */}
       <section className="bg-[#202325] py-20">
         <div className="w-[1440px] h-[700px] mx-auto">
           <div className="flex flex-col items-center h-full">
              <h2 className="text-5xl font-medium text-[#5ECAD5] text-center mb-24 uppercase font-monda">
                ROBÍM TO INAK
              </h2>
              <div className="grid grid-cols-2 gap-32 w-full max-w-6xl">
               <div className="text-left">
                                   <h3 className="text-2xl font-semibold text-white mb-4 font-monda">
                    Individuálny prístup pre klienta
                  </h3>
                 <p className="text-gray-300 text-base leading-relaxed">
                   Nemám nikdy 2 rovnakých klientov. Každý klient má iné potreby, ciele, očakávania a finančné možnosti. 
                   Preto je potrebné sa spoznať, aby som pochopil ako funguje. Na základe informácii pripravím finančný plán na mieru.
                 </p>
               </div>
               
               <div className="text-left">
                                   <h3 className="text-2xl font-semibold text-white mb-4 font-monda">
                    Šetrím čas aj peniaze
                  </h3>
                 <p className="text-gray-300 text-base leading-relaxed">
                   Okrem nosenia zložky do banky vám ušetrím čas pri splatení hypotéky o 10 až 15 rokov skôr.
                 </p>
               </div>
               
               <div className="text-left">
                                   <h3 className="text-2xl font-semibold text-white mb-4 font-monda">
                    Odbornosť, na ktorú sa môžete spoľahnúť
                  </h3>
                 <p className="text-gray-300 text-base leading-relaxed">
                   Vo svete plnom ponúk a sľubov dávam dôraz na to podstatné - reálne výsledky a férový prístup. 
                   Prinášam prehľad a zodpovednosť, ktoré vám pomôžu robiť správne rozhodnutia dnes aj zajtra. 
                   Pracujem tak, aby ste presne vedeli, čo robím, prečo to robím a aký to má pre vás zmysel. 
                   Nehrám sa na dokonalosť, ale pracujem na tom, aby ste sa na mňa mohli s istotou spoľahnúť. 
                   Som tu preto, aby som vám pomohol zorientovať sa, rozhodovať sa s rozumom a cítiť sa pri tom dobre.
                 </p>
               </div>
               
               <div className="text-left">
                                   <h3 className="text-2xl font-semibold text-white mb-4 font-monda">
                    Komplexná ponuka a doživotný servis
                  </h3>
                 <p className="text-gray-300 text-base leading-relaxed">
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
              <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center mb-4">
                <span className="text-gray-500 text-sm">CERTIFIKÁT 1</span>
              </div>
              <div className="text-sm font-semibold text-[#202325]">CERTIFIKÁT NAME</div>
            </div>
            <div className="text-center">
              <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center mb-4">
                <span className="text-gray-500 text-sm">CERTIFIKÁT 2</span>
              </div>
              <div className="text-sm font-semibold text-[#202325]">CERTIFIKÁT NAME</div>
            </div>
            <div className="text-center">
              <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center mb-4">
                <span className="text-gray-500 text-sm">CERTIFIKÁT 3</span>
              </div>
              <div className="text-sm font-semibold text-[#202325]">CERTIFIKÁT NAME</div>
            </div>
            <div className="text-center">
              <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center mb-4">
                <span className="text-gray-500 text-sm">CERTIFIKÁT 4</span>
              </div>
              <div className="text-sm font-semibold text-[#202325]">CERTIFIKÁT NAME</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Section */}
      
    </main>
  );
}