import { ReactNode } from 'react';

const Main = ({ children }: { children: ReactNode }) => {
  return <main className='flex-grow pt-16 md:pt-20'>{children}</main>;
};

export default Main;
