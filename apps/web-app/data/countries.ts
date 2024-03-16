import { FullCountry } from '@/types/countries';
import axios from 'axios';

export const getAllCountries = async () => {
  const response = await axios.get<FullCountry[]>(
    'https://restcountries.com/v3.1/all'
  );

  return response.data;
};

export const getCountriesByName = async (name: string) => {
  const response = await axios.get<FullCountry[]>(
    `https://restcountries.com/v3.1/name/${name}`
  );

  return response.data;
};

export const getCountriesByLanguage = async (language: string) => {
  const response = await axios.get<FullCountry[]>(
    `https://restcountries.com/v3.1/lang/${language}`
  );

  return response.data;
};
