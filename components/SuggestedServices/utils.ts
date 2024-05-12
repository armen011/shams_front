import { ServiceType } from '@/types/global';
import { configs } from '@/utils/configs';

export const getSuggestedServices = async (locale: 'en' | 'ru' | 'hy') => {
  try {
    const data = await fetch(
      `${configs.backendUrl}/services?populate=content.image&pagination[pageSize]=3&sort=publishedAt:desc`,
      {
        method: 'GET',
      }
    );
    const res = (await data.json()) as { data: ServiceType[] };

    const services = res.data.map(
      ({ id, attributes: { content, ...otherProps } }) => ({
        img: {
          src: content.image?.data?.attributes.url,
          width: content.image?.data?.attributes.width || 400,
          height: content.image?.data?.attributes.height || 450,
          alt: content.image?.data?.attributes.alternativeText || '',
        },
        link: otherProps[`seo_url_${locale}`],
        title: content[`title_${locale}`],
        id,
      })
    );
    return { services };
  } catch (err) {
    return undefined;
  }
};
