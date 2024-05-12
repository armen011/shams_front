import { i18nmiddleware } from './i18n/middleware';

export default i18nmiddleware;

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
