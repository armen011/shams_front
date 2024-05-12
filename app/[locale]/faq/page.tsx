import BredCrumb from '@/components/BreadCrumb';
import Question from '@/components/Question';
import { Text } from '@/components/common';
import Main from '@/components/common/Main';
import { getI18n } from '@/i18n/server';
import { LocaleType } from '@/i18n/translations';
import { TPage } from '@/types/global.d';
import { getPageMetadata } from '@/utils/getPageMetadata';

const questions = Array.from({ length: 5 }, () => ({
  question:
    'What opportunities does the video course provide for the lecturer?',
  answer:
    'The world is rapidly changing and so is technology. Coding languages and frameworks come and go, giving way to modern and high-performing systems. Customer behavior evolves, solidifying the need for new, hyper-personalized software.Global businessThe world is rapidly changing and so is technology. Coding languages and frameworks come and go, giving way to modern and high-performing systems. Customer behavior evolves, solidifying the need for new, hyper-personalized software.Global businessThe world is rapidly changing and so is technology. Coding languages and frameworks come and go, giving way to modern and high-performing systems. Customer behavior evolves, solidifying the need for new, hyper-personalized software.Global business',
}));

const FAQ = () => {
  const { t } = getI18n();

  return (
    <Main>
      <BredCrumb />
      <div className='mx-auto max-w-1440 px-4 pb-16 pt-8 lg:px-8 lg:pb-24 lg:pt-16'>
        <Text
          as='h1'
          sz='40'
          className='mb-2 text-center font-extrabold text-dark'
        >
          {t('general')}
          <span className='ml-2 text-blue'>{t('questions')}</span>
        </Text>
        <Text
          as='p'
          sz='16'
          className='mx-auto mb-8 max-w-full text-center md:max-w-5xl lg:mb-16'
        >
          Lorem ipsum dolor sit amet consectetur. Ut tincidunt nibh nec sem odio
          ornare quisque sagittis. Vitae et tellus dolor aliquam dignissim
          arcu.Lorem ipsum dolor sit amet consectetur. Ut tincidunt nibh nec sem
          odio ornare quisque sagittis. Vitae et tellus dolor aliquam dignissim
          arcu.Lorem ipsum dolor si
        </Text>
        <div>
          {questions.map(({ question, answer }, index) => (
            <Question
              question={question}
              answer={answer}
              itemNumber={index + 1}
              key={index}
            />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default FAQ;

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: LocaleType };
}) => {
  return getPageMetadata(TPage.Faq, locale);
};
