import { en } from './en';
import { vi } from './vi';
import { ja } from './ja';

export const translations = {
  en,
  vi,
  ja
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

export { en, vi, ja };
