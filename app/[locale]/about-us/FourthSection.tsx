import { ArrowDown } from '@/assets/icons';
import { BaseLink } from '@/components/BaseLink';
import { Text } from '@/components/common';
import { getI18n } from '@/i18n/server';
import NextImage from 'next/image';

const StaffLink = () => {
  const { t } = getI18n();
  return (
    <BaseLink href={'/staff'}>
      <button
        aria-label='Staff page'
        type='button'
        className='group flex items-center gap-2 rounded bg-yellow-light-900 px-8 py-3 transition-all md:hover:bg-yellow'
      >
        <Text
          as='p'
          sz='16'
          className='font-extrabold text-yellow-dark-100 group-hover:text-white'
        >
          {t('view_staff')}
        </Text>
        <ArrowDown className='h-6 w-6 -rotate-90 transition-all [&>path]:fill-yellow-dark-100 md:group-hover:[&>path]:fill-white' />
      </button>
    </BaseLink>
  );
};

const FourthSection = () => {
  const { t } = getI18n();
  return (
    <section className='bg-white py-8 lg:py-20'>
      <div className='mx-auto flex max-w-1440 flex-col items-center gap-2 p-4 lg:flex-row lg:gap-8 lg:p-8'>
        <div className='z-20 w-full min-w-[50%] flex-grow'>
          <NextImage
            width={674}
            height={696}
            src={'/images/dentists.png'}
            alt='Dentists'
            className='max-h-full w-full object-cover'
          />
        </div>
        <div className='min-w-[48%] lg:max-w-[634px]'>
          <Text sz='20' as='h6' className='font-bold text-yellow-dark-100'>
            {t('our_staff')}
          </Text>
          <Text as='h2' sz='40' className='mb-4 font-extrabold'>
            {t('the_best')}
            <span className='text-blue'> {t('dentists')}</span>
          </Text>
          <Text as='p' sz='16' className='mb-8'>
            {t('the_best_dentists_desc')}
          </Text>
          <StaffLink />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
