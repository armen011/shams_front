import { getI18n } from '@/i18n/server';
import { getRecentBlogs } from './utils';
import { Text } from '@/components/common';
import BlogItem from '@/components/BlogItem';

const RecentBlogs = async () => {
  const { locale, t } = getI18n();
  const data = await getRecentBlogs(locale);

  return (
    <div>
      <Text as='h4' sz='40' className='mb-8 font-extrabold text-dark'>
        {t('recent')}
        <span className='ml-1 text-blue'>{t('blogs')}</span>
      </Text>
      <div className='grid grid-cols-max-4 justify-items-center gap-8'>
        {data?.blogs.map((blog) => <BlogItem key={blog.id} {...blog} />)}
      </div>
    </div>
  );
};

export default RecentBlogs;
