'use client';

import { merge } from '@/utils/helpers';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useCallback, useState } from 'react';
import { Text } from '@/components/common';
import { useNav } from './useNav';
import { BaseLinkClient } from '@/components/BaseLinkClient';

const NavigationSm = () => {
  const { links } = useNav();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    if (isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    setIsOpen((prev) => !prev);
  };

  const segment = useSelectedLayoutSegment();

  const isLinkActive = useCallback(
    (path: string) => {
      const x = segment || '/';
      return x === path;
    },
    [segment]
  );

  return (
    <div className='block md:hidden'>
      {/* Hamburger */}
      <button
        type='button'
        className='space-y-2 rounded p-4 pl-0 outline-none'
        onClick={toggleMenu}
        name='navigation open button'
      >
        <span
          className={merge(
            `block h-0.5 w-8 bg-dark transition-transform duration-300`,
            {
              'translate-y-2.5 -rotate-45 transform': isOpen,
            }
          )}
        />
        <span
          className={merge(
            `visible block h-0.5 w-8 bg-dark opacity-100 transition-opacity duration-300`,
            {
              'invisible opacity-0': isOpen,
            }
          )}
        />
        <span
          className={merge(
            `block h-0.5 w-8 bg-dark transition-transform duration-300`,
            {
              '-translate-y-2.5  rotate-45 transform': isOpen,
            }
          )}
        />
      </button>

      {/* Menu */}
      <div
        className={merge(
          `fixed -left-[100vw] top-0 -z-10 h-screen w-full bg-transparent pt-16 transition-all`,
          {
            'left-0': isOpen,
          }
        )}
      >
        <div className='mt-[1px] h-mobileMenu bg-bg'>
          <nav className='h-full'>
            <ul className='flex h-full flex-col items-center justify-evenly'>
              {links.map((link, idx) => (
                <li key={idx} className='w-full'>
                  <BaseLinkClient
                    key={idx}
                    href={link.path}
                    className='group/link flex h-full items-center justify-center px-4 py-4'
                    onClick={toggleMenu}
                  >
                    <Text
                      sz='20'
                      className={merge(
                        'pointer-events-none font-semibold text-blue-dark-600 transition-colors group-hover/link:text-blue',
                        {
                          'text-blue': isLinkActive(link.path),
                        }
                      )}
                    >
                      {link.label}
                    </Text>
                  </BaseLinkClient>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationSm;
