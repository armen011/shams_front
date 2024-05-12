import BreadCrumb from '@/components/BreadCrumb';
import Main from '@/components/common/Main';
import { Skeleton } from '@/components/common';

const Loading = () => {
  return (
    <Main>
      <div className='bg-bg'>
        <BreadCrumb />
        <div className='mx-auto flex max-w-1440 flex-col items-center px-4 py-8 lg:py-16'>
          <Skeleton />
        </div>
      </div>
    </Main>
  );
};

export default Loading;
