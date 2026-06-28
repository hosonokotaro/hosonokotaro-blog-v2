import 'normalize.css';
import '~/style/global.css';
import '~/style/theme.css';

import { Metadata } from 'next';
import { ReactNode } from 'react';

import LayoutClient from '~/app/layout-client';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hosonokotaro.jp';
const siteName = 'HOSONOKOTARO Tech Blog';
const description =
  '都内で活動するフロントエンドエンジニア。技術の知見を掲載しています';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/static/media/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: siteName,
    description,
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    images: [
      {
        url: '/static/media/og.png',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hosono_fe',
  },
};

interface RootLayoutProps {
  children: ReactNode;
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
