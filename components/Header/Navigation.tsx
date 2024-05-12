'use client';

import { Text } from '@/components/common';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { merge } from '@/utils/helpers';
import { useNav } from './useNav';
import { BaseLinkClient } from '@/components/BaseLinkClient';

const Navigation = () => {
  const { links } = useNav();

  const segment = useSelectedLayoutSegment();

  const isLinkActive = useCallback(
    (path: string) => {
      const x = segment ? `/${segment}` : '/';
      return x === path;
    },
    [segment]
  );

  const navRef = useRef<HTMLElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);

  const updateSliderPosition = useCallback((target: HTMLElement) => {
    const { offsetLeft, clientWidth } = target;
    setSliderPosition(offsetLeft);
    setSliderWidth(clientWidth);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const activeLink = nav.querySelector('.active') as HTMLDivElement;
    if (!activeLink) {
      setSliderPosition(0);
      setSliderWidth(0);
      return;
    }
    updateSliderPosition(activeLink);
  }, [segment, updateSliderPosition]);

  return (
    <nav
      className='relative hidden h-full items-center gap-8 md:flex'
      ref={navRef}
    >
      {links.map((link, idx) => (
        <BaseLinkClient
          key={idx}
          href={link.path}
          className={merge('group/link flex h-full items-center px-2', {
            active: isLinkActive(link.path),
          })}
        >
          <Text
            className={merge(
              'pointer-events-none text-blue-dark-600 transition-colors group-hover/link:text-blue',
              {
                'text-blue': isLinkActive(link.path),
              }
            )}
          >
            {link.label}
          </Text>
        </BaseLinkClient>
      ))}
      <div
        className='bg-blue-600 absolute -bottom-[1px] left-0 h-0.5 rounded-md bg-blue transition-all duration-300'
        style={{
          left: `${sliderPosition}px`,
          width: `${sliderWidth}px`,
        }}
      />
    </nav>
  );
};

export default Navigation;
