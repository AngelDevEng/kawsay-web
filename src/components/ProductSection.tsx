'use client';

import Image from 'next/image';

const ingredients = [
  {
    name: 'Avena Integral',
    description: 'Rica en fibra para saciedad prolongada',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Proteína de Whey',
    description: 'Para recuperación muscular',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Panela',
    description: 'Endulzante natural, sin azúcares refinados',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: 'Cacao 70%',
    description: 'Cacao andino puro, rico en antioxidantes',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const presentations = [
  { size: '40g', label: 'Formato Individual', type: 'Portable' },
  { size: '6u', label: 'Pack Familiar', type: 'Ahorro' },
  { size: '24u', label: 'Display', type: 'Tiendas' },
];

export default function ProductSection() {
  return (
    <section id="producto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--cacao)] mb-4">
            Snack Proteico Natural
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elaborado con ingredientes 100% naturales, horneado para preservar todas sus propiedades nutricionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-[var(--cacao)]/5 to-transparent hover:from-[var(--cacao)]/10 transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--cacao)]/10 text-[var(--cacao)] mb-4">
                {ingredient.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--cacao)] mb-2">
                {ingredient.name}
              </h3>
              <p className="text-sm text-gray-600">{ingredient.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[var(--gold-light)]/30 to-[var(--gold)]/10 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-[var(--cacao)] text-center mb-8">
            Presentaciones Disponibles
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src="/producto.jpeg"
                alt="KAWSAY - Presentación del producto"
                width={400}
                height={400}
                className="rounded-2xl shadow-xl w-full max-w-md object-contain bg-white"
              />
            </div>
            <div className="grid gap-6">
              {presentations.map((present, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--botanical)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-[var(--botanical)]">{present.size}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--cacao)]">
                      {present.label}
                    </h4>
                    <span className="inline-block px-2 py-1 bg-[var(--gold)]/20 text-[var(--gold)] text-xs font-medium rounded-full">
                      {present.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            * Empaques 100% reciclables
          </p>
        </div>
      </div>
    </section>
  );
}
