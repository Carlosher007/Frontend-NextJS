import { create } from 'zustand';
import { User } from '@/app/core/lib/definitions';
import { persist, devtools } from 'zustand/middleware';


type UserState = {
  idUser: number | null;
  username: string | null;
  isLogged: boolean;
  loading: boolean;
  token: string | null;
  addUser: (idUser: number, username: string) => void;
  addToken: (token: string) => void;
  removeUser: () => void;
  setLoading: (loading: boolean) => void;
};

export const useUserStore = create<UserState>()(devtools(
  persist(
    (set) => ({
      idUser: null,
      isLogged: false,
      loading: true,
      username: null,
      token: null,

      addUser: (idUser, username) => set(() => ({ idUser: idUser, username: username, isLogged: true })),

      addToken: (token) => set(() => ({ token: token })),

      removeUser: () => set(() => ({ idUser: null, isLogged: false, username:null, token:null })),

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
