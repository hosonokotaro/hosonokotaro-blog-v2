import ArchiveClientPage from '~/app/archive/archive-client-page';
import getTitleList from '~/useCase/getTitleList';

export const revalidate = 10;

export const metadata = {
  title: '過去の記事',
};

export default async function Archive() {
  const archiveTitleList = await getTitleList(true);

  return <ArchiveClientPage archiveTitleList={archiveTitleList} />;
}
