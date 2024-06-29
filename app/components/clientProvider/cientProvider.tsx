'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { CartProvider } from '../cartContext/cartContext';
export function ClientProvider({ children }: { children: React.ReactNode }) {
   return (
      <CartProvider>
         <ChakraProvider>
            {children}
         </ChakraProvider>
      </CartProvider>
   );
}
