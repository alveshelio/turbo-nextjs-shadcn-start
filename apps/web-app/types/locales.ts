import { languages, defaultNS } from '@/i18n/settings';

export type SupportedLanguage = (typeof languages)[number];
export type DefaultNamespace = typeof defaultNS;
