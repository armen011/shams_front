import { Text } from '@/components/common';
import { getI18n } from '@/i18n/server';
import ExperienceIcon from '@/assets/icons/experience.svg';
import IndividualIcon from '@/assets/icons/individual.svg';
import QualityIcon from '@/assets/icons/quality.svg';

const reasons = [
  {
    title: 'experience_and_qualification',
    desc: 'experience_and_qualification_desc',
    Icon: ExperienceIcon,
  },
  {
    title: 'individual_approach',
    desc: 'individual_approach_desc',
    Icon: IndividualIcon,
  },
  {
    title: 'qualified_technologies',
    desc: 'qualified_technologies_desc',
    Icon: QualityIcon,
  },
];

const WhyChooseUs = () => {
  const { t } = getI18n();
  return (
    <section className='w-full overflow-hidden pb-16'>
      <Text sz='40' className='mb-6 text-center font-semibold'>
        {t('why_choose')} <span className='text-blue'>{t('shams')}</span>
      </Text>
      <div className='grid w-full grid-cols-max-4 justify-items-center lg:grid-cols-max-3'>
        {reasons.map(({ title, Icon, desc }, idx) => (
          <div key={idx} className='flex max-w-md flex-col items-center gap-2'>
            <Icon className='w-16' />
            <Text sz='24' className='mb-1'>
              {t(title)}
            </Text>
            <Text sz='16' className='text-center text-gray-700'>
              {t(desc)}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
