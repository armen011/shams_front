import translationFiles, { KeyType } from '../translations';
import { getLocaleCache } from './utils';

const getI18n = () => {
  const locale = getLocaleCache() as 'en' | 'ru' | 'hy';
  const translations =
    translationFiles[locale as keyof typeof translationFiles];

  const t = (key: KeyType | string) => {
    const translatedWord = translations[key as KeyType];
    if (translatedWord) return translatedWord;
    // console.log(`Missing translation for ${key} in ${locale}`);
    return '';
  };
  return { t, locale };
};

export default getI18n;
