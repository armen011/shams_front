// not used for now //
import { TPageSeo, TStrapiDates } from '@/types/global';
import { configs } from '@/utils/configs';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export type ResPageMeta = {
  data: {
    id: number;
    attributes: TStrapiDates & {
      page_seo: TPageSeo;
    };
  }[];
};

export async function GET(
  request: NextRequest,
  ctx: { params: { path: string } }
) {
  const {
    params: { path },
  } = ctx;

  try {
    const res = await fetch(
      `${configs.backendUrl}/pages?filters[route][$eq]=${path}&populate=*`,
      {
        cache: 'no-cache',
        next: {
          tags: ['page-meta'],
        },
      }
    );

    const resData = (await res.json()) as ResPageMeta;

    const metaData = resData.data[0].attributes.page_seo;

    revalidateTag('page-meta');

    return NextResponse.json(metaData, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Not Found' }, { status: 404 });
  }
}
