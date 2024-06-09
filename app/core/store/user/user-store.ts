import { create } from 'zustand';
import { User } from '@/app/core/lib/definitions';
import { persist, devtools } from 'zustand/middleware';

type UserState = {
  idUser: number | null;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  isLogged: boolean;
  loading: boolean;
  token: string | null;
  addUser: (idUser: number, username: string, first_name:string, last_name: string, email:string) => void;
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
      first_name: null,
      last_name: null,
      email: null,
      token: null,

      addUser: (idUser, username, first_name, last_name, email) => set(() => ({ idUser: idUser, username: username, isLogged: true, first_name: first_name, last_name: last_name, email: email})),

      addToken: (token) => set(() => ({ token: token })),

      removeUser: () => set(() => ({ idUser: null, isLogged: false, username:null, token:null, first_name: null, last_name: null, email: null})),

        setLoading: (loading) => set(() => ({ loading })),
      }),
      { name: 'user-storage' },
    ),
  ),
);
