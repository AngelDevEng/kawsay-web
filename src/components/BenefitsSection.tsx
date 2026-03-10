'use client';

const benefits = [
  {
    title: 'Energía Sostenida',
    description: 'Brinda energía de absorción lenta y duradera, evitando los picos y caídas de energía tradicionales.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'var(--gold)',
  },
  {
    title: 'Alta Saciedad',
    description: 'Gracias a su contenido de fibra, te mantiene satisfecho por más tiempo.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'var(--botanical)',
  },
  {
    title: 'Recuperación Muscular',
    description: 'Su aporte proteico favorece la recuperación después del ejercicio.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'var(--cacao)',
  },
  {
    title: 'Antioxidantes',
    description: 'El cacao andino al 70% aporta antioxidantes naturales para tu bienestar.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: 'var(--cacao-light)',
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-[var(--botanical)]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--cacao)] mb-4">
            ¿Por qué elegir KAWSAY?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una alternativa energética, práctica y culturalmente auténtica que combate los snacks ultraprocesados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ borderTop: `4px solid ${benefit.color}` }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${benefit.color}20`, color: benefit.color }}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--cacao)] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-[var(--cacao)] text-white px-6 py-3 rounded-full">
            <span className="font-semibold">Mensaje central:</span>
            <span>&quot;Energía auténtica&quot;</span>
          </div>
          <p className="mt-4 text-gray-600">
            Tradición ancestral andina + Innovación nutricional contemporánea
          </p>
        </div>
      </div>
    </section>
  );
}
