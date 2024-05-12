import BreadCrumb from '@/components/BreadCrumb';
import { StrapiImage, Text } from '@/components/common';
import { formatDate } from '@/utils/date';
import { getBlogData, getBlogMetadata } from './utils';
import { redirect } from 'next/navigation';
import Share from '@/components/Share';
import Block from '@/components/Block';
import RecentBlogs from './RecentBlogs';
import ShareBar from './ShareBar';
import Main from '@/components/common/Main';
import { LocaleType } from '@/i18n/translations';

type BlogViewProps = {
  params: {
    locale: LocaleType;
    id: string;
  };
};

const BlogView = async ({ params: { id, locale } }: BlogViewProps) => {
  const { redirectUrl, blog } = await getBlogData(id, locale);

  if (redirectUrl) {
    redirect(redirectUrl);
  }
  return (
    <Main>
      <div className='h-full bg-bg'>
        <BreadCrumb />
        {blog && (
          <div className='mx-auto max-w-1440 px-4 py-8 lg:px-8'>
            <div className='mb-2 flex justify-between'>
              <Text as='p' sz='20' className='font-bold text-yellow-dark-100'>
                {formatDate(blog.date, 'DD MMM YYYY', locale)}
              </Text>
              <Share />
            </div>
            <Text sz='40' as='h2' className='mb-4 font-extrabold'>
              {blog.title}
            </Text>
            <StrapiImage
              {...blog.img}
              className='mb-8 w-full rounded-xl object-cover'
            />
            <Text sz='16' as='p' className='mb-6'>
              {blog.description}
            </Text>
            {blog.blocks?.map((block) => <Block {...block} key={block.id} />)}
            <ShareBar />
            <RecentBlogs />
          </div>
        )}
      </div>
    </Main>
  );
};

export default BlogView;

export const generateMetadata = async ({
  params: { id, locale },
}: BlogViewProps) => {
  return getBlogMetadata(id, locale);
};
