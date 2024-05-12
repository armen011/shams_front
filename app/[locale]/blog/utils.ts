import { BlogType, StrapiMeta } from '@/types/global';
import { configs } from '@/utils/configs';
import { PaginationProps } from './Pagination';

type ResolvedBlogType = {
  id: number;
  title: string;
  link: string;
  date: Date;
  img?: string;
  imgAlt: string;
  description?: string;
};

export const getBlogs = async (locale: 'en' | 'ru' | 'hy', page: number) => {
  try {
    const data = await fetch(
      `${configs.backendUrl}/blogs?populate=content.image&pagination[page]=${page}&pagination[pageSize]=10&sort=publishedAt:desc`,
      {
        method: 'GET',
      }
    );
    const res = (await data.json()) as { data: BlogType[]; meta: StrapiMeta };

    const blogs: ResolvedBlogType[] = res.data.map(
      ({ id, attributes: { content, publishedAt, ...otherProps } }) => ({
        date: publishedAt,
        img: content.image?.data.attributes.url,
        link: otherProps[`seo_url_${locale}`],
        title: content[`title_${locale}`],
        imgAlt: content.image?.data.attributes.alternativeText || '',
        id,
      })
    );

    const metaPagination = res.meta.pagination;

    let pages: number[] = [];

    const currentPage = Number(page);

    switch (true) {
      case currentPage === 1:
        pages = [1, 2, 3];
        break;
      case currentPage === metaPagination.pageCount:
        pages = [currentPage - 2, currentPage - 1, currentPage];
        break;
      default:
        pages = [currentPage - 1, currentPage, currentPage + 1];
    }
    const pagination: PaginationProps = {
      showPagination:
        metaPagination.pageCount > 1 && currentPage <= metaPagination.pageCount,
      hasNextPage: metaPagination.pageCount > currentPage,
      hasePrevPage: currentPage > 1,
      pages: pages.filter(
        (page) => page > 0 && page <= metaPagination.pageCount
      ),
      currentPage,
    };

    return { blogs, pagination };
  } catch (err) {
    return undefined;
  }
};

export const getSlides = async (locale: 'en' | 'ru' | 'hy') => {
  try {
    const data = await fetch(
      `${configs.backendUrl}/blogs?populate=content.image&pagination[pageSize]=10&sort=publishedAt:desc&filters[$and][0][include_in_slider][$eq]=true`,
      {
        method: 'GET',
      }
    );
    const res = (await data.json()) as { data: BlogType[] };

    const slides: ResolvedBlogType[] = res.data.map(
      ({ id, attributes: { content, publishedAt, ...otherProps } }) => ({
        date: publishedAt,
        img: content.image?.data.attributes.url,
        link: `/blog/${otherProps[`seo_url_${locale}`]}`,
        title: content[`title_${locale}`],
        imgAlt: content.image?.data.attributes.alternativeText || '',
        id,
        description: content[`description_${locale}`],
      })
    );

    return slides;
  } catch (err) {
    return undefined;
  }
};
