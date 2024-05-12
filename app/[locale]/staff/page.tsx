import BreadCrumb from '@/components/BreadCrumb';
import { Text } from '@/components/common';
import Main from '@/components/common/Main';
import { getI18n } from '@/i18n/server';
import { TPage } from '@/types/global.d';
import { getPageMetadata } from '@/utils/getPageMetadata';
import { getStaff } from './utils';
import StaffItem from '@/components/StaffItem';
import { LocaleType } from '@/i18n/translations';

const Staff = async () => {
  const { t, locale } = getI18n();
  const data = await getStaff(locale);

  return (
    <Main>
      <div className='bg-bg'>
        <BreadCrumb />
        <div className='mx-auto flex max-w-1440 flex-col items-center px-4 py-8 lg:py-16'>
          <Text sz='20' as='h3' className='font-bold text-yellow-dark-100'>
            {t('specialists_doctors')}
          </Text>
          <Text
            sz='40'
            as='h1'
            className='mb-2 text-center font-extrabold md:text-center'
          >
            {t('highly_qualified')}
            <span className='text-blue'> {t('professionals')}</span>
          </Text>
          <Text
            sz='16'
            as='p'
            className='mb-8 max-w-168 text-center font-light'
          >
            {t('staff_description')}
          </Text>
          <div className='grid w-full grid-cols-max-4 gap-8 sm:grid-cols-max-3'>
            {data?.doctors.map((doctor) => (
              <StaffItem key={doctor.id} {...doctor} />
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Staff;

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: LocaleType };
}) => {
  return getPageMetadata(TPage.Staff, locale);
};
