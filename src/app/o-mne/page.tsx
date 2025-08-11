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
            <div className="w-full lg:pl-8">
              <Image
                src="/O-mne-moja-cesta.jpeg"
                alt="Moja cesta - Financial team"
                width={320}
                height={220}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
            
            {/* Text Content */}
            <div className="text-justify text-sm md:text-base text-[#202325] leading-tight space-y-3 lg:pl-2">
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

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-[#202325]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <div className="text-6xl md:text-8xl font-bold text-[#5ECAD5] mb-4">788</div>
              <div className="text-xl md:text-2xl text-white font-light">Fil</div>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-bold text-[#5ECAD5] mb-4">1187</div>
              <div className="text-xl md:text-2xl text-white font-light">Dlg</div>
            </div>
          </div>
          <div className="mt-8 text-white text-lg">
            Najčas spokojných klientov
          </div>
        </div>
      </section>

      {/* Moje výsledky Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#202325] text-center mb-8 md:mb-12">
            MOJE VÝSLEDKY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#5ECAD5] mb-2">98%</div>
              <div className="text-lg text-[#202325]">SPOKOJNOSŤ</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#5ECAD5] mb-2">500.000</div>
              <div className="text-lg text-[#202325]">EUR</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#5ECAD5] mb-2">2.5</div>
              <div className="text-lg text-[#202325]">ROČNE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Niekde tu sme Section */}
      <section className="py-12 md:py-16 bg-[#202325]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-8">
            NIEKDE TU SME
          </h2>
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Individuálny prístup ku klientovi</h3>
              <p className="text-gray-300">
                Každý klient je pre nás jedinečný a preto si zaslúži individuálny prístup. 
                Analyzujeme vašu situáciu a navrhneme riešenia šité na mieru.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Sme tu 24 hodín</h3>
              <p className="text-gray-300">
                Naša podpora je dostupná kedykoľvek potrebujete. Môžete sa na nás spoľahnúť 
                v každej situácii.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Odbornosť na ktorú sa môžete spoľahnúť</h3>
              <p className="text-gray-300">
                Máme za sebou roky skúseností a neprestajne sa vzdelávame, aby sme vám 
                poskytli najlepšie možné služby.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Komplexné služby s dlhodobou starostlivosťou</h3>
              <p className="text-gray-300">
                Poskytujeme komplexné finančné služby a dlhodobú starostlivosť o vašu 
                finančnú budúcnosť.
              </p>
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
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-[#202325] mb-2">TELEFÓN</h4>
              <p className="text-gray-600">+421 XXX XXX XXX</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#202325] mb-2">EMAIL</h4>
              <p className="text-gray-600">info@example.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#202325] mb-2">ADRESA</h4>
              <p className="text-gray-600">Bratislava, Slovensko</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button 
              onClick={openModal}
              className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Kontaktovať
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}