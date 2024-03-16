import { getCountriesByName } from '@/data/countries';
import { FullCountry } from '@/types/countries';
import { useQuery } from '@tanstack/react-query';

export const useGetCountriesByName = (name: string) => {
  return useQuery<FullCountry[], Error>({
    queryFn: () => getCountriesByName(name),
    queryKey: ['countries', name],
  });
};
