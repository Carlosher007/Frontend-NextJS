import { create } from 'zustand';
import { User } from '@/app/core/lib/definitions';
import { persist } from 'zustand/middleware';

export type Actions = {
  addUser: (user: User) => void;
  removeUser: () => void;
};

export const useUserStore = create<User & Actions>()(
  persist(
    (set) => ({
      id: '',
      username: '',
      email: '',

      addUser: (user) => set(user),

      removeUser: () => set({ id: '', username: '', email: '' }),
    }),
    { name: 'user-storage'},
  ),
);

/*
Para que no de errores de hidratación, debemos ahcer que nuestra app lea el almacenamiento local una vez este componente se haya montado en el lado del cliente. Por lo que se debe poner lo siguiente (donde se use):

(SOLO SI DA ERROR DE HIDRATACION)

useEffect(() => {
  useUserStore.persist.rehydrate();
}, []);
*/
