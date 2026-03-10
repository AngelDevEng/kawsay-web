'use client';

import { useCart } from '@/context/CartContext';

export default function CartButton() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-6 right-6 z-50 bg-[var(--botanical)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--botanical-light)] transition-all hover:scale-110 flex items-center gap-2"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-[var(--gold)] text-[var(--cacao)] text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
}
