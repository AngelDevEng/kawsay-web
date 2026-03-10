'use client';

import { CartProvider } from '@/context/CartContext';
import CartButton from '@/components/CartButton';
import CartDrawer from '@/components/CartDrawer';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartButton />
      <CartDrawer />
    </CartProvider>
  );
}
