import React, { FC, ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
