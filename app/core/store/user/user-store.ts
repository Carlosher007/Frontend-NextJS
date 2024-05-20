import { create } from 'zustand';
import { User } from '@/app/core/lib/definitions';
import { persist, devtools } from 'zustand/middleware';


type UserState = {
  idUser: number | null;
  isLogged: boolean;
  loading: boolean;
  addUser: (idUser: number) => void;
  removeUser: () => void;
  setLoading: (loading: boolean) => void;
};

export const useUserStore = create<UserState>()(devtools(
  persist(
    (set) => ({
      idUser: null,
      isLogged: false,
      loading: true,

      addUser: (idUser) => set(() => ({ idUser: idUser, isLogged: true })),

      removeUser: () => set(() => ({ idUser: null, isLogged: false })),

      setLoading: (loading) => set(() => ({ loading })),
    }),
    { name: 'user-storage' },
  )),
);

/*
Para que no de errores de hidratación, debemos ahcer que nuestra app lea el almacenamiento local una vez este componente se haya montado en el lado del cliente. Por lo que se debe poner lo siguiente (donde se use):

(SOLO SI DA ERROR DE HIDRATACION)

useEffect(() => {
  useUserStore.persist.rehydrate();
}, []);
*/
