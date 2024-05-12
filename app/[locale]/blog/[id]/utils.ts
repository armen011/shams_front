import { LocaleType } from '@/i18n/translations';
import { BlogType } from '@/types/global';
import { configs } from '@/utils/configs';
import { Metadata } from 'next';

export const getBlogData = async (id: string, locale: 'en' | 'hy' | 'ru') => {
  try {
    const data = await fetch(
      `${configs.backendUrl}/blogs?filters[$and][0][seo_url_${locale}][$eq]=${id}&populate=content.image&populate=blocks.image`,
      {
        method: 'GET',
      }
    );
    const res = (await data.json()) as { data: BlogType[] };

    if (res.data.length === 0) {
      const data = await fetch(
        `${configs.backendUrl}/blogs?filters[$or][0][seo_url_en][$eq]=${id}&filters[$or][1][seo_url_ru][$eq]=${id}&filters[$or][2][seo_url_hy][$eq]=${id}`,
        {
          method: 'GET',
        }
      );

      const res = (await data.json()) as { data: BlogType[] };
      if (res.data.length === 0) {
        const redirectUrl = `/${locale}/not-found`;
        return { redirectUrl, blog: undefined };
      }

      const SeoURL = res.data[0]?.attributes[`seo_url_${locale}`];

      const redirectUrl = `/${locale}/blog/${SeoURL}`;

      return { redirectUrl, blog: undefined };
    }

    const blogData = res.data[0].attributes;

    const blog = {
      date: blogData.publishedAt,
      title: blogData.content[`title_${locale}`],
      img: {
        src: blogData.content.image?.data.attributes.url,
        width: blogData.content.image?.data.attributes.width,
        height: blogData.content.image?.data.attributes.height,
        alt: blogData.content.image?.data.attributes.alternativeText || '',
      },
      description: blogData.content[`description_${locale}`],
      blocks: blogData.blocks?.map((props, index) => ({
        id: props.id,
        title: props[`title_${locale}`],
        description: props[`description_${locale}`],
        reverse: index % 2 === 0,
        img: {
          src: props.image?.data?.attributes.url,
          width: props.image?.data?.attributes.width,
          height: props.image?.data?.attributes.height,
          alt: props.image?.data?.attributes.alternativeText || '',
        },
      })),
    };

    return { redirectUrl: undefined, blog };
  } catch (err) {
    return { redirectUrl: undefined, blog: undefined };
  }
};

const defaultMeta: Metadata = {
  title: 'SHAMS',
  description: 'SHAMS Dental Clinic.',
  keywords: 'SHAMS, Dental, Clinic, Dentist, Dentistry, Teeth, Tooth',
};

export const getBlogMetadata = async (id: string, locale: LocaleType) => {
  try {
    const data = await fetch(
      `${configs.backendUrl}/blogs?filters[$and][0][seo_url_${locale}][$eq]=${id}&populate=seo`
    );
    const res = (await data.json()) as { data: BlogType[] };
    const metaData = res.data[0]?.attributes.seo;

    return {
      title: metaData[`title_${locale}`] || defaultMeta.title,
      description: metaData[`description_${locale}`] || defaultMeta.description,
      keywords: metaData.keywords || defaultMeta.keywords,
    };
  } catch (err) {
    return defaultMeta;
  }
};

export const getRecentBlogs = async (locale: 'en' | 'ru' | 'hy') => {
  try {
    const data = await fetch(
      `${configs.backendUrl}/blogs?populate=content.image&pagination[pageSize]=3&sort=publishedAt:desc`,
      {
        method: 'GET',
      }
    );
    const res = (await data.json()) as { data: BlogType[] };

    const blogs = res.data.map(
      ({ id, attributes: { content, publishedAt, ...otherProps } }) => ({
        date: publishedAt,
        img: content.image?.data.attributes.url,
        link: otherProps[`seo_url_${locale}`],
        title: content[`title_${locale}`],
        imgAlt: content.image?.data.attributes.alternativeText || '',
        id,
      })
    );
    return { blogs };
  } catch (err) {
    return undefined;
  }
};
