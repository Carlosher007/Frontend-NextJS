import { useFiltersStore } from "@/app/core/store";
import { Image } from '@/app/core/lib/definitions'

export function useFilters() {

  const { filters, setFilters } = useFiltersStore();

  const filterImages = (images: Image[]) => {
    return images.filter(image => {
      return (
        image.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          image.category === filters.category
        )
      )
    })
  }

  return { filterImages, setFilters, filters }
}