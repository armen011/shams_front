import BreadCrumb from '@/components/BreadCrumb';
import { TPage } from '@/types/global.d';
import { getPageMetadata } from '@/utils/getPageMetadata';
import { content } from './utils';
import Main from '@/components/common/Main';
import { LocaleType } from '@/i18n/translations';

const PrivacyPolicy = () => {
  return (
    <Main>
      <div>
        <BreadCrumb />
        <div
          className='mx-auto mb-8 max-w-1440 px-4 py-8 transition-all md:mb-16 md:p-8'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Main>
  );
};

export default PrivacyPolicy;

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: LocaleType };
}) => {
  return getPageMetadata(TPage.PrivacyPolicy, locale);
};
