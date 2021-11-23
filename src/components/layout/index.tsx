import { ReactNode, VFC } from 'react';

import Footer from '@/atoms/Footer';
import Header from '@/organisms/Header';
import getDate from '~/utility/getDate';

type Props = {
  children: ReactNode;
};

const Layout: VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer year={getDate('year')} />
    </>
  );
};

export default Layout;
