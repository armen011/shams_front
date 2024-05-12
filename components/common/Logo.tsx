import NextImage from 'next/image';
import { FC } from 'react';
import { merge } from '@/utils/helpers';
import { BaseLinkClient } from '@/components/BaseLinkClient';
type LogoProps = {
  className?: string;
  width: number;
  height: number;
};

const Logo: FC<LogoProps> = ({ width, height, className }) => {
  return (
    <BaseLinkClient href={'/'} className='flex w-fit flex-shrink-0'>
      <NextImage
        src='/logo.svg'
        width={width}
        height={height}
        alt='SHAMS Logo'
        priority
        className={merge('transition-all', className)}
      />
    </BaseLinkClient>
  );
};

export default Logo;
