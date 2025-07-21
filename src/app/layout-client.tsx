'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { ReactNode } from 'react';

import Footer from '@/atoms/Footer';
import Header from '@/organisms/Header';
import { getYearNow } from '~/useCase/createDateText';

import * as Styles from './layout-client.css';

interface LayoutClientProps {
  children: ReactNode;
  article?: {
    title: string;
    description?: string;
  };
}

const siteName = 'Tech Blog | WEB DEVELOPER HOSONO KOTARO';

export default function LayoutClient({ children, article }: LayoutClientProps) {
  const pathname = usePathname();
  const isListPage = pathname === '/' || pathname === '/archive';

  const description = isListPage
    ? '都内で活動するフロントエンドエンジニア。技術の知見を掲載しています'
    : article?.title;

  // FIXME: isPrivate 判定フラグは使っていないので削除したい
  const isPrivate = false;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta content={description} name="description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@hosono_fe" name="twitter:site" />
        <meta
          content={
            article?.title ? `${article?.title} | ${siteName}` : siteName
          }
          property="og:title"
        />
        <meta content="website" property="og:type" />
        <meta content={process.env.NEXT_PUBLIC_BASE_URL} property="og:url" />
        <meta
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/static/media/og.png`}
          property="og:image"
        />
        <meta content={description} property="og:description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {isPrivate && <meta name="robots" content="noindex" />}
        <link rel="icon" href="static/media/favicon.svg" type="image/svg+xml" />
        {!isPrivate && (
          <link
            rel="canonical"
            href={(process.env.NEXT_PUBLIC_BASE_URL || '') + pathname}
          />
        )}

        <title>
          {article?.title ? `${article?.title} | ${siteName}` : siteName}
        </title>
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${
          process.env.NEXT_PUBLIC_ANALYTICS_ID || ''
        }`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init">
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${
          process.env.NEXT_PUBLIC_ANALYTICS_ID || ''
        }');`}
      </Script>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
      <div className={Styles.base}>
        <Header />
        {children}
        <Footer year={getYearNow()} />
      </div>
    </>
  );
}
