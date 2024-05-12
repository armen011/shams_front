import BreadCrumb from '@/components/BreadCrumb';
import { getServiceData, getServiceMetadata } from './utils';
import { redirect } from 'next/navigation';
import SuggestedServices from '@/components/SuggestedServices';
import Main from '@/components/common/Main';
import { MDXComponent, StrapiImage, Text } from '@/components/common';
import { LocaleType } from '@/i18n/translations';

type ServiceViewProps = {
  params: {
    locale: LocaleType;
    id: string;
  };
};

const ServiceView = async ({ params: { id, locale } }: ServiceViewProps) => {
  const { redirectUrl, service } = await getServiceData(id, locale);

  if (redirectUrl) {
    redirect(redirectUrl);
  }

  return (
    <Main>
      <div className='min-h-96 h-full bg-bg'>
        <BreadCrumb dinamicItem={{ [id]: service?.title || '' }} />
        <div className='mx-auto max-w-1440 px-4 py-8 lg:px-8 lg:py-24'>
          <Text sz='32' as='h3' className='mb-4 font-medium'>
            {service?.title}
          </Text>
          <div className='flex flex-col-reverse gap-8 md:flex-row'>
            <MDXComponent source={service?.description || ''} />
            {service?.img && (
              <StrapiImage
                {...service.img}
                className='w-full flex-shrink-0 md:w-110'
              />
            )}
          </div>
        </div>
        <SuggestedServices />
      </div>
    </Main>
  );
};

export default ServiceView;

export const generateMetadata = async ({
  params: { id, locale },
}: ServiceViewProps) => {
  return getServiceMetadata(id, locale);
};
