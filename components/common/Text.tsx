import { merge } from '@/utils/helpers';
import { FC, ReactNode } from 'react';

type TSz = '12' | '14' | '16' | '20' | '24' | '28' | '32' | '40' | '48';
type TAs = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TextProps = {
  sz?: TSz;
  as?: TAs;
  children: ReactNode;
  className?: string;
};

const generateSzClassName = (sz: TSz) => {
  switch (sz) {
    case '12':
      return `text-[${sz}px] leading-[18px] transition-all`;
    case '14':
      return 'text-sm transition-all';
    case '16':
      return 'text-sm lg:text-base transition-all';
    case '20':
      return `text-base lg:text-[${sz}px] lg:leading-[30px] transition-all`;
    case '24':
      return 'text-2xl transition-all';
    case '28':
      return `text-[24px] lg:text-[28px] leading-[40px] transition-all`;
    case '32':
      return `text-[32px] leading-[48px] transition-all`;
    case '40':
      return `text-[24px] leading-[28px] lg:text-[40px] lg:leading-[56px] transition-all`;
    case '48':
      return `text-[48px] leading-[64px] transition-all`;
    default:
      return 'text-sm lg:text-base transition-all transition-all';
  }
};

const Text: FC<TextProps> = ({ sz = '16', as = 'p', children, className }) => {
  const szClassname = generateSzClassName(sz);
  const mergedClassName = merge(szClassname, 'text-dark', className);

  switch (as) {
    case 'p':
      return <p className={mergedClassName}> {children}</p>;
    case 'h1':
      return <h1 className={mergedClassName}>{children}</h1>;
    case 'h2':
      return <h2 className={mergedClassName}>{children}</h2>;
    case 'h3':
      return <h3 className={mergedClassName}>{children}</h3>;
    case 'h4':
      return <h4 className={mergedClassName}>{children}</h4>;
    case 'h5':
      return <h5 className={mergedClassName}>{children}</h5>;
    case 'h6':
      return <h6 className={mergedClassName}>{children}</h6>;
    default:
      return <p className={mergedClassName}> {children}</p>;
  }
};

export default Text;
