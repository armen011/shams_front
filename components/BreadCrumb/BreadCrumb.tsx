import { resolvePathName } from './utils';
import { Text } from '@/components/common';
import { merge } from '@/utils/helpers';
import { ArrowRight } from '@/assets/icons';
import { BaseLink } from '@/components/BaseLink';
import { FC } from 'react';

type BreadCrumbProps = {
  dinamicItem?: Record<string, string>;
};

const BreadCrumb: FC<BreadCrumbProps> = ({ dinamicItem }) => {
  const { currentPage: currenPage, breadCrumbPages } =
    resolvePathName(dinamicItem);

  return (
    <div className='bg-blue-light-200'>
      <div className='mx-auto flex max-w-1440 flex-col items-start justify-between gap-4 px-4 py-2 md:flex-row md:items-center md:gap-0 lg:px-8'>
        <Text as='h1' sz='28' className='text-left font-bold text-white'>
          {currenPage.title}
        </Text>
        <div className='flex flex-wrap items-center gap-1'>
          {breadCrumbPages.map(({ title, to }, index) => (
            <div key={index} className='flex items-center'>
              <BaseLink href={to}>
                <Text
                  className={merge(
                    'mdLhover:text-white text-ellipsis whitespace-nowrap text-blue-light-700',
                    {
                      'text-white': to === currenPage.to,
                    }
                  )}
                >
                  {title}
                </Text>
              </BaseLink>
              {to !== currenPage.to && (
                <ArrowRight
                  viewBox='0 0 24 24'
                  className='h-5 w-5 fill-blue-light-700'
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
