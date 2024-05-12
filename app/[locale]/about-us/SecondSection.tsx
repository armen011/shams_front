import { Text } from '@/components/common';
import { getI18n } from '@/i18n/server';
import NextImage from 'next/image';
import { dentalInfo } from './utils';

const InfoComponents = () => {
  const { t } = getI18n();
  return (
    <div className='flex flex-col gap-4'>
      {dentalInfo.map(({ Icon, labelKey, paragraph }, idx) => (
        <div className='flex items-center gap-4' key={idx}>
          <Icon className='h-16 w-16 flex-shrink-0' />
          <div>
            <Text as='h6' sz='20' className='mb-1 font-medium'>
              {t(labelKey)}
            </Text>
            <Text as='p' sz='16'>
              {t(paragraph)}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

const SecondSection = () => {
  const { t } = getI18n();
  return (
    <section className='pt-8 lg:pt-20'>
      <div className='mx-auto max-w-1440 p-4 lg:p-8'>
        <Text sz='20' as='h6' className='font-bold text-yellow-dark-100'>
          {t('about_us')}
        </Text>
        <div className='flex flex-col items-center gap-8 lg:flex-row'>
          <div className='min-w-[48%] lg:max-w-[634px]'>
            <Text as='h2' sz='40' className='mb-4 font-extrabold'>
              {t('best_dental_clinic_that_you_can')}
              <span className='text-blue'> {t('trust')}</span>
            </Text>
            <Text as='p' sz='16' className='mb-8'>
              {t('about_desc_2')}
            </Text>
            <InfoComponents />
          </div>
          <div className='z-20 w-full min-w-[50%] flex-grow'>
            <NextImage
              width={674}
              height={696}
              src={'/images/dentists.png'}
              alt='Dentists'
              className='max-h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
