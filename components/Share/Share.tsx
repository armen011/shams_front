'use client';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import ShareIcon from '@/assets/icons/share.svg';

import {
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  ViberIcon,
} from 'react-share';
import { configs } from '@/utils/configs';

const Share = () => {
  const pathName = usePathname();

  const shareURL = `${configs.frontendUrl}${pathName}`;
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button>
        <ShareIcon className='h-6 w-6' />
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
        <Menu.Items className='absolute right-0 mt-2 w-fit rounded-sm bg-white p-1 pb-0 shadow-blue-light-700 focus:outline-none'>
          <Menu.Item as={'button'}>
            <FacebookShareButton url={shareURL}>
              <FacebookIcon className='h-8 w-8' />
            </FacebookShareButton>
          </Menu.Item>
          <Menu.Item>
            <WhatsappShareButton url={shareURL}>
              <WhatsappIcon className='h-8 w-8' />
            </WhatsappShareButton>
          </Menu.Item>
          <Menu.Item>
            <TelegramShareButton url={shareURL}>
              <TelegramIcon className='h-8 w-8' />
            </TelegramShareButton>
          </Menu.Item>
          <Menu.Item>
            <ViberShareButton url={shareURL}>
              <ViberIcon className='h-8 w-8' />
            </ViberShareButton>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Share;
