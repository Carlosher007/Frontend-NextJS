import create from 'zustand';
// import { FiltersState } from '@/app/core/lib/definitions';

type FiltersState = {
  filters: {
    category: string;
    minPrice: number;
  };
  setFilters: (filters: { category: string; minPrice: number }) => void;
};

export const useFiltersStore = create<FiltersState>((set) => ({
  filters: {
    category: 'all',
    minPrice: 0,
  },
  setFilters: (filters) => set({ filters }),
}));