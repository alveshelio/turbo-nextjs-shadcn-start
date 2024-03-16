import { getAllCountries } from '@/data/countries';
import { Country, FullCountry } from '@/types/countries';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import Countries from './countries';

export default async function CountriesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<FullCountry[], AxiosError, Country[]>({
    queryKey: ['allCountries'],
    queryFn: getAllCountries,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Countries />
    </HydrationBoundary>
  );
}
