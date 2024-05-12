import { getI18n } from '@/i18n/server';
import { thirdSectionData } from './utils';
import { Text } from '@/components/common';
import NextImage from 'next/image';
import { merge } from '@/utils/helpers';

const ThirdSection = () => {
  const { t } = getI18n();
  return (
    <section className='pt-8 lg:pt-20'>
      <div className='mx-auto max-w-1440 px-4 lg:px-8'>
        {thirdSectionData.map(
          ({ blockLabelKey, labelKey, paragraphKey, bgImg }, index) => (
            <div
              className={merge(
                {
                  'lg:flex-row ': index % 2 !== 0,
                  'lg:flex-row-reverse': index % 2 === 0,
                },
                'mb-8 flex flex-col items-center gap-7 lg:mb-0'
              )}
              key={index}
            >
              <div className='min-w-[48%] lg:max-w-[634px]'>
                <Text
                  sz='20'
                  as='h6'
                  className='mb-1 font-bold text-yellow-dark-100'
                >
                  {t(blockLabelKey)}
                </Text>
                <Text as='h2' sz='32' className='mb-2 font-medium'>
                  {t(labelKey)}
                </Text>
                <Text as='p' sz='16' className='mb-0 lg:mb-8'>
                  {t(paragraphKey)}
                </Text>
              </div>
              <div className='z-20 w-full min-w-[48%] flex-grow'>
                <NextImage
                  width={960}
                  height={496}
                  src={bgImg}
                  alt='Dentists'
                  className='max-h-full w-full object-cover'
                />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ThirdSection;
