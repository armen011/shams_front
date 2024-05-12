import { CSSProperties, ReactNode } from 'react';
import { defaultLocale } from '@/i18n/translations';
import { getI18n } from '@/i18n/server';
import Link, { LinkProps } from 'next/link';

type BaseLinkProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
} & LinkProps;

const BaseLink = ({
  children,
  href,
  className,
  style,
  ...other
}: BaseLinkProps) => {
  const { locale } = getI18n();
  const language = locale === defaultLocale ? '' : `/${locale}`;
  const resolvedHref = `${language}${href}`;
  return (
    <Link className={className} href={resolvedHref} style={style} {...other}>
      {children}
    </Link>
  );
};

export default BaseLink;
