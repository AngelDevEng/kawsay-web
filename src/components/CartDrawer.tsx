'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart, CartItem } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCheckout(false);
    setShowSuccess(true);
    clearCart();
  };

  return (
    <>
      <div className="fixed inset-0 z-50" onClick={() => setIsCartOpen(false)}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--cacao)]">
            Carrito de Compras
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {showSuccess ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 bg-[var(--botanical)]/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-[var(--botanical)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[var(--cacao)] mb-2">
              ¡Gracias por tu compra!
            </h3>
            <p className="text-gray-600 mb-6">
              Tu pedido ha sido registrado exitosamente.<br />
              Te contactaremos pronto para confirmar tu orden.
            </p>
            <button
              onClick={() => {
                setShowSuccess(false);
                setIsCartOpen(false);
              }}
              className="bg-[var(--botanical)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--botanical-light)] transition-colors"
            >
              Continuar Comprando
            </button>
          </div>
        ) : showCheckout ? (
          <div className="flex-1 overflow-y-auto p-6">
            <h3 className="text-xl font-bold text-[var(--cacao)] mb-6">
              Finalizar Compra
            </h3>
            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--botanical)] focus:border-transparent outline-none"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--botanical)] focus:border-transparent outline-none"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--botanical)] focus:border-transparent outline-none"
                  placeholder="+51 987 654 321"
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <p className="text-sm text-gray-600 mb-2">Total a pagar:</p>
                <p className="text-2xl font-bold text-[var(--cacao)]">S/ {totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCheckout(false)}
                  className="flex-1 px-6 py-3 border-2 border-[var(--cacao)] text-[var(--cacao)] rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  Volver
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[var(--botanical)] text-white rounded-full font-semibold hover:bg-[var(--botanical-light)] transition-colors"
                >
                  Confirmar Pedido
                </button>
              </div>
            </form>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-[var(--botanical)] font-medium hover:underline"
            >
              Ver productos
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--cacao)]">{item.name}</h4>
                    <p className="text-sm text-gray-500">S/ {item.price.toFixed(2)} c/u</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[var(--cacao)]">
                      S/ {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-red-500 hover:underline mt-2"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200 bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total ({totalItems} items)</span>
                <span className="text-2xl font-bold text-[var(--cacao)]">S/ {totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-[var(--botanical)] text-white py-4 rounded-full font-semibold hover:bg-[var(--botanical-light)] transition-colors"
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
