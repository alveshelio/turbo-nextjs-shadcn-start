import { useQuery } from '@tanstack/react-query';
import { Country } from '@/types/countries';
import { getCountriesByLanguage } from '@/data/countries';

export const useGetCountriesByLanguage = (language: string) => {
  return useQuery<Country[], Error>({
    queryKey: ['countries', language],
    queryFn: () => getCountriesByLanguage(language),
  });
};
