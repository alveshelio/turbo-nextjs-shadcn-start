export type FullCountry = {
  name: {
    common: string;
    official: string;
    nativeName: {
      ell: {
        official: string;
        common: string;
      };
      tur: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    EUR: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    ell: string;
    tur: string;
  };
  translations: {
    ara: {
      official: string;
      common: string;
    };
  };
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    '2018': number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: [number, number];
  };
  postalCode: {
    format: string;
    regex: RegExp;
  };
};

export type Country = {
  name: string;
  flag: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
};
