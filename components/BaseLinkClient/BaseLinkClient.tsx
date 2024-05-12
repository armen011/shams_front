'use client';
import { ReactNode, CSSProperties } from 'react';
import { defaultLocale } from '@/i18n/translations';
import Link, { LinkProps } from 'next/link';
import { useI18n } from '@/i18n/client';

type BaseLinkClientProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
} & LinkProps;

const BaseLinkClient = ({
  children,
  href,
  className,
  style,
  ...other
}: BaseLinkClientProps) => {
  const { locale } = useI18n();
  const language = locale === defaultLocale ? '' : `/${locale}`;
  const resolvedHref = `${language}${href}`;
  return (
    <Link className={className} href={resolvedHref} style={style} {...other}>
      {children}
    </Link>
  );
};

export default BaseLinkClient;
