import { FC } from 'react';
import { StrapiImage, Text } from '../common';
import { BaseLink } from '../BaseLink';
import { formatDate } from '@/utils/date';
import { getI18n } from '@/i18n/server';

type BlogItemProps = {
  title: string;
  link: string;
  date: Date;
  img?: string;
  imgAlt: string;
};

const BlogItem: FC<BlogItemProps> = ({ link, title, date, img, imgAlt }) => {
  const { locale } = getI18n();
  return (
    <BaseLink
      href={`/blog/${link}`}
      className='group max-w-[480px] cursor-pointer'
    >
      <div className='mb-4 h-72 w-full origin-center overflow-hidden rounded-xl duration-100 md:group-hover:scale-[1.02]'>
        <StrapiImage
          src={img}
          width={400}
          height={280}
          alt={imgAlt}
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
      </div>
      <Text as='p' sz='14' className='mb-2 text-yellow-dark-100'>
        {formatDate(date, 'DD MMM YYYY', locale)}
      </Text>
      <Text
        as='p'
        sz='24'
        className='line-clamp-2 font-medium text-gray-700 md:group-hover:text-blue'
      >
        {title}
      </Text>
    </BaseLink>
  );
};

export default BlogItem;
