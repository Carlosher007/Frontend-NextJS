import create from 'zustand';
import { FiltersState } from '@/app/core/lib/definitions';

export const useFiltersStore = create<FiltersState>((set) => ({
  filters: {
    category: 'all',
    minPrice: 0,
  },
  setFilters: (updater) => set((state) => ({ filters: updater(state.filters) })),
}));