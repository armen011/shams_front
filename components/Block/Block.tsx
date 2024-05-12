import { FC } from 'react';
import { StrapiImage, Text } from '../common';
import { merge } from '@/utils/helpers';

type BlockProps = {
  title: string;
  description: string;
  img?: {
    src?: string;
    width?: number;
    height?: number;
    alt: string;
  };
  reverse?: boolean;
};

const Block: FC<BlockProps> = ({ title, description, img, reverse }) => {
  return (
    <div className='mb-6'>
      <Text sz='24' as='h4' className='mb-2 font-medium'>
        {title}
      </Text>
      <div className={merge({ 'min-h-[384px]': !!img?.src })}>
        {img?.src && (
          <StrapiImage
            {...img}
            className={merge(
              'mb-6 w-full rounded-xl object-cover lg:h-96 lg:max-w-[50%]',
              {
                'lg:float-right lg:ml-8': !reverse,
                'lg:float-left lg:mr-8': reverse,
              }
            )}
          />
        )}
        <Text as='p' sz='16' className='text-justify'>
          {description}
        </Text>
      </div>
    </div>
  );
};

export default Block;
