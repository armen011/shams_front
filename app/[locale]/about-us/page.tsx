import BreadCrumb from '@/components/BreadCrumb';
import Main from '@/components/common/Main';
import { TPage } from '@/types/global.d';
import { getPageMetadata } from '@/utils/getPageMetadata';
import React from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import SuggestedServices from '@/components/SuggestedServices';
import { LocaleType } from '@/i18n/translations';

const AboutUs = () => {
  return (
    <Main>
      <div className='h-full bg-bg'>
        <BreadCrumb />
        <div>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <SuggestedServices />
        </div>
      </div>
    </Main>
  );
};

export default AboutUs;

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: LocaleType };
}) => {
  return getPageMetadata(TPage.AboutUs, locale);
};
