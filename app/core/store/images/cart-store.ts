import { create } from 'zustand';
import { Image } from "@/app/core/lib/definitions";
import { persist } from 'zustand/middleware';

type CartState = {
  cart: Image[];
  idUser: number | null;
  setIdUser: (id: number) => void;
  addToCart: (image: Image) => void
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      idUser: null,

      setIdUser: (id) => set(() => ({ idUser: id })),

      addToCart: (image) => set((state) => ({ cart: [...state.cart, image] })),

      removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((img) => img.imageId !== id) })),

      clearCart: () => set(() => ({ cart: [] })),
    }),
    { name: 'cart-storage' },
  ),
);