import BreadCrumb from '@/components/BreadCrumb';
import { Skeleton } from '@/components/common';

const loading = () => {
  return (
    <div className='h-full bg-bg'>
      <BreadCrumb />
      <div className='mx-auto flex max-w-1440 flex-col items-center px-4 py-8 lg:py-16'>
        <Skeleton />
      </div>
    </div>
  );
};

export default loading;
