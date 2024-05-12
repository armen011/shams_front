import BlogItem from '@/components/BlogItem';
import BreadCrumb from '@/components/BreadCrumb';
import Slider from '@/components/Slider';
import { TPage } from '@/types/global.d';
import { getPageMetadata } from '@/utils/getPageMetadata';
import { getBlogs, getSlides } from './utils';
import Pagination from './Pagination';
import Main from '@/components/common/Main';
import { LocaleType } from '@/i18n/translations';

type BlogProps = {
  searchParams: {
    page?: number;
  };
  params: {
    locale: 'en' | 'ru' | 'hy';
  };
};

const Blog = async ({
  searchParams: { page },
  params: { locale },
}: BlogProps) => {
  const currentPage = page || 1;

  const data = await getBlogs(locale, currentPage);
  const blogs = data?.blogs || [];
  const slides = await getSlides(locale);

  return (
    <Main>
      <div className='h-full bg-bg'>
        <BreadCrumb />
        {slides && <Slider slides={slides} />}
        <div className='mx-auto grid max-w-1440 grid-cols-max-4 gap-8 px-4 py-8 lg:px-8 lg:py-16'>
          {blogs.map((blog) => blog && <BlogItem {...blog} key={blog.id} />)}
        </div>
        {data && (
          <div className='flex w-full justify-center'>
            <Pagination {...data.pagination} />
          </div>
        )}
      </div>
    </Main>
  );
};

export default Blog;

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: LocaleType };
}) => {
  return getPageMetadata(TPage.Blogs, locale);
};
