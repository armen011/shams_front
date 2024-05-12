'use client';

import { motion } from 'framer-motion';
import Atam from './Atam';
import Kamar from './Kamar';
import DentalClinic from './DentalClinic';
import SHAMS from './SHAMS';
import Balloon from './Balloon';
import { useNav } from '../Header/useNav';
import { useMemo, useRef } from 'react';
import useResizeObserver from '@/hooks/useResizeObserver';
import { wrapLinks } from './utils';

const SHAMSMain = () => {
  const { links } = useNav();
  const boardRef = useRef<HTMLDivElement>(null);

  const { width, height } = useResizeObserver({
    box: 'border-box',
    ref: boardRef,
  });

  const { balloons, iconHeight, iconWidth, iconSize } = useMemo(
    () => wrapLinks(links, width, height),
    [links, width, height]
  );

  return (
    <div className='h-screen w-full overflow-hidden bg-bg px-4'>
      <div
        className='relative flex h-full w-full justify-center md:items-center'
        ref={boardRef}
      >
        {balloons.map((balloon, idx) => {
          const { Icon } = balloon;
          return (
            <Balloon
              key={idx}
              href={balloon.path}
              label={balloon.label}
              className={`z-50`}
              style={balloon.style}
              variants={balloon.variants}
            >
              <Icon
                className='fill-blue transition-all duration-150 md:group-hover/item:fill-white'
                width={iconSize}
                height={iconSize}
              />
            </Balloon>
          );
        })}

        <motion.svg
          width={iconWidth}
          height={iconHeight}
          viewBox='0 0 640 732'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='outline-none'
        >
          <SHAMS />
          <DentalClinic />
          {/* Model */}
          <motion.g
            className='cursor-pointer outline-none'
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <Kamar />
            <Atam />
          </motion.g>
        </motion.svg>
      </div>
    </div>
  );
};

export default SHAMSMain;
