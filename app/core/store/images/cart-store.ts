import { create } from 'zustand';
import { Image } from "@/app/core/lib/definitions";
import { persist, devtools } from 'zustand/middleware';

type CartState = {
  cart: Image[];
  idUser: number | null;
  setIdUser: (id: number) => void;
  removeIdUser: () => void;
  addToCart: (image: Image) => void
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};


export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        idUser: null,

        setIdUser: (id) => set(() => ({ idUser: id })),

        removeIdUser: () => set(() => ({ idUser: null })),

        addToCart: (image) => set((state) => ({ cart: [...state.cart, image] })),

        removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((img) => img.imageId !== id) })),

        setCart: (cart: Image[]) => set(() => ({ cart })),

        clearCart: () => set(() => ({ cart: [] })),

      }),
      { name: 'cart-storage' },
    )),
);