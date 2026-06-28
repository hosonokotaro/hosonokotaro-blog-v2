import { Metadata } from 'next';

import ArchiveClientPage from '~/app/archive/archive-client-page';
import getTitleList from '~/useCase/getTitleList';

export const revalidate = 10;

const pageTitle = '過去の記事';
const description = 'HOSONOKOTARO Tech Blog の過去の記事一覧です。';

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: {
    canonical: '/archive',
  },
  openGraph: {
    title: pageTitle,
    description,
    type: 'website',
    locale: 'ja_JP',
    url: '/archive',
    images: [
      {
        url: '/static/media/og.png',
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
};

export default async function Archive() {
  const archiveTitleList = await getTitleList(true);

  return <ArchiveClientPage archiveTitleList={archiveTitleList} />;
}
