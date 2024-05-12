import { useContext } from 'react';
import { TranslationContext } from './I18nProvider';
import { KeyType } from '../translations';

const useI18n = () => {
  const { locale, translations } = useContext(TranslationContext);

  const t = (key: KeyType | string) => {
    const translatedWord = translations[key];
    if (translatedWord) return translatedWord;
    // console.log(`Missing translation for ${key} in ${locale}`);
    return '';
  };

  return { t, locale };
};

export default useI18n;
