import { useState, useEffect } from 'react';
import { Product } from '@/data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const CART_STORAGE_KEY = 'printyourgifts_cart';

export const useCart = () => {
  const [cartState, setCartState] = useState<CartState>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return { items: parsed.items || [], isOpen: false };
        } catch (error) {
          console.error('Error parsing cart data:', error);
        }
      }
    }
    return { items: [], isOpen: false };
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({
        items: cartState.items
      }));
    }
  }, [cartState.items]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartState(prev => {
      const existingItem = prev.items.find(item => item.id === product.id);
      
      if (existingItem) {
        return {
          ...prev,
          items: prev.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      } else {
        return {
          ...prev,
          items: [...prev.items, { ...product, quantity }]
        };
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartState(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== productId)
    }));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartState(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    }));
  };

  const clearCart = () => {
    setCartState(prev => ({ ...prev, items: [] }));
  };

  const toggleCart = () => {
    setCartState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const closeCart = () => {
    setCartState(prev => ({ ...prev, isOpen: false }));
  };

  const getTotalPrice = () => {
    return cartState.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartState.items.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    items: cartState.items,
    isOpen: cartState.isOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    closeCart,
    getTotalPrice,
    getTotalItems
  };
};