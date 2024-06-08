import { useFiltersStore } from '@/app/core/store';
import { Image } from '@/app/core/lib/definitions';

export function useFilters() {
  const { filters, setFilters } = useFiltersStore();

  const filterImages = (images: Image[]) => {
    return images.filter((image) => {
      if (!image.price) return;
      return (
        image.price >= filters.minPrice &&
        (filters.category === 'all' ||
          (image.imagecategories.find((_ctg) =>
            (filters.category as unknown as string[]).includes(
              _ctg.category.name,
            ),
          ) &&
            true))
      );
    });
  };

  return { filterImages, setFilters, filters };
}
