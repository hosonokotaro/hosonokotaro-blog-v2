import Head from 'next/head';
import { ReactNode } from 'react';

import Footer from '@/atoms/Footer';
import Header from '@/organisms/Header';
import getDateNow from '~/utility/getDate';

type Props = {
  title?: string;
  isPrivate?: boolean;
  linkPath?: string;
  pagePath?: string;
  children: ReactNode;
};

const siteName = 'Tech Blog | WEB DEVELOPER HOSONO KOTARO';
const description =
  '都内で活動するフロントエンドエンジニア。技術の知見を掲載しています';

const Layout = ({
  title = '',
  isPrivate = false,
  linkPath = '/',
  pagePath = '',
  children,
}: Props) => {
  const fixDescription = pagePath ? title : description;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta content={fixDescription} name="description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@hosono_fe" name="twitter:site" />
        <meta
          content={`${title && `${title} | `}${siteName}`}
          property="og:title"
        />
        <meta content="website" property="og:type" />
        <meta content={process.env.NEXT_PUBLIC_BASE_URL} property="og:url" />
        <meta
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/static/media/og.png`}
          property="og:image"
        />
        <meta content={fixDescription} property="og:description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {isPrivate && <meta name="robots" content="noindex" />}
        <link rel="icon" href="static/media/favicon.svg" type="image/svg+xml" />
        {!isPrivate && (
          <link
            rel="canonical"
            href={process.env.NEXT_PUBLIC_BASE_URL + pagePath}
          />
        )}

        <title>
          {title && `${title} | `}
          {siteName}
        </title>
      </Head>
      <Header linkPath={linkPath} />
      {children}
      <Footer year={getDateNow('year')} />
    </>
  );
};

export default Layout;
