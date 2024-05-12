import { NextResponse } from 'next/server';
import { languages, defaultLocale } from '../translations';

const locales = Object.keys(languages);

export const getLocaleFromPathname = (pathname: string) => {
  const localeValue = pathname.split('/')[1];
  const localeExists = locales.includes(localeValue);
  const isLocaleDefault = localeValue === defaultLocale;
  const locale = localeExists ? localeValue : defaultLocale;
  const baseUrl = pathname.replace(`/${locale}`, '');
  const basePathname = baseUrl.length === 0 ? '/' : baseUrl;

  return {
    locale,
    localeExists,
    isLocaleDefault,
    basePathname,
  };
};

export const routeRedirect = (url: string, requestUrl: string) => {
  const urlObj = new URL(url, requestUrl);

  return NextResponse.redirect(urlObj.toString());
};

export const routeRewrite = (
  url: string,
  requestUrl: string,
  headers: Headers
) => {
  return NextResponse.rewrite(new URL(url, requestUrl), {
    request: { headers },
  });
};

export const routeNext = (headers: Headers) => {
  return NextResponse.next({ request: { headers } });
};
