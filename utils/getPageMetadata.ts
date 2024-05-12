import { configs } from './configs';
import { Metadata } from 'next';
import { ResPageMeta } from '@/app/api/page/[path]/route';
import { TPage } from '@/types/global.d';
import { LocaleType } from '@/i18n/translations';

const defaultMeta: Metadata = {
  title: 'SHAMS',
  description:
    'Ձեր գեղեցիկ և առողջ ժպիտը մեր առաջնահերթությունն է, և մենք ձգտում ենք որակյալ ստոմատոլոգիական ծառայությունները հասանելի դարձնելու բոլորիդ՝  մեր թիմում ընդգրկելով ոլորտի առաջատար մասնագետներին, ներդնելով նորարարական տեխնոլոգիականերով հագեցած ստոմատոլոգիական կաբինետներ և ստեղծել ով հյուրընկալ և հանգստացնող միջավայր  մեր բոլոր բուժառուների համար:',
  keywords: 'SHAMS, Dental, Clinic, Dentist, Dentistry, Teeth, Tooth',
};

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

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

    const title = metaData[`title_${locale}`] || defaultMeta.title || '';
    const description =
      metaData[`description_${locale}`] || defaultMeta.description || '';

    return {
      title,
      description: metaData[`description_${locale}`] || defaultMeta.description,
      keywords: metaData.keywords || defaultMeta.keywords,
      robots,
      icons: `${baseUrl}/images/logo.png`,
      openGraph: {
        type: 'website',
        url: `${baseUrl}`,
        title,
        description,
        siteName: 'SHAMS',
        images: [
          {
            url: `${baseUrl}/images/logo.png`,
          },
        ],
      },
      twitter: {
        title,
        site: `${baseUrl}`,
        description,
        images: `${baseUrl}/images/logo.png`,
        card: 'summary_large_image',
      },
    };
  } catch (err) {
    return defaultMeta;
  }
};
