'use client';
import { FC, Fragment } from 'react';
import { ArrowDown } from '@/assets/icons';
import Text from './Text';
import { Menu, Transition } from '@headlessui/react';
import NextImage from 'next/image';
import { languages } from '@/i18n/translations';
import Link from 'next/link';
import { merge } from '@/utils/helpers';
import { useParams, usePathname } from 'next/navigation';

const Langs: FC = () => {
  const pathName = usePathname();
  const params = useParams() as { locale: string };

  const generateLanguagePath = (key: string) => {
    if (pathName?.includes(params.locale)) {
      return params.locale === 'am'
        ? `/${key}/${pathName}`
        : `${pathName?.replace(params.locale, key)}`;
    }
    return `/${key}/${pathName}`;
  };
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button className='flex w-14 items-center justify-between gap-1 rounded-lg bg-bg px-2 py-2 shadow-blue-light-700 transition-all md:w-24 md:px-3'>
        <div className='flex items-center gap-2'>
          <NextImage
            src={`/flags/${params.locale}.svg`}
            alt='Lang Flag'
            width={20}
            height={20}
            priority
          />

          <Text sz='14' className='hidden text-gray-700 md:block'>
            {languages[params.locale as keyof typeof languages]}
          </Text>
        </div>
        <ArrowDown viewBox='0 0 24 24' className='h-4 w-4 fill-gray-500' />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-full rounded-md bg-white shadow-blue-light-700 focus:outline-none'>
          {Object.entries(languages).map(([locale, language]) => (
            <Menu.Item key={locale}>
              {({ active }: { active: boolean }) => (
                <Link
                  href={generateLanguagePath(locale)}
                  className={merge(
                    ` flex w-full items-center justify-center gap-2 rounded-md px-2 py-3 transition-all md:justify-start md:px-3 md:py-2`,
                    {
                      'bg-bg': active,
                    }
                  )}
                >
                  <NextImage
                    src={`/flags/${locale}.svg`}
                    alt='Lang Flag'
                    width={20}
                    height={20}
                    priority
                  />

                  <Text sz='14' className='hidden text-gray-700 md:block'>
                    {language}
                  </Text>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Langs;
