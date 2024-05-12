export enum TPage {
  Home = 'home',
  AboutUs = 'about-us',
  ContactUs = 'contact-us',
  PrivacyPolicy = 'privacy-policy',
  TermsConditions = 'terms-conditions',
  Faq = 'faq',
  Blogs = 'blog',
  Services = 'services',
  Staff = 'staff',
  DentalTourism = 'dental-tourism',
}

export type TPageSeo = {
  id: number;
  title_hy: string;
  description_hy: string;
  title_en: string;
  description_en: string;
  title_ru: string;
  description_ru: string;
  keywords: string;
  script_box_1: string | null;
  script_box_2: string | null;
  script_box_3: string | null;
  route: TPage;
};

export type TStrapiDates = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

declare module 'three' {
  import { BaseEvent } from 'three/src/core/EventDispatcher';
  import { Object3D as Object3DOriginal } from 'three/src/core/Object3D';
  export * from 'three/src/Three';
  export class Object3D<
    E extends BaseEvent = Event,
  > extends Object3DOriginal<E> {
    geometry: BufferGeometry;
  }
}

type StrapiImageType = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: null;
      width: number;
      height: number;
      formats: {
        large: {
          url: string;
          width: number;
          height: number;
        };
        small: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        thumbnail: {
          url: string;
          width: number;
          height: number;
        };
      };
      url: string;
    };
  } | null;
};

type BlockType = {
  id: number;
  title_en: string;
  title_ru: string;
  title_hy: string;
  description_en: string;
  description_ru: string;
  description_hy: string;
  image?: StrapiImageType;
};

export type BlogType = {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    seo_url_en: string;
    seo_url_hy: string;
    seo_url_ru: string;
    include_in_slider: boolean;
    content: {
      id: number;
      title_en: string;
      description_en: string;
      title_ru: string;
      description_ru: string;
      title_hy: string;
      description_hy: string;
      image?: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: null;
            width: number;
            height: number;
            formats: {
              large: {
                url: string;
                width: number;
                height: number;
              };
              small: {
                url: string;
                width: number;
                height: number;
              };
              medium: {
                url: string;
                width: number;
                height: number;
              };
              thumbnail: {
                url: string;
                width: number;
                height: number;
              };
            };
            url: string;
          };
        };
      };
    };
    seo: TPageSeo;
    blocks?: BlockType[];
  };
};

export type ServiceType = {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    seo_url_en: string;
    seo_url_ru: string;
    seo_url_hy: string;
    content: {
      id: number;
      title_en: string;
      description_en: string;
      title_ru: string;
      description_ru: string;
      title_hy: string;
      description_hy: string;
      image?: StrapiImageType;
    };
    seo: TPageSeo;
  };
};

export type DoctorType = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    fullname_en: string | null;
    description_en: string | null;
    fullname_ru: string | null;
    fullname_hy: string | null;
    description_hy: string | null;
    description_ru: string | null;
    avatar: {
      data: {
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number | null;
          height: number | null;
          hash: string;
          url: string | null;
        };
      };
    };
  };
};

export type StrapiMeta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};
