import { otherLinks, contacts } from './utils';
import { Logo, Text } from '@/components/common';
import { BaseLink } from '@/components/BaseLink';
import { getI18n } from '@/i18n/server';
import { getService } from '@/app/[locale]/services/utils';

const Footer = async () => {
  const { t, locale } = getI18n();
  const data = await getService(locale);

  return (
    <footer className='bg-bg'>
      <div className='mx-auto flex max-w-1440 flex-col gap-6 px-4 pb-12 pt-8 transition-all sm:pb-16 lg:px-8'>
        {/* Logo Section */}
        <div className='flex flex-col items-start gap-8 pb-8 shadow-bottom-blue-light-900 md:items-center lg:flex-row lg:gap-0 lg:pb-4'>
          <div className='flex w-full flex-col items-center gap-2 md:flex-row md:gap-0 lg:w-auto '>
            <Logo width={104} height={104} className='h-[104px] w-[104px]' />
            <Text
              as='h6'
              className='mx-6 w-full max-w-lg text-center font-light md:text-left xl:max-w-sm'
              sz='14'
            >
              {t('shams_desc')}
            </Text>
          </div>
          <div className='flex w-full flex-shrink-0 flex-grow justify-end md:w-auto'>
            <div className='grid w-full grid-cols-1 grid-rows-2 gap-x-8 gap-y-6 md:w-auto md:grid-cols-2'>
              {contacts.map((item, idx) => (
                <a
                  href={item.href || '#'}
                  key={idx}
                  target='_blank'
                  className='flex items-center'
                >
                  <div className='h-8 w-8 rounded-lg bg-blue-light-800 p-1'>
                    {item.icon()}
                  </div>
                  <Text className='ml-3 w-fit flex-shrink-0'>
                    {t(item.labelKey)}
                  </Text>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* List Section */}
        <div className='flex flex-col gap-8 transition-all sm:gap-16 md:flex-row'>
          <div>
            <Text as='h5' sz='20' className='font-medium text-yellow-dark-100'>
              {t('services')}
            </Text>
            <div className='mt-4 grid grid-cols-1 gap-x-12 gap-y-4 transition-all sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {data?.services.map(({ link, title }, idx) => (
                <BaseLink href={`/services/${link}`} key={idx}>
                  <Text className='text-blue-dark-600 md:hover:underline'>
                    {title}
                  </Text>
                </BaseLink>
              ))}
            </div>
          </div>
          <div>
            <Text as='h5' sz='20' className='font-medium text-yellow-dark-100'>
              {t('other_links')}
            </Text>
            <div className='mt-4 flex flex-col gap-4'>
              {otherLinks.map((link, idx) => (
                <BaseLink href={link.href} key={idx} className='w-fit'>
                  <Text className='text-blue-dark-600 md:hover:underline'>
                    {t(link.labelKey)}
                  </Text>
                </BaseLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-blue py-[18px]'>
        <Text sz='14' className='text-xs text-white sm:text-sm'>
          {t('copy_right')}
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
