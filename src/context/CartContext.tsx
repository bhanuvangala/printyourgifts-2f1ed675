import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = 'printyourgifts_cart';

export const CartProvider = ({ children }: { children: ReactNode }) => {
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items: cartState.items }));
    }
  }, [cartState.items]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartState(prev => {
      const existingItem = prev.items.find(item => item.id === product.id);
      if (existingItem) {
        return {
          ...prev,
          items: prev.items.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          ),
        };
      }
      return { ...prev, items: [...prev.items, { ...product, quantity }] };
    });
  };

  const removeFromCart = (id: string) => {
    setCartState(prev => ({ ...prev, items: prev.items.filter(item => item.id !== id) }));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartState(prev => ({
      ...prev,
      items: prev.items.map(item => (item.id === id ? { ...item, quantity } : item)),
    }));
  };

  const clearCart = () => setCartState(prev => ({ ...prev, items: [] }));
  const toggleCart = () => setCartState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  const closeCart = () => setCartState(prev => ({ ...prev, isOpen: false }));

  const getTotalPrice = () =>
    cartState.items.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalItems = () =>
    cartState.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        ...cartState,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        closeCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
