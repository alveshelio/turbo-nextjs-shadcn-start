import { getCountriesByLanguage } from '@/data/countries';
import { FullCountry } from '@/types/countries';
import { useQuery } from '@tanstack/react-query';

export const useGetCountriesByLanguage = (language: string) => {
  return useQuery<FullCountry[], Error>({
    queryFn: () => getCountriesByLanguage(language),
    queryKey: ['countries', language],
  });
};
