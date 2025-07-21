import 'normalize.css';
import '~/style/global.css';
import '~/style/theme.css';

import { ReactNode } from 'react';

import LayoutClient from '~/app/layout-client';

export const metadata = {
  title: {
    default: 'HOSONOKOTARO Tech Blog',
    template: '%s | HOSONOKOTARO Tech Blog',
  },
  description: '技術系の記事を投稿するブログです。',
  openGraph: {
    title: 'HOSONOKOTARO Tech Blog',
    description: '技術系の記事を投稿するブログです。',
    type: 'website',
    locale: 'ja_JP',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/static/media/og.png`,
        width: 1200,
        height: 630,
        alt: 'HOSONOKOTARO Tech Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const setup = async () => {
  if (typeof window === 'undefined') {
    console.log('server');
  } else {
    console.log('client');
  }
};

if (process.env.NODE_ENV === 'development') {
  setup();
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
