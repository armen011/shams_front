import { NextRequest } from 'next/server';
import {
  getLocaleFromPathname,
  routeNext,
  routeRedirect,
  routeRewrite,
} from './utils';
import { LOCALE_HEADER } from '../translations';

const i18nmiddleware = (request: NextRequest) => {
  const { locale, localeExists, isLocaleDefault, basePathname } =
    getLocaleFromPathname(request.nextUrl.pathname);

  let pathWithSearch = basePathname;

  if (request.nextUrl.search) {
    pathWithSearch += request.nextUrl.search;
  }
  request.headers.set(LOCALE_HEADER, locale);
  request.headers.set('x-url', basePathname);

  switch (true) {
    // Locale doesn't exists need to rewrite request
    case !localeExists:
      return routeRewrite(
        `/${locale}${pathWithSearch}`,
        request.url,
        request.headers
      );
    // Locale is default need to be redirected
    case isLocaleDefault:
      return routeRedirect(`${pathWithSearch}`, request.url);
    default:
      return routeNext(request.headers);
  }
};

export default i18nmiddleware;
