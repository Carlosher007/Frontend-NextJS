import { create } from 'zustand';
import { Image } from "@/app/core/lib/definitions";
import { persist, devtools } from 'zustand/middleware';
import { getCarts as getCartsApi} from '../../api/shoppingcart/service';

type CartState = {
  cart: Image[];
  addToCart: (image: Image) => void
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getCart: () => Promise<void>;
};


export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set,get) => ({
        cart: [],
        idUser: null,

        addToCart: (image) => set((state) => ({ cart: [...state.cart, image] })),

        removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((img) => img.imageId !== id) })),

        clearCart: () => set(() => ({ cart: [] })),

        getCart: async () => {
          const cartResponse = await getCartsApi();
          if(!cartResponse) return;
          set(() => ({ cart: cartResponse }))
        }

      }),
      { name: 'cart-storage' },
    )),
);