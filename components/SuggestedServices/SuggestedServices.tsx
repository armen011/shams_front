import { getI18n } from '@/i18n/server';
import { getSuggestedServices } from './utils';
import { Text } from '../common';
import ServiceItem from '../ServiceItem';

const SuggestedServices = async () => {
  const { t, locale } = getI18n();
  const data = await getSuggestedServices(locale);

  return (
    <section className='py-8 lg:py-20'>
      <div className='mx-auto flex max-w-1440 flex-col items-center p-4 lg:p-8'>
        <Text as='h2' sz='40' className='text-center font-extrabold text-blue'>
          {t('services')}
        </Text>
        <Text as='p' sz='16' className='mb-8 max-w-[676px] text-center'>
          {t('suggested_service_desc')}
        </Text>
        <div className='grid w-full grid-cols-max-4 gap-8 sm:grid-cols-max-3'>
          {data?.services.map((service) => (
            <ServiceItem {...service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuggestedServices;
