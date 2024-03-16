import { countriesMapper } from '@/data/mappers/countries';
import { useQuery } from '@tanstack/react-query';

import { Country, FullCountry } from '@/types/countries';

import { getAllCountries } from '@/data/countries';
import { AxiosError } from 'axios';

export const useGetAllCountries = () => {
  return useQuery<FullCountry[], AxiosError, Country[]>({
    queryKey: ['allCountries'],
    queryFn: getAllCountries,
    select: countriesMapper,
  });
};
