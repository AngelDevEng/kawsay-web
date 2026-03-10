'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-gradient-to-b from-[var(--gold-light)]/20 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--botanical)]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[var(--cacao)]/10 px-4 py-2 rounded-full mb-6">
              <span className="text-[var(--cacao)] font-semibold text-sm">SUPERFOOD SNACKS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--cacao)] mb-4">
              Energía Andina para tu{' '}
              <span className="text-[var(--botanical)]">Ritmo Chileno</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Descubre KAWSAY, el snack proteico natural que combina la tradición ancestral andina con la innovación nutricional contemporánea.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#producto"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--botanical)] text-white font-semibold rounded-full hover:bg-[var(--botanical-light)] transition-all hover:scale-105"
              >
                Conocer más
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--cacao)] text-white font-semibold rounded-full hover:bg-[var(--cacao-light)] transition-all hover:scale-105"
              >
                Contactar
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--gold)]/20 blur-2xl rounded-full"></div>
              <Image
                src="/kawsay-logo.png"
                alt="KAWSAY - Snack Proteico"
                width={400}
                height={400}
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-[var(--botanical)]">98%</div>
            <div className="text-gray-600">Natural</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-[var(--cacao)]">70%</div>
            <div className="text-gray-600">Cacao Andino</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-[var(--gold)]">0</div>
            <div className="text-gray-600">Azúcar Refinada</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-[var(--botanical)]">12g</div>
            <div className="text-gray-600">Proteína</div>
          </div>
        </div>
      </div>
    </section>
  );
}
