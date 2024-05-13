import { Text } from '@/components/common';
import { getI18n } from '@/i18n/server';
import Image from 'next/image';

const FirstSection = () => {
  const { t } = getI18n();
  return (
    <div className='relative  w-full overflow-hidden'>
      <Image
        className='min-h-[300px] object-cover lg:min-h-[unset] lg:w-full'
        src='/images/image_foe.png'
        alt='Dentists'
        width={1440}
        height={960}
      />
      <div className='absolute left-0 right-0 top-[40%] z-20'>
        <Text
          sz='48'
          as='h6'
          className='mb-2 text-center text-lg font-bold text-white lg:text-5xl'
        >
          <span className='text-blue'>{t('shams')} </span>
          {t('new_home_title')}
        </Text>
        <Text
          sz='20'
          as='h6'
          className='text-center text-base font-bold text-yellow-dark-100 lg:text-xl'
        >
          {t('slogon')}
        </Text>
      </div>
    </div>
  );
};

export default FirstSection;
