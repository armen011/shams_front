import { Text } from '@/components/common';
import { getI18n } from '@/i18n/server';
import NextImage from 'next/image';

const SecondSection = () => {
  const { t } = getI18n();

  return (
    <section className='py-16'>
      <div className='flex flex-col-reverse items-center gap-2 p-4 lg:flex-row lg:gap-8 lg:p-8'>
        <div className='z-20 flex h-full flex-grow flex-col'>
          <Text sz='28' as='h2' className='mb-4 font-extrabold'>
            {t('new_welcome')}
            <span className='text-blue'> {t('shams')} </span>
            {t('new_home_title')}
          </Text>
          <Text sz='16' as='p' className='mb-4 whitespace-pre-wrap'>
            {t('new_intro_text')}
          </Text>
          <Text sz='14' as='p' className='mb-6'>
            {t('new_regards')}
          </Text>
        </div>
        <div className='z-20 lg:min-w-[531px]'>
          <NextImage
            width={674}
            height={696}
            src={'/images/logo.png'}
            alt='logo'
            className='max-h-full object-cover'
          />
        </div>
      </div>
      <div className='flex flex-col gap-2 p-4 lg:flex-row lg:gap-8 lg:p-8'>
        <div className='z-20 lg:min-w-[531px]'>
          <NextImage
            width={674}
            height={696}
            src={'/images/CEO.png'}
            alt='CEO'
            className='max-h-full object-cover'
          />
        </div>
        <div className='z-20 flex h-full flex-grow flex-col'>
          <Text sz='24' as='h2' className='mb-1 font-extrabold text-blue'>
            {t('sargis_sosi_shamoyan')}
          </Text>
          <Text sz='20' as='h6' className='font-bold text-yellow-dark-100'>
            {t('education')}
          </Text>
          <Text sz='16' as='p' className='mb-4 whitespace-pre-wrap pl-1'>
            {t('education_details')}
          </Text>
          <Text sz='20' as='h6' className='font-bold text-yellow-dark-100'>
            {t('carier')}
          </Text>
          <Text sz='16' as='p' className='mb-4 whitespace-pre-wrap pl-1'>
            {t('carier_details')}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
