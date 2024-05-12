import { BaseLink } from '@/components/BaseLink';
import ArrowIcon from '@/assets/icons/arrow.svg';
import { FC } from 'react';
import { merge } from '@/utils/helpers';
import { Text } from '@/components/common';

export type PaginationProps = {
  showPagination: boolean;
  hasNextPage: boolean;
  hasePrevPage: boolean;
  pages: number[];
  currentPage: number;
};

const Pagination: FC<PaginationProps> = ({
  showPagination,
  currentPage,
  hasNextPage,
  hasePrevPage,
  pages,
}) => {
  if (!showPagination) {
    return null;
  }
  return (
    <div className='mx-auto flex items-center gap-2'>
      <BaseLink href={hasePrevPage ? `/blog?page=${currentPage - 1}` : '/blog'}>
        <div className='rounded-full bg-white p-1'>
          <ArrowIcon
            className={merge('h-5 w-5 rotate-180', {
              '[&>path]:fill-blue': hasePrevPage,
              '[&>path]:fill-gray-700': !hasePrevPage,
            })}
          />
        </div>
      </BaseLink>
      <div className='flex gap-1'>
        {pages.map((page, index) => {
          return (
            <BaseLink href={`/blog?page=${page}`} key={index}>
              <Text
                sz='16'
                as='p'
                className={merge(
                  'flex h-8 w-8 items-center justify-center rounded-lg',
                  {
                    'border border-blue font-bold text-blue':
                      page === currentPage,
                  }
                )}
              >
                {page}
              </Text>
            </BaseLink>
          );
        })}
      </div>
      <BaseLink
        href={`/blog?page=${hasNextPage ? currentPage + 1 : currentPage}`}
      >
        <div className='rounded-full bg-white p-1'>
          <ArrowIcon
            className={merge('h-5 w-5', {
              '[&>path]:fill-blue': hasNextPage,
              '[&>path]:fill-gray-700': !hasNextPage,
            })}
          />
        </div>
      </BaseLink>
    </div>
  );
};

export default Pagination;
