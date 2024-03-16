import { Country, FullCountry } from '@/types/countries';

export const countriesMapper = (countries: FullCountry[]) =>
  countries.map(
    (country) =>
      ({
        area: country.area,
        capital: country.capital?.[0],
        flag: country.flag,
        name: country.name.official,
        population: country.population,
        region: country.region,
        subregion: country.subregion,
      }) satisfies Country
  );
