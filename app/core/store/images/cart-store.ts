import create from 'zustand';
import {Image} from "@/app/core/lib/definitions";

type CartState = {
  cart: Image[];
  idUser: string;
  setIdUser: (id: string) => void;
  addToCart: (image: Image) => void
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  idUser: '',
  
  setIdUser: (id) => set(() => ({ idUser: id })),

  addToCart: (image) => set((state) => ({ cart: [...state.cart, image] })),

  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((img) => img.imageId !== id) })),

  clearCart: () => set(() => ({ cart: [] })),
  
}));