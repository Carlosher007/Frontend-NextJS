import { create } from 'zustand';
import { User } from '@/app/core/lib/definitions';
import { persist, devtools } from 'zustand/middleware';

type UserState = {
  idUser: number | null;
  loading: boolean;
  addUser: (idUser: number) => void;
  removeUser: () => void;
  setLoading: (loading: boolean) => void;
};

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        idUser: null,
        loading: true,

        addUser: (idUser) => set(() => ({ idUser: idUser })),

        removeUser: () => set(() => ({ idUser: null })),

        setLoading: (loading) => set(() => ({ loading })),
      }),
      { name: 'user-storage' },
    ),
  ),
);
