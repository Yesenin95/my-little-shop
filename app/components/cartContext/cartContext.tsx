// cartContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export enum ProductCategory {
   Cupcake = 'cupcake',
   Cake = 'cake',
   Pastry = 'pastry',
   // Добавьте другие категории по мере необходимости
}

export interface CartItem {
   id: string;
   name: string;
   description: string;
   quantity: number;
   price: number;
   image: string;
   type: ProductCategory;
}

interface CartContextType {
   cart: CartItem[];
   addToCart: (item: CartItem) => void;
   removeFromCart: (id: string, type: ProductCategory) => void;
   updateQuantity: (id: string, type: ProductCategory, newQuantity: number) => void;
   getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType>({
   cart: [],
   addToCart: () => { },
   removeFromCart: () => { },
   updateQuantity: () => { },
   getCartItemCount: () => 0,
});

export const useCart = () => useContext(CartContext);

interface CartProviderProps {
   children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
   const [cart, setCart] = useState<CartItem[]>(() => {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
   });

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
   }, [cart]);

   const addToCart = (item: CartItem) => {
      const itemInCart = cart.find(cartItem => cartItem.id === item.id && cartItem.type === item.type);

      if (itemInCart) {
         const updatedCart = cart.map(cartItem =>
            cartItem.id === item.id && cartItem.type === item.type
               ? { ...cartItem, quantity: cartItem.quantity + 1 }
               : cartItem
         );
         setCart(updatedCart);
      } else {
         const newCart = [...cart, { ...item, quantity: 1 }];
         setCart(newCart);
      }
   };

   const removeFromCart = (id: string, type: ProductCategory) => {
      const updatedCart = cart.filter(cartItem => cartItem.id !== id || cartItem.type !== type);
      setCart(updatedCart);
   };

   const updateQuantity = (id: string, type: ProductCategory, newQuantity: number) => {
      const updatedCart = cart.map(cartItem =>
         cartItem.id === id && cartItem.type === type
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
      );
      setCart(updatedCart);
   };

   const getCartItemCount = () => {
      return cart.reduce((total, item) => total + item.quantity, 0);
   };

   return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getCartItemCount }}>
         {children}
      </CartContext.Provider>
   );
};
