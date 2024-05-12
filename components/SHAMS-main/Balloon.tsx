import React, { CSSProperties, FC, ReactNode } from 'react';
import { Text } from '../common';
import { BaseLinkClient } from '../BaseLinkClient';
import { merge } from '@/utils/helpers';
import { Variants, motion } from 'framer-motion';

type BalloonProps = {
  label: string;
  href: string;
  children: ReactNode;
  className?: string;
  classNameLink?: string;
  style?: CSSProperties;
  variants?: Variants;
};

const Balloon: FC<BalloonProps> = ({
  label,
  href,
  children,
  className,
  classNameLink,
  style,
  variants,
}) => {
  return (
    <motion.div
      className={merge('absolute', className)}
      style={style}
      variants={variants}
      initial='hidden'
      animate='visible'
    >
      <BaseLinkClient
        href={href}
        className={merge(
          'group/item flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full bg-blue-light-900 shadow-balloon transition-all duration-300 md:hover:bg-blue md:hover:shadow-ballon-hover',
          classNameLink
        )}
      >
        {children}
        <Text
          sz='20'
          className='mt-2 font-medium md:group-hover/item:text-white'
        >
          {label}
        </Text>
      </BaseLinkClient>
    </motion.div>
  );
};

export default Balloon;
