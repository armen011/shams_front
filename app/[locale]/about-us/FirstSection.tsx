import { Text } from '@/components/common';
import { getI18n } from '@/i18n/server';
import NextImage from 'next/image';

const FirstSection = () => {
  const { t } = getI18n();
  return (
    <section className="light-filter relative bg-[url('/images/background.png')] bg-cover bg-no-repeat pt-8 lg:pt-20">
      <div className='mx-auto flex max-w-1440 flex-col items-center gap-2 p-4 lg:flex-row lg:gap-8 lg:p-8'>
        <div className='z-20 lg:min-w-[531px]'>
          <NextImage
            width={674}
            height={696}
            src={'/images/CEO.png'}
            alt='CEO'
            className='max-h-full object-cover'
          />
        </div>
        <div className='z-20 flex flex-grow flex-col justify-center'>
          <Text sz='20' as='h6' className='font-bold text-yellow-dark-100'>
            {t('about_us')}
          </Text>
          <Text sz='40' as='h2' className='mb-4 font-extrabold'>
            {t('caring_health_is')}
            <span className='text-blue'> {t('important')} </span>
            {t('than_all')}
          </Text>
          <Text sz='16' as='p'>
            {t('about_desc')}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
