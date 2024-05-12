import Navigation from './Navigation';
import { Langs, Logo } from '@/components/common';
import NavigationSm from './NavigationSm';

const Header = () => {
  return (
    <header className='fixed left-0 top-0 z-50 h-16 w-full bg-bg shadow-bottom-blue-light-900 transition-all md:h-20'>
      <div className='mx-auto flex h-full w-full max-w-1440 items-center justify-between px-4 transition-all lg:px-8'>
        <NavigationSm />
        <div className='flex flex-grow justify-center md:flex-grow-0'>
          <Logo width={56} height={64} className='h-14 w-16 md:h-16 md:w-14' />
        </div>
        <div className='flex h-full items-center'>
          <Navigation />
          <hr className='mx-6 hidden h-10 w-[1px] bg-blue-light-900 md:block' />
          <Langs />
        </div>
      </div>
    </header>
  );
};

export default Header;
