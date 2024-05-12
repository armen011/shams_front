import { useI18n } from '@/i18n/client';
import { TPage } from '@/types/global.d';
import { useMemo } from 'react';
import {
  HomeBallon,
  ServicesBallon,
  AboutBallon,
  ContactsBallon,
  BlogBallon,
  StaffBallon,
} from '@/assets/icons';

export const useNav = () => {
  const { t } = useI18n();

  const links = useMemo(
    () => [
      {
        path: '/',
        label: t('home'),
        Icon: HomeBallon,
        degre: 152,
      },
      {
        path: `/${TPage.Services}`,
        label: t('services'),
        Icon: ServicesBallon,
        degre: 180,
      },
      {
        path: `/${TPage.AboutUs}`,
        label: t('about_us'),
        Icon: AboutBallon,
        degre: 208,
      },

      {
        path: `/${TPage.Staff}`,
        label: t('staff'),
        Icon: StaffBallon,
        degre: 28,
      },
      {
        path: `/${TPage.Blogs}`,
        label: t('blog'),
        Icon: BlogBallon,
        degre: 0,
      },
      {
        path: `/${TPage.ContactUs}`,
        label: t('contacts'),
        Icon: ContactsBallon,
        degre: 332,
      },
    ],
    [t]
  );

  return { links };
};
