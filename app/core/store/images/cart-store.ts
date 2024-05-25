import { create } from 'zustand';
import { Image } from "@/app/core/lib/definitions";
import { persist, devtools } from 'zustand/middleware';
import { assignImageFromCart, getCarts as getCartsApi } from '../../api/shoppingcart/service';
import { useUserStore } from "@/app/core/store";


type CartState = {
  cart: Image[];
  addToCart: (image: Image, userId: number) => Promise<void>;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  setCart: (cart: Image[]) => void;
};


export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        idUser: null,

        addToCart: async (image, userId) => {
          if (userId) {
            const response = await assignImageFromCart(userId, image.imageId);
            console.log(response)
            if (response && response.message) {
              console.log("Error: ", response.message);
              return;
            }
            set((state) => ({ cart: [...state.cart, image] }))
          }
        },


        removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((img) => img.imageId !== id) })),

        clearCart: () => set(() => ({ cart: [] })),

        setCart: (cart) => set(() => ({ cart })),

      }),
      { name: 'cart-storage' },
    )),
);