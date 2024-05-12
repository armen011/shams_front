'use client';

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
import { usePathname } from 'next/navigation';
import { useI18n } from '@/i18n/client';
import { Text } from '@/components/common';

const ShareBar = () => {
  const pathName = usePathname();
  const { t } = useI18n();

  const shareURL = `${configs.frontendUrl}${pathName}`;
  return (
    <div className='mb-32 mt-8 flex w-full items-center gap-2 rounded-xl bg-blue-light-900 px-6 py-4'>
      <Text as='p' sz='20' className='font-bold'>
        {t('share_with')} :
      </Text>
      <FacebookShareButton url={shareURL}>
        <FacebookIcon className='h-8 w-8' />
      </FacebookShareButton>
      <WhatsappShareButton url={shareURL}>
        <WhatsappIcon className='h-8 w-8' />
      </WhatsappShareButton>
      <TelegramShareButton url={shareURL}>
        <TelegramIcon className='h-8 w-8' />
      </TelegramShareButton>
      <ViberShareButton url={shareURL}>
        <ViberIcon className='h-8 w-8' />
      </ViberShareButton>
    </div>
  );
};

export default ShareBar;
