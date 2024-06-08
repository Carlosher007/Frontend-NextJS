import { create } from 'zustand';
import { Image } from '@/app/core/lib/definitions';
import { persist, devtools } from 'zustand/middleware';
import {
  assignImageFromCart,
  deleteCart,
  deleteImageFromCart,
} from '@/app/core/api/shoppingcart/service';

type CartState = {
  cart: Image[];
  addToCart: (image: Image, userId: number) => Promise<void>;
  removeFromCart: (id: number, userId: number) => void;
  clearCart: (userId: number) => void;
  setCart: (cart: Image[]) => void;
};

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        idUser: null,

        addToCart: async (image, userId) => {
          if (userId) {
            const response = await assignImageFromCart(userId, image.imageId);
            console.log(response);
            if (!response) return;
            set((state) => ({ cart: [...state.cart, image] }));
          }
        },

        removeFromCart: async (id, userId) => {
          if (userId) {
            const response = await deleteImageFromCart(userId, id);
            if (!response) return;
            set((state) => ({
              cart: state.cart.filter((img) => img.imageId !== id),
            }));
          }
        },

        clearCart: async (userId) => {
          if (userId) {
            const response = await deleteCart(userId);
            if (!response) return;
            set((state) => ({ cart: [] }));
          }
        },

        setCart: (cart) => set(() => ({ cart })),
      }),
      { name: 'cart-storage' },
    ),
  ),
);
