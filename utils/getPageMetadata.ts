import { configs } from './configs';
import { Metadata } from 'next';
import { ResPageMeta } from '@/app/api/page/[path]/route';
import { TPage } from '@/types/global.d';
import { LocaleType } from '@/i18n/translations';

const defaultMeta: Metadata = {
  title: 'SHAMS',
  description: 'SHAMS Dental Clinic.',
  keywords: 'SHAMS, Dental, Clinic, Dentist, Dentistry, Teeth, Tooth',
};

export const getPageMetadata = async (
  page: TPage,
  locale: LocaleType
): Promise<Metadata> => {
  try {
    const data = await fetch(
      `${configs.backendUrl}/pages?filters[route][$eq]=${page}&populate=*`
    );
    const res = (await data.json()) as ResPageMeta;
    const metaData = res.data[0].attributes.page_seo;
    // revalidateTag('page-meta');

    // Make terms and privacy pages no index
    const robots =
      page === TPage.TermsConditions || page === TPage.PrivacyPolicy
        ? { index: false }
        : undefined;

    return {
      title: metaData[`title_${locale}`] || defaultMeta.title,
      description: metaData[`description_${locale}`] || defaultMeta.description,
      keywords: metaData.keywords || defaultMeta.keywords,
      robots,
    };
  } catch (err) {
    return defaultMeta;
  }
};
