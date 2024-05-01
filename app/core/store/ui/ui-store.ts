import { create } from 'zustand';

type ColorMode = 'light' | 'dark';

interface State {
  colorMode: ColorMode;

  setColorMode: (mode: ColorMode) => void;
}

export const useUIStore = create<State>()((set) => ({
  colorMode: 'dark',

  setColorMode: (mode) => set({ colorMode: mode }),
}));
