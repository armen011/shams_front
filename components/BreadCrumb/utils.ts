import { TPage } from '@/types/global.d';
import { cache } from 'react';
import { headers } from 'next/headers';
import { getI18n } from '@/i18n/server';

const pageTranslationKeys = {
  '/': 'home',
  [TPage.Services]: 'services',
  [TPage.AboutUs]: 'about_us',
  [TPage.ContactUs]: 'contacts',
  [TPage.Blogs]: 'blog',
  [TPage.Staff]: 'staff',
  [TPage.Faq]: 'faq',
  [TPage.PrivacyPolicy]: 'privacy_policy',
  [TPage.TermsConditions]: 'terms_conditions',
};

export const resolvePathName = cache(
  (dinamicItem: Record<string, string> | undefined) => {
    const { t } = getI18n();
    const headerList = headers();
    const pathName = headerList.get('x-url') || '/';

    const paths = pathName.split('/');
    paths.splice(0, 1, '/');

    const breadCrumbPages = paths
      .map((link) => {
        const pageTransaltionKey = pageTranslationKeys[
          link as keyof typeof pageTranslationKeys
        ] as string | undefined;
        const title = pageTransaltionKey
          ? t(pageTransaltionKey)
          : dinamicItem?.[link];
        return {
          title,
          to: `/${link}`,
        };
      })
      .filter(({ title }) => !!title);

    const currentPage = breadCrumbPages[breadCrumbPages.length - 1];
    return { currentPage: currentPage, breadCrumbPages };
  }
);
