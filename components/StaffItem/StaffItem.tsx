import { FC } from 'react';
import { StrapiImage, Text } from '../common';

type StaffItemProps = {
  name?: string;
  img?: {
    src?: string;
    width?: number;
    height?: number;
    alt: string;
  };
  description?: string;
};

const StaffItem: FC<StaffItemProps> = ({ name, img, description }) => {
  return (
    <div className='group mx-auto flex w-fit flex-col'>
      <div className='mb-4 max-w-[440px] overflow-hidden duration-300 md:h-122 md:group-hover:scale-[1.02]'>
        {img && <StrapiImage {...img} className=' w-full object-cover' />}
      </div>
      <Text
        sz='20'
        className='text-center font-bold md:group-hover:text-blue'
        as='h6'
      >
        {name}
      </Text>
      <Text sz='20' className='text-center text-gray-600' as='h6'>
        {description}
      </Text>
    </div>
  );
};

export default StaffItem;
