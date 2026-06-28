'use client';

import Script from 'next/script';
import { ReactNode } from 'react';

import Footer from '@/atoms/Footer';
import Header from '@/organisms/Header';
import { getYearNow } from '~/useCase/createDateText';

import * as Styles from './layout-client.css';

interface LayoutClientProps {
  children: ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  return (
    <>
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
