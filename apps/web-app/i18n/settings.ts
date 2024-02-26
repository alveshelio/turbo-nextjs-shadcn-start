export const fallbackLng = 'en';
export const languages = [fallbackLng, 'fr'] as const;
export const defaultNS = 'common';
export const cookieName = 'i18next';

export function getOptions(
  lng: string = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
