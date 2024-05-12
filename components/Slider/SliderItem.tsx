import { FC } from 'react';
import { BaseLinkClient } from '../BaseLinkClient';
import { StrapiImage, Text } from '../common';

export type SliderItemProps = {
  title: string;
  description?: string;
  link?: string;
  img?: string;
  imgAlt: string;
};

const SliderItem: FC<SliderItemProps> = ({
  title,
  img,
  description,
  link = '',
  imgAlt,
}) => {
  return (
    <div className='with-layer flex h-80 items-center justify-center px-16 lg:px-36'>
      <StrapiImage
        src={img}
        width={1920}
        height={376}
        className='absolute left-0 top-0 z-10 h-full w-full'
        style={{ objectFit: 'cover' }}
        alt={imgAlt}
      />
      <BaseLinkClient href={link} className='z-20'>
        <Text as='h4' sz='40' className='line-clamp-2 text-center text-white'>
          {title}
        </Text>
        <Text as='p' sz='16' className='line-clamp-3 text-center text-gray-200'>
          {description}
        </Text>
      </BaseLinkClient>
    </div>
  );
};

export default SliderItem;
