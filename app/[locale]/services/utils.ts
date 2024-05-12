import { LocaleType } from '@/i18n/translations';
import { ServiceType } from '@/types/global';
import { configs } from '@/utils/configs';

type ResolvedServiceType = {
  id: number;
  title: string;
  link: string;
  img?: {
    src?: string;
    width?: number;
    height?: number;
    alt: string;
  };
  description: string;
};

export const getService = async (locale: LocaleType) => {
  try {
    const data = await fetch(
      `${configs.backendUrl}/services?populate=content.image`,
      {
        method: 'GET',
      }
    );
    const res = (await data.json()) as { data: ServiceType[] };

    const services: ResolvedServiceType[] = res.data.map(
      ({ id, attributes: { content, ...otherProps } }) => ({
        img: {
          src: content.image?.data?.attributes.url,
          width: content.image?.data?.attributes.width || 400,
          height: content.image?.data?.attributes.height || 450,
          alt: content.image?.data?.attributes.alternativeText || '',
        },
        link: otherProps[`seo_url_${locale}`],
        title: content[`title_${locale}`],
        description: content[`description_${locale}`],
        id,
      })
    );

    return { services };
  } catch (err) {
    return undefined;
  }
};
