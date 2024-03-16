import { useQuery } from '@tanstack/react-query';
import { Country } from '@/types/countries';
import { getCountriesByName } from '@/data/countries';

export const useGetCountriesByName = (name: string) => {
  return useQuery<Country[], Error>({
    queryKey: ['countries', name],
    queryFn: () => getCountriesByName(name),
  });
};
