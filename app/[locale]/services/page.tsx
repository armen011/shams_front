import Main from '@/components/common/Main';
import BreadCrumb from '@/components/BreadCrumb';
import { getI18n } from '@/i18n/server';
import { TPage } from '@/types/global.d';
import { getPageMetadata } from '@/utils/getPageMetadata';
import { getService } from './utils';
import ServiceItem from '@/components/ServiceItem';
import { LocaleType } from '@/i18n/translations';
import { Text } from '@/components/common';

const Services = async () => {
  const { t, locale } = getI18n();

  const data = await getService(locale);
  return (
    <Main>
      <div className='bg-bg'>
        <BreadCrumb />
        <div className='mx-auto flex max-w-1440 flex-col items-center px-4 py-8 lg:py-16'>
          <Text sz='20' as='h3' className='font-bold text-yellow-dark-100'>
            {t('dental_services')}
          </Text>
          <Text
            sz='40'
            as='h1'
            className='mb-2 text-center font-extrabold md:text-start'
          >
            {t('our_range_of_dental')}
            <span className='text-blue'> {t('care_services')}</span>
          </Text>
          <Text
            sz='16'
            as='p'
            className='mb-8 max-w-168 text-center font-light'
          >
            {t('service_description')}
          </Text>
          <div className='grid w-full grid-cols-max-4 gap-8 sm:grid-cols-max-3'>
            {data?.services.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Services;

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: LocaleType };
}) => {
  return getPageMetadata(TPage.Services, locale);
};
