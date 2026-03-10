'use client';

export default function TeamSection() {
  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--cacao)] mb-6">
              ADN Emprendedor
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              KAWSAY nace del proyecto <strong>ADN EMPRENDEDOR - EQUIPO 05</strong>, una iniciativa que busca 
              crear soluciones innovadoras en el mercado chileno, combinando principios de negocio sostenibles 
              con productos que realmente aporten valor a la salud de las personas.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--botanical)]"></div>
                <span className="text-gray-700">Enfoque en alimentación saludable</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--gold)]"></div>
                <span className="text-gray-700">Compromiso con la calidad</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--cacao)]"></div>
                <span className="text-gray-700">Valor cultural andino</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[var(--cacao)] to-[var(--cacao-light)] rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">ADN EMPRENDEDOR</h3>
                <p className="text-white/80 mb-4">EQUIPO 05</p>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm">
                  Proyecto Académico
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--gold)]/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--botanical)]/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
