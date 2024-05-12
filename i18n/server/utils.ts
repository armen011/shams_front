import { headers } from 'next/headers';
import { cache } from 'react';
import { LOCALE_HEADER, defaultLocale } from '../translations';

export const getLocaleCache = cache(() => {
  const locale = headers().get(LOCALE_HEADER);

  return locale || defaultLocale;
});
