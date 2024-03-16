import { getAllCountries } from '@/data/countries';
import { countriesMapper } from '@/data/mappers/countries';
import { Country, FullCountry } from '@/types/countries';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetAllCountries = () => {
  return useQuery<FullCountry[], AxiosError, Country[]>({
    queryFn: getAllCountries,
    queryKey: ['allCountries'],
    select: countriesMapper,
  });
};
