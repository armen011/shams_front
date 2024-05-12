import { FC } from 'react';
import { StrapiImage, Text } from '../common';
import { BaseLink } from '../BaseLink';
import { merge } from '@/utils/helpers';

type ServiceItemProps = {
  title: string;
  link: string;
  img?: {
    src?: string;
    width?: number;
    height?: number;
    alt: string;
  };
  description?: string;
};

const ServiceItem: FC<ServiceItemProps> = ({
  link,
  img,
  title,
  description,
}) => {
  return (
    <BaseLink
      href={`/services/${link}`}
      className='duration-300 md:hover:scale-[1.02]'
    >
      <div
        className={merge(
          { 'min-h-[456px]': !!description, 'min-h-[272px]': !description },
          'with-layer layer-hover relative flex flex-col items-center justify-center px-5'
        )}
      >
        {img && (
          <StrapiImage
            {...img}
            className='absolute left-0 top-0 z-10 h-full w-full object-cover'
          />
        )}
        <Text
          as='h5'
          sz='24'
          className='z-20 mb-1 text-center font-bold text-white'
        >
          {title}
        </Text>
        {description && (
          <Text
            as='p'
            sz='16'
            className='z-20 mb-1 line-clamp-6 max-w-[400px] text-center font-normal text-blue-light-900'
          >
            {description}
          </Text>
        )}
      </div>
    </BaseLink>
  );
};

export default ServiceItem;
