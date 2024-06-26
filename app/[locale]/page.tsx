// import SHAMSModel from '@/components/SHAMS-model';
// import SHAMSMain from '@/components/SHAMS-main';
import { LocaleType } from '@/i18n/translations';
import { TPage } from '@/types/global.d';
import Main from '@/components/common/Main';

import { getPageMetadata } from '@/utils/getPageMetadata';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import WhyChooseUs from './Components/WhyChooseUs';
import ContactUsSection from './Components/ContactUsSection';
import SuggestedServices from '@/components/SuggestedServices';

const Home = () => {
  return (
    <Main>
      <div className='h-full bg-bg '>
        <FirstSection />
        <div className='mx-auto max-w-1440'>
          <SecondSection />
          <WhyChooseUs />
          <ContactUsSection />
          <SuggestedServices />
        </div>
      </div>
    </Main>
  );
};

export default Home;

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: LocaleType };
}) => {
  return await getPageMetadata(TPage.Home, locale);
};
