import { Country, FullCountry } from '@/types/countries';

export const countriesMapper = (countries: FullCountry[]) =>
  countries.map(
    (country) =>
      ({
        name: country.name.official,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital?.[0],
        population: country.population,
        area: country.area,
        flag: country.flag,
      }) satisfies Country
  );
