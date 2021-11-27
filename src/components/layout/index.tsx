import Head from 'next/head';
import { ReactNode, VFC } from 'react';

import Footer from '@/atoms/Footer';
import Header from '@/organisms/Header';
import getDate from '~/utility/getDate';

type Props = {
  title?: string;
  children: ReactNode;
};

const domain = 'https://techblog.hosonokotaro.jp';
const siteName = 'Tech Blog | WEB DEVELOPER HOSONO KOTARO';
const description =
  '都内で活動するフロントエンドエンジニア。技術の知見を掲載しています';

const Layout: VFC<Props> = ({ title = '', children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta content={description} name="description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@hosono_fe" name="twitter:site" />
        <meta
          content={`${title && `${title} | `}${siteName}`}
          property="og:title"
        />
        <meta content="website" property="og:type" />
        <meta content={domain} property="og:url" />
        <meta content={`${domain}/static/media/og.png`} property="og:image" />
        <meta content={description} property="og:description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          {title && `${title} | `}
          {siteName}
        </title>
      </Head>
      <Header />
      {children}
      <Footer year={getDate('year')} />
    </>
  );
};

export default Layout;
