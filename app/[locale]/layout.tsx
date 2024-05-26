import { Noto_Sans_Armenian } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { PageLayout } from '@/components/layouts';
import '@/styles/globals.css';
import { I18nProvider } from '@/i18n/client';
import { languages } from '@/i18n/translations';

import { GoogleAnalytics } from '@next/third-parties/google';

const notoSans = Noto_Sans_Armenian({
  subsets: ['latin'],
  variable: '--noto-font',
});

export async function generateStaticParams() {
  return Object.entries(languages).map(([locale]) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html className={notoSans.variable} lang={locale}>
      <body className='vertical-scrollbar font-noto'>
        <div className='relative flex min-h-screen flex-col'>
          <I18nProvider locale={locale}>
            <PageLayout>{children}</PageLayout>
          </I18nProvider>
        </div>
      </body>
      <GoogleAnalytics gaId='G-7LDEXXHTMD' />
    </html>
  );
}

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.svg',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.svg',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      sizes: '48x48',
      url: '/favicon/favicon-48x48.svg',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      sizes: '64x64',
      url: '/favicon/favicon-64x64.svg',
    },

    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '58x58',
      url: '/favicon/apple-touch-icon-58x58.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon-180x180.png',
    },
  ],
};
