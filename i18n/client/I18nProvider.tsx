'use client';
import { FC, ReactNode, useMemo } from 'react';
import { createContext } from 'react';
import translationFiles from '../translations';

type TransationContextType = {
  locale: string;
  translations: Record<string, string>;
};

export const TranslationContext = createContext<TransationContextType>({
  locale: 'en',
  translations: {},
});

type I18nProviderProps = {
  locale: string;
  children: ReactNode;
};

const I18nProvider: FC<I18nProviderProps> = ({ locale, children }) => {
  const value = useMemo(() => {
    return {
      translations: translationFiles[locale as keyof typeof translationFiles],
      locale,
    };
  }, [locale]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export default I18nProvider;
