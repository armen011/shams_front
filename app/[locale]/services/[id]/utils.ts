import { LocaleType } from '@/i18n/translations';
import { ServiceType } from '@/types/global';
import { configs } from '@/utils/configs';
import { Metadata } from 'next';

export const getServiceData = async (
  id: string,
  locale: 'en' | 'hy' | 'ru'
) => {
  try {
    const data = await fetch(
      `${configs.backendUrl}/services?filters[$and][0][seo_url_${locale}][$eq]=${id}&populate=content.image&populate=blocks.image`,
      {
        method: 'GET',
      }
    );
    const res = (await data.json()) as { data: ServiceType[] };

    if (res.data.length === 0) {
      const data = await fetch(
        `${configs.backendUrl}/services?filters[$or][0][seo_url_en][$eq]=${id}&filters[$or][1][seo_url_ru][$eq]=${id}&filters[$or][2][seo_url_hy][$eq]=${id}`,
        {
          method: 'GET',
        }
      );

      const res = (await data.json()) as { data: ServiceType[] };
      if (res.data.length === 0) {
        const redirectUrl = `/${locale}/not-found`;
        return { redirectUrl, blog: undefined };
      }

      const SeoURL = res.data[0]?.attributes[`seo_url_${locale}`];

      const redirectUrl = `/${locale}/services/${SeoURL}`;

      return { redirectUrl, service: undefined };
    }

    const serviceData = res.data[0].attributes;

    const service = {
      title: serviceData.content[`title_${locale}`],
      img: {
        src: serviceData.content.image?.data?.attributes.url,
        width: serviceData.content.image?.data?.attributes.width || 440,
        height: serviceData.content.image?.data?.attributes.height || 440,
        alt: serviceData.content.image?.data?.attributes.alternativeText || '',
      },
      description: serviceData.content[`description_${locale}`],
    };

    return { redirectUrl: undefined, service };
  } catch (err) {
    return { redirectUrl: undefined, service: undefined };
  }
};

const defaultMeta: Metadata = {
  title: 'SHAMS',
  description: 'SHAMS Dental Clinic.',
  keywords: 'SHAMS, Dental, Clinic, Dentist, Dentistry, Teeth, Tooth',
};
export const getServiceMetadata = async (id: string, locale: LocaleType) => {
  try {
    const data = await fetch(
      `${configs.backendUrl}/services?filters[$and][0][seo_url_${locale}][$eq]=${id}&populate=seo`
    );

    const res = (await data.json()) as { data: ServiceType[] };
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
