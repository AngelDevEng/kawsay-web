'use client';

export default function MissionVisionSection() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-white to-[var(--cacao)]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--cacao)] mb-4">
           Quiénes Somos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprometidos con tu bienestar y el del planeta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--botanical)]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--botanical)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--cacao)]">Misión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Desarrollar, producir y comercializar snacks horneados funcionales proteicos y energéticos bajo la marca KAWSAY, elaborados con proteína de suero, avena integral y cacao natural bajo estándares de calidad e inocuidad, para ofrecer una alternativa práctica y confiable a consumidores con estilos de vida activos que buscan energía sostenida y recuperación muscular, actuando con ética, responsabilidad social en la cadena de valor y compromiso ambiental en nuestros procesos.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--cacao)]">Visión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Para el año 2030, ser una marca peruana referente en snacks proteicos y energéticos funcionales, reconocida por su formulación proteica innovadora, transparencia en ingredientes y experiencia de sabor, con presencia sostenida en el mercado nacional y expansión progresiva a mercados internacionales seleccionados, generando un impacto social y ambiental positivo mediante prácticas responsables con proveedores, colaboradores y comunidades.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[var(--cacao)]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[var(--cacao)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[var(--cacao)]">Valores Organizacionales</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 p-4 bg-[var(--botanical)]/5 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-[var(--botanical)] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--cacao)]">Calidad e Inocuidad</h4>
                <p className="text-sm text-gray-600 mt-1">Asegurar estándares consistentes de elaboración, conservación y presentación del producto.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[var(--botanical)]/5 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-[var(--botanical)] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--cacao)]">Naturalidad y Transparencia</h4>
                <p className="text-sm text-gray-600 mt-1">Comunicar ingredientes reales y procesos claros, evitando promesas engañosas.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[var(--gold)]/10 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--cacao)]">Innovación Nutricional</h4>
                <p className="text-sm text-gray-600 mt-1">Mejorar el perfil proteico sin sacrificar sabor ni seguridad alimentaria.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[var(--gold)]/10 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--cacao)]">Energía y Rendimiento</h4>
                <p className="text-sm text-gray-600 mt-1">Promover nutrición funcional para estilos de vida activos.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[var(--cacao)]/10 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-[var(--cacao)] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--cacao)]">Responsabilidad Ambiental</h4>
                <p className="text-sm text-gray-600 mt-1">Priorizar prácticas de reducción de residuos y empaques sostenibles.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[var(--cacao)]/10 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-[var(--cacao)] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--cacao)]">Ética Empresarial</h4>
                <p className="text-sm text-gray-600 mt-1">Relaciones comerciales justas con proveedores, distribuidores y consumidores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
